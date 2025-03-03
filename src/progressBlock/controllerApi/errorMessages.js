import { MAX_VALUE, MIN_VALUE, STATES } from "../model/constants.js";

export const ERROR_MESSAGES = {
  "invalid state": `Стейт блока должен быть одним из вариантов ${Object.values(
    STATES
  )
    .map((state) => `"${state}"`)
    .join(", ")}`,
  "invalid value": `Значение должно быть числом от ${MIN_VALUE} до ${MAX_VALUE}`,
  "invalid id": `Неверно задан id элемента`,
};
