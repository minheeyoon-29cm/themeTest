const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = localStorage.getItem("isDarkMode") === "true";

if (isDarkMode) {
  document.documentElement.setAttribute("data-dark-mode", "dark");
  themeToggle.innerText = "🌞";
} else {
  themeToggle.innerText = "🌚";
}

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);

  if (isDarkMode) {
    document.documentElement.setAttribute("data-dark-mode", "dark");
    themeToggle.innerText = "🌞";
  } else {
    document.documentElement.removeAttribute("data-dark-mode");
    themeToggle.innerText = "🌚";
  }
});