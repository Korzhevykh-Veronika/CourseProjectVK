import {
  countrySelector,
  yearSelector,
  calculateHolidaysButton,
} from "./DOMObjects.js";
import { api } from "./api.js";

export const handleCountrySelectorChange = () => {
  if (countrySelector.value !== "") {
    yearSelector.disabled = false;
    calculateHolidaysButton.disabled = false;
  } else {
    yearSelector.disabled = true;
    yearSelector.selectedIndex = 0;
  }
};

export const handleCountrySelector = async () => {
  let {
    response: { countries },
  } = await api.getCountries();

  countries.forEach((country) => {
    const option = document.createElement("option");
    option.textContent = country.country_name;
    option.value = country["iso-3166"];
    countrySelector.appendChild(option);
  });
};
