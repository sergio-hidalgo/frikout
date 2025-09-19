import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import blueBg from "@/assets/blue_bg.png";
import greenBg from "@/assets/green_bg.png";
import orangeBg from "@/assets/orange_bg.png";
import purpleBg from "@/assets/purple_bg.png";
import redBg from "@/assets/red_bg.png";
import yellowBg from "@/assets/yellow_bg.png";

const backgrounds = [blueBg, greenBg, orangeBg, purpleBg, redBg, yellowBg];

const cities = [
    "Toda España",
    "A Coruña", "Alicante", "Almería", "Barcelona", "Bilbao", "Córdoba", 
    "Gijón", "Granada", "Las Palmas", "Madrid", "Málaga", "Murcia", "Oviedo", 
    "Palma", "Pamplona", "San Sebastián", "Santa Cruz de Tenerife", "Santander", 
    "Segovia", "Sevilla", "Valencia", "Valladolid", "Vigo", "Vitoria", "Zaragoza",  
];

export function Hero() {
    const [selectedCity, setSelectedCity] = useState("Toda España");
    const [currentBackground, setCurrentBackground] = useState(0);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * backgrounds.length);
        setCurrentBackground(randomIndex);
    }, []);

    return (
        <section className="relative text-white py-52 md:py-32 bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${currentBackground === 0 ? blueBg.src : backgrounds[currentBackground].src})` }}
        >
        
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 align-middle z-20">
                <div className="text-center">
                    
                    {/* Heading area */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <h1 className="text-3xl md:text-6xl font-bold mb-6">
                            Descubre la Cultura
                            <span className="text-accent"> Friki</span> de España
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
                            Encuentra tiendas de cómics, eventos de cosplay, convenciones de anime y mucho más cerca de ti
                        </p>
                    </div>

                    {/* Search area */}
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
                            <div className="relative">
                                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />                                
                                <Select value={selectedCity} onValueChange={setSelectedCity}>
                                    <SelectTrigger className="pl-12 h-12 pr-8 py-4 text-gray-900 font-normal rounded-xl border-0 focus:ring-2 focus:ring-primary bg-white min-w-90">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectGroup>
                                            {cities.map((city) => (
                                                <SelectItem key={city} value={city}>
                                                    {city}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button size="lg" className="text-sm font-normal min-w-90 lg:min-w-40">
                                BUSCAR
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
