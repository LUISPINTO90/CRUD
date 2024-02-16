export default class StudentsList {
  constructor() {
    this.students = [];
  }

  searchStudent(account) {
    for (let i = 0; i < this.students.length; i++) {
      if (account === this.students[i].getAccount()) {
        return this.students[i];
      }
    }
    return null;
  }

  addStudent(student) {
    if (!this.searchStudent(student.getAccount())) {
      this.students.push(student);
      return true;
    } else {
      return false;
    }
  }

  removeStudent(account) {
    for (let i = 0; i < this.students.length; i++) {
      if (account === this.students[i].getAccount()) {
        this.students.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  showStudents() {
    let studentsString = "";
    for (let i = 0; i < this.students.length; i++) {
      studentsString += this.students[i].studentString();
    }
    return studentsString;
  }
}
