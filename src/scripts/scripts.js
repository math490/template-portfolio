const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.body.removeAttribute("data-theme");
    icon.classList.replace("bi-sun-fill", "bi-moon-fill");
  } else {
    document.body.setAttribute("data-theme", "dark");
    icon.classList.replace("bi-moon-fill", "bi-sun-fill");
  }
});
