import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoUrl from "../assets/frikout_logo.png";


interface HeaderProps {
    currentPath?: string;
}

export function Header({ currentPath = "/" }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const heroHeight = window.innerHeight * 0.8; // Approximate hero section height
        setIsScrolled(window.scrollY > heroHeight);
    };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => currentPath === href;

    return (
        <>
            {/* Announcement Banner */}
            <div className={`bg-blue-900 text-white p-2 text-center text-md font-medium transition-transform duration-300 select-none ${
                isScrolled ? '-translate-y-full' : 'translate-y-0'
            }`}>
                <span>🧝🏻‍♀️ ¡Málaga ComicCon 2025! Del 24 al 28 de Septiembre - ¡No te lo pierdas! 🧝🏻‍♂️</span>
            </div>

            {/* Header */}
            <header className={`bg-white shadow-sm sticky top-0 z-50 transition-transform duration-300 ${
                isScrolled ? '-translate-y-full' : 'translate-y-0'
            }`}>

                <nav className="max-w-screen mx-auto py-2 px-4 sm:px-10 md:px-10 lg:px-16">
                    <div className="flex justify-between items-center">
                
                        {/* Logo */}
                        <a href="/">
                            <img src={logoUrl.src} alt="Frikout" className="h-24 w-auto py-1.5" />
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden xl:block">
                            <div className="ml-10 flex items-baseline space-x-2">

                                <a href='/' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">                                    <div className="relative flex flex-col items-left overflow-hidden">
                                        <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                            isActive('/') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:-translate-y-full'
                                        }`}>INICIO</span>
                                        <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                            isActive('/') 
                                                ? 'translate-y-0' 
                                                : 'group-hover:-translate-y-full'
                                        }`}>INICIO</span>
                                    </div> 
                                </a>

                                <a href='/sitios' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">                                    <div className="relative flex flex-col items-left overflow-hidden">
                                        <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                            isActive('/sitios') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:-translate-y-full'
                                        }`}>SITIOS</span>
                                        <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                            isActive('/sitios') 
                                                ? 'translate-y-0' 
                                                : 'group-hover:-translate-y-full'
                                        }`}>SITIOS</span>
                                    </div> 
                                </a>

                                <a href='/eventos' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">                                    <div className="relative flex flex-col items-left overflow-hidden">
                                        <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                            isActive('/eventos') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:-translate-y-full'
                                        }`}>EVENTOS</span>
                                        <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                            isActive('/eventos') 
                                                ? 'translate-y-0' 
                                                : 'group-hover:-translate-y-full'
                                        }`}>EVENTOS</span>
                                    </div> 
                                </a>

                                <a href='/frikpro' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">                                    <div className="relative flex flex-col items-left overflow-hidden">
                                        <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                            isActive('/frikpro') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:-translate-y-full'
                                        }`}>FRIKPRO</span>
                                        <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                            isActive('/frikpro') 
                                                ? 'translate-y-0' 
                                                : 'group-hover:-translate-y-full'
                                        }`}>FRIKPRO</span>
                                    </div> 
                                </a>
    
                            </div>
                        </div>

                        {/* Registry navigation */}
                        <div className="hidden xl:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Button variant="ghost" size="lg" className="self-center">
                                    <span className="text-md font-normal self-center">INICIAR SESIÓN</span>
                                </Button>
                                <Button variant="default" size="lg" className="self-center">
                                    <span className="text-md font-normal self-center">REGISTRARSE</span>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div className="block xl:hidden">
                            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Menu className="h-12 w-auto rounded-full p-2 hover:bg-secondary/50 transition-colors" />
                                </SheetTrigger>
                                <SheetContent side="right" className="w-60 sm:w-80">
                                    <div className="flex flex-col items-center space-y-4 mt-8">
                                        <a href='/' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">                                    
                                            <div className="relative flex flex-col items-left overflow-hidden">
                                                <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                                    isActive('/') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:-translate-y-full'
                                                }`}>INICIO</span>
                                                <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                                    isActive('/') 
                                                        ? 'translate-y-0' 
                                                        : 'group-hover:-translate-y-full'
                                                }`}>INICIO</span>
                                            </div> 
                                        </a>

                                        <a href='/sitios' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div className="relative flex flex-col items-left overflow-hidden">
                                                <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                                    isActive('/sitios') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:-translate-y-full'
                                                }`}>SITIOS</span>
                                                <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                                    isActive('/sitios') 
                                                        ? 'translate-y-0' 
                                                        : 'group-hover:-translate-y-full'
                                                }`}>SITIOS</span>
                                            </div> 
                                        </a>

                                        <a href='/eventos' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div className="relative flex flex-col items-left overflow-hidden">
                                                <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                                    isActive('/eventos') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:-translate-y-full'
                                                }`}>EVENTOS</span>
                                                <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                                    isActive('/eventos') 
                                                        ? 'translate-y-0' 
                                                        : 'group-hover:-translate-y-full'
                                                }`}>EVENTOS</span>
                                            </div> 
                                        </a>

                                        <a href='/frikpro' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div className="relative flex flex-col items-left overflow-hidden">
                                                <span className={`text-lg font-normal transition-transform duration-300 ease-in-out ${
                                                    isActive('/frikpro') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:-translate-y-full'
                                                }`}>FRIKPRO</span>
                                                <span className={`absolute top-full text-lg font-normal text-secondary transition-transform duration-300 ease-in-out ${
                                                    isActive('/frikpro') 
                                                        ? 'translate-y-0' 
                                                        : 'group-hover:-translate-y-full'
                                                }`}>FRIKPRO</span>
                                            </div> 
                                        </a>
                                    
                                        <div className="mt-6 mb-10 bg-gray-600 h-px w-full" />
                                    
                                        <div className="px-3 space-y-3">
                                            <Button variant="ghost" size="lg" className="w-full font-normal text-sm" asChild>
                                                <a href="/api/login" >INICIAR SESIÓN</a>
                                            </Button>
                                            <Button size="lg" className="w-full font-normal text-sm" asChild>
                                                <a href="/api/login">REGISTRARSE</a>
                                            </Button>
                                            </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </nav>    
            </header>
        </>
    );
}
