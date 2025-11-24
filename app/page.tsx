import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSteps } from "@/components/landing/SolutionSteps";
import { ComparisonCards } from "@/components/landing/ComparisonCards";
import { TrustSignals } from "@/components/landing/TrustSignals";
import { PricingCards } from "@/components/landing/PricingCards";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <ProblemSection />
            <SolutionSteps />
            <ComparisonCards />
            <TrustSignals />
            <PricingCards />
            <FinalCTA />
            <Footer />
        </main>
    );
}
