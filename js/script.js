import {
  startDateInput,
  endDateInput,
  countrySelector,
  calculateIntervalButton,
  calculateHolidaysButton,
  radioButtons,
  dateHeader,
} from "./DOMObjects.js";
import {
  handleStartDateInput,
  handleEndDateInput,
  setPreset,
  handleYearSelector,
} from "./dateHandler.js";
import {
  handleCountrySelectorChange,
  handleCountrySelector,
} from "./countryHandler.js";
import { calculateInterval, calculateHolidays } from "./calculationHandler.js";
import { readTableFromStorage, sortHolidaysByDate } from "./tableHandler.js";

document.addEventListener("DOMContentLoaded", handleYearSelector);
document.addEventListener("DOMContentLoaded", handleCountrySelector);
document.addEventListener("DOMContentLoaded", readTableFromStorage);

startDateInput.addEventListener("input", handleStartDateInput);
endDateInput.addEventListener("input", handleEndDateInput);

radioButtons.forEach((elem) => {
  elem.addEventListener("change", setPreset);
});
countrySelector.addEventListener("change", handleCountrySelectorChange);
dateHeader.addEventListener("click", sortHolidaysByDate);

calculateIntervalButton.addEventListener("click", calculateInterval);
calculateHolidaysButton.addEventListener("click", calculateHolidays);
