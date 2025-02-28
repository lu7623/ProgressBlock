export class ProgressState {
  #state;
  #value;
  constructor(state, value) {
    this.#state = state;
    this.#value = value;
  }

  setState(state) {
    this.#state = state;
  }

  setValue(value) {
    this.#value = value;
  }

  getProgressState() {
    return { state: this.#state, value: this.#value };
  }
}
