import { Progress } from "./src/controllerApi/api.js";
import { isValidValue } from "./src/controllerApi/utils.js";
import { STATES } from "./src/model/constants.js";

const progress = new Progress("progress", "root", "normal", 75);

const animationInput = document.getElementById("animation");
const valueInput = document.getElementById("value");
const hideInput = document.getElementById("hide");

const errorMessage = document.querySelector(".error-message");

valueInput.addEventListener("input", (e) => {
  if (!isValidValue(e.target.value)) {
    progress.updateProgressValue(Number(e.target.value));
    errorMessage.innerHTML = progress.errorMessage;
  }
});

animationInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    hideInput.disabled = true;
    valueInput.disabled = true;
    progress.updateProgressState(STATES.ANIMATED);
  } else {
    hideInput.disabled = false;
    valueInput.disabled = false;
    progress.updateProgressState(STATES.NORMAL);
  }
});

hideInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    animationInput.disabled = true;
    valueInput.disabled = true;
    progress.updateProgressState(STATES.HIDDEN);
  } else {
    animationInput.disabled = false;
    valueInput.disabled = false;
    progress.updateProgressState(STATES.NORMAL);
  }
});
