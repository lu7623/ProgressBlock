import { ProgressState } from "../model/index.js";
import { ProgressElement } from "../view/progressElement.js";
import { ERROR_MESSAGES } from "./errorMessages.js";
import { isValidState, isValidValue } from "./utils.js";

export class Progress {
  constructor(id, parent, state = "normal", value = 0) {
    this.progressState = new ProgressState(state, value);
    this.progressElement = new ProgressElement(id, parent, state, value);
  }

  updateProgressValue(value) {
    if (!isValidValue(value)) {
      this.errorMessage = ERROR_MESSAGES["invalid value"];
      return;
    }
    this.progressState.setValue(value);
    const newState = this.progressState.getProgressState();
    this.progressElement.updateView(newState);
    if (this.errorMessage) this.errorMessage = "";
  }

  updateProgressState(state) {
    if (!isValidState(state)) {
      this.errorMessage = ERROR_MESSAGES["invalid state"];
      return;
    }

    this.progressState.setState(state);
    const newState = this.progressState.getProgressState();
    this.progressElement.updateView(newState);
    if (this.errorMessage) this.errorMessage = "";
  }
}
