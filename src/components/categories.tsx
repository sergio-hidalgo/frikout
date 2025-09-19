import type { Category } from "@/lib/types";
import { Button } from "@/components/ui/button";
import CategoriesCard from "./categories-card";
import comics from "@/assets/comics.png";
import cosplay from "@/assets/cosplay.png";
import dandd from "@/assets/d&d.png";
import figures from "@/assets/figures.png";
import gaming from "@/assets/gaming.png";
import modelling from "@/assets/modelling.png";
import outdoors from "@/assets/outdoors.png";
import steampunk from "@/assets/steampunk.png";
import { BookOpenText, Brush, Calendar, Cog, Dices, Gamepad2, ToyBrick, VenetianMask } from "lucide-react";

const categories: Category[] = [
  {
    title: "Comics",
    count: "145",
    img: comics,
    icon: <BookOpenText className="h-4 w-4 text-secondary" />
  },
  {
    title: "Juegos de rol",
    count: "75",
    img: dandd,
    icon: <Dices className="h-4 w-4 text-secondary" />
  },
  {
    title: "Figuras",
    count: "120",
    img: figures,
    icon: <Brush className="h-4 w-4 text-secondary" />
  },
  {
    title: "Gaming",
    count: "200",
    img: gaming,
    icon: <Gamepad2 className="h-4 w-4 text-secondary" />
  },
  {
    title: "Modelado",
    count: "150",
    img: modelling,
    icon: <ToyBrick className="h-4 w-4 text-secondary" />
  },
  {
    title: "Cosplay",
    count: "98",
    img: cosplay,
    icon: <VenetianMask className="h-4 w-4 text-secondary" />
  }
];

export function Categories() {
  return (
    <section className="relative py-30 lg:py-24 px-6 bg-gray-100">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4 select-none">Categorías Favoritas</h2>
          <p className="text-xl lg:text-2xl text-gray-500 select-none">Las categorías más buscadas en estos momentos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoriesCard key={category.title} category={category} />
          ))}
        </div>
        <div className="mt-12 flex justify-center">
            <Button variant="default" size="lg" className="self-center min-w-1/3">
                <span className="text-md font-normal self-center">VER TODAS LAS CATEGORÍAS</span>
            </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e1ebc6_3px,transparent_3px)] [background-size:32px_32px]"></div>
    </section>
  )
}

