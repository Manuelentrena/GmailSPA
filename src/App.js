import "./styles/main.css";
import { router } from "./router/index.routes.js";
import {
  getData,
  formatEmail,
  cleanMessageFilter,
} from "./helpers/resources.js";
import { BD, url } from "./helpers/globals.js";
import countEmails from "./controllers/menu/countEmails.controller.js";
import drawFilter from "./static/filter.js";
import controlFilter from "./controllers/filter/filterShow.controller.js";
import addIconsMenu from "./static/menu.js";
import checkboxOptionsController from "./controllers/options/checkboxOptions.controller.js";
import deleteOptionsController from "./controllers/options/deleteOptions.controller.js";
import filterEvent from "./controllers/filter/filterEvent.controller.js";
import resetOptions from "./controllers/options/resetOptions.controller.js";
import addEventBtnBack from "./controllers/options/btnBack.controller.js";
import addEventBtnDelete from "./controllers/options/btnDelete.controller.js";

/* TODO: agregamos hash a la ruta para eliminar la opcion de / */
window.location.hash = "#/";

/* Pido los datos del servidor */
getData(url).then((data) => {
  data.forEach((message) => {
    BD.addEmail(formatEmail(message));
  });

  /* Llamamos al obeservador countEmails */
  countEmails();
  /* el Router lo llamamos despues de recibir la data */
  router(window.location.hash);
});

/* mientras tanto pintamos el filtro */
const filter = document.querySelector("#filter");
filter.appendChild(drawFilter());

/* Agregamos iconos al menu */
addIconsMenu();

/* Al cambiar de ruta generamos su evento */
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});

/* Agregamos evento click a menuInbox */
const menuInbox = document.querySelector("#menuInbox");
menuInbox.addEventListener("click", function () {
  controlFilter(window.location.hash);
  cleanMessageFilter();
  resetOptions();
});

/* Evento click al selector general de options */
checkboxOptionsController();

/* Evento click al selector delete de options */
deleteOptionsController();

/* Eventos click al filtro por pestaña */
filterEvent();

/* Agregamos evento al boton de atras por cada email */
addEventBtnBack();

/* Agregamos evento al boton de delete por cada email */
addEventBtnDelete();
