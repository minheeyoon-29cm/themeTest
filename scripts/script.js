const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  let isDarkMode = localStorage.getItem("isDarkMode") === "true";

  document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "");
  themeToggle.textContent = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : ""
    );
    themeToggle.textContent = isDarkMode
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
  });
} else {
  console.error("Theme toggle button not found.");
}
