import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import logoUrl from "../assets/frikout_logo_dark.png";

export function Footer() {
    return (
        <footer className="bg-gray-800 w-full py-10 bottom-0">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
                <div className="flex flex-col items-center">

                    <div className="flex flex-col lg:flex-row items-center text-center lg:text-left justify-around mx-auto w-full gap-10 text-xl my-6 px-10">
                        <div className="flex flex-col items-center space-y-4 lg:mb-2 mb-6">
                            <img src={logoUrl.src} alt="Frikout" className="h-22 w-auto py-1.5" />

                            <span className="text-gray-200 text-xl xl:text-lg font-light text-center">El directorio definitivo de la cultura friki en España.</span>

                            {/* Social Links */}
                            <div className="flex flex-row gap-6">
                                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-300">
                                    <FaInstagram className="h-10 w-10 lg:h-8 lg:w-8" />
                                </a>
                                <a href="#" aria-label="Bluesky" className="text-gray-400 hover:text-gray-300">
                                    <FaBluesky className="h-10 w-10 lg:h-8 lg:w-8" />
                                </a>
                                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-300">
                                    <FaXTwitter className="h-10 w-10 lg:h-8 lg:w-8" />
                                </a>
                                <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-gray-300">
                                    <FaYoutube className="h-10 w-10 lg:h-8 lg:w-8" />
                                </a>
                            </div>
                        </div>
                        
                        {/* Directory Links */}
                        <div className="flex flex-col gap-2 mb-4 lg:mb-0">
                            <h2 className="text-gray-200 text-2xl lg:text-xl font-bold">Directorio</h2>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Sitios</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Eventos</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Categorías</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Ciudades</a>
                        </div>

                        {/* User Links */}
                        <div className="flex flex-col gap-2 mb-4 lg:mb-0">
                            <h2 className="text-gray-200 text-2xl lg:text-xl font-bold">Usuario</h2>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Mi perfil</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Favoritos</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Frikpro</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Configuración</a>
                        </div>

                        {/* Legal Links */}
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-200 text-2xl lg:text-xl font-bold">Soporte</h2>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Centro de ayuda</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Contacto</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Política de privacidad</a>
                            <a href="#" className="text-gray-400 hover:text-gray-300 text-xl lg:text-lg">Términos de servicio</a>
                        </div>
                    </div> 

                    <hr className="px-4 w-full mx-auto my-6 border-gray-500" />

                    <div className="mt-4 text-center flex flex-col lg:flex-row">
                        <p className="text-xl lg:text-lg text-gray-500">© {new Date().getFullYear()} | <span className="font-bold text-gray-500">Frikout.</span></p>
                        <p className="text-xl lg:text-lg text-gray-500"><span className="text-gray-500">Todos los derechos reservados.</span></p>
                    </div>
                </div>
            </div>
        </footer>
    );
}