import ReactLogo from "@/assets/brand/react.svg";
import NextJsLogo from "@/assets/brand/nextjs.svg";
import ZustandLogo from "@/assets/brand/zustand.svg";
import TailwindLogo from "@/assets/brand/tailwindcss.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import cl from "./TechGrid.module.css"

function TechGrid() {
    return (
        <div className={cl.tech_grid}>
            <div className={cl.tech_grid_bg}></div>
            <div className={cn(cl.tech, cl.react)}>
                <span className={cn(cl.tech_title, "js-show-anim")}>
                    <Image className="w-8 sm:w-10 h-auto" width={40} height={40} src={ReactLogo.src} alt="" />
                    <h3 className="h2">React</h3>
                </span>
                <div className={cl.tech_text}>
                    <p className="js-show-anim">
                        Building dynamic, <span className={cl.accent}>high-performance single-page applications</span>{" "}
                        using declarative rendering, custom hooks, and optimized component lifecycles.
                    </p>
                </div>
            </div>

            <div className={cn(cl.tech, cl.next)}>
                <span className={cn(cl.tech_title, "js-show-anim")}>
                    <Image
                        className="invert w-24 h-auto sm:w-37.5 sm:h-auto"
                        width={150}
                        height={30}
                        src={NextJsLogo.src}
                        alt=""
                    />
                </span>
                <div className={cl.tech_text}>
                    <p className="js-show-anim">
                        Leveraging Server Actions, App Router, and advanced SSR/SSG strategies to deliver instant load
                        times, flawless hydration, and <span className={cl.accent}>top-tier SEO performance</span>.
                    </p>
                </div>
            </div>

            <div className={cn(cl.tech, cl.zustand)}>
                <span className={cn(cl.tech_title, "js-show-anim")}>
                    <Image className="w-8 sm:w-10 h-auto" width={40} height={40} src={ZustandLogo.src} alt="" />
                    <h3 className="h2">Zustand</h3>
                </span>
                <div className={cl.tech_text}>
                    <p className="js-show-anim">
                        <span className={cl.accent}>Minimalist and lightning-fast state management.</span> A sleek,
                        hook-based store that eliminates unnecessary boilerplate, slashes re-render counts.
                    </p>
                </div>
            </div>

            <div className={cn(cl.tech, cl.tailwind)}>
                <span className={cn(cl.tech_title, "js-show-anim")}>
                    <Image className="w-8 sm:w-10 h-auto" width={54} height={33} src={TailwindLogo.src} alt="" />
                    <h3 className="h2">Tailwind</h3>
                </span>
                <div className={cl.tech_text}>
                    <p className="js-show-anim">
                        Writing maintainable, <span className={cl.accent}>lightweight styles</span> directly in markup,
                        leveraging the powerful new v4 engine for design token orchestrations.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TechGrid;
