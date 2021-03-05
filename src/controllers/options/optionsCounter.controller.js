import { BD } from "../../helpers/globals.js";

function optionsCounter(route) {
  const optionsCounter = document.querySelector(".options__counter");

  if (BD.getCountEmails(route.substr(2)) === 0) {
    optionsCounter.innerHTML = "";
  } else {
    optionsCounter.innerHTML = `1 - ${BD.getCountEmails(
      route.substr(2)
    )} de ${BD.getCountEmails(route.substr(2))}`;
  }
}

export default optionsCounter;
