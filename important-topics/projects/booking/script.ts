// ================== User Setup ==================
const enum Status {
  Unavailable,
  Pending,
  Confirm,
}

type User = { id: number; username: string; password: string };
type StatusLog = {
  day: number;
  month: number;
  year: number;
  userId: number;
  status: Status;
  timestamp: number;
};
const DEFAULT_USERS: User[] = [
  { id: 0, username: 'admin', password: '@admin123' },
  { id: 1, username: 'user1', password: '@user1' },
  { id: 2, username: 'user2', password: '@user2' },
  { id: 3, username: 'user3', password: '@user3' },
  { id: 4, username: 'user4', password: '@user4' },
  { id: 5, username: 'user5', password: '@user5' },
];

initLocalStorage('users', DEFAULT_USERS);
initLocalStorage('status', [
  {
    day: 2,
    month: 6,
    year: 2025,
    userId: 3,
    status: Status.Confirm,
    timestamp: 1755682257258,
  },
]);

// ================== Local Storage Helpers ==================
function initLocalStorage<T>(key: string, defaultValue: T) {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
}

function getLocal<T>(key: string, fallback: T): T {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : fallback;
}

function setLocal<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ================== Cookie Helpers ==================
function generateToken(length = 32) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join('');
}

function setCookie(name: string, value: string, minutes: number) {
  const expires = new Date(Date.now() + minutes * 60000).toUTCString();
  document.cookie = `${name}=${value};expires=${expires};path=/`;
}
function getCookie(name: string) {
  return (
    document.cookie
      .split(';')
      .map(c => c.trim())
      .find(c => c.startsWith(name + '='))
      ?.split('=')[1] || ''
  );
}
function eraseCookie(name: string) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// ================== Auth ==================
function login(username: string, password: string) {
  let users = getLocal<User[]>('users', []);
  let user: User | undefined;
  if (Array.isArray(users)) {
    user = (users as User[]).find(
      (u: User) => u.username === username && u.password === password
    );
  }

  if (!user) return alert('Invalid username or password');

  const token = generateToken();
  setCookie('auth_token', token, 30);
  setLocal('currentUser', user);

  window.location.href =
    user.username === 'admin' ? 'admin.html' : 'calendar.html';
}

function logout() {
  eraseCookie('auth_token');
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

function isLoggedIn() {
  return getCookie('auth_token') && localStorage.getItem('currentUser');
}

// ================== Login Page ==================
const loginBtn = document.getElementById('login');
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username') as HTMLInputElement;
    const password = document.getElementById('password') as HTMLInputElement;
    login(username.value.trim(), password.value.trim());
  });
}

// ================== Calendar Page ==================
const calendarBody = document.getElementById('calendar-body');
if (calendarBody) {
  if (!isLoggedIn()) window.location.href = 'index.html';
  const currentUser = getLocal<User>('currentUser', {} as User);
  const users = getLocal<User[]>('users', []);
  const calendarBody = document.getElementById(
    'calendar-body'
  ) as HTMLTableSectionElement;
  let statusList = getLocal<StatusLog[]>('status', []);
  let displayedDate = new Date();

  const prevMonthBtn = document.getElementById(
    'prev-month'
  ) as HTMLButtonElement;
  const nextMonthBtn = document.getElementById(
    'next-month'
  ) as HTMLButtonElement;

  prevMonthBtn.addEventListener('click', () => changeMonth(-1));
  nextMonthBtn.addEventListener('click', () => changeMonth(1));
  (document.getElementById('logout') as HTMLButtonElement).addEventListener(
    'click',
    logout
  );

  function changeMonth(step: number) {
    displayedDate.setMonth(displayedDate.getMonth() + step);
    // renderCalendar();
  }

  function updateCalendarTitle() {
    (
      document.getElementById('calendar-title') as HTMLHeadingElement
    ).textContent = displayedDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric',
    });
  }

  function renderCalendar() {
    updateCalendarTitle();
    calendarBody.innerHTML = '';

    const year = displayedDate.getFullYear();
    const month = displayedDate.getMonth();
    const todayDate = new Date();

    // disabled previous button
    prevMonthBtn.disabled =
      month === todayDate.getMonth() && year === todayDate.getFullYear();

    const totalDays = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    let row = document.createElement('tr');
    for (let i = 0; i < startDay; i++) row.appendChild(emptyCell());

    for (let day = 1; day < startDay; day++) {
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
    btn.textContent = day.toString();
    btn.style.width = '100%';
    btn.style.borderRadius = '.75rem';

    const label = document.createElement('small');
    label.className = 'fw-bold mt-1';

    const dayStatus = statusList.find(
      d => d.day === day && d.month === month && d.year === year
    );

    const isWeekend: boolean = [0, 6].includes(
      new Date(year, month, day).getDay()
    );
    const isPastDay: boolean = new Date(year, month, day) < todayDate;

    if (dayStatus?.status === Status.Confirm) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} 🔒`;
      label.textContent = `Confirmed by ${
        users.find(u => u.id === dayStatus.userId)?.username || 'Unknown'
      }`;
      label.classList.add('text-danger');
    } else if (dayStatus?.status === Status.Pending) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} ⏳`;
      label.textContent = `Pending approval for ${
        users.find(u => u.id === dayStatus.userId)?.username || 'Unknown'
      }`;
      label.classList.add('text-warning');
    }
    // Past or weekend days without booking are unavailable
    else if (isPastDay || isWeekend) {
      btn.disabled = true;
      btn.className = 'booked';
      btn.textContent = `${day} 🔒`;
      label.textContent = isWeekend ? 'Weekend' : 'Unavailable';
      label.classList.add('text-danger');
    }
    // Available days
    else {
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

   function bookDate(day, month, year) {
    // one user can book max one date
    // if (statusList.some((d) => d.userId === currentUser.id)) {
    //   return alert(
    //     "You already have a booking. Cancel it before booking a new date."
    //   );
    // }

    // if pending then not booked another
    if (statusList.some((d) => d.userId === currentUser.id && d.status==='Pending')) {
      return alert(
        "You already have a booking. Cancel it before booking a new date."
      );
    }

    const newBooking = {
      day,
      month,
      year,
      userId: currentUser.id,
      status: "Pending",
      timestamp: Date.now(),
    };

    const existingIndex = statusList.findIndex(
      (d) => d.day === day && d.month === month && d.year === year
    );
    if (existingIndex > -1) {
      statusList[existingIndex] = newBooking;
    } else {
      statusList.push(newBooking);
    }

    setLocal("status", statusList);
    alert(
      `Booking requested for ${day}/${
        month + 1
      }/${year} ⏳ (awaiting admin approval)`
    );
    renderCalendar();
  }

  // Auto-update calendar when admin updates bookings
  window.addEventListener("storage", (e) => {
    if (e.key === "status") {
      statusList = getLocal("status");
      renderCalendar();
    }
  });

  renderCalendar();
}
