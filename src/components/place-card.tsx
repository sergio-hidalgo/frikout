import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card"
import { MapPin, Star } from "lucide-react";

interface PlaceCardProps {
    name: string,
    address: string | null,
    category: string[],
    city: string,
    province: string,
    img: string,
    rating: number,
    users: string,
}

export function PlaceCard({ name, address, category, city, province, img, rating, users }: PlaceCardProps) {

    const categoryLabels: Record<string, string> = {
        comics: "Cómics",
        cosplay: "Cosplay",
        dandd: "D&Ds",
        figures: "Figuras",
        gaming: "Gaming",
        modelling: "Modelado",
        steampunk: "Steampunk",
    };

    const categoryColors: Record<string, string> = {
        comics: "bg-primary/30 text-primary hover:bg-primary hover:text-white transition-colors",
        cosplay: "bg-purple-100 text-purple-700 hover:bg-purple-300 hover:text-purple-900 transition-colors",
        dandd: "bg-orange-200 text-orange-700 hover:bg-orange-400 hover:text-white transition-colors",
        figures: "bg-pink-100 text-pink-700 hover:bg-pink-300 hover:text-pink-900 transition-colors",
        gaming: "bg-secondary/10 text-secondary hover:bg-secondary/30 hover:text-secondary/900 transition-colors",
        modelling: "bg-blue-100 text-blue-700 hover:bg-blue-300 hover:text-blue-900 transition-colors",
        steampunk: "bg-yellow-100 text-red-600 hover:bg-yellow-300 hover:text-red-900 transition-colors",
    };

    return (

        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer justify-center items-center">
            <CardContent className="w-full h-48 overflow-hidden">
                <img src={img} alt={name} className="w-full h-full object-top object-cover rounded-xs" />
            </CardContent>
            <CardFooter>
                <div className="p-4">

                    {/* Rating */}
                    <div className="flex items-center justify-center mb-4 gap-4">
                        {rating && rating > 0 && (
                        <div className="flex items-center text-yellow-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-gray-600 text-sm font-medium">
                                {rating.toFixed(1)}
                            </span>
                            <span className="ml-1 text-gray-400 text-sm">
                                ({users})
                            </span>
                        </div>
                        )}
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {name}
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
