import { STATES } from "../model/constants.js";

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
    block.innerText = value;
    root.append(block);
    return block;
  }

  updateView(progressState) {
    for (let prevState in STATES) {
      this.block.classList.remove(STATES[prevState]);
    }

    this.block.classList.add(progressState.state);
    this.block.innerText = progressState.value;
  }
}
