// Esta parte es para implementar el botón que te permite subir a la parte superior de la página
const scrollTOP = document.querySelector(".top")
window.addEventListener("scroll", () => {
    if (!scrollTOP) return
    if (window.scrollY > 50) {
        scrollTOP.classList.add("block")
        scrollTOP.classList.remove("hidden")
    } else {
        scrollTOP.classList.remove("block")
        scrollTOP.classList.add("hidden")
    }
})
scrollTOP?.addEventListener("click", (e) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})

// Esta parte es para cambiar el estilo de la barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
    const navBar = document.getElementById("navbar")
    if (!navBar) return
    if (window.scrollY > 50) {
        navBar.classList.add("bg-[#0a2069]", "shadow-md", "text-white")
        navBar.classList.remove("bg-transparent", "text-white")
    } else {
        navBar.classList.remove("bg-[#0a2069]", "shadow-md", "text-white")
        navBar.classList.add("bg-transparent", "text-white")
    }
})
