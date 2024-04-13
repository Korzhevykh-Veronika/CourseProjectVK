import {
  startDateInput,
  endDateInput,
  calculateBy,
  daysOption
} from "./DOMObjects.js";

import {
  storeStartDateInStorage,
  storeEndDateInStorage,
  storeResultInStorage,
} from "./storage.js";

export const calculateInterval = () => {
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
        calculatedResult = Math.floor(resultCountDays * (24 * 60 * 60));
        break;
      case "numberMinutes":
        calculatedResult = Math.floor(resultCountDays * (24 * 60));
        break;
      case "numberHours":
        calculatedResult = Math.floor(resultCountDays * 24);
        break;
      case "numberDays":
        calculatedResult = resultCountDays;
        break;
    }

    storeStartDateInStorage(new Date(startDateInput.value));
    storeEndDateInStorage(new Date(endDateInput.value));
    storeResultInStorage(calculatedResult);
}