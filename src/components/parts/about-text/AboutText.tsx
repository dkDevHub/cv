import cl from "./AboutText.module.css"
import { cn } from "@/lib/utils";
import Image from "next/image";
import TelegramImg from "@/assets/brand/tg.svg";
import CopyClick from "@/components/atomic/copy-click/CopyClick";
import GitHubImg from "@/assets/brand/github.png";

function AboutText() {
    return (
        <div className={cl.text_block}>
            <div className={cl.exp}>
                <strong className={cn("h2 js-show-anim", cl.glow)}>2 years</strong>
                <div className="flex flex-col text-sm lg:text-base">
                    <span className="text-foreground/40 js-show-anim">of commercial experience</span>
                    <span className="text-foreground/40 js-show-anim">20+ projects</span>
                </div>
            </div>
            <div className={cl.exp}>
                <strong className={cn("h2 js-show-anim", cl.glow)}>Contacts</strong>
                <div className="flex  flex-col sm:gap-4 sm:flex-row">
                    <span className="text-foreground/40 text-sm lg:text-base js-show-anim flex gap-2">
                        <CopyClick copyText="@dkcorpp">@dkcorpp</CopyClick>
                        <Image
                            className="translate-y-px opacity-80"
                            width={16}
                            height={16}
                            src={TelegramImg.src}
                            alt="telegram"
                        />
                    </span>
                    <span className="text-foreground/40 text-sm lg:text-base js-show-anim flex gap-2">
                        <a
                            href="https://github.com/dkDevHub"
                            target="_blank"
                            className="flex gap-2 items-center transition-colors hover:text-foreground"
                        >
                            <span>dkDevHub</span>
                            <Image
                                className="translate-y-px opacity-80"
                                width={16}
                                height={16}
                                src={GitHubImg.src}
                                alt="github"
                            />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AboutText;