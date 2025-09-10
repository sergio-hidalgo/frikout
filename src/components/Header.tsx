import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Castle, Crown, Menu, Milestone, Swords } from "lucide-react";
import logoUrl from "../assets/logo_frikout.png";


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
                                <a href='/' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                    <div>
                                        <Castle className={`h-6 w-6 ${
                                            isActive('/') 
                                                ? 'text-secondary' 
                                                : 'group-hover:text-secondary'
                                        }`} />
                                    </div>
                                    <div className="flex flex-col items-left">
                                        <span className={`text-md font-bold ${
                                            isActive('/') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:text-secondary'
                                        }`}>Inicio</span>
                                        <span className={`text-sm font-medium ${
                                            isActive('/') 
                                                ? 'text-secondary/80' 
                                                : 'text-gray-500 group-hover:text-secondary'
                                        }`}>Érase una vez...</span>
                                    </div>
                                    
                                </a>

                                <a href='/lugares' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                    <div>
                                        <Milestone className={`h-6 w-6 ${
                                            isActive('/lugares') 
                                                ? 'text-secondary' 
                                                : 'group-hover:text-secondary'
                                        }`} />
                                    </div>
                                    <div className="flex flex-col items-left">
                                        <span className={`text-md font-bold ${
                                            isActive('/lugares') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:text-secondary'
                                        }`}>Lugares</span>
                                        <span className={`text-sm font-medium ${
                                            isActive('/lugares') 
                                                ? 'text-secondary/80' 
                                                : 'text-gray-500 group-hover:text-secondary'
                                        }`}>Para comprar</span>
                                    </div>
                                    
                                </a>

                                <a href='/eventos' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                    <div>
                                        <Swords className={`h-6 w-6 ${
                                            isActive('/eventos') 
                                                ? 'text-secondary' 
                                                : 'group-hover:text-secondary'
                                        }`} />
                                    </div>
                                    <div className="flex flex-col items-left">
                                        <span className={`text-md font-bold ${
                                            isActive('/eventos') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:text-secondary'
                                        }`}>Eventos</span>
                                        <span className={`text-sm font-medium ${
                                            isActive('/eventos') 
                                                ? 'text-secondary/80' 
                                                : 'text-gray-500 group-hover:text-secondary'
                                        }`}>Para disfrutar</span>
                                    </div>
                                    
                                </a>

                                <a href='/frikpro' className="flex flex-row gap-2 place-items-center px-4 py-3 rounded-full transition-colors group">
                                    <div>
                                        <Crown className={`h-6 w-6 ${
                                            isActive('/frikpro') 
                                                ? 'text-secondary' 
                                                : 'group-hover:text-secondary'
                                        }`} />
                                    </div>
                                    <div className="flex flex-col items-left">
                                        <span className={`text-md font-bold ${
                                            isActive('/frikpro') 
                                                ? 'text-secondary' 
                                                : 'text-gray-700 group-hover:text-secondary'
                                        }`}>frik<span className="text-md font-black text-secondary">pro</span></span>
                                        <span className={`text-sm font-medium ${
                                            isActive('/frikpro') 
                                                ? 'text-secondary/80' 
                                                : 'text-gray-500 group-hover:text-secondary'
                                        }`}>Hazte Pro</span>
                                    </div>
                                    
                                </a>
    
                            </div>
                        </div>

                        {/* Registry navigation */}
                        <div className="hidden xl:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Button variant="ghost" size="lg" className="self-center">
                                    <span className="text-md self-center">Iniciar sesión</span>
                                </Button>
                                <Button variant="default" size="lg" className="self-center">
                                    <span className="text-md self-center">Registrarse</span>
                                </Button>
                            </div>
                        </div>

                        {/* Mobile menu */}
                        <div className="block xl:hidden">
                            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                                <SheetTrigger asChild>
                                    <Menu className="h-12 w-auto rounded-full p-2 hover:bg-secondary/50 transition-colors" />
                                </SheetTrigger>
                                <SheetContent side="right" className="w-80 sm:w-100">
                                    <div className="flex flex-col space-y-4 mt-8">
                                        <a href='/' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div>
                                                <Castle className={`h-8 w-8 ${
                                                    isActive('/') 
                                                        ? 'text-secondary' 
                                                        : 'group-hover:text-secondary'
                                                }`} />
                                            </div>
                                            <div className="flex flex-col items-left">
                                                <span className={`text-xl font-bold ${
                                                    isActive('/') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:text-secondary'
                                                }`}>Inicio</span>
                                                <span className={`text-sm font-medium ${
                                                    isActive('/') 
                                                        ? 'text-secondary/80' 
                                                        : 'text-gray-500 group-hover:text-secondary'
                                                }`}>Érase una vez...</span>
                                            </div>
                                            
                                        </a>

                                        <a href='/lugares' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div>
                                                <Milestone className={`h-8 w-8 ${
                                                    isActive('/lugares') 
                                                        ? 'text-secondary' 
                                                        : 'group-hover:text-secondary'
                                                }`} />
                                            </div>
                                            <div className="flex flex-col items-left">
                                                <span className={`text-xl font-bold ${
                                                    isActive('/lugares') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:text-secondary'
                                                }`}>Lugares</span>
                                                <span className={`text-sm font-medium ${
                                                    isActive('/lugares') 
                                                        ? 'text-secondary/80' 
                                                        : 'text-gray-500 group-hover:text-secondary'
                                                }`}>Para comprar</span>
                                            </div>
                                            
                                        </a>

                                        <a href='/eventos' className="flex flex-row gap-2 place-items-center px-3 py-2 rounded-full transition-colors group">
                                            <div>
                                                <Swords className={`h-8 w-8 ${
                                                    isActive('/eventos') 
                                                        ? 'text-secondary' 
                                                        : 'group-hover:text-secondary'
                                                }`} />
                                            </div>
                                            <div className="flex flex-col items-left">
                                                <span className={`text-xl font-bold ${
                                                    isActive('/eventos') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:text-secondary'
                                                }`}>Eventos</span>
                                                <span className={`text-sm font-medium ${
                                                    isActive('/eventos') 
                                                        ? 'text-secondary/80' 
                                                        : 'text-gray-500 group-hover:text-secondary'
                                                }`}>Para disfrutar</span>
                                            </div>
                                            
                                        </a>

                                        <a href='/frikpro' className="flex flex-row gap-2 place-items-center px-3 py-2 transition-colors group rounded-full hover:bg-accent">
                                            <div>
                                                <Crown className={`h-8 w-8 ${
                                                    isActive('/frikpro') 
                                                        ? 'text-secondary' 
                                                        : 'group-hover:text-secondary'
                                                }`} />
                                            </div>
                                            <div className="flex flex-col items-left">
                                                <span className={`text-xl font-bold ${
                                                    isActive('/frikpro') 
                                                        ? 'text-secondary' 
                                                        : 'text-gray-700 group-hover:text-secondary'
                                                }`}>frik<span className="text-xl font-black text-secondary group-hover:text-secondary">pro</span></span>
                                                <span className={`text-sm font-medium ${
                                                    isActive('/frikpro') 
                                                        ? 'text-secondary/80' 
                                                        : 'text-gray-500 group-hover:text-secondary'
                                                }`}>Hazte Pro</span>
                                            </div>
                                        </a>
                                    
                                        <hr className="mt-6 mb-10" />
                                    
                                        <div className="px-3 space-y-3">
                                            <Button variant="ghost" size="lg" className="w-full text-lg" asChild>
                                                <a href="/api/login" >Iniciar Sesión</a>
                                            </Button>
                                            <Button size="lg" className="w-full text-lg" asChild>
                                                <a href="/api/login">Registrarse</a>
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
