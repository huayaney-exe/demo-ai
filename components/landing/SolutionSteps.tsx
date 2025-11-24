"use client";

import { motion } from "framer-motion";
import { Upload, BrainCircuit, Wand2, Play } from "lucide-react";

export function SolutionSteps() {
    const steps = [
        {
            number: "1",
            icon: Upload,
            title: "Subes tu Manual",
            subtitle: "una sola vez",
            description: "Carga tu Brand Book, PDFs anteriores o la URL de tu web. Ingesta en segundos.",
        },
        {
            number: "2",
            icon: BrainCircuit,
            title: "IA Memoriza",
            subtitle: "tu ADN de marca",
            description: "Nuestro motor extrae colores, tipografías y tono de voz. Crea tu 'Brand Brain' único.",
        },
        {
            number: "3",
            icon: Wand2,
            title: "Diseñamos",
            subtitle: "con contexto infinito",
            description: "Generamos activos on-brand automáticamente. No volvemos a preguntar tu código hex.",
        },
    ];

    return (
        <section className="section bg-[var(--slate-50)]">
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
                        Tu Brand Kit, vivo.
                    </h2>
                    <p className="text-xl text-[var(--slate-600)] max-w-2xl mx-auto">
                        Olvídate de adjuntar el logo en cada correo.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="relative"
                            >
                                {/* Connection Line (hidden on mobile) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[var(--briefia-indigo)] to-[var(--briefia-purple)] opacity-30 -translate-x-1/2 z-0"></div>
                                )}

                                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 h-full flex flex-col">
                                    {/* Step Number */}
                                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-briefia flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                        {step.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-6 mt-4">
                                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[var(--briefia-indigo)]/10 to-[var(--briefia-purple)]/10 flex items-center justify-center mx-auto">
                                            <Icon className="text-[var(--briefia-indigo)]" size={40} strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold text-[var(--slate-900)] mb-1">
                                            {step.title}
                                        </h3>
                                        <p className="text-[var(--briefia-purple)] font-semibold">
                                            {step.subtitle}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-[var(--slate-600)] text-center leading-relaxed flex-1">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Video CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <button className="btn btn-secondary inline-flex items-center gap-2 text-lg px-8">
                        <Play size={20} />
                        Ver cómo memoriza tu marca
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
