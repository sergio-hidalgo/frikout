import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react";

interface EventCardProps {
    name: string,
    venue?: string,
    date: string,
    address: string | null,
    category: string[],
    city: string,
    province: string,
    img: string
}

export function EventCard({ name, venue, date, address, category, city, province, img }: EventCardProps) {

    const categoryLabels: Record<string, string> = {
        comics: "Cómics",
        cosplay: "Cosplay",
        dandd: "D&Ds",
        figures: "Figuras",
        gaming: "Gaming",
        modelling: "Modelado",
        steampunk: "Steampunk",
        music: "Música",
        outdoors: "Outdoors",
    };

    const categoryColors: Record<string, string> = {
        comics: "bg-primary/30 text-primary hover:bg-primary hover:text-white transition-colors",
        cosplay: "bg-purple-100 text-purple-700 hover:bg-purple-300 hover:text-purple-900 transition-colors",
        dandd: "bg-orange-200 text-orange-700 hover:bg-orange-400 hover:text-white transition-colors",
        figures: "bg-pink-100 text-pink-700 hover:bg-pink-300 hover:text-pink-900 transition-colors",
        gaming: "bg-secondary/10 text-secondary hover:bg-secondary/30 hover:text-secondary/900 transition-colors",
        modelling: "bg-blue-100 text-blue-700 hover:bg-blue-300 hover:text-blue-900 transition-colors",
        steampunk: "bg-yellow-100 text-red-600 hover:bg-yellow-300 hover:text-red-900 transition-colors",
        music: "bg-green-100 text-green-700 hover:bg-green-300 hover:text-green-900 transition-colors",
        outdoors: "bg-teal-100 text-teal-700 hover:bg-teal-300 hover:text-teal-900 transition-colors"
    };

    return (

        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer justify-center items-center">
            <CardContent className="w-full h-48 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-top object-cover rounded-xs" />
            </CardContent>
            <CardFooter>
                <div className="p-4">

                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {name}
                    </h3>

                    {/* Venue */}
                    <h3 className="text-lg font-bold text-gray-600 mb-2">
                        {venue || "Lugar no disponible" }
                    </h3>

                    {/* Address */}
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                        {address || "Descripción no disponible"}
                    </p>

                    {/* Location */}
                    <div className="flex items-center text-gray-500 text-sm justify-center font-bold">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>
                            {city === province ? city : `${city}, ${province}`} 
                        </span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center text-gray-500 text-sm justify-center font-medium mt-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                            {date || "Fecha no disponible"}
                        </span>
                    </div>

                    {/* Category Badges */}
                    <div className="flex items-center justify-center mt-4 gap-2">
                        {category.map((cat) => (
                            <Badge key={cat} className={categoryColors[cat] || "bg-gray-100 text-gray-700"}>
                                {categoryLabels[cat] || cat}
                            </Badge>
                        ))}
                    </div>
                </div>        
            </CardFooter>
        </Card>
    );
}
