import {
    startDateInput,
    endDateInput,
    calculateBy,
    intervalPer,
    daysOption
  } from "./DOMObjects.js";

export function calculateInterval() {
    let resultCalculateBy;
    let resultIntervalPer;
    let resultCountDays;
  
    let startDate = Date.parse(startDateInput.value);
    let endDate = Date.parse(endDateInput.value);
    let interval = Math.abs(startDate - endDate);
  
    switch (calculateBy.value) {
      case "numberSeconds":
        resultCalculateBy = Math.floor(interval / 1000);
        break;
      case "numberMinutes":
        resultCalculateBy = Math.floor(interval / (1000 * 60));
        break;
      case "numberHours":
        resultCalculateBy = Math.floor(interval / (1000 * 60 * 60));
        break;
      case "numberDays":
        resultCalculateBy = Math.floor(interval / (1000 * 60 * 60 * 24));
        break;
    }
  
    let diffInDays = Math.floor(interval / (1000 * 60 * 60 * 24));
  
    switch (intervalPer.value) {
      case "week":
        resultIntervalPer = Math.floor(diffInDays / 7);
        break;
      case "month":
        resultIntervalPer = Math.floor(diffInDays / 30);
        break;
    }
  
    let weekdays = 0;
    for (let i = startDate; i <= endDate; i += 24 * 60 * 60 * 1000) {
      let day = new Date(i).getDay();
      if (day >= 1 && day <= 5) {
        weekdays++;
      }
    }
  
    let weekends = diffInDays - weekdays;
  
    switch (daysOption.value) {
      case "allDays":
        resultCountDays = diffInDays;
        break;
      case "weekdays":
        resultCountDays = weekdays;
        break;
      case "weekends":
        resultCountDays = weekends;
        break;
    }
  
    console.log(resultCalculateBy);
    console.log(resultIntervalPer);
    console.log(resultCountDays);
}