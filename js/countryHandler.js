import {
    countrySelector,
    yearSelector,
  } from "./DOMObjects.js";

export function handleCountrySelectorChange() {
    if (countrySelector.value !== "") {
      yearSelector.disabled = false;
    } else {
      yearSelector.disabled = true;
      yearSelector.selectedIndex = 0;
    }
  }