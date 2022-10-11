const navbarMenu = document.getElementById("menu"); //Grabs the menu ID
const burgerMenu = document.getElementById("burger"); //Grabs the burger ID
const headerMenu = document.getElementById("header"); //Grabs the header ID

// If statement to open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("is-active"); //switches from burger to navbar if clicked
    navbarMenu.classList.toggle("is-active");
  });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("is-active"); //removes the x navbari if clicked
    navbarMenu.classList.remove("is-active");
  });
});
