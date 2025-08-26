var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
// =====================
// Abstract & Base Classes
// =====================
var LibraryItem = /** @class */ (function () {
    function LibraryItem(id, title, year) {
        this.id = id;
        this.title = title;
        this.year = year;
    }
    return LibraryItem;
}());
// =====================
// Book Class
// =====================
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book(id, title, author, year, category, description) {
        var _this = _super.call(this, id, title, year) || this;
        _this.author = author;
        _this.category = category;
        _this.description = description;
        _this.available = true;
        Book.counter++;
        return _this;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.title, " by ").concat(this.author, " (").concat(this.year, ")");
    };
    Book.prototype.borrow = function (param) {
        if (!this.available)
            return false;
        if ((typeof param === 'number' && param === this.id) ||
            (typeof param === 'string' && param === this.title)) {
            this.available = false;
            saveBooksToLocalStorage();
            return true;
        }
        return false;
    };
    Book.prototype.returnBook = function () {
        this.available = true;
        saveBooksToLocalStorage();
    };
    Book.prototype.isAvailable = function () {
        return this.available;
    };
    Book.getTotalBooks = function () {
        return Book.counter;
    };
    Book.counter = 0;
    (function () {
        Book.categories = ['Fiction', 'Science', 'History', 'Technology'];
    })();
    return Book;
}(LibraryItem));
// =====================
// Generic Repository Class
// =====================
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
        saveBooksToLocalStorage();
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    Repository.prototype.findById = function (id) {
        return this.items.find(function (item) { return item.id === id; });
    };
    Repository.prototype.setAll = function (items) {
        this.items = items;
    };
    return Repository;
}());
// =====================
// LocalStorage Functions
// =====================
var STORAGE_KEY = 'libraryBooks';
function saveBooksToLocalStorage() {
    var books = bookRepo.getAll().map(function (b) {
        var _a;
        return ({
            id: b.id,
            title: b.title,
            author: b.author,
            year: b.year,
            category: b.category,
            available: b.isAvailable(),
            description: (_a = b.description) !== null && _a !== void 0 ? _a : '',
        });
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}
function loadBooksFromLocalStorage() {
    var data = localStorage.getItem(STORAGE_KEY);
    if (data) {
        var parsed = JSON.parse(data);
        var books = parsed.map(function (b) {
            var book = new Book(b.id, b.title, b.author, b.year, b.category, b.description);
            // Directly set availability instead of calling borrow()
            book.available = b.available;
            return book;
        });
        bookRepo.setAll(books);
        bookIdCounter = books.length ? Math.max.apply(Math, books.map(function (b) { return b.id; })) + 1 : 1;
    }
}
// =====================
// UI Logic
// =====================
var bookRepo = new Repository();
var bookIdCounter = 1;
(_a = document.getElementById('bookForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var year = document.getElementById('year').value;
    var category = document.getElementById('category').value;
    var newBook = new Book(bookIdCounter++, title, author, parseInt(year), category);
    bookRepo.add(newBook);
    renderBooks();
    showToast("\uD83D\uDCDA Added \"".concat(title, "\" to library!"), 'success');
});
// =====================
// Render Books
// =====================
function renderBooks() {
    var tbody = document.getElementById('bookTableBody');
    tbody.innerHTML = '';
    bookRepo.getAll().forEach(function (book) {
        var _a, _b;
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(book.id, "</td>\n      <td>").concat(book.title, "</td>\n      <td>").concat(book.author, "</td>\n      <td>").concat(book.year, "</td>\n      <td><span class=\"badge badge-cute\">").concat(book.category, "</span></td>\n      <td class=\"availability ").concat(book.isAvailable() ? 'available' : 'unavailable', "\">\n        ").concat(book.isAvailable() ? 'Available' : 'Borrowed', "\n      </td>\n      <td>\n        <button class=\"btn btn-sm btn-primary borrow-btn\">\uD83D\uDCD6 Borrow</button>\n        <button class=\"btn btn-sm btn-secondary return-btn\">\uD83D\uDD04 Return</button>\n      </td>\n    ");
        (_a = row.querySelector('.borrow-btn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            if (book.borrow(book.id)) {
                renderBooks();
                showToast("\uD83D\uDCD6 You borrowed \"".concat(book.title, "\"!"), 'success');
            }
            else {
                showToast("\u274C \"".concat(book.title, "\" is not available!"), 'error');
            }
        });
        (_b = row.querySelector('.return-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
            book.returnBook();
            renderBooks();
            showToast("\uD83D\uDD04 You returned \"".concat(book.title, "\"!"), 'success');
        });
        tbody.appendChild(row);
    });
}
function showToast(message, type) {
    if (type === void 0) { type = 'success'; }
    var toastContainer = document.getElementById('toastContainer');
    var toastEl = document.createElement('div');
    toastEl.className = "toast align-items-center text-bg-".concat(type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'danger', " border-0");
    toastEl.setAttribute('role', 'alert');
    toastEl.setAttribute('aria-live', 'assertive');
    toastEl.setAttribute('aria-atomic', 'true');
    toastEl.innerHTML = "\n    <div class=\"d-flex\">\n      <div class=\"toast-body\">\n        ".concat(message, "\n      </div>\n      <button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n    </div>\n  ");
    toastContainer.appendChild(toastEl);
    var bsToast = new bootstrap.Toast(toastEl, { delay: 2500 });
    bsToast.show();
    toastEl.addEventListener('hidden.bs.toast', function () {
        toastEl.remove();
    });
}
// =====================
// Initialize
// =====================
loadBooksFromLocalStorage();
renderBooks();
