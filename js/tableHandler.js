import {
  intervalTable,
  holidaysTable,
  dateHeader,
  holidaysTableBody,
} from "./DOMObjects.js";
import {
  getStartDateFromStorage,
  getEndStorageFromStorage,
  getResultFromStorage,
} from "./storage.js";

let lastInsertedRowForIntervalTable = null;

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
  tdDate.setAttribute("data-date", date);
  tdHoliday.textContent = holidayName;

  tr.appendChild(tdDate);
  tr.appendChild(tdHoliday);

  holidaysTableBody.appendChild(tr);
};

export const sortHolidaysByDate = () => {
  const sortOrder = dateHeader.dataset.sortOrder;
  const rows = Array.from(document.querySelectorAll(".holidaysTable tbody tr"));

  rows.sort((a, b) => {
    const dateA = new Date(a.cells[0].dataset.date);
    const dateB = new Date(b.cells[0].dataset.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  holidaysTableBody.innerHTML = "";
  rows.forEach((row) => holidaysTableBody.appendChild(row));

  dateHeader.dataset.sortOrder = sortOrder === "asc" ? "desc" : "asc";
};
