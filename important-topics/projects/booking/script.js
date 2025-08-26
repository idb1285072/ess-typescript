// ================== Types & Enums ==================
var BookingStatus;
(function (BookingStatus) {
    BookingStatus[BookingStatus["Pending"] = 0] = "Pending";
    BookingStatus[BookingStatus["Confirmed"] = 1] = "Confirmed";
})(BookingStatus || (BookingStatus = {}));
// ================== Default Data ==================
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
        status: BookingStatus.Confirmed,
        timestamp: Date.now(),
    },
]);
// ================== Local Storage Helpers ==================
function initLocalStorage(key, defaultValue) {
    if (!localStorage.getItem(key)) {
        setLocal(key, defaultValue);
    }
}
function getLocal(key) {
    var item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
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
    var users = getLocal('users');
    var user = users.find(function (u) { return u.username === username && u.password === password; });
    if (!user) {
        alert('Invalid username or password');
        return;
    }
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
    return Boolean(getCookie('auth_token') && localStorage.getItem('currentUser'));
}
// ================== Login Page ==================
var loginBtn = document.getElementById('login');
if (loginBtn) {
    loginBtn.addEventListener('click', function () {
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value.trim();
        login(username, password);
    });
}
// ================== Calendar Page ==================
var calendarBody = document.getElementById('calendar-body');
if (calendarBody) {
    if (!isLoggedIn())
        window.location.href = 'index.html';
    var currentUser_1 = getLocal('currentUser');
    var users_1 = getLocal('users');
    var statusList_1 = getLocal('status');
    var displayedDate_1 = new Date();
    var prevMonthBtn_1 = document.getElementById('prev-month');
    var nextMonthBtn = document.getElementById('next-month');
    var logoutBtn = document.getElementById('logout');
    prevMonthBtn_1.addEventListener('click', function () { return changeMonth(-1); });
    nextMonthBtn.addEventListener('click', function () { return changeMonth(1); });
    logoutBtn === null || logoutBtn === void 0 ? void 0 : logoutBtn.addEventListener('click', logout);
    function changeMonth(step) {
        displayedDate_1.setMonth(displayedDate_1.getMonth() + step);
        renderCalendar();
    }
    function updateCalendarTitle() {
        var title = document.getElementById('calendar-title');
        if (title) {
            title.textContent = displayedDate_1.toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
            });
        }
    }
    function renderCalendar() {
        updateCalendarTitle();
        calendarBody.innerHTML = '';
        var year = displayedDate_1.getFullYear();
        var month = displayedDate_1.getMonth();
        var todayDate = new Date();
        prevMonthBtn_1.disabled =
            month === todayDate.getMonth() && year === todayDate.getFullYear();
        var totalDays = new Date(year, month + 1, 0).getDate();
        var startDay = new Date(year, month, 1).getDay();
        var row = document.createElement('tr');
        for (var i = 0; i < startDay; i++)
            row.appendChild(emptyCell());
        for (var day = 1; day <= totalDays; day++) {
            if (row.children.length === 7) {
                calendarBody.appendChild(row);
                row = document.createElement('tr');
            }
            row.appendChild(renderDayCell(day, month, year, todayDate));
        }
        while (row.children.length < 7)
            row.appendChild(emptyCell());
        calendarBody.appendChild(row);
    }
    function renderDayCell(day, month, year, todayDate) {
        var _a, _b;
        var td = document.createElement('td');
        var wrapper = document.createElement('div');
        wrapper.className = 'd-flex flex-column align-items-center';
        var btn = document.createElement('button');
        btn.textContent = String(day);
        btn.style.width = '100%';
        btn.style.borderRadius = '.75rem';
        var label = document.createElement('small');
        label.className = 'fw-bold mt-1';
        var dayStatus = statusList_1.find(function (d) { return d.day === day && d.month === month && d.year === year; });
        var isWeekend = [0, 6].includes(new Date(year, month, day).getDay());
        var isPastDay = new Date(year, month, day) < todayDate;
        if ((dayStatus === null || dayStatus === void 0 ? void 0 : dayStatus.status) === BookingStatus.Confirmed) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \uD83D\uDD12");
            label.textContent = "Confirmed by ".concat(((_a = users_1.find(function (u) { return u.id === dayStatus.userId; })) === null || _a === void 0 ? void 0 : _a.username) || 'Unknown');
            label.classList.add('text-danger');
        }
        else if ((dayStatus === null || dayStatus === void 0 ? void 0 : dayStatus.status) === BookingStatus.Pending) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \u23F3");
            label.textContent = "Pending approval for ".concat(((_b = users_1.find(function (u) { return u.id === dayStatus.userId; })) === null || _b === void 0 ? void 0 : _b.username) || 'Unknown');
            label.classList.add('text-warning');
        }
        else if (isPastDay || isWeekend) {
            btn.disabled = true;
            btn.className = 'booked';
            btn.textContent = "".concat(day, " \uD83D\uDD12");
            label.textContent = isWeekend ? 'Weekend' : 'Unavailable';
            label.classList.add('text-danger');
        }
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
        if (statusList_1.some(function (d) { return d.userId === currentUser_1.id && d.status === BookingStatus.Pending; })) {
            alert('You already have a booking. Cancel it before booking a new date.');
            return;
        }
        var newBooking = {
            day: day,
            month: month,
            year: year,
            userId: currentUser_1.id,
            status: BookingStatus.Pending,
            timestamp: Date.now(),
        };
        var existingIndex = statusList_1.findIndex(function (d) { return d.day === day && d.month === month && d.year === year; });
        if (existingIndex > -1) {
            statusList_1[existingIndex] = newBooking;
        }
        else {
            statusList_1.push(newBooking);
        }
        setLocal('status', statusList_1);
        alert("Booking requested for ".concat(day, "/").concat(month + 1, "/").concat(year, " \u23F3 (awaiting admin approval)"));
        renderCalendar();
    }
    window.addEventListener('storage', function (e) {
        if (e.key === 'status') {
            statusList_1 = getLocal('status');
            renderCalendar();
        }
    });
    renderCalendar();
}
// ================== Admin Page ==================
var bookingListEl = document.getElementById("booking-list");
if (bookingListEl) {
    var renderBookings_1 = function () {
        var statusList = getLocal("status");
        var users = getLocal("users");
        var now = Date.now();
        // Expire pending bookings older than 5 minutes
        statusList = statusList.filter(function (b) { return !(b.status === BookingStatus.Pending && now - b.timestamp > 5 * 60000); });
        bookingListEl.innerHTML = "";
        statusList.forEach(function (b, index) {
            var _a, _b;
            var user = (_b = (_a = users.find(function (u) { return u.id === b.userId; })) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : "Unknown";
            var date = "".concat(b.day, "/").concat(b.month + 1, "/").concat(b.year);
            var timeLeft = "-";
            if (b.status === BookingStatus.Pending) {
                var remaining = 5 * 60000 - (now - b.timestamp);
                timeLeft = remaining > 0 ? "".concat(Math.floor(remaining / 1000), "s") : "Expired";
            }
            var row = document.createElement("tr");
            row.innerHTML = "\n        <td>".concat(user, "</td>\n        <td>").concat(date, "</td>\n        <td>").concat(b.status, "</td>\n        <td>").concat(timeLeft, "</td>\n        <td>\n          ").concat(b.status === BookingStatus.Pending
                ? "\n                <button class=\"btn btn-success btn-sm\" data-action=\"confirm\" data-index=\"".concat(index, "\">Confirm</button>\n                <button class=\"btn btn-danger btn-sm\" data-action=\"reject\" data-index=\"").concat(index, "\">Reject</button>\n              ")
                : "Confirmed", "\n        </td>\n      ");
            bookingListEl.appendChild(row);
        });
        setLocal("status", statusList);
    };
    var confirmBooking_1 = function (index) {
        var statusList = getLocal("status");
        if (statusList[index]) {
            statusList[index].status = BookingStatus.Confirmed;
            setLocal("status", statusList);
            renderBookings_1();
        }
    };
    var rejectBooking_1 = function (index) {
        var statusList = getLocal("status");
        if (statusList[index]) {
            statusList.splice(index, 1);
            setLocal("status", statusList);
            renderBookings_1();
        }
    };
    // Event delegation for confirm/reject buttons
    bookingListEl.addEventListener("click", function (e) {
        var target = e.target;
        if (!target.dataset.action || target.dataset.index === undefined)
            return;
        var index = Number(target.dataset.index);
        if (target.dataset.action === "confirm") {
            confirmBooking_1(index);
        }
        else if (target.dataset.action === "reject") {
            rejectBooking_1(index);
        }
    });
    // Auto-refresh every second
    setInterval(renderBookings_1, 1000);
    renderBookings_1();
    // Calendar navigation
    var calendarBtn = document.getElementById("calendar-btn");
    calendarBtn === null || calendarBtn === void 0 ? void 0 : calendarBtn.addEventListener("click", function () {
        window.location.href = "calendar.html";
    });
}
