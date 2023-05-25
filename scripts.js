function openMenu() {
  var burger = document.querySelector(".burger_menu");
  burger.classList.toggle("open");
}

const form = document.querySelector(".contact-form");
const nameInput = form.querySelector('input[name="yourName"]');
const messageInput = form.querySelector("textarea");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value;
  const messageValue = messageInput.value;

  const mailtoURL = `mailto:seanpclarey@gmail.com?subject=${encodeURIComponent(
    nameValue
  )}&body=${encodeURIComponent(messageValue)}%0A%0A`;

  window.location.href = mailtoURL;
});
