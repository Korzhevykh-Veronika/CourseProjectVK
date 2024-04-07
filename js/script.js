import {
  startDateInput,
  endDateInput,
  countrySelector,
  yearSelector,
  calculateIntervalButton
} from "./DOMObjects.js";
import {
  handleStartDateInput,
  handleEndDateInput,
} from "./dateHandler.js";
import {
  handleCountrySelectorChange,
} from "./countryHandler.js";
import { calculateInterval } from "./calculateInterval.js";

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
countrySelector.addEventListener("change", handleCountrySelectorChange);

calculateIntervalButton.addEventListener("click", calculateInterval);


