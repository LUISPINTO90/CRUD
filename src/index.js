import Student from "./js/student.js";
import StudentsList from "./js/studentsList.js";

let studentList = new StudentsList();

// Form inputs
let accountNumber = document.getElementById("accountNumber");
let studentEmail = document.getElementById("studentEmail");
let studentName = document.getElementById("studentName");
let studentSchool = document.getElementById("studentSchool");

// Form button
let addStudentButton = document.getElementById("addStudentButton");

// Table
let tableBody = document.getElementById("tableBody");

// DOM Events

// Add student
addStudentButton.addEventListener("click", () => {
  let student = new Student(
    accountNumber.value,
    studentEmail.value,
    studentName.value,
    studentSchool.value
  );

  if (
    accountNumber.value === "" ||
    studentEmail.value === "" ||
    studentName.value === "" ||
    studentSchool.value === ""
  ) {
    Swal.fire({
      title: "Oops!",
      text: "Por favor llena todos los campos.",
      icon: "warning",
    });
  } else {
    if (studentList.addStudent(student)) {
      showStudents();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "El estudiante ya existe.",
        icon: "warning",
      });

      showStudents();
    }
  }
});

// Delete student
document.addEventListener("click", (e) => {
  if (e.target && e.target.id.includes("deleteStudent")) {
    let account = e.target.id.split(" ")[1];
    if (studentList.removeStudent(account)) {
      document.getElementById(`student ${account}`).innerHTML = "";

      showStudents();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "El estudiante no existe.",
        icon: "warning",
      });
    }
  }
});

// Edit student
document.addEventListener("click", (e) => {
  if (e.target && e.target.id.includes("editStudent")) {
    let account = e.target.id.split(" ")[1];
    let student = studentList.searchStudent(account);
    Swal.fire({
      title: "Editar estudiante",
      html: `
      <input type="email" id="newEmail" class="swal2-input" value="${student.getEmail()}">
      <input id="newName" class="swal2-input" value="${student.getName()}">
      <select id="newSchool" class="swal2-input">
        <option value="1">Facultad de Telem&aacute;tica</option>
        <option value="2">
          Facultad de Ingenier&iacute;a Mec&aacute;nica y
          El&eacute;ctronica
        </option>
        <option value="3">
          Facultad de Contabilidad y Administraci&oacute;n
        </option>
        <option value="4">Facultad de Medicina</option>
        <option value="5">Facultad de Derecho</option>
        <option value="6">Facultad de Arquitectura</option>
        <option value="7">
          Facultad de Ciencias de la Educaci&oacute;n
        </option>
        <option value="8">Facultad de Psicolog&iacute;a</option>
      </select>
      `,
      focusConfirm: false,
      preConfirm: () => {
        student.setEmail(document.getElementById("newEmail").value);
        student.setName(document.getElementById("newName").value);
        student.setSchool(document.getElementById("newSchool").value);
        showStudents();
      },
    });
  }
});

// Show students
function showStudents() {
  tableBody.innerHTML = studentList.showStudents();
}
