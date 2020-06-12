let isDark = false;

const viewMode = document.querySelector(".button__toggle--js");
const mainHeader = document.querySelector(".header--js");

viewMode.addEventListener("click", () => {
  if (isDark == false) {
    document.documentElement.style.setProperty("--background-color", "#282c35");
    document.documentElement.style.setProperty("--text-color", "#ffa7c4");
    isDark = true;
    mainHeader.innerHTML = 'To jest przykładowy tryb ciemny';
    console.log(`zmieniono tryb na ciemny, wartość isDark = ${isDark}`);
  } else if (isDark == true) {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--text-color", "#d23669");
    isDark = false;
    mainHeader.innerHTML = 'To jest przykładowy tryb jasny';
    console.log(`zmieniono tryb na jasny, wartość isDark = ${isDark}`);
  }
});
