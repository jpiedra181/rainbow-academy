import { useEffect } from "react"

export default function ScrollToTop() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        console.log("ScrollToTop component mounted")
    }, [])

    return (
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
            }}
        >
            ↑ TOP
        </button>
    )
}
