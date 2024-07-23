const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

const button = document.querySelector("[data-theme-toggle]");

console.log(button.innerHTML);

button.addEventListener("click", () => {
const newTheme = currentThemeSetting === "light" ? "dark" : "light";

const newCta = newTheme === "dark" ? "&#127769" : "&#9728";
button.innerHTML = newCta;  

button.setAttribute("aria-label", newCta);

document.querySelector("html").setAttribute("data-theme", newTheme);

localStorage.setItem("theme", newTheme);

currentThemeSetting = newTheme;

localStorage.getItem("theme");

localStorage.setItem("theme", newTheme);

});