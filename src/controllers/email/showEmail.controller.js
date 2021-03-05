function showEmail(emails) {
  emails.forEach((email) => {
    email.addEventListener("click", function () {
      if (window.location.hash === "#/") {
        window.location.hash += `${email.dataset.id}`;
      } else {
        window.location.hash += `/${email.dataset.id}`;
      }
    });
  });
}

export default showEmail;
