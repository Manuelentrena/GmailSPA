import { BD } from "../../helpers/globals.js";

const counterInbox = document.querySelector("#counterInbox");
const counterStarred = document.querySelector("#counterStarred");
const counterImp = document.querySelector("#counterImp");
const counterTravel = document.querySelector("#counterTravel");
const counterWork = document.querySelector("#counterWork");

function countEmails() {
  counterInbox.textContent = BD.getCountEmailsNotRead("inbox");
  counterStarred.textContent = BD.getCountEmailsNotRead("starred");
  counterImp.textContent = BD.getCountEmailsNotRead("imp");
  counterTravel.textContent = BD.getCountEmailsNotRead("travel");
  counterWork.textContent = BD.getCountEmailsNotRead("work");
}

export default countEmails;
