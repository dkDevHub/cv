import { cn } from "@/lib/utils";
import cl from "./CurrantFocus.module.css"
import Image from "next/image";
import AstroImg from "@/assets/brand/astro.svg";
import BunImg from "@/assets/brand/bun.svg";

function CurrantFocus() {
    return (
        <div className={cl.currant_focus}>
            <div className={cl.title}>
                <h2 className="h2">Current general focus</h2>
                <span className="text-foreground/50">What I am learning now</span>
            </div>
            <div className={cl.info}>
                <div className={cl.exp}>
                    <strong className={cn("h2 js-show-anim", cl.glow)}>🇬🇧 English</strong>
                    <span className="text-foreground/40 md:text-lg js-show-anim">
                        Upper-Intermediate B2 • Fluent tech communication and documentation
                    </span>
                </div>
                <div className={cl.exp}>
                    <strong className={cn("h2 js-show-anim flex gap-2", cl.glow)}>
                        <Image width={32} height={32} src={BunImg.src} alt="bun" />
                        <span>Backend</span>
                    </strong>
                    <span className="text-foreground/40 md:text-lg js-show-anim">
                        Building powerful API with Bun.js Next-gen high-performance TypeScript ecosystem
                    </span>
                </div>
                <div className={cl.exp}>
                    <strong className={cn("h2 js-show-anim flex gap-2", cl.glow)}>
                        <Image className="translate-y-1 w-auto h-8" width={85} height={107} src={AstroImg.src} alt="astro" />
                        <span>Astro JS</span>
                    </strong>
                    <span className="text-foreground/40 md:text-lg js-show-anim">
                        Next-gen JavaScript web framework. Hyper performance / DX, future of frontend
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CurrantFocus;