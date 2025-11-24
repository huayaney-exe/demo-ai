"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, ArrowRight } from "lucide-react";

export function WaitlistForm({ className = "", placeholder = "tu@email.com" }: { className?: string, placeholder?: string }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <div className={`w-full max-w-md ${className}`}>
            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="text-green-600" size={18} />
                        </div>
                        <div>
                            <p className="text-green-800 font-semibold text-sm">¡Estás en la lista!</p>
                            <p className="text-green-700 text-xs">Te avisaremos apenas abramos cupos.</p>
                        </div>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        onSubmit={handleSubmit}
                        className="relative"
                    >
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={placeholder}
                                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="px-6 py-3 bg-white text-[var(--briefia-indigo)] font-bold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {status === "loading" ? (
                                    <Loader2 className="animate-spin" size={20} />
                                ) : (
                                    <>
                                        Unirse
                                        <ArrowRight size={18} />
                                    </>
                                )}
                            </button>
                        </div>
                        <p className="text-white/60 text-xs mt-2 pl-1">
                            Únete a +2,000 marketers en espera.
                        </p>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
