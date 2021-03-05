function controlFilter(route) {
  const filter = document.querySelector("#filter");

  if (route === "#/") {
    /* Borramos filtros activos hermanos */
    [...filter.children[0].children].forEach((hermano) => {
      hermano.classList.remove(hermano.classList[1]);
    });
    /* Mostramos filtro */
    filter.classList.remove("filter--hidden");
    /* Activamos por defecto el filtro Principal */
    filter.children[0].children[0].classList.add("filter__Principal--active");
  } else {
    filter.classList.add("filter--hidden");
  }
}

export default controlFilter;
