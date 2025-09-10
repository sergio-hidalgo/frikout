//import React from "react";
//import { useState, useEffect } from "react";
//import { Skeleton } from "../components/ui/skeleton";

export function LocationStats() {
    /* const [stats, setStats] = React.useState<{
        placesCount: number;
        eventsCount: number;
        citiesCount: number;
        usersCount: number;
    } | null>(null); */

    //const [isLoading, setIsLoading] = React.useState(true);

    /* React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/stats");
                const data = await response.json();
                setStats(data);
            } catch (error) {
                console.error("Error fetching stats:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); */

    /* if (isLoading) {
        return (
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Skeleton className="h-8 w-64 mx-auto mb-4" />
                        <Skeleton className="h-6 w-80 mx-auto" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="text-center">
                                <Skeleton className="h-12 w-20 mx-auto mb-2" />
                                <Skeleton className="h-5 w-28 mx-auto" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } */

    /* const statsData = [
        {
            value: stats?.placesCount ? `${stats.placesCount}+` : "500+",
            label: "Lugares Registrados",
            color: "text-primary",
            testId: "stat-places"
        },
        {
            value: stats?.eventsCount ? `${stats.eventsCount}+` : "150+",
            label: "Eventos al Mes",
            color: "text-secondary",
            testId: "stat-events"
        },
        {
            value: stats?.citiesCount ? `${stats.citiesCount}` : "50",
            label: "Ciudades Cubiertas",
            color: "text-accent text-orange-600",
            testId: "stat-cities"
        },
        {
            value: stats?.usersCount ? `${Math.floor(stats.usersCount / 1000)}K+` : "10K+",
            label: "Usuarios Activos",
            color: "text-purple-600",
            testId: "stat-users"
        },
    ]; */

    return (
        <section className="py-30 lg:py-24 px-6 bg-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 select-none">frik<span className="text-secondary">out</span> en números</h2>
                    <p className="text-xl lg:text-2xl text-gray-600 select-none">Conectando la comunidad friki de toda España</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 text-secondary select-none">
                                500+
                            </div>
                            <p className="text-gray-600 text-xl font-medium select-none">Lugares Registrados</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 text-primary select-none">
                                150+
                            </div>
                            <p className="text-gray-600 text-xl font-medium select-none">Eventos Sugeridos</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 text-secondary select-none">
                                50
                            </div>
                            <p className="text-gray-600 text-xl font-medium select-none">Ciudades Cubiertas</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 justify-center items-center">
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold mb-2 text-primary select-none">
                                1K+
                            </div>
                            <p className="text-gray-600 text-xl font-medium select-none">Usuarios Asociados</p>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    );
}
