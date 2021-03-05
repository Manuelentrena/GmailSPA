import { BD } from "../../helpers/globals.js";
import countEmails from "../menu/countEmails.controller.js";

function addEventBtnDelete() {
  const btnDelete = document.querySelector("#emaildelete");
  btnDelete.addEventListener("click", function () {
    /* Extraemos id del email de la ruta */
    const regex1 = new RegExp("^#/(travel/)?(imp/)?(starred/)?(work/)?");
    const idEmail = window.location.hash.replace(regex1, "");
    /* Extremos la ruta inicial */
    const regex2 = new RegExp("/\\d+$");
    const ruta = window.location.hash.replace(regex2, "");
    /* Borramos el email por el id extraido */
    if (BD.deleteEmail(idEmail)) {
      /* Nos volvemos a la ruta de atras */
      ruta === "#"
        ? (window.location.hash = "#/")
        : (window.location.hash = ruta);
      /* Actualizamos contadores */
      countEmails();
    }
  });
}

export default addEventBtnDelete;
