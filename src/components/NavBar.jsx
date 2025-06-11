import { useEffect, useState } from "react"
import menu from "../assets/menu-icon.svg"

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        // Limpiar event listener al desmontar el componente
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div
            id="navbar"
            className={`w-full h-20 fixed top-0 z-10 transition-colors duration-300 ${
                isScrolled ? "bg-[#0a2069] shadow-md" : "bg-transparent"
            }`}
        >
            <nav className="w-full h-full flex justify-between items-center py-4 px-8 md:px-16 xl:px-60 2xl:px-96 text-white">
                <p className="text-4xl">RAINBOW</p>
                <ul className="hidden md:flex gap-4 text-xl">
                    <li>
                        <a href="#sobrenosotros" className="transition-smooth">
                            Conócenos
                        </a>
                    </li>
                    <li>
                        <a href="#clases" className="transition-smooth">
                            Clases
                        </a>
                    </li>
                    <li>
                        <a href="#metodo" className="transition-smooth">
                            Metodología
                        </a>
                    </li>
                    <li>
                        <a href="#profesores" className="transition-smooth">
                            Profesores
                        </a>
                    </li>
                    <li>
                        <a href="#contacto" className="transition-smooth">
                            Contacto
                        </a>
                    </li>
                </ul>
                <img
                    src={menu.src}
                    alt="Icono para representar el menú en móviles"
                    className="w-8 flex md:hidden"
                />
            </nav>
        </div>
    )
}
