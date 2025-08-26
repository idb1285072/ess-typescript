// ---------------- Types ----------------
enum Category {
  Food = 'Food',
  Transport = 'Transport',
  Shopping = 'Shopping',
  Bills = 'Bills',
  Other = 'Other',
}

interface Expense {
  id: number;
  title: string;
  amount: number;
  category: Category;
  date: string;
}

// ---------------- DOM Elements ----------------
const expenseForm = document.getElementById('expenseForm') as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const amountInput = document.getElementById('amount') as HTMLInputElement;
const categoryInput = document.getElementById('category') as HTMLSelectElement;
const dateInput = document.getElementById('date') as HTMLInputElement;

const expenseTable = document.getElementById(
  'expenseTable'
) as HTMLTableSectionElement;
const totalAmountEl = document.getElementById('totalAmount') as HTMLElement;
const highestExpenseEl = document.getElementById(
  'highestExpense'
) as HTMLElement;
const expenseCountEl = document.getElementById('expenseCount') as HTMLElement;
const filterCategory = document.getElementById(
  'filterCategory'
) as HTMLSelectElement;

// ---------------- State ----------------
let expenses: Expense[] = [];

// ---------------- Utility ----------------
function saveExpenses() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
}

function loadExpenses() {
  const stored = localStorage.getItem('expenses');
  if (stored) {
    expenses = JSON.parse(stored);
  }
}

function renderSummary() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest =
    expenses.length > 0 ? Math.max(...expenses.map(e => e.amount)) : 0;
  totalAmountEl.textContent = `$${total.toFixed(2)}`;
  highestExpenseEl.textContent = `$${highest.toFixed(2)}`;
  expenseCountEl.textContent = expenses.length.toString();
}

// ---------------- Handlers ----------------
expenseForm.addEventListener('submit', e => {
  e.preventDefault();

  const newExpense: Expense = {
    id: Date.now(),
    title: titleInput.value.trim(),
    amount: parseFloat(amountInput.value),
    category: categoryInput.value as Category,
    date: dateInput.value,
  };

  expenses.push(newExpense);
  saveExpenses();
  renderExpenses(expenses);
  renderSummary();
  expenseForm.reset();
});

let filteredExpenses: Expense[] = [...expenses];
filterCategory.addEventListener('change', () => {
  const value = filterCategory.value;
  if (value === 'All') {
    filteredExpenses = [...expenses];
  } else {
    filteredExpenses = expenses.filter(e => e.category === value);
  }
  renderExpenses(filteredExpenses);
});
// ---------------- Init ----------------
loadExpenses();
filteredExpenses = [...expenses]; // initially all
renderExpenses(filteredExpenses);
renderSummary();

// ---------------- DOM for Edit Modal ----------------
const editForm = document.getElementById('editExpenseForm') as HTMLFormElement;
const editId = document.getElementById('editId') as HTMLInputElement;
const editTitle = document.getElementById('editTitle') as HTMLInputElement;
const editAmount = document.getElementById('editAmount') as HTMLInputElement;
const editCategory = document.getElementById(
  'editCategory'
) as HTMLSelectElement;
const editDate = document.getElementById('editDate') as HTMLInputElement;
declare var bootstrap: any;
let editModal = new bootstrap.Modal(document.getElementById('editModal')!);

// ---------------- Render Functions (updated) ----------------

let currentSort: { key: keyof Expense; asc: boolean } = {
  key: 'date', // default sort
  asc: true,
};
function renderExpenses(list: Expense[]) {
  const sortedList = [...list];

  // Only sort if currentSort.key exists
  if (currentSort && currentSort.key) {
    sortedList.sort((a, b) => {
      const key = currentSort.key;
      const valA = a[key];
      const valB = b[key];

      if (key === 'title' || key === 'category') {
        return currentSort.asc
          ? String(valA).localeCompare(String(valB))
          : String(valB).localeCompare(String(valA));
      } else if (key === 'amount') {
        return currentSort.asc
          ? (valA as number) - (valB as number)
          : (valB as number) - (valA as number);
      } else if (key === 'date') {
        return currentSort.asc
          ? new Date(valA as string).getTime() -
              new Date(valB as string).getTime()
          : new Date(valB as string).getTime() -
              new Date(valA as string).getTime();
      }
      return 0;
    });
  }

  expenseTable.innerHTML = '';

  if (sortedList.length === 0) {
    expenseTable.innerHTML = `<tr><td colspan="5" class="text-muted">No expenses yet</td></tr>`;
    return;
  }

  sortedList.forEach(exp => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${exp.title}</td>
      <td>$${exp.amount.toFixed(2)}</td>
      <td><span class="badge bg-secondary">${exp.category}</span></td>
      <td>${new Date(exp.date).toLocaleDateString()}</td>
      <td>
        <button class="btn btn-sm btn-warning me-2" data-action="edit" data-id="${
          exp.id
        }">Edit</button>
        <button class="btn btn-sm btn-danger" data-action="delete" data-id="${
          exp.id
        }">Delete</button>
      </td>
    `;
    expenseTable.appendChild(row);
  });
}

const headers = document.querySelectorAll('th[data-sort]');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const key = header.getAttribute('data-sort') as keyof Expense;
    if (!key) return;

    if (currentSort.key === key) {
      currentSort.asc = !currentSort.asc;
    } else {
      currentSort.key = key;
      currentSort.asc = true;
    }

    renderExpenses(filteredExpenses.length ? filteredExpenses : expenses);
  });
});

expenseTable.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  if (target.tagName !== 'BUTTON') return;

  const id = parseInt(target.getAttribute('data-id')!);
  const action = target.getAttribute('data-action');

  if (action === 'delete') {
    expenses = expenses.filter(exp => exp.id !== id);
    saveExpenses();
    renderExpenses(expenses);
    renderSummary();
  }

  if (action === 'edit') {
    const exp = expenses.find(e => e.id === id);
    if (!exp) return;

    editId.value = exp.id.toString();
    editTitle.value = exp.title;
    editAmount.value = exp.amount.toString();
    editCategory.value = exp.category;
    editDate.value = exp.date;
    editModal.show();
  }
});

editForm.addEventListener('submit', e => {
  e.preventDefault();

  const id = parseInt(editId.value);
  const index = expenses.findIndex(exp => exp.id === id);

  if (index !== -1) {
    expenses[index] = {
      ...expenses[index],
      title: editTitle.value.trim(),
      amount: parseFloat(editAmount.value),
      category: editCategory.value as Category,
      date: editDate.value,
      id: index,
    };

    saveExpenses();
    renderExpenses(expenses);
    renderSummary();
    editModal.hide();
  }
});
