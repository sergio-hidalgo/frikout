import { useState, useEffect } from "react";
import { ArrowBigUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    // Initial check
    handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        behavior: "smooth",
        });
};

    return (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-secondary text-white shadow-2xl hover:bg-secondary/80 hover:scale-110 transition-all duration-300 ${
        isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
        style={{ zIndex: 99999 }}
        aria-label="Volver arriba"
        >
            <ArrowBigUp className="h-6 w-6 m-2 self-center items-center" />
        </button>
    );
}
