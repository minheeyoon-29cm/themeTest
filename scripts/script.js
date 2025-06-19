window.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".bottom-navi a");

  // 현재 파일명만 추출
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "") currentPage = "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const linkPage = href.split("/").pop();

    if (linkPage === currentPage) {
      link.classList.add("active");

      const img = link.querySelector("img");
      if (img) {
        const src = img.getAttribute("src");

        // 'ic-home.svg' → 'ic-home-fill.svg'
        if (!src.includes("-fill")) {
          const fillSrc = src.replace(/\.svg$/, "-fill.svg");
          img.setAttribute("src", fillSrc);
        }
      }
    }
  });

  // 다크모드 설정 로직
  const themeToggle = document.getElementById("theme-toggle");
  let isDarkMode = localStorage.getItem("isDarkMode") === "true";

  const applyTheme = () => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-dark-mode", "dark");
      themeToggle.innerText = "🌞";
    } else {
      document.documentElement.removeAttribute("data-dark-mode");
      themeToggle.innerText = "🌚";
    }
  };

  applyTheme();

  themeToggle.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem("isDarkMode", isDarkMode);
    applyTheme();
  });
});
