import {
  iconTray,
  iconSocial,
  iconPromotion,
  iconNotifications,
  iconForums,
} from "../static/icons.js";

function drawFilter() {
  /* Añadir 5 divs para las 5 pestañas */
  const divFilter = document.createElement("div");
  for (let i = 0; i < 5; i++) {
    const divTag = document.createElement("div");
    divTag.classList.add("filter__" + typeIconFilter(i));
    divTag.id = typeIconFilter(i);
    divTag.innerHTML += bodyTray(i);
    divFilter.appendChild(divTag);
  }

  /* Agregamos evento click */
  [...divFilter.childNodes].forEach((filtro, index) => {
    filtro.addEventListener("click", function () {
      /* Revisamos a los hermanos y le borramos la clase active */
      [...filtro.parentElement.children].forEach((hermano) => {
        /* La clase active siempre es la segunda */
        if (hermano.classList[1]) {
          hermano.classList.remove(hermano.classList[1]);
        }
      });
      /* Al final pintamos nuestro filtro de color */
      filtro.classList.add("filter__" + typeIconFilter(index) + "--active");
    });
  });

  return divFilter;
}

export default drawFilter;

function bodyTray(i) {
  switch (i) {
    case 0:
      return `
        ${iconTray(20, 20, typeIconFilter(i))}
        <p>${typeIconFilter(i)}</p>
      `;
    case 1:
      return `
        ${iconSocial(18, 18, typeIconFilter(i))}
        <p>${typeIconFilter(i)}</p>
      `;
    case 2:
      return `
        ${iconPromotion(17, 17, typeIconFilter(i))}
        <p>${typeIconFilter(i)}</p>
      `;
    case 3:
      return `
        ${iconNotifications(17, 17, typeIconFilter(i))}
        <p>${typeIconFilter(i)}</p>
      `;
    case 4:
      return `
        ${iconForums(17, 17, typeIconFilter(i))}
        <p>${typeIconFilter(i)}</p>
      `;
    default:
      throw "El filtro indicado no existe";
  }
}

function typeIconFilter(i) {
  switch (i) {
    case 0:
      return "Principal";
    case 1:
      return "Social";
    case 2:
      return "Promociones";
    case 3:
      return "Notificaciones";
    case 4:
      return "Foros";
    default:
      throw "El filtro indicado no existe";
  }
}
