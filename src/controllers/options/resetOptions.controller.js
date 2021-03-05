/* Funcion que se encarga de resetear el menu Options cada vez que cambiamos de ruta */

function resetOptions() {
  /* Lo primero vamos a poner a checked FALSE el iono checkboxALL */
  const checkboxAll = document.querySelector("#selectorall");
  checkboxAll.checked = false;
  /* Despues vamos a ser invisible el menu de options__edit__true */
  const menuOptionsTrue = document.querySelector("#options__edit__true");
  menuOptionsTrue.classList.add("invisible");
  /* Despues vamos a ser visible el menu de options__edit__false */
  const menuOptionsFalse = document.querySelector("#options__edit__false");
  menuOptionsFalse.classList.remove("invisible");
  /* Cambiamos el menu fisrt y third de estado */
  const firstblock = document.querySelector(".options__firstblock");
  firstblock.classList.remove("invisible");
  const thirdblock = document.querySelector(".options__thirdblock");
  thirdblock.classList.add("invisible");
}

export default resetOptions;
