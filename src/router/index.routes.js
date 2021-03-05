import { pages } from "../controllers/_index.js";
import controlFilter from "../controllers/filter/filterShow.controller.js";
import readMenuController from "../controllers/menu/readMenu.controller.js";
import notEmails from "../controllers/inbox/notEmails.controller.js";
import resetOptions from "../controllers/options/resetOptions.controller.js";
import { cleanMessageFilter } from "../helpers/resources.js";
import showMenuByEmail from "../controllers/email/showMenuByEmail.controller.js";

let root = document.querySelector("#root");

const router = (route) => {
  let routedinamic = new RegExp("#(/imp)?(/starred)?(/travel)?(/work)?/\\d+");
  let routestatic = new RegExp("^#/(imp)?(starred)?(travel)?(work)?$");
  root.innerHTML = "";

  /* Rutas Estáticas */
  if (routestatic.test(route)) {
    controlFilter(route);
    readMenuController(route);
    resetOptions();
    cleanMessageFilter();
    root.appendChild(pages.Inbox(route));
    return notEmails(route);
  } else if (routedinamic.test(route)) {
    controlFilter(route);
    showMenuByEmail();
  } else {
    return root.appendChild(pages.notFound());
  }
};
export { router };
