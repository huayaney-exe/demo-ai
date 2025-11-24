"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { InteractiveDemo } from "./InteractiveDemo";

export function HeroSection() {
    return (
        <section className="gradient-briefia min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>

            <div className="container relative z-10">
                {/* Navigation */}
                <nav className="absolute top-8 left-0 right-0 flex items-center justify-between px-4">
                    <div className="text-white font-bold text-2xl">Brandly</div>
                    {/* <div className="flex gap-4">
                        <button className="text-white hover:text-white/80 font-medium transition-colors">
                            Login
                        </button>
                    </div> */}
                </nav>

                <div className="grid lg:grid-cols-2 gap-12 items-center pt-20">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                            <span className="text-sm font-medium">Ahora en Beta Privada</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Tu agencia de diseño que <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">nunca olvida</span> tu marca.
                        </h1>

                        <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                            Diseño world-class en 24h. Sin reuniones. Sin "no entendí". Sin costos ocultos.
                            Brandly memoriza tu contexto para siempre.
                        </p>

                        <WaitlistForm className="mb-8" placeholder="Ingresa tu correo de trabajo" />

                        <div className="flex items-center gap-4 text-sm text-white/60">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-indigo-600 bg-slate-200"></div>
                                ))}
                            </div>
                            <p>Usado por equipos de marketing modernos</p>
                        </div>
                    </motion.div>

                    {/* Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <InteractiveDemo />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
}
