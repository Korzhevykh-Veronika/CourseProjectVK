import {
  startDateInput,
  endDateInput,
  calculateIntervalButton
} from "./DOMObjects.js";

export function handleStartDateInput(event) {
  endDateInput.disabled = false;
  endDateInput.min = event.target.value;
}

export function handleEndDateInput(event) {
  calculateIntervalButton.disabled = false;
  startDateInput.max = event.target.value;
  if (startDateInput.value > startDateInput.max) {
    startDateInput.value = "";
  }
}