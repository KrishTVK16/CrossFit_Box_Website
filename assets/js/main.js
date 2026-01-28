(function(){
  const root = document.documentElement;
  const storageKey = "cf_theme";

  function applyTheme(theme){
    root.setAttribute("data-bs-theme", theme);
    const toggle = document.getElementById("themeToggle");
    if(toggle){
      toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      toggle.innerHTML = theme === "dark" ? "Light" : "Dark";
    }
  }

  function getPreferredTheme(){
    const saved = localStorage.getItem(storageKey);
    if(saved === "light" || saved === "dark") return saved;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function toggleTheme(){
    const current = root.getAttribute("data-bs-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  function initBackToTop(){
    const btn = document.getElementById("backToTop");
    if(!btn) return;

    function update(){
      btn.style.display = window.scrollY > 600 ? "inline-flex" : "none";
    }

    btn.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", update, { passive: true });
    update();
  }

  document.addEventListener("DOMContentLoaded", function(){
    applyTheme(getPreferredTheme());

    const toggle = document.getElementById("themeToggle");
    if(toggle) toggle.addEventListener("click", toggleTheme);

    initBackToTop();

    const year = document.getElementById("currentYear");
    if(year) year.textContent = "2026";
  });
})();
