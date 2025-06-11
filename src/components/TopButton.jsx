import { useEffect } from "react"

export default function ScrollToTop() {
    console.log("button clicked")
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
                background: "red",
                color: "white",
                fontWeight: "bold",
                cursor: "pointer",
            }}
        >
            ↑ TOP
        </button>
    )
}
