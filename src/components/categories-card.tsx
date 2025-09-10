import type { Category } from "@/lib/types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

interface CategoriesCardProps {
    category: Category;
}

export default function CategoriesCard({ category }: CategoriesCardProps) {
    return (
        <Card className="transition-transform duration-300 hover:scale-105 cursor-pointer">
            <CardContent>
                <img src={category.img.src} alt={category.title} className="rounded-xs" />
            </CardContent>
            <CardFooter>
                <div className="flex flex-col items-center w-full mx-auto text-center">
                    <div className="flex items-center gap-2">
                        {category.icon}
                        <CardTitle className="font-bold text-2xl xl:text-xl text-secondary">{category.title}</CardTitle>
                        {category.icon}
                    </div>
                    <CardDescription className="text-gray-500 text-xl xl:text-sm">{category.count} sitios</CardDescription>
                </div>          
            </CardFooter>
        </Card>
    )
}
