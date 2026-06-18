import CardGlow from "@/components/atomic/card-glow/CardGlow";
import cl from "./Typescript.module.css"
import CodeBlock from "@/components/parts/code-block/CodeBlock";
import Image from "next/image";
import TsLogo from "@/assets/brand/ts.svg";
import { cn } from "@/lib/utils";

function Typescript() {
    return (
        <div className={cl.typescript}>
            <div className={cl.text}>
                <span className="text-xl lg:text-2xl js-show-anim">Core of quality</span>
                <div className={cn(cl.headline, "js-show-anim")}>
                    <Image className={cl.img} src={TsLogo.src} width={72} height={72} alt="" />
                    <h2 className="hero-headline text-gradient from-teal-300 to-indigo-400">Typescript</h2>
                </div>
                <p className={cn(cl.p, "js-show-anim")}>
                    Type-safe development for bulletproof frontend. Catching bugs at compile time, ensuring predictable
                    architecture and flawless scalability.
                </p>
                <p className={cn(cl.p, "js-show-anim")}>
                    Writing clean, maintainable, and strictly typed code.{" "}
                    <span className={cl.white}>
                        TypeScript allows me to build complex applications without fear of runtime crashes,
                    </span>{" "}
                    keeping the codebase rock-solid.
                </p>
                <p className={cn(cl.p, "js-show-anim")}>
                    Bringing{" "}
                    <span className="text-gradient from-lime-400 to-sky-400 font-semibold">enterprise-grade</span>{" "}
                    architecture to{" "}
                    <span className="text-gradient from-pink-400 to-fuchsia-400 font-semibold">modern frontend</span>{" "}
                    applications.
                </p>
            </div>
            <div className={cl.code_block}>
                <CardGlow className={cl.code_card}>
                    <CodeBlock />
                </CardGlow>
            </div>
        </div>
    );
};

export default Typescript;