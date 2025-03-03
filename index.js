import { Progress } from "./src/progressBlock";
import { isValidValue } from "./src/progressBlock/controllerApi/utils";
import { STATES } from "./src/progressBlock/model/constants";

const progress = new Progress("progress", "root", "normal", 75);

const animationInput = document.getElementById("animation");
const valueInput = document.getElementById("value");
const hideInput = document.getElementById("hide");

const errorMessage = document.querySelector(".error-message");

valueInput.addEventListener("input", (e) => {
  if (!isValidValue(Number(e.target.value))) {
    errorMessage.classList.remove("hidden");
    valueInput.classList.add("error");
  } else {
    progress.updateProgressValue(Number(e.target.value));
    errorMessage.classList.add("hidden");
    valueInput.classList.remove("error");
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
