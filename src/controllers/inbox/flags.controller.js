import { BD } from "../../helpers/globals.js";
import countEmails from "../menu/countEmails.controller.js";
import reviewer from "../inbox/reviewer.controller.js";

function flagController(flags) {
  /* Por cada estrella le agrego funcionalidad */
  flags.forEach((iconFlag) => {
    iconFlag.addEventListener("click", function (event) {
      event.stopPropagation();
      /* Guardo en la BD los cambio del click */
      if (BD.addToImp(iconFlag.dataset.email)) {
        /* Le agrego animacion al hacer click */
        iconFlag.classList.toggle("flag--active");
        /* Actualizamos contadores */
        countEmails();
        /* LLamamos al reviewer */
        reviewer();
      }
    });
  });

  /* Cada icono estrella lo pintamos segun su estado */
  flags.forEach((iconFlag) => {
    if (BD.getStateImp(iconFlag.dataset.email)) {
      /* Le agrego animacion al hacer click */
      iconFlag.classList.add("flag--active");
    }
  });
}

export default flagController;
