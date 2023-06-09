function setTheme(themeName) {
  const themeStyle = document.getElementById("themeStyle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaAppTheme = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  themeStyle.href = `../static/css/theme_${themeName}.css`;
  localStorage.setItem("selectedTheme", themeName);
  const container = document.querySelector(".dark_matter_video");
  if (themeName === "dark") {
    container.classList.add("dark");
    metaTheme.setAttribute('content', 'rgb(0, 0, 0)');
    metaAppTheme.setAttribute('content', 'rgb(0, 0, 0)');
  } else {
    container.classList.remove("dark");
    metaTheme.setAttribute('content', 'rgb(238, 234, 229)');
    metaAppTheme.setAttribute('content', 'rgb(238, 234, 229)');
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("selectedTheme");
  const themeButton = document.getElementById("theme_btn");
  const container = document.querySelector(".dark_matter_video");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaAppTheme = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');



  if (currentTheme === "light") {
    setTheme("dark");
    themeButton.setAttribute("dark", "");
    themeButton.removeAttribute("light");
    container.classList.add("dark");
    metaTheme.setAttribute('content', 'rgb(0, 0, 0)');
    metaAppTheme.setAttribute('content', 'rgb(0, 0, 0)');

  } else {
    setTheme("light");
    themeButton.setAttribute("light", "");
    themeButton.removeAttribute("dark");
    container.classList.remove("dark");
    metaTheme.setAttribute('content', 'rgb(238, 234, 229)');
    metaAppTheme.setAttribute('content', 'rgb(238, 234, 229)');
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