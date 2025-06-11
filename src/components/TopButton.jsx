export default function ScrollToTop() {
    const handleClick = () => {
        console.log("button clicked")
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

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
