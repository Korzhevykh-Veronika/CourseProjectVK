import {
  startDateInput,
  endDateInput,
  countrySelector,
  calculateIntervalButton,
  radioButtons,
} from "./DOMObjects.js";
import {
  handleStartDateInput,
  handleEndDateInput,
  setPreset,
  handleYearSelector,
} from "./dateHandler.js";
import { handleCountrySelectorChange } from "./countryHandler.js";
import { calculateInterval } from "./calculationHandler.js";
import { readTableFromStorage } from "./tableHandler.js";

document.addEventListener("DOMContentLoaded", handleYearSelector);
document.addEventListener("DOMContentLoaded", readTableFromStorage);

startDateInput.addEventListener("input", handleStartDateInput);
endDateInput.addEventListener("input", handleEndDateInput);

radioButtons.forEach((elem) => {
  elem.addEventListener("change", setPreset);
});
countrySelector.addEventListener("change", handleCountrySelectorChange);

calculateIntervalButton.addEventListener("click", calculateInterval);
