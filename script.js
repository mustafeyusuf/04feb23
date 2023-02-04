const showNav = document.querySelector(".showNav");

const closeNav = document.querySelector(".closeNav");

const nav = document.querySelector(".nav");

showNav.addEventListener("click", (e) => {
	e.preventDefault();
	nav.classList.toggle("hideNav")
})

closeNav.addEventListener("click", (e) => {
	e.preventDefault();
	nav.classList.toggle("hideNav")
})
