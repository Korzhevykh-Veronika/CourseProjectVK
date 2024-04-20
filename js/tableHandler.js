import { intervalTable, holidaysTable } from "./DOMObjects.js";
import {
  getStartDateFromStorage,
  getEndStorageFromStorage,
  getResultFromStorage,
} from "./storage.js";

let lastInsertedRowForIntervalTable = null;
let lastInsertedRowForCountryTable = null;

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
    addNewNoteToIntervalTable(startDates[i], endDates[i], results[i]);
  }
};

export const addNewNoteToIntervalTable = (startDate, endDate, result) => {
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

  if (!lastInsertedRowForIntervalTable) {
    intervalTable.appendChild(tr);
  } else {
    lastInsertedRowForIntervalTable.after(tr);
  }

  lastInsertedRowForIntervalTable = tr;
};

export const addNewNoteToCountryTable = (date, holidayName) => {
  const tr = document.createElement("tr");
  const tdDate = document.createElement("td");
  const tdHoliday = document.createElement("td");

  tdDate.textContent = date;
  tdHoliday.textContent = holidayName;

  tr.appendChild(tdDate);
  tr.appendChild(tdHoliday);

  if (!lastInsertedRowForCountryTable) {
    holidaysTable.appendChild(tr);
  } else {
    lastInsertedRowForCountryTable.after(tr);
  }

  lastInsertedRowForCountryTable = tr;
};

export const sortHolidaysByDate = (date) => {
  const rows = Array.from(holidaysTable.querySelectorAll("tr")).slice(1);

  rows.sort((a, b) => {
    const dateA = new Date(a.cells[0].textContent);
    const dateB = new Date(b.cells[0].textContent);
    return dateA - dateB;
  });

  const newTable = document.createElement("table");
  newTable.classList.add("col-9", "holidaysTable");

  const headerRow = document.createElement("tr");
  const headerCell1 = document.createElement("th");
  headerCell1.innerHTML = 'Date <i class="fa fa-sort"></i>';
  headerCell1.id = "dateHeader";
  const headerCell2 = document.createElement("th");
  headerCell2.textContent = "Holiday name";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  newTable.appendChild(headerRow);

  rows.forEach((row) => newTable.appendChild(row));

  holidaysTable.parentNode.replaceChild(newTable, holidaysTable);
};
