"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud, FileText, CheckCircle2, Loader2, Palette, Type } from "lucide-react";

export function InteractiveDemo() {
    const [step, setStep] = useState<"idle" | "uploading" | "processing" | "done">("idle");

    // Auto-play the demo loop
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const runDemo = () => {
            // Step 1: Start Upload
            timeout = setTimeout(() => {
                setStep("uploading");

                // Step 2: Processing
                timeout = setTimeout(() => {
                    setStep("processing");

                    // Step 3: Done
                    timeout = setTimeout(() => {
                        setStep("done");

                        // Reset
                        timeout = setTimeout(() => {
                            setStep("idle");
                            runDemo(); // Loop
                        }, 4000);
                    }, 2500);
                }, 1500);
            }, 2000);
        };

        runDemo();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="w-full">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl relative overflow-hidden">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-white/60 text-xs font-mono uppercase tracking-wider">
                        Brandly Context Engine v2.0
                    </div>
                </div>

                {/* Main Interaction Area */}
                <div className="relative h-48 md:h-56 bg-white/5 rounded-xl border-2 border-dashed border-white/20 flex flex-col items-center justify-center transition-all duration-500">

                    <AnimatePresence mode="wait">
                        {step === "idle" && (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="text-center p-4"
                            >
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <UploadCloud className="text-white/80" size={32} />
                                </div>
                                <p className="text-white font-medium text-lg mb-2">
                                    Sube tu Manual de Marca
                                </p>
                                <p className="text-white/50 text-sm">
                                    PDF, PPTX o URL de tu web
                                </p>
                            </motion.div>
                        )}

                        {step === "uploading" && (
                            <motion.div
                                key="uploading"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="flex flex-col items-center"
                            >
                                <FileText className="text-white mb-4" size={48} />
                                <div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-green-400"
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                    />
                                </div>
                                <p className="text-white/80 text-sm mt-3">Subiendo Brand_Book_2025.pdf...</p>
                            </motion.div>
                        )}

                        {step === "processing" && (
                            <motion.div
                                key="processing"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full px-8"
                            >
                                <div className="space-y-3">
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center gap-3 text-white/90"
                                    >
                                        <Loader2 className="animate-spin text-indigo-300" size={18} />
                                        <span>Analizando paleta de colores...</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.8 }}
                                        className="flex items-center gap-3 text-white/90"
                                    >
                                        <Loader2 className="animate-spin text-purple-300" size={18} />
                                        <span>Extrayendo tipografías...</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 1.4 }}
                                        className="flex items-center gap-3 text-white/90"
                                    >
                                        <Loader2 className="animate-spin text-green-300" size={18} />
                                        <span>Definiendo tono de voz...</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {step === "done" && (
                            <motion.div
                                key="done"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="w-full"
                            >
                                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Contexto Guardado</h4>
                                        <p className="text-green-200 text-sm">Tu marca está lista para usarse</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-white/10 rounded p-3 flex items-center gap-2">
                                        <Palette size={16} className="text-indigo-300" />
                                        <div className="flex gap-1">
                                            <div className="w-4 h-4 rounded-full bg-[#0F172A]"></div>
                                            <div className="w-4 h-4 rounded-full bg-[#4F46E5]"></div>
                                            <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
                                        </div>
                                    </div>
                                    <div className="bg-white/10 rounded p-3 flex items-center gap-2">
                                        <Type size={16} className="text-purple-300" />
                                        <span className="text-white/80 text-xs font-mono">Inter / Montserrat</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <p className="text-white/50 text-center text-sm mt-4">
                * Simulación: En la plataforma real, esto toma menos de 30 segundos.
            </p>
        </div>
    );
}
