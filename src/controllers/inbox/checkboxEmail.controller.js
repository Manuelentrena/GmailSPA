function checkboxController(checkboxs) {
  checkboxs.forEach((checkbox) => {
    checkbox.addEventListener("click", function (event) {
      event.stopPropagation();
      checkbox.parentNode.parentNode.classList.toggle("email--selection");
      /* Añadimos clase selection al div del menu de iconos al hacer over */
      checkbox.parentNode.parentNode
        .querySelector(".menuIconsOver")
        .classList.toggle("email--selection");
      /* Añadimos calso selected a la estrella */
      checkbox.parentNode.nextSibling.nextSibling.classList.toggle(
        "start--selected"
      );
      /* Añadimos calso selected a la bandera */
      checkbox.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.classList.toggle(
        "flag--selected"
      );
    });
  });
}

export { checkboxController };

function labelController(labels) {
  labels.forEach((label) => {
    label.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
}

export { labelController };
