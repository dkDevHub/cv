import Image from "next/image";
import cl from "./Education.module.css"
import { cn } from "@/lib/utils";
import LntuImage from "@/assets/lntu-logo.png";

function Education() {
    return (
        <div className={cl.education}>
            <span className={cn("text-lg sm:h4 font-semibold text-foreground/40 js-show-anim", cl.bottom_text)}>
                {"Bachelor's Degree from"}
            </span>
            <div className={cl.edu_title}>
                <Image
                    className={cn(cl.edu_img, cl.glow_logo, "js-show-anim")}
                    src={LntuImage.src}
                    width={100}
                    height={100}
                    alt="lntu"
                />
                <h2 className="h1 js-show-anim">
                    <span className={cl.glow}>Lutsk National Technical University </span>
                    <span className={cn("text-gradient from-indigo-800 to-blue-900", cl.glow_logo)}>LNTU</span>
                </h2>
            </div>
            <div className={cl.bottom_text}>
                <span className="text-foreground js-show-anim">Computer science specialty </span>
                <span className="text-foreground/40 js-show-anim">September 2021 - June 2025</span>
            </div>
        </div>
    );
};

export default Education;