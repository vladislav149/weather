import {
  UI_ELEMENTS
} from "./consts.js";

export function saveCurrentCity(city) {
  localStorage.setItem('city', city[0].textContent)
}

export function outputSaveCity() {
  if (!localStorage.getItem('city')) {
    localStorage.setItem('city', "Vladikavkaz")
  }
  UI_ELEMENTS.INPUT_CITY.value = localStorage.getItem('city');
}