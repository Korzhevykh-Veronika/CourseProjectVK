import { table } from "./DOMObjects.js";
import {
  getStartDateFromStorage,
  getEndStorageFromStorage,
  getResultFromStorage,
} from "./storage.js";

let lastInsertedRow = null;

export const readTableFromStorage = () => {
  const startDates = getStartDateFromStorage();
  const endDates = getEndStorageFromStorage();
  const results = getResultFromStorage();

  const iterations = Math.min(
    10,
    startDates.length,
    endDates.length,
    results.length
  );
  for (let i = 0; i < iterations; i++) {
    addNewNoteToTable(startDates[i], endDates[i], results[i]);
  }
};

export const addNewNoteToTable = (startDate, endDate, result) => {
  const tr = document.createElement("tr");
  const tdStartDate = document.createElement("td");
  const tdEndDate = document.createElement("td");
  const tdResult = document.createElement("td");

  tdStartDate.textContent = startDate;
  tdEndDate.textContent = endDate;
  tdResult.textContent = result;

  tr.appendChild(tdStartDate);
  tr.appendChild(tdEndDate);
  tr.appendChild(tdResult);

  if (!lastInsertedRow) {
    table.appendChild(tr);
  } else {
    lastInsertedRow.after(tr);
  }

  lastInsertedRow = tr;
};
