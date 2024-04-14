import {
  startDateInput,
  endDateInput,
  calculateBy,
  daysOption,
  trHeaderString
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

    storeStartDateInStorage(startDateInput.value);
    storeEndDateInStorage(endDateInput.value);
    storeResultInStorage(calculatedResult);

    addNewNote(startDateInput.value, endDateInput.value, calculatedResult);
}

const addNewNote = (startDate, endDate, result) => {
  const tr = document.createElement("tr");
  const tdStartDate = document.createElement("td");
  const tdEndDate = document.createElement("td");
  const tdResult = document.createElement("td");

  tdStartDate.textContent = startDate;
  tdEndDate.textContent = endDate;
  tdResult.textContent = result;

  trHeaderString.after(tr);
  tr.append(tdStartDate);
  tr.append(tdEndDate);
  tr.append(tdResult);
};