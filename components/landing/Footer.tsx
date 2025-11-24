"use client";

import { Mail, MessageCircle, FileText } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        product: [
            { name: "Características", href: "#features" },
            { name: "Precios", href: "#pricing" },
            { name: "Demo", href: "#demo" },
        ],
        company: [
            { name: "Sobre Nosotros", href: "#about" },
            { name: "Blog", href: "#blog" },
            { name: "Contacto", href: "#contact" },
        ],
        legal: [
            { name: "Política de Privacidad", href: "#privacy" },
            { name: "Términos de Servicio", href: "#terms" },
            { name: "Libro de Reclamaciones", href: "#complaints" },
        ],
    };

    return (
        <footer className="bg-[var(--slate-900)] text-white">
            <div className="container py-16">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <div className="text-2xl font-bold mb-4">Brandly</div>
                        <p className="text-white/70 mb-6">
                            El intérprete entre tu negocio y el diseño world-class.
                        </p>

                        {/* Contact Methods */}
                        <div className="space-y-3">
                            <a
                                href="mailto:hola@brandly.pe"
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                            >
                                <Mail size={18} />
                                <span className="text-sm">hola@brandly.pe</span>
                            </a>
                            <a
                                href="https://wa.me/51999999999"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                            >
                                <MessageCircle size={18} />
                                <span className="text-sm">WhatsApp: +51 999 999 999</span>
                            </a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Producto</h4>
                        <ul className="space-y-3">
                            {links.product.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            {links.company.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {links.legal.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"
                                    >
                                        {link.name === "Libro de Reclamaciones" && (
                                            <FileText size={16} />
                                        )}
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/60 text-sm">
                            © {currentYear} Brandly. Todos los derechos reservados.
                        </p>

                        <div className="text-white/60 text-sm">
                            <p>RUC: 20XXXXXXXXX | Lima, Perú</p>
                        </div>

                        <div className="flex gap-4 text-white/60 text-sm">
                            <a href="#privacy" className="hover:text-white transition-colors">
                                Privacidad
                            </a>
                            <span>•</span>
                            <a href="#cookies" className="hover:text-white transition-colors">
                                Cookies
                            </a>
                            <span>•</span>
                            <a href="#terms" className="hover:text-white transition-colors">
                                Términos
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* SUNAT Compliance Note */}
            <div className="bg-[var(--slate-950)] py-3">
                <div className="container">
                    <p className="text-white/40 text-xs text-center">
                        Comprobantes de pago electrónicos emitidos de acuerdo a la normativa SUNAT vigente
                    </p>
                </div>
            </div>
        </footer>
    );
}
