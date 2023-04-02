const toggleIcon = document.querySelector(".toggle-icon");

const themeChange = () => {
  toggleIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

toggleIcon.addEventListener("click", themeChange);
