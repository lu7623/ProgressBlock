import { MAX_VALUE, MIN_VALUE, STATES } from "../model/constants";

export const isValidValue = (value) => {
  return (
    typeof value === "number" &&
    !isNaN(value) &&
    value >= MIN_VALUE &&
    value <= MAX_VALUE
  );
};

export const isValidState = (state) => {
  return Object.values(STATES).includes(state);
};
