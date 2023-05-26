function setTheme(themeName) {
  const themeStyle = document.getElementById("themeStyle");
  themeStyle.href = `../static/css/theme_${themeName}.css`;
  localStorage.setItem("selectedTheme", themeName);
  const container = document.querySelector(".dark_matter_video");
  if (themeName === "dark") {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("selectedTheme");
  const themeButton = document.getElementById("theme_btn");
  const container = document.querySelector(".dark_matter_video");

  if (currentTheme === "light") {
    setTheme("dark");
    themeButton.setAttribute("dark", "");
    themeButton.removeAttribute("light");
    container.classList.add("dark");
  } else {
    setTheme("light");
    themeButton.setAttribute("light", "");
    themeButton.removeAttribute("dark");
    container.classList.remove("dark");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const selectedTheme = localStorage.getItem("selectedTheme");
  const themeButton = document.getElementById("theme_btn");

  if (selectedTheme) {
    setTheme(selectedTheme);
    themeButton.setAttribute(selectedTheme, "");
 
   } else {
    setTheme("light");
    themeButton.setAttribute("light", "");
   }
});