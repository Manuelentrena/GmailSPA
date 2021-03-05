import { BD } from "../../helpers/globals.js";
import countEmails from "../menu/countEmails.controller.js";
import readMenuController from "../menu/readMenu.controller.js";
import notEmails from "./notEmails.controller.js";
import optionsCounter from "../options/optionsCounter.controller.js";

function subMenuEmail(submenu, route) {
  /* email.addEventListener("mouseover", function () {
      email.classList.add("prueba");
    });
    email.addEventListener("mouseout", function () {
      email.classList.remove("prueba");
    }); */
  /* Agregamos evento mouseOver a cada icono del menu de iconos al hacer over */
  [...submenu.children].forEach((svg) => {
    svg.addEventListener("click", function (event) {
      event.stopPropagation();
      /* Solo le damos funcionalidad a los iconos delete y not read al hacer click */
      if (svg.id === "iconDelete") {
        if (BD.deleteEmail(svg.dataset.email)) {
          /* Borramos email del navegador */
          svg.parentNode.parentNode.remove();
          /* LLamamos a notEmails para mostrar en pantalla si no hay mas mensajes*/
          notEmails(route);
          /* Actualizamos contador de options */
          optionsCounter(route);
        }
      }
      if (svg.id === "iconNotRead") {
        /* Cambiamos el estado del email el leido o no leido */
        if (BD.addToRead(svg.dataset.email)) {
          /* Cambiamos apariencia del email en pantalla */
          svg.parentNode.parentNode.classList.toggle("changestateread");
        }
      }
      /* Actualizamos el contador de menu */
      countEmails();
      /* Llamamos a readMenuController(route) para actualizar el menu*/
      readMenuController(route);
    });
    /* Para poner el icono en negro al hacer over */
    svg.addEventListener("mouseover", function () {
      svg.classList.add("iconover--over");
    });
    svg.addEventListener("mouseout", function () {
      svg.classList.remove("iconover--over");
    });
  });
}

export default subMenuEmail;
