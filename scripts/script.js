const themeToggle = document.getElementById("theme-toggle");
const themes = ["basic", "cute", "vivid"]; // 지원할 테마 목록
let isDarkMode = localStorage.getItem("isDarkMode") === "true"; // 다크 모드 상태
let currentTheme = localStorage.getItem("currentTheme") || "basic"; // 현재 테마

// 초기화: 저장된 테마와 다크 모드 상태 적용
document.documentElement.setAttribute("data-theme", currentTheme);
if (isDarkMode) {
  document.documentElement.setAttribute("data-dark-mode", "dark");
}
updateThemeToggleText();

// 테마 전환 함수
function setTheme(themeName) {
  currentTheme = themeName;
  document.documentElement.setAttribute("data-theme", themeName);
  localStorage.setItem("currentTheme", themeName);

  // 다크 모드 상태 유지
  if (isDarkMode) {
    document.documentElement.setAttribute("data-dark-mode", "dark");
  } else {
    document.documentElement.removeAttribute("data-dark-mode");
  }
}

// 다크 모드 전환 함수
themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  localStorage.setItem("isDarkMode", isDarkMode);

  if (isDarkMode) {
    document.documentElement.setAttribute("data-dark-mode", "dark");
  } else {
    document.documentElement.removeAttribute("data-dark-mode");
  }
  updateThemeToggleText();
});

// 버튼 텍스트 업데이트 함수
function updateThemeToggleText() {
  themeToggle.textContent = isDarkMode ? "Light" : "Dark";
}
