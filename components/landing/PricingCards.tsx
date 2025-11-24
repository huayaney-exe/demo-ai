"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function PricingCards() {
    const plans = [
        {
            name: "Setup Inicial",
            price: "499",
            period: "pago único",
            description: "Configuración de tu Brand Brain",
            features: [
                "Ingesta de Manual de Marca",
                "Definición de Tono de Voz",
                "Configuración de ICPs",
                "Auditoría de activos actuales",
            ],
            cta: "Empezar Setup",
            highlighted: false,
        },
        {
            name: "Suscripción",
            price: "999",
            period: "por mes",
            description: "Tu equipo de diseño on-demand",
            features: [
                "Diseños ilimitados (1 a la vez)",
                "Entrega en 24-48 horas",
                "Archivos editables incluidos",
                "Contexto infinito garantizado",
                "Sin contratos forzosos",
            ],
            cta: "Suscribirse",
            highlighted: true,
        },
    ];

    return (
        <section className="section bg-white" id="pricing">
            <div className="container">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--slate-900)]">
                        Tu equipo de diseño, activado.
                    </h2>
                    <p className="text-xl text-[var(--slate-600)] max-w-2xl mx-auto">
                        Un pago único para aprender tu marca. Una suscripción para ejecutarla para siempre.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl p-8 flex flex-col ${plan.highlighted
                                    ? "bg-gradient-to-br from-[var(--briefia-indigo)] to-[var(--briefia-purple)] text-white shadow-2xl scale-105 z-10"
                                    : "bg-white border-2 border-[var(--slate-200)] hover:border-[var(--briefia-indigo)] shadow-lg"
                                } transition-all duration-300`}
                        >
                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3
                                    className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-[var(--slate-900)]"
                                        }`}
                                >
                                    {plan.name}
                                </h3>
                                <p
                                    className={`text-sm ${plan.highlighted ? "text-white/80" : "text-[var(--slate-600)]"
                                        }`}
                                >
                                    {plan.description}
                                </p>
                            </div>

                            {/* Pricing */}
                            <div className="mb-8">
                                <div className="flex items-baseline gap-2">
                                    <span
                                        className={`text-xl ${plan.highlighted ? "text-white" : "text-[var(--slate-900)]"
                                            }`}
                                    >
                                        S/.
                                    </span>
                                    <span
                                        className={`font-display text-5xl font-bold ${plan.highlighted ? "text-white" : "text-[var(--slate-900)]"
                                            }`}
                                    >
                                        {plan.price}
                                    </span>
                                </div>
                                <p
                                    className={`text-sm mt-1 ${plan.highlighted ? "text-white/80" : "text-[var(--slate-600)]"
                                        }`}
                                >
                                    {plan.period}
                                </p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start gap-3">
                                        <Check
                                            className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-green-300" : "text-[var(--success)]"
                                                }`}
                                            size={20}
                                        />
                                        <span
                                            className={`text-sm ${plan.highlighted ? "text-white" : "text-[var(--slate-700)]"
                                                }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <button
                                className={`btn w-full ${plan.highlighted
                                        ? "bg-white text-[var(--briefia-indigo)] hover:bg-green-50"
                                        : "btn-primary"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
