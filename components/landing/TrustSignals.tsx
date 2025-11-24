"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export function TrustSignals() {
    const testimonial = {
        description: "Brandly genera especificaciones precisas de diseño adaptadas a tu industria B2B",
        quote:
            "Por fin una agencia que no necesita que la micro-gerencie. Subí mi brand book una vez y ahora cada diseño llega perfecto a la primera.",
        author: "Carlos M.",
        company: "Software MinTech",
        role: "Gerente General",
    };

    // Placeholder logos - in production these would be actual client logos
    const clientLogos = [
        { name: "MinTech Solutions", width: "w-32" },
        { name: "Andean Services", width: "w-28" },
        { name: "Lima Industrial", width: "w-36" },
        { name: "Peru B2B Group", width: "w-32" },
    ];

    return (
        <section className="section bg-[var(--slate-50)]">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Testimonial */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-6 left-8 w-12 h-12 rounded-full gradient-briefia flex items-center justify-center shadow-lg">
                            <Quote className="text-white" size={24} />
                        </div>

                        {/* Quote Text */}
                        <blockquote className="text-2xl md:text-3xl italic leading-relaxed text-[var(--slate-900)] mb-6 mt-4">
                            "{testimonial.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex items-center gap-4 pt-6 border-t border-[var(--slate-200)]">
                            {/* Avatar Placeholder */}
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--briefia-indigo)] to-[var(--briefia-purple)] flex items-center justify-center text-white font-bold text-xl">
                                {testimonial.author.charAt(0)}
                            </div>

                            {/* Author Details */}
                            <div>
                                <div className="font-bold text-lg text-[var(--slate-900)]">
                                    {testimonial.author}
                                </div>
                                <div className="text-[var(--slate-600)]">
                                    {testimonial.role}, {testimonial.company}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Client Logos */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-center text-[var(--slate-600)] mb-8 text-sm uppercase tracking-wide font-semibold">
                            Empresas que confían en Brandly
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                            {clientLogos.map((logo, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * index }}
                                    className={`${logo.width} h-16 flex items-center justify-center`}
                                >
                                    {/* Placeholder Logo - Replace with actual logos */}
                                    <div className="w-full h-12 bg-[var(--slate-300)] rounded-lg flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                                        <span className="text-[var(--slate-600)] font-bold text-xs text-center px-2">
                                            {logo.name}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Proof Numbers */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-16 grid grid-cols-3 gap-8"
                    >
                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gradient-briefia mb-2">
                                150+
                            </div>
                            <div className="text-[var(--slate-600)] text-sm md:text-base">
                                Marcas Memorizadas
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gradient-briefia mb-2">
                                24h
                            </div>
                            <div className="text-[var(--slate-600)] text-sm md:text-base">
                                Tiempo de entrega
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-gradient-briefia mb-2">
                                0
                            </div>
                            <div className="text-[var(--slate-600)] text-sm md:text-base">
                                Reuniones innecesarias
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
