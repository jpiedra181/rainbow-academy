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
