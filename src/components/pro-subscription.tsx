import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export function ProSubscription() {
    const handleSubscribe = (plan: 'monthly' | 'yearly') => {
        // TODO: Implement Stripe subscription flow
        console.log(`Starting Pro subscription (${plan})...`);
    };

    return (
        <section className="py-30 lg:py-24 px-1 lg:px-6 bg-gradient-to-br from-secondary to-blue-600 text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="text-center mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 select-none">¿Quieres más funciones?</h2>
                    <p className="text-xl lg:text-2xl mb-8 text-blue-100 select-none">Hazte frik<span className="font-bold text-accent">pro</span> y accede a funciones exclusivas</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                    <h3 className="text-4xl lg:text-5xl font-semibold mb-4 select-none">Plan frik<span className="font-bold text-accent">pro</span></h3>
                    <p className="text-blue-200 mb-10 text-xl text-center select-none">Accede a todas las funciones premium</p>

                    {/* Pricing Options */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-10 mb-10 items-center justify-center">
                        
                        {/* Monthly Plan */}
                        <div className="bg-white/5 w-max-3/5 rounded-2xl rounded-tl-none rounded-br-none px-6 py-8 border-2 border-white/20">
                            <div className="text-center mb-4">
                                <h3 className="text-2xl font-semibold mb-4">Plan Mensual</h3>
                                <div className="flex items-center justify-center">
                                    <span className="text-4xl font-bold">€4.99</span>
                                    <span className="text-blue-200 ml-2 text-xl">/mes</span>
                                </div>
                                <p className="text-lg lg:text-xl text-blue-200 my-4">
                                El plan más popular
                                </p>
                            </div>
                            <Button
                                onClick={() => handleSubscribe('monthly')}
                                size="lg"
                                className="bg-blue-500 text-white text-xl lg:text-lg  hover:bg-blue-600 transition-colors w-full">
                                Suscribirse Mensual
                            </Button>
                        </div>

                        {/* Yearly Plan */}
                        <div className="bg-white/5 rounded-2xl rounded-tl-none rounded-br-none px-6 py-8 border-2 border-accent relative">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-accent text-gray-900 px-4 py-1 rounded-full text-md lg:text-lg font-bold">
                                ¡Descuento!
                                </span>
                            </div>
                            <div className="text-center mb-4">
                                <h3 className="text-2xl font-semibold mb-4">Plan Anual</h3>
                                <div className="flex items-center justify-center">
                                    <span className="text-4xl font-bold">€24.99</span>
                                    <span className="text-blue-200 ml-2 text-xl">/año</span>
                                </div>
                                <p className="text-lg lg:text-xl text-blue-200 my-4">
                                Ahorras €35 al año
                                </p>
                            </div>
                            <Button
                                onClick={() => handleSubscribe('yearly')}
                                size="lg"
                                className="bg-accent text-gray-900 text-xl lg:text-lg hover:bg-yellow-400 transition-colors w-full">
                                Suscribirse Anual
                            </Button>
                        </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-center">Funciones incluidas:</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center text-lg lg:text-xl">
                                <CheckCircle className="text-accent mr-3 h-5 w-auto" />
                                <span>Google Calendar integrado</span>
                            </div>
                            <div className="flex items-center justify-center text-lg lg:text-xl">
                                <CheckCircle className="text-accent mr-3 h-5 w-auto" />
                                <span>Exportar a Google Maps</span>
                            </div>
                            <div className="flex items-center justify-center text-lg lg:text-xl">
                                <CheckCircle className="text-accent mr-3 h-5 w-auto" />
                                <span>Busquedas avanzadas</span>
                            </div>
                            <div className="flex items-center justify-center text-lg lg:text-xl">
                                <CheckCircle className="text-accent mr-3 h-5 w-auto" />
                                <span>Sin anuncios</span>
                            </div>
                        </div>
                         <div className="mt-10 text-center text-blue-200 text-lg">
                            <p>¿Tienes alguna pregunta? Visita nuestro <a href="#" className="underline hover:text-white">Centro de Ayuda</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
