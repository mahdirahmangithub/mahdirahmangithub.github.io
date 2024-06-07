function setTheme(themeName) {
  const themeStyle = document.getElementById("themeStyle");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaAppTheme = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  themeStyle.href = `../static/css/theme_${themeName}.css`;
  localStorage.setItem("selectedTheme", themeName);
  const container = document.querySelector(".dark_matter_video");
  const imgElement = document.querySelector(".img_container.happeo_img img");

  if (themeName === "dark") {
    container.classList.add("dark");
    metaTheme.setAttribute("content", "rgb(0, 0, 0)");
    metaAppTheme.setAttribute("content", "rgb(0, 0, 0)");
    imgElement.src = "static/img/happeo_mobile_app_dark.png";
  } else {
    container.classList.remove("dark");
    metaTheme.setAttribute("content", "rgb(238, 234, 229)");
    metaAppTheme.setAttribute("content", "rgb(238, 234, 229)");
    imgElement.src = "static/img/happeo_mobile_app.png";
  }
}

function toggleTheme() {
  const currentTheme = localStorage.getItem("selectedTheme");
  const themeButton = document.getElementById("theme_btn");
  const container = document.querySelector(".dark_matter_video");
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaAppTheme = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
  const imgElement = document.querySelector(".img_container.happeo_img img");

  if (currentTheme === "light") {
    setTheme("dark");
    themeButton.setAttribute("dark", "");
    themeButton.removeAttribute("light");
    container.classList.add("dark");
    metaTheme.setAttribute("content", "rgb(0, 0, 0)");
    metaAppTheme.setAttribute("content", "rgb(0, 0, 0)");
    imgElement.src = "static/img/happeo_mobile_app_dark.png";
  } else {
    setTheme("light");
    themeButton.setAttribute("light", "");
    themeButton.removeAttribute("dark");
    container.classList.remove("dark");
    metaTheme.setAttribute("content", "rgb(238, 234, 229)");
    metaAppTheme.setAttribute("content", "rgb(238, 234, 229)");
    imgElement.src = "static/img/happeo_mobile_app.png";
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
