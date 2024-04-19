const START_DATE_STORAGE_KEY = "startDate";
const END_DATE_STORAGE_KEY = "endDate";
const RESULT_STORAGE_KEY = "result";

export const getStartDateFromStorage = () => {
  return JSON.parse(localStorage.getItem(START_DATE_STORAGE_KEY)) || [];
};

export const getEndStorageFromStorage = () => {
  return JSON.parse(localStorage.getItem(END_DATE_STORAGE_KEY)) || [];
};

export const getResultFromStorage = () => {
  return JSON.parse(localStorage.getItem(RESULT_STORAGE_KEY)) || [];
};

export const storeStartDateInStorage = (newStartDate) => {
  const startDates = getStartDateFromStorage();
  startDates.push(newStartDate);

  localStorage.setItem(START_DATE_STORAGE_KEY, JSON.stringify(startDates));
};

export const storeEndDateInStorage = (newEndDate) => {
  const endDates = getEndStorageFromStorage();
  endDates.push(newEndDate);

  localStorage.setItem(END_DATE_STORAGE_KEY, JSON.stringify(endDates));
};

export const storeResultInStorage = (newResult) => {
  const results = getResultFromStorage();
  results.push(newResult);

  localStorage.setItem(RESULT_STORAGE_KEY, JSON.stringify(results));
};
