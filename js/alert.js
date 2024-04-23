import { holidaysContainer } from "./DOMObjects.js";

export const hideAlert = () => {
  const alertBlock = document.querySelector(".alert");
  if (alertBlock) {
    alertBlock.remove();
  }
};

export const showAlert = (message, type, timeout = 5000) => {
  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.innerHTML = message;

  holidaysContainer.before(div);

  setTimeout(hideAlert, timeout);
};
