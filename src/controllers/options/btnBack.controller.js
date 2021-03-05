function addEventBtnBack() {
  const btnBack = document.querySelector("#arrowback");
  btnBack.addEventListener("click", function () {
    const regex = new RegExp("/\\d+$");
    const ruta = window.location.hash.replace(regex, "");
    ruta === "#"
      ? (window.location.hash = "#/")
      : (window.location.hash = ruta);
  });
}

export default addEventBtnBack;
