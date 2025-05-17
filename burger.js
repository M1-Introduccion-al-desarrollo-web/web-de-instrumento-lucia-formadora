  const btnMenu = document.querySelector(".open-menu");
  const menu = document.querySelector(".nav-bar .frame");

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
