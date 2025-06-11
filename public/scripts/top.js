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
