import {
  startDateInput,
  endDateInput,
  calculateBy,
  daysOption,
  countrySelector,
  yearSelector,
  holidaysTableBody
} from "./DOMObjects.js";

import {
  storeStartDateInStorage,
  storeEndDateInStorage,
  storeResultInStorage,
} from "./storage.js";
import { api } from "./api.js";

import {
  addNewNoteToIntervalTable,
  addNewNoteToCountryTable,
} from "./tableHandler.js";
import { showAlert, hideAlert } from "./alert.js";

export const calculateInterval = () => {
  event.preventDefault();
  let calculatedResult;
  let resultCountDays;

  let startDate = Date.parse(startDateInput.value);
  let endDate = Date.parse(endDateInput.value);

  let interval = Math.abs(startDate - endDate);
  let intervalInDays = Math.floor(interval / (1000 * 60 * 60 * 24));

  let weekdays = 0;
  for (let i = startDate; i <= endDate; i += 1000 * 60 * 60 * 24) {
    let day = new Date(i).getDay();
    if (day >= 1 && day <= 5) {
      weekdays++;
    }
  }

  let weekends = intervalInDays - weekdays;

  switch (daysOption.value) {
    case "allDays":
      resultCountDays = intervalInDays;
      break;
    case "weekdays":
      resultCountDays = weekdays;
      break;
    case "weekends":
      resultCountDays = weekends;
      break;
  }

  switch (calculateBy.value) {
    case "numberSeconds":
      calculatedResult =
        Math.floor(resultCountDays * (24 * 60 * 60)) + " seconds";
      break;
    case "numberMinutes":
      calculatedResult = Math.floor(resultCountDays * (24 * 60)) + " minutes";
      break;
    case "numberHours":
      calculatedResult = Math.floor(resultCountDays * 24) + " hours";
      break;
    case "numberDays":
      calculatedResult = resultCountDays + " days";
      break;
  }

  storeStartDateInStorage(startDateInput.value);
  storeEndDateInStorage(endDateInput.value);
  storeResultInStorage(calculatedResult);

  addNewNoteToIntervalTable(
    startDateInput.value,
    endDateInput.value,
    calculatedResult
  );
};

export const searchHolidays = async () => {
  event.preventDefault();  
 
  try {
    hideAlert();

    if(holidaysTableBody.innerHTML !== ""){
      holidaysTableBody.innerHTML = "";
    }

    let {
      response: { holidays },
    } = await api.getAllHolidays(countrySelector.value, yearSelector.value);

    holidays.forEach((response) => {
      let {
        name,
        date: {
          datetime: { year, month, day },
        },
      } = response;
      let fullDate = `${year}-${month}-${day}`;

      addNewNoteToCountryTable(fullDate, name);
    });
  } catch (error) {
    showAlert(error.message, "danger");
  }
};
