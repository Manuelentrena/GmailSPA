import { BD } from "../../helpers/globals.js";
import countEmails from "../menu/countEmails.controller.js";
import reviewer from "./reviewer.controller.js";

function startController(starts) {
  /* Por cada estrella le agrego funcionalidad */
  starts.forEach((iconStart) => {
    iconStart.addEventListener("click", function (event) {
      event.stopPropagation();
      /* Guardo en la BD los cambio del click */
      if (BD.addToStarred(iconStart.dataset.email)) {
        /* Le agrego animacion al hacer click */
        iconStart.classList.toggle("start--active");
        /* Actualizamos contadores */
        countEmails();
        /* LLamamos al reviewer */
        reviewer();
      }
    });
  });

  /* Cada icono estrella lo pintamos segun su estado */
  starts.forEach((iconStart) => {
    if (BD.getStateStarred(iconStart.dataset.email)) {
      /* Le agrego animacion al hacer click */
      iconStart.classList.add("start--active");
    }
  });
}

export default startController;
