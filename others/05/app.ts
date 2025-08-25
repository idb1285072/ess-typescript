// ========== ENUM ==========
enum CourseCategory {
  SCIENCE = 'Science',
  ARTS = 'Arts',
  TECHNOLOGY = 'Technology',
}

// ========== UNION TYPE ==========
type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

// ========== INTERFACE ==========
interface Student {
  id: number;
  name: string;
  age: number;
  course: string;
  category: CourseCategory;
  level: CourseLevel;
  grade?: number; // optional
}

// ========== STUDENT ARRAY ==========
let students: Student[] = [];

// ========== GENERIC FUNCTION ==========
function findById<T extends { id: number }>(
  arr: T[],
  id: number
): T | undefined {
  return arr.find(item => item.id === id);
}

// ========== DOM ELEMENTS ==========
const studentForm = document.getElementById('studentForm') as HTMLFormElement;
const tableBody = document.getElementById(
  'studentTableBody'
) as HTMLTableSectionElement;

const nameInput = document.getElementById('name') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const courseInput = document.getElementById('course') as HTMLInputElement;
const levelInput = document.getElementById('level') as HTMLSelectElement;

// ========== HELPER FUNCTIONS ==========

// Render students in table
function renderStudents(): void {
  tableBody.innerHTML = '';
  students.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course} <span class="badge bg-secondary">${student.category}</span></td>
      <td>${student.level}</td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="deleteStudent(${student.id})">Delete</button>
      </td>
    `;
    tableBody.appendChild(tr);
  });
}

// Add new student
studentForm.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  // ========== UNKNOWN & ANY DEMO ==========
  let rawAge: unknown = ageInput.value;
  let convertedAge: number;

  if (typeof rawAge === 'string' && rawAge.trim() !== '') {
    convertedAge = parseInt(rawAge);
  } else {
    alert('Invalid age');
    return;
  }

  // Example of bad practice with ANY (allowed but unsafe)
  let unsafeInput: any = nameInput.value;
  // could be string | number | object, no checking

  // ========== NULL & UNDEFINED ==========
  if (!nameInput.value || !courseInput.value || !levelInput.value) {
    alert('Please fill all fields');
    return;
  }

  // Assign random category from ENUM
  const categories = Object.values(CourseCategory);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];

  // Create new student
  const newStudent: Student = {
    id: students.length + 1,
    name: unsafeInput, // (any) - TypeScript won't complain, but unsafe
    age: convertedAge,
    course: courseInput.value,
    category: randomCategory as CourseCategory,
    level: levelInput.value as CourseLevel,
  };

  students.push(newStudent);
  renderStudents();
  studentForm.reset();
});

// Delete student (using generic function)
(window as any).deleteStudent = (id: number): void => {
  const student = findById(students, id);
  if (!student) return;

  students = students.filter(s => s.id !== id);
  renderStudents();
};

// Initial render
renderStudents();
