var DEFAULT_USERS = [
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
        status: 2 /* Status.Confirm */,
        timestamp: 1755682257258,
    },
]);
// ================== Local Storage Helpers ==================
function initLocalStorage(key, defaultValue) {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(defaultValue));
    }
}
function getLocal(key, fallback) {
    var item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
}
function setLocal(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
// ================== Cookie Helpers ==================
function generateToken(length) {
    if (length === void 0) { length = 32; }
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: length }, function () { return chars[Math.floor(Math.random() * chars.length)]; }).join('');
}
function setCookie(name, value, minutes) {
    var expires = new Date(Date.now() + minutes * 60000).toUTCString();
    document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(expires, ";path=/");
}
function getCookie(name) {
    var _a;
    return (((_a = document.cookie
        .split(';')
        .map(function (c) { return c.trim(); })
        .find(function (c) { return c.startsWith(name + '='); })) === null || _a === void 0 ? void 0 : _a.split('=')[1]) || '');
}
function eraseCookie(name) {
    document.cookie = "".concat(name, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
}
// ================== Auth ==================
function login(username, password) {
    var users = getLocal('users', []);
    var user;
    if (Array.isArray(users)) {
        user = users.find(function (u) { return u.username === username && u.password === password; });
    }
    if (!user)
        return alert('Invalid username or password');
    var token = generateToken();
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
var loginBtn = document.getElementById('login');
if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        login(username.value.trim(), password.value.trim());
    });
}
// ================== Calendar Page ==================
var calendarBody = document.getElementById('calendar-body');
if (calendarBody) {
    if (!isLoggedIn())
        window.location.href = 'index.html';
    var currentUser_1 = getLocal('currentUser', {});
    var users_1 = getLocal('users', []);
    var calendarBody_1 = document.getElementById('calendar-body');
    var statusList_1 = getLocal('status', []);
    var displayedDate_1 = new Date();
    var prevMonthBtn_1 = document.getElementById('prev-month');
    var nextMonthBtn = document.getElementById('next-month');
    prevMonthBtn_1.addEventListener('click', function () { return changeMonth(-1); });
    nextMonthBtn.addEventListener('click', function () { return changeMonth(1); });
    document.getElementById('logout').addEventListener('click', logout);
    function changeMonth(step) {
        displayedDate_1.setMonth(displayedDate_1.getMonth() + step);
        // renderCalendar();
    }
    function updateCalendarTitle() {
        document.getElementById('calendar-title').textContent = displayedDate_1.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric',
        });
    }
    function renderCalendar() {
        updateCalendarTitle();
        calendarBody_1.innerHTML = '';
        var year = displayedDate_1.getFullYear();
        var month = displayedDate_1.getMonth();
        var todayDate = new Date();
        // disabled previous button
        prevMonthBtn_1.disabled =
            month === todayDate.getMonth() && year === todayDate.getFullYear();
        var totalDays = new Date(year, month + 1, 0).getDate();
        var startDay = new Date(year, month, 1).getDay();
        var row = document.createElement('tr');
        for (var i = 0; i < startDay; i++)
            row.appendChild(emptyCell());
        for (var day = 1; day < startDay; day++) {
            if (row.children.length === 7) {
                calendarBody_1.appendChild(row);
                row = document.createElement('tr');
            }
            row.appendChild(renderDayCell(day, month, year, todayDate));
        }
        while (row.children.length < 7)
            row.appendChild(emptyCell());
        calendarBody_1.appendChild(row);
    }
    function renderDayCell(day, month, year, todayDate) {
        var _a, _b;
        var td = document.createElement('td');
        var wrapper = document.createElement('div');
        wrapper.className = 'd-flex flex-column align-items-center';
        var btn = document.createElement('button');
        btn.textContent = day.toString();
        btn.style.width = '100%';
        btn.style.borderRadius = '.75rem';
        var label = document.createElement('small');
        label.className = 'fw-bold mt-1';
        var dayStatus = statusList_1.find(function (d) { return d.day === day && d.month === month && d.year === year; });
        var isWeekend = [0, 6].includes(new Date(year, month, day).getDay());
        var isPastDay = new Date(year, month, day) < todayDate;
        if ((dayStatus === null || dayStatus === void 0 ? void 0 : dayStatus.status) === 2 /* Status.Confirm */) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \uD83D\uDD12");
            label.textContent = "Confirmed by ".concat(((_a = users_1.find(function (u) { return u.id === dayStatus.userId; })) === null || _a === void 0 ? void 0 : _a.username) || 'Unknown');
            label.classList.add('text-danger');
        }
        else if ((dayStatus === null || dayStatus === void 0 ? void 0 : dayStatus.status) === 1 /* Status.Pending */) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \u23F3");
            label.textContent = "Pending approval for ".concat(((_b = users_1.find(function (u) { return u.id === dayStatus.userId; })) === null || _b === void 0 ? void 0 : _b.username) || 'Unknown');
            label.classList.add('text-warning');
        }
        // Past or weekend days without booking are unavailable
        else if (isPastDay || isWeekend) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \uD83D\uDD12");
            label.textContent = isWeekend ? 'Weekend' : 'Unavailable';
            label.classList.add('text-danger');
        }
        // Available days
        else {
            btn.className = 'available';
            btn.addEventListener('click', function () { return bookDate(day, month, year); });
            label.textContent = 'Available';
            label.classList.add('text-success');
        }
        wrapper.append(btn, label);
        td.appendChild(wrapper);
        return td;
    }
    function emptyCell() {
        var td = document.createElement('td');
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
        if (statusList_1.some(function (d) { return d.userId === currentUser_1.id && d.status === 'Pending'; })) {
            return alert("You already have a booking. Cancel it before booking a new date.");
        }
        var newBooking = {
            day: day,
            month: month,
            year: year,
            userId: currentUser_1.id,
            status: "Pending",
            timestamp: Date.now(),
        };
        var existingIndex = statusList_1.findIndex(function (d) { return d.day === day && d.month === month && d.year === year; });
        if (existingIndex > -1) {
            statusList_1[existingIndex] = newBooking;
        }
        else {
            statusList_1.push(newBooking);
        }
        setLocal("status", statusList_1);
        alert("Booking requested for ".concat(day, "/").concat(month + 1, "/").concat(year, " \u23F3 (awaiting admin approval)"));
        renderCalendar();
    }
    // Auto-update calendar when admin updates bookings
    window.addEventListener("storage", function (e) {
        if (e.key === "status") {
            statusList_1 = getLocal("status");
            renderCalendar();
        }
    });
    renderCalendar();
}
