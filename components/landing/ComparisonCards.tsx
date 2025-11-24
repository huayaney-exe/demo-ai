"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Sparkles } from "lucide-react";

export function ComparisonCards() {
    const comparisons = [
        {
            title: "Freelancer / Marketplace",
            problem: "Contexto: 0% (Empieza de cero)",
            solution: "Riesgo: Alto (Calidad variable)",
        },
        {
            title: "Agencia Tradicional",
            problem: "Contexto: Lento (Semanas de onboarding)",
            solution: "Costo: Alto (Pagas sus reuniones)",
        },
        {
            title: "Brandly",
            problem: "Contexto: 100% (Inmediato)",
            solution: "Costo: Flat (Solo pagas ejecución)",
        },
    ];

    return (
        <section className="section bg-white">
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
                        vs Alternativas
                    </h2>
                    <p className="text-xl text-[var(--slate-600)] max-w-2xl mx-auto">
                        La única opción que se vuelve más inteligente con cada proyecto
                    </p>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {comparisons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`rounded-2xl p-6 border-2 transition-all duration-300 ${item.title === "Brandly"
                                ? "bg-white border-[var(--briefia-indigo)] shadow-xl scale-105 z-10"
                                : "bg-slate-50 border-[var(--slate-200)] hover:border-[var(--briefia-indigo)]/50"
                                }`}
                        >
                            {/* Alternative Title */}
                            <h3 className="text-xl font-bold text-[var(--slate-900)] mb-6 text-center">
                                {item.title}
                            </h3>

                            {/* Problem/Context Metric */}
                            <div className={`rounded-xl p-4 mb-4 border-l-4 ${item.title === "Brandly" ? "bg-indigo-50 border-[var(--briefia-indigo)]" : "bg-amber-50 border-[var(--warning)]"
                                }`}>
                                <p className={`text-sm font-medium ${item.title === "Brandly" ? "text-[var(--briefia-indigo)]" : "text-[var(--slate-700)]"
                                    }`}>
                                    {item.problem}
                                </p>
                            </div>

                            {/* Solution/Cost Metric */}
                            <div className={`rounded-xl p-4 border-l-4 ${item.title === "Brandly" ? "bg-green-50 border-[var(--success)]" : "bg-red-50 border-[var(--error)]"
                                }`}>
                                <p className={`text-sm font-medium ${item.title === "Brandly" ? "text-[var(--success)]" : "text-[var(--slate-700)]"
                                    }`}>
                                    {item.solution}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Key Differentiator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 max-w-3xl mx-auto text-center"
                >
                    <div className="bg-gradient-to-br from-[var(--briefia-indigo)]/5 to-[var(--briefia-purple)]/5 rounded-2xl p-8 border-2 border-[var(--briefia-indigo)]/20">
                        <Sparkles className="text-[var(--briefia-indigo)] mx-auto mb-4" size={32} />
                        <p className="text-2xl text-[var(--slate-900)] font-semibold mb-2">
                            No somos ni agencia, ni freelancer, ni templates
                        </p>
                        <p className="text-lg text-[var(--slate-600)]">
                            Somos el <span className="font-bold text-[var(--briefia-indigo)]">intérprete inteligente</span> entre tu conocimiento de negocio y la ejecución de diseño profesional
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
