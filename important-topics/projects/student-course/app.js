// ========== ENUM ==========
var CourseCategory;
(function (CourseCategory) {
    CourseCategory["SCIENCE"] = "Science";
    CourseCategory["ARTS"] = "Arts";
    CourseCategory["TECHNOLOGY"] = "Technology";
})(CourseCategory || (CourseCategory = {}));
// ========== STUDENT ARRAY ==========
var students = [];
// ========== GENERIC FUNCTION ==========
function findById(arr, id) {
    return arr.find(function (item) { return item.id === id; });
}
// ========== DOM ELEMENTS ==========
var studentForm = document.getElementById('studentForm');
var tableBody = document.getElementById('studentTableBody');
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var courseInput = document.getElementById('course');
var levelInput = document.getElementById('level');
// ========== HELPER FUNCTIONS ==========
// Render students in table
function renderStudents() {
    tableBody.innerHTML = '';
    students.forEach(function (student) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n      <td>".concat(student.id, "</td>\n      <td>").concat(student.name, "</td>\n      <td>").concat(student.age, "</td>\n      <td>").concat(student.course, " <span class=\"badge bg-secondary\">").concat(student.category, "</span></td>\n      <td>").concat(student.level, "</td>\n      <td>\n        <button class=\"btn btn-sm btn-danger\" onclick=\"deleteStudent(").concat(student.id, ")\">Delete</button>\n      </td>\n    ");
        tableBody.appendChild(tr);
    });
}
// Add new student
studentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // ========== UNKNOWN & ANY DEMO ==========
    var rawAge = ageInput.value;
    var convertedAge;
    if (typeof rawAge === 'string' && rawAge.trim() !== '') {
        convertedAge = parseInt(rawAge);
    }
    else {
        alert('Invalid age');
        return;
    }
    // Example of bad practice with ANY (allowed but unsafe)
    var unsafeInput = nameInput.value;
    // could be string | number | object, no checking
    // ========== NULL & UNDEFINED ==========
    if (!nameInput.value || !courseInput.value || !levelInput.value) {
        alert('Please fill all fields');
        return;
    }
    // Assign random category from ENUM
    var categories = Object.values(CourseCategory);
    var randomCategory = categories[Math.floor(Math.random() * categories.length)];
    // Create new student
    var newStudent = {
        id: students.length + 1,
        name: unsafeInput, // (any) - TypeScript won't complain, but unsafe
        age: convertedAge,
        course: courseInput.value,
        category: randomCategory,
        level: levelInput.value,
    };
    students.push(newStudent);
    renderStudents();
    studentForm.reset();
});
// Delete student (using generic function)
window.deleteStudent = function (id) {
    var student = findById(students, id);
    if (!student)
        return;
    students = students.filter(function (s) { return s.id !== id; });
    renderStudents();
};
// Initial render
renderStudents();
