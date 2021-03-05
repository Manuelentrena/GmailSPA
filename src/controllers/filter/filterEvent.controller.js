/* Creamos eventos clicks a las pestañas del filtro (Principal, Social, Promociones,Notificaciones,Foros)*/
function filterEvent() {
  const filter = document.querySelectorAll("#filter");
  const root = document.querySelector("#root");
  const inboxEmpty = document.querySelector("#inboxEmpty");

  [...filter[0].children[0].children].forEach((filtro) => {
    filtro.addEventListener("click", function () {
      /* Lo primero borramos el mensaje anterior por si hubiera */
      if (document.querySelector(".filter__message")) {
        document.querySelector(".filter__message").remove();
      }
      /* Despues trataos los emails */
      if (filtro.id === "Principal") {
        /* Mostramos los emails añadiendo una clase*/
        root.classList.remove("invisible");
      } else {
        /* Ocultamos los emails añadiendo una clase*/
        root.classList.add("invisible");
        /* Mostramos mensaje por cada filtro */
        inboxEmpty.innerHTML = createMessageFilter(filtro.id);
      }
    });
  });
}

function createMessageFilter(typeFilter) {
  return `
    <div class="filter__message">
      <div>
        <div>Tu pestaña ${typeFilter} está vacía.</div>
        <p>Aquí se muestran los correos de ${typeFilter}.</p>
        <p>Si quieres añadir o eliminar pestañas, haz clic en la <span>configuración de Recibidos.</span></p>
      </div>
    </div>
  `;
}

export default filterEvent;
