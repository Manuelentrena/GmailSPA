class Emails {
  constructor() {
    this.listEmails = [];
  }

  addEmail(email) {
    this.listEmails.push(email);
  }

  deleteEmail(id) {
    const index = this.listEmails.findIndex((email) => email.id === id);
    /* Si no existe lanzamos un error */
    if (index === -1) throw `El email con id ${id}, no existe!`;
    /* TODO: Cambiamos estado del email en la BD */
    this.listEmails.splice(index, 1);
    return true;
  }

  getEmail(id) {
    const index = this.listEmails.findIndex((email) => email.id === id);
    /* Si no existe lanzamos un error */
    if (index === -1) throw `El email con id ${id}, no existe!`;
    /* TODO: Cambiamos estado del email en la BD */
    return this.listEmails[index];
  }

  getCountEmailsNotRead(type) {
    switch (type) {
      case "inbox":
        return this.listEmails.reduce(
          (acc, val) => (!val.isRead ? acc + 1 : acc),
          0
        );
      case "starred":
        return this.listEmails.reduce(
          (acc, val) => (val.starred && !val.isRead ? acc + 1 : acc),
          0
        );
      case "imp":
        return this.listEmails.reduce(
          (acc, val) => (val.imp && !val.isRead ? acc + 1 : acc),
          0
        );
      case "travel":
        return this.listEmails.reduce(
          (acc, val) =>
            val.tags.indexOf("travel") !== -1 && !val.isRead ? acc + 1 : acc,
          0
        );
      case "work":
        return this.listEmails.reduce(
          (acc, val) =>
            val.tags.indexOf("work") !== -1 && !val.isRead ? acc + 1 : acc,
          0
        );
      default:
        console.error(
          `No existe el tipo de mensaje "${type}" en la funcion getCountEmailsNotRead`
        );
        return 0;
    }
  }

  getCountEmails(type) {
    switch (type) {
      case "":
        return this.listEmails.length;
      case "starred":
        return this.listEmails.reduce(
          (acc, val) => (val.starred ? acc + 1 : acc),
          0
        );
      case "imp":
        return this.listEmails.reduce(
          (acc, val) => (val.imp ? acc + 1 : acc),
          0
        );
      case "travel":
        return this.listEmails.reduce(
          (acc, val) => (val.tags.indexOf("travel") !== -1 ? acc + 1 : acc),
          0
        );
      case "work":
        return this.listEmails.reduce(
          (acc, val) => (val.tags.indexOf("work") !== -1 ? acc + 1 : acc),
          0
        );
      default:
        console.error(
          `No existe el tipo de mensaje "${type}" en la funcion getCountEmailsNotRead`
        );
        return 0;
    }
  }

  getStateIsRead(id) {
    for (const email of this.listEmails) {
      if (email.id === id) {
        return email.isRead;
      }
    }
    throw "El email que se quiere consultar no existe";
  }

  getEmails(type = "") {
    switch (type) {
      case "":
        return [...this.listEmails];
      case "starred":
        return this.listEmails.filter((email) => email.starred);
      case "imp":
        return this.listEmails.filter((email) => email.imp);
      case "travel":
        return this.listEmails.filter(
          (email) => email.tags.indexOf("travel") !== -1
        );
      case "work":
        return this.listEmails.filter(
          (email) => email.tags.indexOf("work") !== -1
        );
      default:
        return [];
    }
  }

  getStateStarred(id) {
    for (const email of this.listEmails) {
      if (email.starred === true && email.id === id) {
        return true;
      }
    }
    return false;
  }

  getStateImp(id) {
    for (const email of this.listEmails) {
      if (email.imp === true && email.id === id) {
        return true;
      }
    }
    return false;
  }

  addToStarred(id) {
    const index = this.listEmails.findIndex((email) => email.id === id);
    /* Si no existe lanzamos un error */
    if (index === -1) throw `El email con id ${id}, no existe!`;
    /* TODO: Cambiamos estado del email en la BD */
    this.listEmails[index].starred = !this.listEmails[index].starred;
    return true;
  }

  addToImp(id) {
    const index = this.listEmails.findIndex((email) => email.id === id);
    /* Si no existe lanzamos un error */
    if (index === -1) throw `El email con id ${id}, no existe!`;
    /* TODO: Cambiamos estado del email en la BD */
    this.listEmails[index].imp = !this.listEmails[index].imp;
    return true;
  }

  addToRead(id) {
    const index = this.listEmails.findIndex((email) => email.id === id);
    /* Si no existe lanzamos un error */
    if (index === -1) throw `El email con id ${id}, no existe!`;
    /* TODO: Cambiamos estado del email en la BD */
    this.listEmails[index].isRead = !this.listEmails[index].isRead;
    return true;
  }
}

export default Emails;
