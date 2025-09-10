import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BookOpenText, Cog, Dices, Gamepad2, MapPin, LayoutList, VenetianMask } from "lucide-react";
import marvelBg from "@/assets/marvel_bg.png";

const cities = [
    "Toda España",
    "Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga",
    "Murcia", "Palma", "Las Palmas", "Bilbao", "Alicante", "Córdoba",
    "Valladolid", "Vigo", "Gijón", "A Coruña", "Granada",
    "Vitoria", "Oviedo", "Santa Cruz de Tenerife",
    "Pamplona", "Almería", "San Sebastián", "Santander"
];

const categories = [
    "Todas las categorías",
    "Comics", "Cosplay", "D&Ds", "Figuras", "Gaming", "Modelado", "Eventos", "Steampunk"
];

const quickCategories = [
    { id: "comics", label: "Cómics", icon: BookOpenText },
    { id: "gaming", label: "Gaming", icon: Gamepad2 },
    { id: "cosplay", label: "Cosplay", icon: VenetianMask },
    { id: "d&ds", label: "D&Ds", icon: Dices },
    { id: "steampunk", label: "Steampunk", icon: Cog },
];

export function Hero() {
    const [selectedCity, setSelectedCity] = useState("Toda España");
    const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

    return (
        <section className="relative text-white py-18 md:py-22 bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${marvelBg.src})` }}
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
                                    <SelectTrigger className="pl-12 h-12 pr-8 py-4 text-gray-900 rounded-xl border-0 focus:ring-2 focus:ring-primary bg-white min-w-90">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectGroup>
                                            <SelectLabel>Ciudades</SelectLabel>
                                            {cities.map((city) => (
                                                <SelectItem key={city} value={city}>
                                                    {city}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="relative">
                                <LayoutList className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="pl-12 h-12 pr-8 py-4 text-gray-900 rounded-xl border-0 focus:ring-2 focus:ring-primary bg-white min-w-90">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white">
                                        <SelectGroup>
                                            <SelectLabel>Categorías</SelectLabel>
                                            {categories.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button size="lg" className="text-sm min-w-90 lg:min-w-40">
                                Buscar
                            </Button>
                        </div>
                    </div>

                    {/* Quick Categories area */}
                    <div className="flex flex-wrap justify-center gap-3 mt-12">
                        {quickCategories.map((category) => {
                        const Icon = category.icon;
                        
                        return (
                            <button
                            key={category.id}
                            className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-white/30 transition-colors flex items-center">
                                <Icon className="h-4 w-4 mr-2" />
                                {category.label}
                            </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
