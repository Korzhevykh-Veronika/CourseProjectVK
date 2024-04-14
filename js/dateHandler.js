import {
  startDateInput,
  endDateInput,
  calculateIntervalButton,
  yearSelector
} from "./DOMObjects.js";

export const handleStartDateInput = (event) => {
  endDateInput.disabled = false;
  endDateInput.min = event.target.value;
}

export const handleEndDateInput = (event) => {
  calculateIntervalButton.disabled = false;
  startDateInput.max = event.target.value;
  if (startDateInput.value > startDateInput.max) {
    startDateInput.value = "";
  }
}

export const handleYearSelector = () => {
  for (let year = 2001; year <= 2049; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
  }
  
  yearSelector.value = new Date().getFullYear();
}

export const addWeekToDate = (date) => {
  let currentDate = new Date(date);
  currentDate.setDate(currentDate.getDate() + 7);
  return formatDate(currentDate);
}

export const addMonthToDate = (date) => {
  let currentDate = new Date(date);
  currentDate.setMonth(currentDate.getMonth() + 1);
  return formatDate(currentDate);
}

export const getCurrentDate = () => {
  let currentDate = new Date();
  return formatDate(currentDate);
}

export const setPreset = (event) => {
  calculateIntervalButton.disabled = false;
  switch(event.target.value){
    case "week":
      startDateInput.value = getCurrentDate();
      endDateInput.value = addWeekToDate(startDateInput.value);
      break;
    case "month":
      startDateInput.value = getCurrentDate();
      endDateInput.value = addMonthToDate(startDateInput.value); 
      break;
  }
};

function formatDate(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}