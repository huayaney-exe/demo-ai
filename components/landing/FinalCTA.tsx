"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap } from "lucide-react";
import { WaitlistForm } from "./WaitlistForm";

export function FinalCTA() {
    return (
        <section className="gradient-briefia py-20 md:py-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center text-white"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                        Genera tu primer diseño
                        <br />
                        con contexto
                    </h2>
                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Sube tu manual hoy. Recibe diseños on-brand para siempre.
                    </p>

                    {/* CTA Form */}
                    <div className="flex justify-center mb-12">
                        <WaitlistForm placeholder="Ingresa tu email corporativo" />
                    </div>

                    {/* Reassurance */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/80">
                        <div className="flex items-center gap-2">
                            <Check size={20} className="text-green-400" />
                            <span className="text-sm font-medium">Setup en 24h</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={20} className="text-green-400" />
                            <span className="text-sm font-medium">Garantía de satisfacción</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap size={20} className="text-green-400" />
                            <span className="text-sm font-medium">Cancela cuando quieras</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
