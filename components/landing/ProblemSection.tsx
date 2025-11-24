"use client";

import { motion } from "framer-motion";
import { X, ArrowDown } from "lucide-react";

export function ProblemSection() {
    const problems = [
        "Freelancer nuevo = Empezar de cero (Contexto 0%)",
        "Agencia tradicional = Pagas sus horas de aprendizaje",
        "Tu tiempo = Explicar lo mismo 10 veces",
    ];

    return (
        <section className="section bg-white">
            <div className="container">
                <div className="content-max-width">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--slate-900)]">
                            El costo oculto del diseño
                        </h2>

                        {/* Problems List */}
                        <div className="space-y-6 mb-12">
                            {problems.map((problem, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                                        <X className="text-red-500" size={18} />
                                    </div>
                                    <p className="text-xl text-[var(--slate-900)] flex-1 font-medium">
                                        {problem}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Arrow Separator */}
                        <div className="flex justify-center my-12">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <ArrowDown className="text-[var(--briefia-indigo)]" size={32} />
                            </motion.div>
                        </div>

                        {/* Root Cause */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 md:p-12 border-2 border-[var(--briefia-indigo)]/20 text-center"
                        >
                            <div className="inline-flex items-center gap-2 mb-4 bg-indigo-100 px-3 py-1 rounded-full">
                                <div className="w-2 h-2 bg-[var(--briefia-indigo)] rounded-full"></div>
                                <span className="text-xs font-bold text-[var(--briefia-indigo)] uppercase tracking-wide">
                                    El problema real
                                </span>
                            </div>

                            <p className="text-2xl md:text-3xl leading-relaxed text-[var(--slate-900)]">
                                El problema no es el diseño.
                                <br />
                                El problema es la falta de{" "}
                                <span className="font-bold text-[var(--briefia-indigo)]">
                                    CONTEXTO
                                </span>.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

