let isDark = false;

const viewMode = document.querySelector(".button__toggle--js");
const mainHeader = document.querySelector(".header--js");

viewMode.addEventListener("click", () => {
  if (isDark == false) {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
    isDark = true;
    console.log(`zmieniono tryb na ciemny, wartość isDark = ${isDark}`);
  } else if (isDark == true) {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    isDark = false;
    console.log(`zmieniono tryb na jasny, wartość isDark = ${isDark}`);
  }
});
