import { ProgressState } from "../model/index";
import { ProgressElement } from "../view/progressElement";
import { isValidState, isValidValue } from "./utils";

export class Progress {
  constructor(id, parent, state = "normal", value = 0) {
    this.progressState = new ProgressState(state, value);
    this.progressElement = new ProgressElement(id, parent, state, value);
  }

  updateProgressValue(value) {
    if (!isValidValue(value)) {
      return;
    }
    this.progressState.setValue(value);
    const newState = this.progressState.getProgressState();
    this.progressElement.updateView(newState);
  }

  updateProgressState(state) {
    if (!isValidState(state)) {
      return;
    }

    this.progressState.setState(state);
    const newState = this.progressState.getProgressState();
    this.progressElement.updateView(newState);
  }
}
