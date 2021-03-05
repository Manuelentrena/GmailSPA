import { BD } from "../../helpers/globals.js";
function readMenuController(route) {
  const menuInbox = document.querySelector("#menuInbox");
  const menuStarred = document.querySelector("#menuStarred");
  const menuImp = document.querySelector("#menuImp");
  const menuTravel = document.querySelector("#menuTravel");
  const menuWork = document.querySelector("#menuWork");

  const arrayMenu = [menuInbox, menuStarred, menuImp, menuTravel, menuWork];

  arrayMenu.forEach((itemMenu) => {
    /* Borramos las propiedades */
    itemMenu.children[0].children[0].classList.remove("notreadIcon");
    itemMenu.children[0].children[1].classList.remove("notreadcolor");
    itemMenu.children[0].children[1].classList.remove("notreadbold");
    itemMenu.children[0].children[2].classList.remove("notreadcolor");
    itemMenu.children[0].children[2].classList.remove("notreadbold");
    itemMenu.children[0].children[0].classList.remove("notreadIconInbox");
    itemMenu.children[0].children[1].classList.remove("notreadcolorInbox");
    itemMenu.children[0].children[2].classList.remove("notreadcolorInbox");
    /* Ponemos en negrita las que tenga algun mensaje sin leer */
    if (BD.getCountEmailsNotRead(menuRoute(itemMenu.id)) !== 0) {
      itemMenu.children[0].children[1].classList.add("notreadcolor");
      itemMenu.children[0].children[1].classList.add("notreadbold");
    }
    /* Aplicamos al item que sea route */
    if (route.substr(2) === menuRoute(itemMenu.id)) {
      itemMenu.children[0].children[0].classList.add("notreadIcon");
      itemMenu.children[0].children[1].classList.add("notreadcolor");
      itemMenu.children[0].children[1].classList.add("notreadbold");
      itemMenu.children[0].children[2].classList.add("notreadcolor");
      itemMenu.children[0].children[2].classList.add("notreadbold");
    }

    /* En caso de ser route / */
    if (menuRoute(itemMenu.id) === "inbox" && route === "#/") {
      itemMenu.children[0].children[0].classList.add("notreadIconInbox");
      itemMenu.children[0].children[1].classList.add("notreadcolorInbox");
      itemMenu.children[0].children[2].classList.add("notreadcolorInbox");
      itemMenu.children[0].children[2].classList.add("notreadbold");
    }
  });

  function menuRoute(nameMenuItem) {
    switch (nameMenuItem) {
      case "menuInbox":
        return "inbox";
      case "menuStarred":
        return "starred";
      case "menuImp":
        return "imp";
      case "menuTravel":
        return "travel";
      case "menuWork":
        return "work";
      default:
        throw "El filtro para el menu indicado no existe";
    }
  }
}

export default readMenuController;
