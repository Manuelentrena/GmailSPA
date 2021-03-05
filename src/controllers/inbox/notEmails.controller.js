import { BD } from "../../helpers/globals.js";

function notEmails(route) {
  if (BD.getCountEmails(route.substr(2)) === 0) {
    const root = document.querySelector("#root");

    switch (route) {
      case "#/":
        {
          root.innerHTML =
            "<div class='notemails'> No hay mensajes en la bandeja de entrada.</div>";
        }
        break;
      case "#/starred":
        {
          root.innerHTML =
            "<div class='notemails'> No hay mensajes destacados. Las estrellas te permiten dar a los mensajes un estado especial. Haz clic en la estrella al lado de cualquier mensaje o conversación.</div>";
        }
        break;
      case "#/imp":
        {
          root.innerHTML =
            "<div class='notemails'> No hay mensajes importantes. Las banderas te permiten dar a los mensajes un estado especial. Haz clic en la bandera al lado de cualquier mensaje o conversación.</div>";
        }
        break;
      case "#/travel":
        {
          root.innerHTML =
            "<div class='notemails'> No hay conversaciones con esta etiqueta.</div>";
        }
        break;
      case "#/work":
        {
          root.innerHTML =
            "<div class='notemails'> No hay conversaciones con esta etiqueta.</div>";
        }
        break;
      default: {
      }
    }
  }
}

export default notEmails;
