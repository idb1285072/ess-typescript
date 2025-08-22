// ================== Types & Enums ==================
enum BookingStatus {
  Pending,
  Confirmed,
}

interface User {
  id: number;
  username: string;
  password: string;
}

interface Booking {
  day: number;
  month: number; // 0-based (JS Date)
  year: number;
  userId: number;
  status: BookingStatus;
  timestamp: number;
}

// ================== Default Data ==================
const DEFAULT_USERS: User[] = [
  { id: 0, username: 'admin', password: '@admin123' },
  { id: 1, username: 'user1', password: '@user1' },
  { id: 2, username: 'user2', password: '@user2' },
  { id: 3, username: 'user3', password: '@user3' },
  { id: 4, username: 'user4', password: '@user4' },
  { id: 5, username: 'user5', password: '@user5' },
];

initLocalStorage<User[]>('users', DEFAULT_USERS);
initLocalStorage<Booking[]>('status', [
  {
    day: 2,
    month: 6,
    year: 2025,
    userId: 3,
    status: BookingStatus.Confirmed,
    timestamp: Date.now(),
  },
]);

// ================== Local Storage Helpers ==================
function initLocalStorage<T>(key: string, defaultValue: T): void {
  if (!localStorage.getItem(key)) {
    setLocal<T>(key, defaultValue);
  }
}

function getLocal<T>(key: string): T {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : ([] as unknown as T);
}

function setLocal<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}

// ================== Cookie Helpers ==================
function generateToken(length = 32): string {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

function setCookie(name: string, value: string, minutes: number): void {
  const expires = new Date(Date.now() + minutes * 60000).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/`;
}

function getCookie(name: string): string {
  return (
    document.cookie
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith(name + '='))
      ?.split('=')[1] || ''
  );
}

function eraseCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// ================== Auth ==================
function login(username: string, password: string): void {
  const users = getLocal<User[]>('users');
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    alert('Invalid username or password');
    return;
  }

  const token = generateToken();
  setCookie('auth_token', token, 30);
  setLocal<User>('currentUser', user);

  window.location.href =
    user.username === 'admin' ? 'admin.html' : 'calendar.html';
}

function logout(): void {
  eraseCookie('auth_token');
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

function isLoggedIn(): boolean {
  return Boolean(
    getCookie('auth_token') && localStorage.getItem('currentUser')
  );
}

// ================== Login Page ==================
const loginBtn = document.getElementById('login');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const username = (
      document.getElementById('username') as HTMLInputElement
    ).value.trim();
    const password = (
      document.getElementById('password') as HTMLInputElement
    ).value.trim();
    login(username, password);
  });
}

// ================== Calendar Page ==================
const calendarBody = document.getElementById(
  'calendar-body'
) as HTMLTableSectionElement;
if (calendarBody) {
  if (!isLoggedIn()) window.location.href = 'index.html';

  const currentUser = getLocal<User>('currentUser');
  const users = getLocal<User[]>('users');
  let statusList = getLocal<Booking[]>('status');
  let displayedDate = new Date();

  const prevMonthBtn = document.getElementById(
    'prev-month'
  ) as HTMLButtonElement;
  const nextMonthBtn = document.getElementById(
    'next-month'
  ) as HTMLButtonElement;
  const logoutBtn = document.getElementById('logout');

  prevMonthBtn.addEventListener('click', () => changeMonth(-1));
  nextMonthBtn.addEventListener('click', () => changeMonth(1));
  logoutBtn?.addEventListener('click', logout);

  function changeMonth(step: number): void {
    displayedDate.setMonth(displayedDate.getMonth() + step);
    renderCalendar();
  }

  function updateCalendarTitle(): void {
    const title = document.getElementById('calendar-title');
    if (title) {
      title.textContent = displayedDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
    }
  }

  function renderCalendar(): void {
    updateCalendarTitle();
    calendarBody.innerHTML = '';

    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();
    const todayDate = new Date();

    prevMonthBtn.disabled =
      month === todayDate.getMonth() && year === todayDate.getFullYear();

    const totalDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    let row = document.createElement('tr');
    for (let i = 0; i < startDay; i++) row.appendChild(emptyCell());

    for (let day = 1; day <= totalDays; day++) {
      if (row.children.length === 7) {
        calendarBody.appendChild(row);
        row = document.createElement('tr');
      }
      row.appendChild(renderDayCell(day, month, year, todayDate));
    }

    while (row.children.length < 7) row.appendChild(emptyCell());
    calendarBody.appendChild(row);
  }

  function renderDayCell(
    day: number,
    month: number,
    year: number,
    todayDate: Date
  ): HTMLTableCellElement {
    const td = document.createElement('td');
    const wrapper = document.createElement('div');
    wrapper.className = 'd-flex flex-column align-items-center';

    const btn = document.createElement('button');
    btn.textContent = String(day);
    btn.style.width = '100%';
    btn.style.borderRadius = '.75rem';

    const label = document.createElement('small');
    label.className = 'fw-bold mt-1';

    const dayStatus = statusList.find(
      d => d.day === day && d.month === month && d.year === year
    );
    const isWeekend = [0, 6].includes(new Date(year, month, day).getDay());
    const isPastDay = new Date(year, month, day) < todayDate;

    if (dayStatus?.status === BookingStatus.Confirmed) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} 🔒`;
      label.textContent = `Confirmed by ${
        users.find(u => u.id === dayStatus.userId)?.username || 'Unknown'
      }`;
      label.classList.add('text-danger');
    } else if (dayStatus?.status === BookingStatus.Pending) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} ⏳`;
      label.textContent = `Pending approval for ${
        users.find(u => u.id === dayStatus.userId)?.username || 'Unknown'
      }`;
      label.classList.add('text-warning');
    } else if (isPastDay || isWeekend) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} 🔒`;
      label.textContent = isWeekend ? 'Weekend' : 'Unavailable';
      label.classList.add('text-danger');
    } else {
      btn.className = 'available';
      btn.addEventListener('click', () => bookDate(day, month, year));
      label.textContent = 'Available';
      label.classList.add('text-success');
    }

    wrapper.append(btn, label);
    td.appendChild(wrapper);
    return td;
  }

  function emptyCell(): HTMLTableCellElement {
    const td = document.createElement('td');
    td.className = 'empty';
    return td;
  }

  function bookDate(day: number, month: number, year: number): void {
    if (
      statusList.some(
        d => d.userId === currentUser.id && d.status === BookingStatus.Pending
      )
    ) {
      alert('You already have a booking. Cancel it before booking a new date.');
      return;
    }

    const newBooking: Booking = {
      day,
      month,
      year,
      userId: currentUser.id,
      status: BookingStatus.Pending,
      timestamp: Date.now(),
    };

    const existingIndex = statusList.findIndex(
      d => d.day === day && d.month === month && d.year === year
    );
    if (existingIndex > -1) {
      statusList[existingIndex] = newBooking;
    } else {
      statusList.push(newBooking);
    }

    setLocal<Booking[]>('status', statusList);
    alert(
      `Booking requested for ${day}/${
        month + 1
      }/${year} ⏳ (awaiting admin approval)`
    );
    renderCalendar();
  }

  window.addEventListener('storage', e => {
    if (e.key === 'status') {
      statusList = getLocal<Booking[]>('status');
      renderCalendar();
    }
  });

  renderCalendar();
}

