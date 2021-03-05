import countEmails from "../menu/countEmails.controller.js";
import optionsCounter from "./optionsCounter.controller.js";
import notEmails from "../inbox/notEmails.controller.js";
import { BD } from "../../helpers/globals.js";
function deleteOptionsController() {
  const iconDeleteOptions = document.querySelector("#options__edit__true");

  iconDeleteOptions.addEventListener("click", function () {
    /* Seleccionamos todos los cheackos de los emails */
    const checkboxSelected = document
      .querySelector("#root")
      .querySelectorAll("input");
    /* Conprobamos por cada uno si esta checked */
    [...checkboxSelected].forEach((checkbox) => {
      /* En caso de estar seleccionado el email lo eliminamos */
      if (checkbox.checked) {
        /* Lo eliminados de la BD */
        BD.deleteEmail(checkbox.dataset.id);
        /* Lo eliminados del navegador */
        checkbox.parentElement.parentElement.remove();
      }
    });
    /* Actualizamos contador del menu */
    countEmails();
    /* Actualizamos el menu contador de options */
    optionsCounter(window.location.hash);
    /* Llamamos a el controlador de mensajes si el root esta vacio */
    notEmails(window.location.hash);
  });
}

export default deleteOptionsController;
