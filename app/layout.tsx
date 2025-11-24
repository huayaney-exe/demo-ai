import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Brandly | Tu agencia de diseño AI-Native",
    description: "Brandly memoriza tu marca y genera diseño world-class en 24h. Sin reuniones, sin costos ocultos.",
    keywords: ["diseño gráfico", "agencia de diseño", "IA", "branding", "diseño ilimitado", "Brandly"],
    authors: [{ name: "Brandly" }],
    creator: "Brandly",
    publisher: "Brandly",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Brandly | Tu agencia de diseño AI-Native",
        description: "Brandly memoriza tu marca y genera diseño world-class en 24h.",
        type: "website",
        locale: "es_PE",
        url: "https://brandly.pe",
        siteName: "Brandly",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brandly | Tu agencia de diseño AI-Native",
        description: "Brandly memoriza tu marca y genera diseño world-class en 24h.",
        creator: "@brandly_pe",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className="antialiased">{children}</body>
        </html>
    );
}
