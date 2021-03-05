import { BD } from "../../helpers/globals.js";

function reviewer() {
  /* Cogemos la ruta actual */
  const route = window.location.hash.substr(2);

  if (route === "imp") {
    /* Seleccionamos todo los emails */
    const emails = [...document.querySelectorAll("#email")];
    emails.forEach((email) => {
      /* Vemos si el email NO TIENE su ESTADO IMP a TRUE */
      if (!BD.getStateImp(email.dataset.id)) {
        /* BORRAMOS ELEMENTO */
        email.remove();
      }
    });
  }

  if (route === "starred") {
    /* Seleccionamos todo los emails */
    const emails = [...document.querySelectorAll("#email")];
    emails.forEach((email) => {
      /* Vemos si el email NO TIENE su ESTADO STARRED a TRUE */
      if (!BD.getStateStarred(email.dataset.id)) {
        /* BORRAMOS ELEMENTO */
        email.remove();
      }
    });
  }
}

export default reviewer;
