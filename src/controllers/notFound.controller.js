import views from "../views/notFound.html";

export default () => {
  const divElement = document.createElement("div");
  divElement.classList.add("center");
  divElement.innerHTML = views;

  return divElement;
};
