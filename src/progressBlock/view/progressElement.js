import { STATES } from "../model/constants";

export class ProgressElement {
  constructor(id, parent, state, value) {
    this.block = this.createProgressBlock(id, parent, state, value);
  }

  createProgressBlock(id, parent, state, value) {
    const root = document.getElementById(parent) || document.body;
    const block = document.createElement("div");
    block.id = id;
    block.classList.add("circle");
    block.classList.add(state);
    root.append(block);
    document.documentElement.style.setProperty("--value", `${value}%`);
    return block;
  }

  updateView(progressState) {
    for (let prevState in STATES) {
      this.block.classList.remove(STATES[prevState]);
    }

    this.block.classList.add(progressState.state);
    document.documentElement.style.setProperty(
      "--value",
      `${progressState.value}%`
    );
  }
}
