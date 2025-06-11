import { useState, useEffect } from "react"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        // Limpieza del event listener
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            {isVisible && (
                <button
                    onClick={handleClick}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        padding: "10px",
                        background: "orange",
                        color: "white",
                        fontWeight: "bold",
                        cursor: "pointer",
                        borderRadius: "12px",
                    }}
                >
                    ↑ TOP
                </button>
            )}
        </>
    )
}
