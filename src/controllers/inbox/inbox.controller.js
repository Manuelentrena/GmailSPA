import { BD } from "../../helpers/globals.js";
import { bodyEmail } from "../../helpers/resources.js";
import startController from "./starts.controller.js";
import flagController from "./flags.controller.js";
import {
  checkboxController,
  labelController,
} from "./checkboxEmail.controller.js";
import subMenuEmail from "./subMenuEmail.controller.js";
import optionsCounter from "../options/optionsCounter.controller.js";
import showEmail from "../email/showEmail.controller.js";

export default (route) => {
  const divElement = document.createElement("div");

  BD.getEmails(route.substr(2)).forEach((email) => {
    divElement.innerHTML += bodyEmail(email);
  });

  /* Agregamos evento al submenu de cada email (DELETE, ISREAD) */
  const submenus = [...divElement.querySelectorAll(".menuIconsOver")];
  submenus.forEach((submenu) => {
    subMenuEmail(submenu, route);
  });

  /* Selecciono todas las estrellas */
  const starts = [...divElement.querySelectorAll("#start")];
  /* Creo evento click y dibujo estrellas ya seleccionadas */
  startController(starts);

  /* Selecciono todas las banderas */
  const flags = [...divElement.querySelectorAll("#flag")];
  /* Creo evento click y dibujo estrellas ya seleccionadas */
  flagController(flags);

  /* Selecciono todos los checkbox */
  const checkboxs = [...divElement.querySelectorAll("#selector")];
  checkboxController(checkboxs);

  /* Selecciono todos los lables */
  const labels = [...divElement.querySelectorAll("#labelselector")];
  labelController(labels);

  /* Actualizo contador de options */
  optionsCounter(route);

  /* Agrego evento click a cada email */
  const emails = [...divElement.querySelectorAll("#email")];
  showEmail(emails);

  return divElement;
};
