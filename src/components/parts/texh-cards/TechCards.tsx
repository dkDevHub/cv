import { cn } from "@/lib/utils";
import cl from "./TechCards.module.css"
import ReactLogo from "@/assets/brand/react.svg";
import ReactBgLogo from "@/assets/brand-patterns/react.svg";
import NextJsLogo from "@/assets/brand/nextjs.svg";
import NextJsBgLogo from "@/assets/brand-patterns/nextjs.svg";
import ZustandLogo from "@/assets/brand/zustand.svg";
import ZustandBgLogo from "@/assets/brand-patterns/zustand.svg";
import TailwindLogo from "@/assets/brand/tailwindcss.svg";
import TailwindBgLogo from "@/assets/brand-patterns/tailwindcss.svg";
import Image from "next/image";

function TechCards() {
    return (
        <div className={cl.block}>
            <div className={cl.tech_grid_bg}></div>
            <div className={cl.next}>
                <div className={cl.next_content}>
                    <div className={cn(cl.title, "js-show-anim")}>
                        <Image className="w-30 h-auto sm:w-40" width={150} height={30} src={NextJsLogo.src} alt="" />
                        <span className={cl.small}>by Vercel</span>
                    </div>
                    <div className={cl.text}>
                        <p className="js-show-anim">
                            Leveraging Server Actions, App Router, and advanced SSR/SSG strategies to deliver instant
                            load times, flawless hydration, <span className={cl.accent}>top-tier SEO performance.</span>
                        </p>
                        <p className="js-show-anim">
                            The most common solution today.{" "}
                            <span className={cl.accent}>Used by some of the world&apos;s largest companies,</span>{" "}
                            Next.js enables you to create high-quality web applications with the power of React
                            components.
                        </p>
                    </div>
                    <div className={cl.logo_bg}></div>
                </div>
            </div>
            <div className={cl.vertical}>
                <div className={cn(cl.card, cl.react)}>
                    <div className={cl.title}>
                        <Image className="w-8 h-auto" width={32} height={32} src={ReactLogo.src} alt="" />
                        <strong>React</strong>
                    </div>
                    <p>
                        Building dynamic, <span className={cl.accent}>high-performance single-page applications</span>{" "}
                        using declarative rendering, custom hooks, and optimized component lifecycles.
                    </p>
                    <div className={cl.glow}></div>
                    <div className={cl.logo_bg} style={{ backgroundImage: `url(${ReactBgLogo.src})` }} />
                </div>

                <div className={cn(cl.card, cl.zustand)}>
                    <div className={cl.title}>
                        <Image className="w-8 h-auto" width={32} height={32} src={ZustandLogo.src} alt="" />
                        <strong>Zustand</strong>
                    </div>
                    <p>
                        <span className={cl.accent}>Minimalist and lightning-fast state management.</span> A sleek,
                        hook-based store that eliminates unnecessary boilerplate, slashes re-render counts.
                    </p>
                    <div className={cl.glow}></div>
                    <div className={cn(cl.logo_bg)} style={{ backgroundImage: `url(${ZustandBgLogo.src})` }}></div>
                </div>

                <div className={cn(cl.card, cl.tailwind)}>
                    <div className={cl.title}>
                        <Image className="w-8 h-auto" width={54} height={33} src={TailwindLogo.src} alt="" />
                        <strong>Tailwind</strong>
                    </div>
                    <p>
                        Writing maintainable, <span className={cl.accent}>lightweight styles</span> directly in markup,
                        leveraging the powerful new v4 engine for design token orchestrations.
                    </p>
                    <div className={cl.glow}></div>
                    <div className={cl.logo_bg} style={{ backgroundImage: `url(${TailwindBgLogo.src})` }} />
                </div>
            </div>
        </div>
    );
};

export default TechCards;