import type { Event } from "@/lib/types";
import { EventCard }  from "./event-card";
import { Button } from "@/components/ui/button";
import atomicparty from "@/assets/events/atomicpixelparty_madrid.jpg";
import comiccon from "@/assets/events/comiccon_malaga.jpg";
import expotaku from "@/assets/events/expotaku_vitoria.jpg";
import firamanga from "@/assets/events/firamanga_vilajoiosa.jpg";
import japanweekend from "@/assets/events/japanweekend_madrid.jpg";
import nippongo from "@/assets/events/nippongo_silla.jpg";

const events: Event[] = [
    {
        name: "Nippon-Go!",
        venue: "La Nau Jove",
        date: "13-14 Septiembre 2025",
        address: "Avinguda d'Alacant, 63",
        category: ["comics"],
        city: "Silla",
        province: "Valencia",
        img: nippongo
    },
    {
        name: "Atomic Pixel Party",
        venue: "Independence Club",
        date: "19-20 Septiembre 2025",
        address: " Calle de Atocha, 127",
        category: ["cosplay", "gaming", "music"],
        city: "Madrid",
        province: "Madrid",
        img: atomicparty
    },
    {
        name: "V Fira del Manga",
        venue: "Parque La Barbera",
        date: "20 Septiembre 2025",
        address: "Carrer Huit de Maig, 15",
        category: ["comics"],
        city: "Vila Joiosa",
        province: "Alicante",
        img: firamanga
    },
    {
        name: "XXXI Japan Weekend",
        venue: "IFEMA - Feria de Madrid",
        date: "20-21 Septiembre 2025",
        address: "Avenida del Partenón, 5",
        category: ["comics"],
        city: "Madrid",
        province: "Madrid",
        img: japanweekend
    },
    {
        name: "San Diego Comic-Con",
        venue: "FYCMA",
        date: "25-28 Septiembre 2025",
        address: "Av. José Ortega y Gasset, 201",
        category: ["comics", "cosplay", "gaming"],
        city: "Málaga",
        province: "Málaga",
        img: comiccon
    },
    {
        name: "ExpOtaku",
        venue: "Iradier Arena",
        date: "27-28 Septiembre 2025",
        address: "Plaza de Renacimiento, 6",
        category: ["gaming", "cosplay", "music"],
        city: "Vitoria-Gasteiz",
        province: "Álava",
        img: expotaku
    }
];

export function NextEvents() {
    return (
        <section className="relative py-30 lg:py-24 px-6 bg-white">
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center items-center justify-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4 select-none">Próximos Eventos</h2>
                    <p className="text-xl lg:text-2xl text-gray-500 select-none">No te pierdas las mejores convenciones y eventos frikis</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event) => (
                    <EventCard key={event.name} {...event} img={event.img.src} />
                ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <Button variant="secondary" size="lg" className="self-center min-w-1/3">
                        <span className="text-md font-normal self-center">VER TODOS LOS EVENTOS</span>
                    </Button>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-0 h-full w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </section>
    )
}
