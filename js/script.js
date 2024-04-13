import {
  startDateInput,
  endDateInput,
  countrySelector,
  yearSelector,
  calculateIntervalButton,
  weekPreset,
  monthPreset,
  radioButtons
} from "./DOMObjects.js";
import {
  handleStartDateInput,
  handleEndDateInput,
  addWeekToDate,
  addMonthToDate,
  getCurrentDate,
  setPreset
} from "./dateHandler.js";
import {
  handleCountrySelectorChange,
} from "./countryHandler.js";
import { calculateInterval } from "./calculationHandler.js";

document.addEventListener("DOMContentLoaded", function () {
  for (let year = 2001; year <= 2049; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
  }

  yearSelector.value = new Date().getFullYear();
});

startDateInput.addEventListener("input", handleStartDateInput);
endDateInput.addEventListener("input", handleEndDateInput);
radioButtons.forEach((elem) => {
  elem.addEventListener("change", setPreset)
});

countrySelector.addEventListener("change", handleCountrySelectorChange);

calculateIntervalButton.addEventListener("click", calculateInterval);