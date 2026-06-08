import About from "@/components/sections/about/About";
import Hero from "@/components/sections/hero/Hero";
import TechStack from "@/components/sections/tech-stack/TechStack";
import UiKit from "@/components/sections/ui-kit/UiKit";
import AppLayout from "@/components/templates/AppLayout";

export default function Home() {
    return (
        <AppLayout>
            <Hero/>
            <TechStack />
            <About />
            <UiKit />
        </AppLayout>
    );
}
