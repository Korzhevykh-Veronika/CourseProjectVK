"use strict";

function openTab(event, tabName) {
  let tabcontent = document.querySelectorAll(".tabcontent");
  tabcontent.forEach((item) => {
    item.style.display = "none";
  });

  let tablinks = document.querySelectorAll(".tablinks");
  tablinks.forEach((item) => {
    item.className = item.className.replace(" active", "");
  });

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}

const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");

startDateInput.addEventListener('input', function() {
    endDateInput.disabled = false;
    endDateInput.min = this.value;
});

startDateInput.addEventListener("change", function () {
  endDateInput.min = this.value;
  if (endDateInput.value < endDateInput.min) {
    endDateInput.value = "";
  }
});

endDateInput.addEventListener("change", function () {
  startDateInput.max = this.value;
  if (startDateInput.value > startDateInput.max) {
    startDateInput.value = "";
  }
});

const countrySelector = document.getElementById("country");
const yearSelector = document.getElementById("year");

countrySelector.addEventListener('change', function() {
    if (countrySelector.value !== "") {
        yearSelector.disabled = false;        
        yearSelector.innerHTML = "";
        
        for (let year = 2001; year <= 2049; year++) {
            const option = document.createElement('option');            
            option.value = year;
            option.textContent = year;

            yearSelector.appendChild(option);
        }
    } else {
        yearSelector.disabled = true;
        yearSelector.innerHTML = "";
    }
});
