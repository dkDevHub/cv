"use client"
import Image from "next/image";
//import Marquee from "react-fast-marquee";
import NextJsLogo from "@/assets/brand/nextjs-icon.svg";
import NodeJsLogo from "@/assets/brand/nodejs.svg";
import ShadcnLogo from "@/assets/brand/shadcn.svg";
import ZustandLogo from "@/assets/brand/zustand.svg";
import TsLogo from "@/assets/brand/ts.svg";
import TailwindLogo from "@/assets/brand/tailwindcss.svg";
import dynamic from "next/dynamic";

const Marquee = dynamic(() => import("react-fast-marquee"), {
    ssr: false,
});

function BrandMarquee() {
    return (
        <Marquee className="h-9">
            <div className="w-full px-3 py-[2px]">
                <Image
                    className="w-[106px] h-8 object-cover object-center"
                    width={NodeJsLogo.width}
                    height={NodeJsLogo.height}
                    src={NodeJsLogo.src}
                    alt="nodejs"
                />
            </div>
            <div className="w-full px-3 py-[2px] flex items-center gap-1">
                <Image
                    className="w-7 h-7"
                    width={NextJsLogo.width}
                    height={NextJsLogo.height}
                    src={NextJsLogo.src}
                    alt="nextjs"
                />
                <span className="font-semibold text-lg text-foreground">Next.js</span>
            </div>
            <div className="w-full px-3 py-[2px] flex items-center gap-1">
                <Image
                    className="w-8 h-8 invert"
                    width={ShadcnLogo.width}
                    height={ShadcnLogo.height}
                    src={ShadcnLogo.src}
                    alt="shadcn"
                />
                <span className="font-semibold text-lg text-foreground">shadcn/ui</span>
            </div>
            <div className="w-full px-3 py-[2px] flex items-center gap-1">
                <Image
                    className="w-8 h-8"
                    width={ZustandLogo.width}
                    height={ZustandLogo.height}
                    src={ZustandLogo.src}
                    alt="zustand"
                />
                <span className="font-semibold text-lg text-foreground">Zustand</span>
            </div>
            <div className="w-full px-3 py-[2px] flex items-center gap-1">
                <Image
                    className="w-7 h-7"
                    width={TsLogo.width}
                    height={TsLogo.height}
                    src={TsLogo.src}
                    alt="typescript"
                />
                <span className="font-semibold text-lg text-foreground">TypeScript</span>
            </div>
            <div className="w-full px-3 py-[2px] flex items-center gap-1">
                <Image
                    className="w-8 aspect-[49/30]"
                    width={TailwindLogo.width}
                    height={TailwindLogo.height}
                    src={TailwindLogo.src}
                    alt="typescript"
                />
                <span className="font-semibold text-lg text-foreground">Tailwindcss</span>
            </div>
        </Marquee>
    );
}

export default BrandMarquee;
