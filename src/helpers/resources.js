import {
  iconStart,
  iconFlag,
  iconClip,
  iconPostpone,
  iconNotRead,
  iconDelete,
  iconFile,
} from "../static/icons.js";

async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json.messages;
}

export { getData };

function formatEmail(message) {
  return {
    id: message.id,
    sender: message.sender,
    subject: message.subject,
    body: message.body,
    tags: message.tags,
    date: message.date,
    starred: false,
    imp: false,
    isRead: false,
  };
}

export { formatEmail };

function bodyEmail(email) {
  /* Quitamos pos parrafos del body */
  let body = email.body.replaceAll("<p>", "").replaceAll("</p>", "");

  return `
    
    <div class="email ${
      email.isRead ? "changestateread" : ""
    }" id="email" data-id="${email.id}">
      <label class="checkbox" id="labelselector">
        <input type="checkbox" id="selector" data-id="${email.id}">
        <span class="checkmark" id="spanselector"></span>
      </label>
      ${iconStart("20", "20", email.id)}
      ${iconFlag("20", "20", email.id)}
      <p class="autor">(sin autor)</p>
      ${createTags(email)}
      <div class="subject">${email.subject} - -- ${body}</div>
      <div class="clip">${iconClip("20", "20", email.id)}</div>
      <p class="fecha"> 20 feb </p>
      <div class="menuIconsOver" id="${email.id}">
        ${iconFile("17", "17", email.id)}
        ${iconDelete("17", "17", email.id)}
        ${iconNotRead("17", "17", email.id)}
        ${iconPostpone("17", "17", email.id)}
      </div>

    </div>
  `;
}

function createTags(email) {
  let tagHTML = "";
  email.tags.forEach((tag) => {
    if (tag === "work") {
      tagHTML += `<div class="tag tagwork">${tag.toUpperCase()}</div>`;
    }

    if (tag === "travel") {
      tagHTML += `<div class="tag tagtravel">${tag.toUpperCase()}</div>`;
    }
  });
  return tagHTML;
}

export { bodyEmail };

function cleanMessageFilter() {
  const root = document.querySelector("#root");
  /* Lo primero borramos el mensaje anterior por si hubiera */
  if (document.querySelector(".filter__message")) {
    document.querySelector(".filter__message").remove();
  }
  /* Mostramos los emails añadiendo una clase*/
  root.classList.remove("invisible");
}
export { cleanMessageFilter };

function bodyEmailOnly(email) {
  return `
  <div class="viewEmail">

    <div class="viewEmail__header">
      <div class="viewEmail__header__block1">
        <h2>${email.subject}</h2>
        <div class="viewEmail__icon">
          ${iconFlag(12, 12, "flagEmail")}
        </div>
        ${viewTags(email.tags)}
      </div>
      <div class="viewEmail__header__block2">
        <div class="viewEmail__icon">
          <img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937944/GmailSPA/print_vkors0.png">
        </div>
        <div class="viewEmail__icon">
          <img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937941/GmailSPA/open_zchdzf.png">
        </div>
      </div>
    </div>

    <div class="viewEmail__subheader">

      <div class="viewEmail__subheader__block1">
        <img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937918/GmailSPA/Avatar_uchs2e.png">
      </div>

      <div class="viewEmail__subheader__block2">
        <div class="viewEmail__subheader__data">
          <div>
            <div class="viewEmail__subheader__data__name">(sin autor)</div>
            <div class="viewEmail__subheader__data__email">${email.sender}</div>
          </div>

          <div>
            <div class="viewEmail__icon clipmargin">${iconClip(
              17,
              17,
              "clipEmail"
            )}</div>
            <div class="viewEmail__subheader__data__date">${email.date}</div>
            <div class="viewEmail__icon">${iconStart(
              15,
              15,
              "startEmail"
            )}</div>
            <div class="viewEmail__icon"><img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937947/GmailSPA/reply_ovy1ge.png"></div>
            <div class="viewEmail__icon"><img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937938/GmailSPA/more_uqgdju.png"></div>
          </div>
        </div>
        <div class="viewEmail__subheader__forme">
          <span>para mi</span>
          <div><img src="https://res.cloudinary.com/manuelentrena/image/upload/v1614937914/GmailSPA/arrow_down_n2slmt.png"></div>
        </div>
      </div>

    </div>

    <div class="viewEmail__body">${email.body}</div>

  </div>
  `;
}

export { bodyEmailOnly };

function viewTags(tags) {
  let body = "";
  tags.forEach((tag) => {
    if (tag === "work") {
      body += `<div class='tag tagwork'>${tag}</div>`;
    } else {
      body += `<div class='tag tagtravel'>${tag}</div>`;
    }
  });
  return body;
}
