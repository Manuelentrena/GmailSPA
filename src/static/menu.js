import { iconInboxMenu, iconStarMenu, iconImpMenu, iconTagMenu } from "./icons";

function addIconsMenu() {
  /* Agregamos iconos al menu */
  const iconoInbox = document.querySelector("#iconInbox");
  iconoInbox.innerHTML = iconInboxMenu(17, 17);
  const iconoStar = document.querySelector("#iconoStar");
  iconoStar.innerHTML = iconStarMenu(17, 17);
  const iconoImp = document.querySelector("#iconoImp");
  iconoImp.innerHTML = iconImpMenu(17, 17);
  const iconoTravel = document.querySelector("#iconoTravel");
  iconoTravel.innerHTML = iconTagMenu(17, 17);
  const iconoWork = document.querySelector("#iconoWork");
  iconoWork.innerHTML = iconTagMenu(17, 17);
}

export default addIconsMenu;
