// =====================
// Abstract & Base Classes
// =====================
abstract class LibraryItem {
  constructor(public id: number, public title: string, public year: number) {}

  abstract getInfo(): string;
}

// =====================
// Book Class
// =====================
class Book extends LibraryItem {
  private static counter: number = 0;
  static categories: string[];

  static {
    Book.categories = ['Fiction', 'Science', 'History', 'Technology'];
  }

  protected available: boolean = true;

  constructor(
    id: number,
    title: string,
    public author: string,
    year: number,
    public category: string,
    public description?: string
  ) {
    super(id, title, year);
    Book.counter++;
  }

  getInfo(): string {
    return `${this.title} by ${this.author} (${this.year})`;
  }

  borrow(id: number): boolean;
  borrow(title: string): boolean;
  borrow(param: number | string): boolean {
    if (!this.available) return false;
    if (
      (typeof param === 'number' && param === this.id) ||
      (typeof param === 'string' && param === this.title)
    ) {
      this.available = false;
      saveBooksToLocalStorage();
      return true;
    }
    return false;
  }

  returnBook(): void {
    this.available = true;
    saveBooksToLocalStorage();
  }

  isAvailable(): boolean {
    return this.available;
  }

  static getTotalBooks(): number {
    return Book.counter;
  }
}

// =====================
// Generic Repository Class
// =====================
class Repository<T extends LibraryItem> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    saveBooksToLocalStorage();
  }

  getAll(): T[] {
    return this.items;
  }

  findById(id: number): T | undefined {
    return this.items.find(item => item.id === id);
  }

  setAll(items: T[]) {
    this.items = items;
  }
}

// =====================
// LocalStorage Functions
// =====================
const STORAGE_KEY = 'libraryBooks';

function saveBooksToLocalStorage() {
  const books = bookRepo.getAll().map(b => ({
    id: b.id,
    title: b.title,
    author: b.author,
    year: b.year,
    category: b.category,
    available: b.isAvailable(),
    description: (b as any).description ?? '',
  }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

function loadBooksFromLocalStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    const parsed = JSON.parse(data) as any[];
    const books: Book[] = parsed.map(b => {
      const book = new Book(
        b.id,
        b.title,
        b.author,
        b.year,
        b.category,
        b.description
      );
      // Directly set availability instead of calling borrow()
      (book as any).available = b.available;
      return book;
    });
    bookRepo.setAll(books);
    bookIdCounter = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  }
}

// =====================
// UI Logic
// =====================
const bookRepo = new Repository<Book>();
let bookIdCounter = 1;

document.getElementById('bookForm')?.addEventListener('submit', e => {
  e.preventDefault();

  const { value: title } = document.getElementById('title') as HTMLInputElement;
  const { value: author } = document.getElementById(
    'author'
  ) as HTMLInputElement;
  const { value: year } = document.getElementById('year') as HTMLInputElement;
  const { value: category } = document.getElementById(
    'category'
  ) as HTMLSelectElement;

  const newBook = new Book(
    bookIdCounter++,
    title,
    author,
    parseInt(year),
    category
  );
  bookRepo.add(newBook);
  renderBooks();
  showToast(`📚 Added "${title}" to library!`, 'success');
});

// =====================
// Render Books
// =====================
function renderBooks() {
  const tbody = document.getElementById(
    'bookTableBody'
  ) as HTMLTableSectionElement;
  tbody.innerHTML = '';

  bookRepo.getAll().forEach(book => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${book.id}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.year}</td>
      <td><span class="badge badge-cute">${book.category}</span></td>
      <td class="availability ${
        book.isAvailable() ? 'available' : 'unavailable'
      }">
        ${book.isAvailable() ? 'Available' : 'Borrowed'}
      </td>
      <td>
        <button class="btn btn-sm btn-primary borrow-btn">📖 Borrow</button>
        <button class="btn btn-sm btn-secondary return-btn">🔄 Return</button>
      </td>
    `;

    row.querySelector('.borrow-btn')?.addEventListener('click', () => {
      if (book.borrow(book.id)) {
        renderBooks();
        showToast(`📖 You borrowed "${book.title}"!`, 'success');
      } else {
        showToast(`❌ "${book.title}" is not available!`, 'error');
      }
    });

    row.querySelector('.return-btn')?.addEventListener('click', () => {
      book.returnBook();
      renderBooks();
      showToast(`🔄 You returned "${book.title}"!`, 'success');
    });

    tbody.appendChild(row);
  });
}

// =====================
// Toast Utility
// =====================
declare var bootstrap: any;
function showToast(
  message: string,
  type: 'success' | 'warning' | 'error' = 'success'
) {
  const toastContainer = document.getElementById(
    'toastContainer'
  ) as HTMLDivElement;

  const toastEl = document.createElement('div');
  toastEl.className = `toast align-items-center text-bg-${
    type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'danger'
  } border-0`;
  toastEl.setAttribute('role', 'alert');
  toastEl.setAttribute('aria-live', 'assertive');
  toastEl.setAttribute('aria-atomic', 'true');

  toastEl.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        ${message}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
  `;

  toastContainer.appendChild(toastEl);

  const bsToast = new bootstrap.Toast(toastEl, { delay: 2500 });
  bsToast.show();

  toastEl.addEventListener('hidden.bs.toast', () => {
    toastEl.remove();
  });
}

// =====================
// Initialize
// =====================
loadBooksFromLocalStorage();
renderBooks();
