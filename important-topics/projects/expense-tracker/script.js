var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// ---------------- Types ----------------
var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Transport"] = "Transport";
    Category["Shopping"] = "Shopping";
    Category["Bills"] = "Bills";
    Category["Other"] = "Other";
})(Category || (Category = {}));
// ---------------- DOM Elements ----------------
var expenseForm = document.getElementById('expenseForm');
var titleInput = document.getElementById('title');
var amountInput = document.getElementById('amount');
var categoryInput = document.getElementById('category');
var dateInput = document.getElementById('date');
var expenseTable = document.getElementById('expenseTable');
var totalAmountEl = document.getElementById('totalAmount');
var highestExpenseEl = document.getElementById('highestExpense');
var expenseCountEl = document.getElementById('expenseCount');
var filterCategory = document.getElementById('filterCategory');
// ---------------- State ----------------
var expenses = [];
// ---------------- Utility ----------------
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}
function loadExpenses() {
    var stored = localStorage.getItem('expenses');
    if (stored) {
        expenses = JSON.parse(stored);
    }
}
function renderSummary() {
    var total = expenses.reduce(function (sum, e) { return sum + e.amount; }, 0);
    var highest = expenses.length > 0 ? Math.max.apply(Math, expenses.map(function (e) { return e.amount; })) : 0;
    totalAmountEl.textContent = "$".concat(total.toFixed(2));
    highestExpenseEl.textContent = "$".concat(highest.toFixed(2));
    expenseCountEl.textContent = expenses.length.toString();
}
// ---------------- Handlers ----------------
expenseForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var newExpense = {
        id: Date.now(),
        title: titleInput.value.trim(),
        amount: parseFloat(amountInput.value),
        category: categoryInput.value,
        date: dateInput.value,
    };
    expenses.push(newExpense);
    saveExpenses();
    renderExpenses(expenses);
    renderSummary();
    expenseForm.reset();
});
var filteredExpenses = __spreadArray([], expenses, true);
filterCategory.addEventListener('change', function () {
    var value = filterCategory.value;
    if (value === 'All') {
        filteredExpenses = __spreadArray([], expenses, true);
    }
    else {
        filteredExpenses = expenses.filter(function (e) { return e.category === value; });
    }
    renderExpenses(filteredExpenses);
});
// ---------------- Init ----------------
loadExpenses();
filteredExpenses = __spreadArray([], expenses, true); // initially all
renderExpenses(filteredExpenses);
renderSummary();
// ---------------- DOM for Edit Modal ----------------
var editForm = document.getElementById('editExpenseForm');
var editId = document.getElementById('editId');
var editTitle = document.getElementById('editTitle');
var editAmount = document.getElementById('editAmount');
var editCategory = document.getElementById('editCategory');
var editDate = document.getElementById('editDate');
var editModal = new bootstrap.Modal(document.getElementById('editModal'));
// ---------------- Render Functions (updated) ----------------
var currentSort = {
    key: 'date', // default sort
    asc: true,
};
function renderExpenses(list) {
    var sortedList = __spreadArray([], list, true);
    // Only sort if currentSort.key exists
    if (currentSort && currentSort.key) {
        sortedList.sort(function (a, b) {
            var key = currentSort.key;
            var valA = a[key];
            var valB = b[key];
            if (key === 'title' || key === 'category') {
                return currentSort.asc
                    ? String(valA).localeCompare(String(valB))
                    : String(valB).localeCompare(String(valA));
            }
            else if (key === 'amount') {
                return currentSort.asc
                    ? valA - valB
                    : valB - valA;
            }
            else if (key === 'date') {
                return currentSort.asc
                    ? new Date(valA).getTime() -
                        new Date(valB).getTime()
                    : new Date(valB).getTime() -
                        new Date(valA).getTime();
            }
            return 0;
        });
    }
    expenseTable.innerHTML = '';
    if (sortedList.length === 0) {
        expenseTable.innerHTML = "<tr><td colspan=\"5\" class=\"text-muted\">No expenses yet</td></tr>";
        return;
    }
    sortedList.forEach(function (exp) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(exp.title, "</td>\n      <td>$").concat(exp.amount.toFixed(2), "</td>\n      <td><span class=\"badge bg-secondary\">").concat(exp.category, "</span></td>\n      <td>").concat(new Date(exp.date).toLocaleDateString(), "</td>\n      <td>\n        <button class=\"btn btn-sm btn-warning me-2\" data-action=\"edit\" data-id=\"").concat(exp.id, "\">Edit</button>\n        <button class=\"btn btn-sm btn-danger\" data-action=\"delete\" data-id=\"").concat(exp.id, "\">Delete</button>\n      </td>\n    ");
        expenseTable.appendChild(row);
    });
}
var headers = document.querySelectorAll('th[data-sort]');
headers.forEach(function (header) {
    header.addEventListener('click', function () {
        var key = header.getAttribute('data-sort');
        if (!key)
            return;
        if (currentSort.key === key) {
            currentSort.asc = !currentSort.asc;
        }
        else {
            currentSort.key = key;
            currentSort.asc = true;
        }
        renderExpenses(filteredExpenses.length ? filteredExpenses : expenses);
    });
});
expenseTable.addEventListener('click', function (e) {
    var target = e.target;
    if (target.tagName !== 'BUTTON')
        return;
    var id = parseInt(target.getAttribute('data-id'));
    var action = target.getAttribute('data-action');
    if (action === 'delete') {
        expenses = expenses.filter(function (exp) { return exp.id !== id; });
        saveExpenses();
        renderExpenses(expenses);
        renderSummary();
    }
    if (action === 'edit') {
        var exp = expenses.find(function (e) { return e.id === id; });
        if (!exp)
            return;
        editId.value = exp.id.toString();
        editTitle.value = exp.title;
        editAmount.value = exp.amount.toString();
        editCategory.value = exp.category;
        editDate.value = exp.date;
        editModal.show();
    }
});
editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var id = parseInt(editId.value);
    var index = expenses.findIndex(function (exp) { return exp.id === id; });
    if (index !== -1) {
        expenses[index] = __assign(__assign({}, expenses[index]), { title: editTitle.value.trim(), amount: parseFloat(editAmount.value), category: editCategory.value, date: editDate.value, id: index });
        saveExpenses();
        renderExpenses(expenses);
        renderSummary();
        editModal.hide();
    }
});
