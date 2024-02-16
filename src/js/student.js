export default class Student {
  constructor(account, email, name, school) {
    this.account = account;
    this.email = email;
    this.name = name;
    this.school = school;
  }

  getAccount() {
    return this.account;
  }
  setAccount(account) {
    this.account = account;
  }

  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getSchool() {
    return this.school;
  }
  setSchool(school) {
    this.school = school;
  }

  studentString() {
    return `
    <tr class="bg-white" id="student ${this.account}">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
      ${this.account}
    </th>
    <td class="px-6 py-4">${this.email}</td>
    <td class="px-6 py-4">${this.name}</td>
    <td class="px-6 py-4">${this.getSchoolByNumber()}</td>
    <td class="flex items-center px-6 py-4">
      <a
        href="#"
        id="editStudent ${this.account}"
        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >Editar</a
      >
      <a
        href="#"
        id="deleteStudent ${this.account}"
        class="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
        >Eliminar</a
      >
    </td>
  </tr>
    `;
  }

  getSchoolByNumber() {
    switch (this.school) {
      case "1":
        return "Facultad de Telem&aacute;tica";
      case "2":
        return "Facultad de Ingenier&iacute;a Mec&aacute;nica y El&eacute;ctronica";
      case "3":
        return "Facultad de Contabilidad y Administraci&oacute;n";
      case "4":
        return "Facultad de Medicina";
      case "5":
        return "Facultad de Derecho";
      case "6":
        return "Facultad de Arquitectura";
      case "7":
        return "Facultad de Ciencias de la Educaci&oacute;n";
      case "8":
        return "Facultad de Psicolog&iacute;a";
      default:
        return "Facultad de Telem&aacute;tica";
    }
  }
}
