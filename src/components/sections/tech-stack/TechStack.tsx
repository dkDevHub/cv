import Section from "@/components/templates/Section";
import cl from "./TechStack.module.css";
import Typescript from "@/components/parts/typescript/Typescript";
import Divider from "@/components/atomic/divider/Divider";
import TechGrid from "@/components/parts/tech-grid/TechGrid";
import TechAdd from "@/components/parts/tech-add/TechAdd";
import TechCards from "@/components/parts/texh-cards/TechCards";

function TechStack() {
    return (
        <Section className={cl.tech_stack}>
            <div className={cl.content}>
                <h2 className="h1 headline-shadow" id="tech">
                    Tech Stack
                </h2>
                <Typescript />
                <Divider>
                    <span className="text-foreground/66 font-semibold">Technology Stack</span>
                </Divider>
                {/* <TechGrid /> */}
                <TechCards/>
                <Divider>
                    <span className="text-foreground/66 font-semibold">Additional skills</span>
                </Divider>
                <TechAdd/>
                <div className={cl.bg_image}></div>
            </div>
        </Section>
    );
}

export default TechStack;
