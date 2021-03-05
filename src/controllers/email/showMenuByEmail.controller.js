import { BD } from "../../helpers/globals.js";
import { bodyEmailOnly } from "../../helpers/resources.js";

function showMenuByEmail() {
  const firstblock = document.querySelector(".options__firstblock");
  firstblock.classList.add("invisible");
  const thirdblock = document.querySelector(".options__thirdblock");
  thirdblock.classList.remove("invisible");

  /* Mostramos el contenido del mensaje */
  const root = document.querySelector("#root");
  /* Extraemos id del email de la ruta */
  const regex1 = new RegExp("^#/(travel/)?(imp/)?(starred/)?(work/)?");
  const id = window.location.hash.replace(regex1, "");
  /* Cogemos los datos de la BD con el id */
  const email = BD.getEmail(id);
  root.innerHTML = bodyEmailOnly(email);
}

export default showMenuByEmail;
