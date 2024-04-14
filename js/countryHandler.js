import { countrySelector, yearSelector } from "./DOMObjects.js";

export const handleCountrySelectorChange = () => {
  if (countrySelector.value !== "") {
    yearSelector.disabled = false;
  } else {
    yearSelector.disabled = true;
    yearSelector.selectedIndex = 0;
  }
};
