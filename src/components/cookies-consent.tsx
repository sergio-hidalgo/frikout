import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

const COOKIES_CONSENT_KEY = "frikout-cookies-consent";

export function CookiesConsent() {
    const [showConsent, setShowConsent] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem(COOKIES_CONSENT_KEY);
        if (!consent) {
        setShowConsent(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIES_CONSENT_KEY, "accepted");
        setShowConsent(false);
        setIsOpen(false);
    };

    const handleReject = () => {
        localStorage.setItem(COOKIES_CONSENT_KEY, "rejected");
        setShowConsent(false);
        setIsOpen(false);
    };

    const handleOpenDialog = () => {
        setIsOpen(true);
    };

    const handleCloseDialog = () => {
        setIsOpen(false);
    };

    if (!showConsent) return null;

    return (
        <>
        {/* Fixed Cookie Icon */}
        <button
            onClick={handleOpenDialog}
            className="fixed bottom-6 left-6 p-4 rounded-full bg-secondary text-white shadow-2xl hover:bg-chart-6 hover:scale-110 transition-all duration-300"
            style={{ zIndex: 9998 }}
            aria-label="Política de cookies"
        >
            <Cookie className="h-6 w-6 self-center items-center" />
        </button> 

        {/* Cookies Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="w-xs md:w-xl xl:w-xl mx-auto rounded-xl">
                <DialogHeader>
                    <div className="flex items-center justify-between">
                    <DialogTitle className="text-2xl font-bold text-primary">
                    Política de Cookies <span className="ml-3">🍪 🍪 🍪</span>
                    </DialogTitle>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleCloseDialog}
                        aria-label="Cerrar"
                    >
                        <X className="h-4 w-4" />
                    </Button>
                    </div>
                </DialogHeader>
                
                <DialogDescription className="text-base text-gray-600 space-y-4">
                    <p>
                    Utilizamos cookies para mejorar tu experiencia en Frikout. Estas cookies nos ayudan a:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                    <li>Recordar tus preferencias y configuración</li>
                    <li>Mantener tu sesión iniciada</li>
                    <li>Analizar el uso de la web para mejorar nuestros servicios</li>
                    <li>Personalizar contenido y anuncios</li>
                    </ul>
                    <p>
                    Puedes elegir aceptar todas las cookies o rechazarlas. Si las rechazas, 
                    algunas funcionalidades pueden verse limitadas.
                    </p>
                </DialogDescription>

                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                    <Button
                    onClick={handleAccept}
                    size={"lg"}
                    className="flex-1 py-3 xl:py-0"
                    >
                    Aceptar Cookies
                    </Button>
                    <Button
                    onClick={handleReject}
                    variant="outline"
                    size={"lg"}
                    className="border-red-500 text-red-600 hover:bg-red-50 flex-1 py-3 xl:py-0"
                    >
                    Rechazar
                    </Button>
                </div>

                <p className="text-xs text-gray-500 mt-4 text-center">
                    Puedes cambiar tus preferencias en cualquier momento desde la configuración.
                </p>
            </DialogContent>
        </Dialog>
        </>
    );
}