// ================== Admin Page ==================
const bookingListEl = document.getElementById("booking-list") as HTMLTableSectionElement | null;

if (bookingListEl) {
  const renderBookings = (): void => {
    let statusList = getLocal<Booking[]>("status");
    const users = getLocal<User[]>("users");
    const now = Date.now();

    // Expire pending bookings older than 5 minutes
    statusList = statusList.filter(
      (b) => !(b.status === BookingStatus.Pending && now - b.timestamp > 5 * 60_000)
    );

    bookingListEl.innerHTML = "";

    statusList.forEach((b, index) => {
      const user = users.find((u) => u.id === b.userId)?.username ?? "Unknown";
      const date = `${b.day}/${b.month + 1}/${b.year}`;
      let timeLeft = "-";

      if (b.status === BookingStatus.Pending) {
        const remaining = 5 * 60_000 - (now - b.timestamp);
        timeLeft = remaining > 0 ? `${Math.floor(remaining / 1000)}s` : "Expired";
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user}</td>
        <td>${date}</td>
        <td>${b.status}</td>
        <td>${timeLeft}</td>
        <td>
          ${
            b.status === BookingStatus.Pending
              ? `
                <button class="btn btn-success btn-sm" data-action="confirm" data-index="${index}">Confirm</button>
                <button class="btn btn-danger btn-sm" data-action="reject" data-index="${index}">Reject</button>
              `
              : "Confirmed"
          }
        </td>
      `;
      bookingListEl.appendChild(row);
    });

    setLocal("status", statusList);
  };

  const confirmBooking = (index: number): void => {
    const statusList = getLocal<Booking[]>("status");
    if (statusList[index]) {
      statusList[index].status = BookingStatus.Confirmed;
      setLocal("status", statusList);
      renderBookings();
    }
  };

  const rejectBooking = (index: number): void => {
    const statusList = getLocal<Booking[]>("status");
    if (statusList[index]) {
      statusList.splice(index, 1);
      setLocal("status", statusList);
      renderBookings();
    }
  };

  // Event delegation for confirm/reject buttons
  bookingListEl.addEventListener("click", (e) => {
    const target = e.target as HTMLButtonElement;
    if (!target.dataset.action || target.dataset.index === undefined) return;

    const index = Number(target.dataset.index);
    if (target.dataset.action === "confirm") {
      confirmBooking(index);
    } else if (target.dataset.action === "reject") {
      rejectBooking(index);
    }
  });

  // Auto-refresh every second
  setInterval(renderBookings, 1000);
  renderBookings();

  // Calendar navigation
  const calendarBtn = document.getElementById("calendar-btn") as HTMLButtonElement | null;
  calendarBtn?.addEventListener("click", () => {
    window.location.href = "calendar.html";
  });
}