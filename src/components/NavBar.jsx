import { useState, useEffect } from "react"
import menu from "../assets/menu-icon.svg"
import closeBtn from "../assets/close-btn.svg"

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // Cerrar menú cuando se hace click en un enlace
    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <>
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
                            <a
                                href="#sobrenosotros"
                                className="transition-smooth"
                            >
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
                        className="w-8 flex md:hidden cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                    />
                </nav>
            </div>

            {/* Popup menú mobile */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-white bg-opacity-90 z-20 flex flex-col justify-center items-center text-black text-3xl gap-8"
                    style={{ backdropFilter: "blur(4px)" }}
                >
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        className="absolute top-6 right-8 text-4xl text-black cursor-pointer"
                    >
                        <img
                            src={closeBtn.src}
                            alt="Botón para cerrar el pop-up"
                        />
                    </button>
                    <a href="#sobrenosotros" onClick={handleLinkClick}>
                        Conócenos
                    </a>
                    <a href="#clases" onClick={handleLinkClick}>
                        Clases
                    </a>
                    <a href="#metodo" onClick={handleLinkClick}>
                        Metodología
                    </a>
                    <a href="#profesores" onClick={handleLinkClick}>
                        Profesores
                    </a>
                    <a href="#contacto" onClick={handleLinkClick}>
                        Contacto
                    </a>
                </div>
            )}
        </>
    )
}
