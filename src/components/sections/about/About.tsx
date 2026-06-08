import Section from "@/components/templates/Section";
import cl from "./About.module.css";
import { cn } from "@/lib/utils";
import CurrantFocus from "@/components/parts/currant-focus/CurrantFocus";
import Education from "@/components/parts/education/Education";
import AboutText from "@/components/parts/about-text/AboutText";

function About() {
    return (
        <Section className={cn(cl.about)}>
            <div className={cl.content}>
                <h2 id="about" className="h1 headline-shadow">
                    About me
                </h2>
                <div className={cl.top}>
                    <Education/>
                    <AboutText/>
                </div>

                <CurrantFocus/>
            </div>
        </Section>
    );
}

export default About;
