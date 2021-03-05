function checkboxOptionsController() {
  /* Seleccionamos root y el checboxall */
  const checkboxAll = document.querySelector("#selectorall");
  const root = document.querySelector("#root");
  const firstblockOptions = document.querySelector(".options__firstblock");

  /* Agregamos el evento click al checboxall */
  checkboxAll.addEventListener("click", function () {
    /* Cambiamos el estado de cada email en cada caso */
    changeStateEmail();
    /* Añadimos los iconos dependiendo del checked */
    changeIconsOptions();
  });

  function changeIconsOptions() {
    if (checkboxAll.checked) {
      firstblockOptions
        .querySelector("#options__edit__true")
        .classList.remove("invisible");
      firstblockOptions
        .querySelector("#options__edit__false")
        .classList.add("invisible");
    } else {
      firstblockOptions
        .querySelector("#options__edit__true")
        .classList.add("invisible");
      firstblockOptions
        .querySelector("#options__edit__false")
        .classList.remove("invisible");
    }
  }

  function changeStateEmail() {
    [...root.children[0].children].forEach((email) => {
      if (checkboxAll.checked) {
        email.children[0].children[0].checked = true;
        email.classList.add("email--selection");
        email.children[1].classList.add("start--selected");
        email.children[2].classList.add("flag--selected");
        email.querySelector(".menuIconsOver").classList.add("email--selection");
      } else {
        email.children[0].children[0].checked = false;
        email.classList.remove("email--selection");
        email.children[1].classList.remove("start--selected");
        email.children[2].classList.remove("flag--selected");
        email
          .querySelector(".menuIconsOver")
          .classList.remove("email--selection");
      }
    });
  }
}

export default checkboxOptionsController;
