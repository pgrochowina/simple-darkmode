# Tryb jasny-ciemny

## Opis
Przykładowa strona stworzona z wykorzystaniem **CSS Custom Properties** inaczej nazywanych *zmiennymi*.
Więcej o wykorzystaniu zmiennych w CSS można przeczytać [tutaj](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).

## Wykorzystane funkcje
W pliku `main.js` wykorzystano następujacy kod:
```javascript
viewMode.addEventListener("click", () => {
  if (isDark == false) {
    document.documentElement.style.setProperty("--background-color", "#282c35");
    document.documentElement.style.setProperty("--text-color", "#ffa7c4");
    isDark = true;
    mainHeader.innerHTML = 'To jest przykładowy tryb ciemny';
    console.log(`zmieniono tryb na ciemny, wartość isDark = ${isDark}`);
  } else if (isDark == true) {
    document.documentElement.style.setProperty("--background-color", "yellow");
    document.documentElement.style.setProperty("--text-color", "#d23669");
    isDark = false;
    mainHeader.innerHTML = 'To jest przykładowy tryb jasny';
    console.log(`zmieniono tryb na jasny, wartość isDark = ${isDark}`);
  }
```

## Możliwe stany 
