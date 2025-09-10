import type { Place } from "@/lib/types";
import { PlaceCard }  from "./place-card";
import { Button } from "@/components/ui/button";
import akiracomics from "@/assets/places/akira_comics.webp";
import arkhamcomics from "@/assets/places/arkham_comics.webp";
import atlanticajuegos from "@/assets/places/atlantica_juegos.webp";
import frikquest from "@/assets/places/friquest.webp";
import normacomics  from "@/assets/places/norma_comics.webp";
import uchronictime from "@/assets/places/uchronic_time.jpg";

const places: Place[] = [
    {
        name: "Arkham Comics",
        address: " Carrer d'en Xuclá, 16",
        category: ["comics"],
        city: "Barcelona",
        province: "Barcelona",
        img: arkhamcomics,
        rating: 4.9,
        users: "128"
    },
    {
        name: "Friquest",
        address: "Gran Via Corts Catalanes, 679",
        category: ["figures"],
        city: "Barcelona",
        province: "Barcelona",
        img: frikquest,
        rating: 4.8,
        users: "1mil"
    },
    {
        name: "Librería Akira Comics",
        address: "Avenida de Betanzos, 74",
        category: ["comics"],
        city: "Madrid",
        province: "Madrid",
        img: akiracomics,
        rating: 4.8,
        users: "8,6mil"
    },
    {
        name: "Uchronic Time",
        address: "Carrer de la Portaferrissa, 22",
        category: ["steampunk"],
        city: "Barcelona",
        province: "Barcelona",
        img: uchronictime,
        rating: 4.7,
        users: "95"
    },
    {
        name: "Norma Comics",
        address: "Carrer de Loreto, 48",
        category: ["comics", "figures"],
        city: "Barcelona",
        province: "Barcelona",
        img: normacomics,
        rating: 4.7,
        users: "15mil"
    },
    {
        name: "Atlántica Juegos",
        address: "Calle de la Luna, 6",
        category: ["dandd"],
        city: "Madrid",
        province: "Madrid",
        img: atlanticajuegos,
        rating: 4.6,
        users: "1,7mil"
    }
];

export function FeaturedPlaces() {
    return (
        <section className="py-30 lg:py-24 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center items-center justify-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 select-none">Lugares Destacados</h2>
                    <p className="text-xl lg:text-2xl text-gray-500 select-none">Descubre los mejores lugares para vivir tu pasión friki</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {places.map((place) => (
                    <PlaceCard key={place.name} {...place} img={place.img.src} />
                ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <Button variant="default" size="lg" className="self-center min-w-1/3">
                        <span className="text-md self-center">Ver todos los lugares</span>
                    </Button>
                </div>
            </div>
        </section>
    )
}
