import Section from "@/components/templates/Section";
import cl from "./Hero.module.css"
import { cn } from "@/lib/utils";
import BrandMarquee from "@/components/atomic/brand-marquaee/BrandMarquee";
import { ChevronDown } from "lucide-react";
import CardMessage from "@/components/atomic/card-message/CardMessage";
import SplitText from "@/components/atomic/split-text/SplitText";
import Scene from "@/components/atomic/scene/Scene";
import { buttonVariants } from "@/components/atomic/button/variants";

interface Props {
    className?: string
}

function Hero({ className }: Props) {
    return (
        <Section className={cn(cl.hero, className)}>
            <div className={cl.container}>
                <div className={cl.content}>
                    {/* <SplitText>
                        <h1 className={`${cl.headline} hero-headline`} id="hero">
                            {"👋 I'm Dmytro"}
                            <br />
                            <span
                                className={
                                    cl.text_gr +
                                    " text-gradient from-[rgb(71,188,255)] from-20% via-[rgb(255,202,202)] to-[rgb(255,255,85)]"
                                }
                            >
                                Frontend
                            </span>{" "}
                            <span>developer</span>
                        </h1>
                    </SplitText> */}
                    <SplitText>
                        <h1 className={`${cl.headline} hero-headline`} id="hero">
                            <span className="hidden sm:inline">👋</span>
                            <span>{" I'm Dmytro"}</span>
                            <br />
                            <span
                                className={
                                    cl.text_gr +
                                    " text-gradient from-[rgb(71,188,255)] from-20% via-[rgb(255,202,202)] to-[rgb(255,255,85)]"
                                }
                            >
                                Frontend
                            </span>
                            <span>{" developer"}</span>
                        </h1>
                    </SplitText>
                    <p className={cn(cl.subtitle, "js-show-anim")}>
                        with experience in React, Next.js, and TypeScript. Passionate about creating beautiful and
                        functional web applications.
                    </p>

                    <div className="js-show-anim">
                        <a href="#tech" className={cn("mt-12 w-60 !shadow-lg shadow-primary/33", buttonVariants())}>
                            More <ChevronDown size="22" strokeWidth={2.25} />
                        </a>
                    </div>

                    <div className={cl.bottom}>
                        <div className={cl.marquee + " bg-liquid-glass"}>
                            <BrandMarquee />
                        </div>
                    </div>

                    {/* <div className={cl.cards}>
                        <Card className="js-show-anim" title="🎯 Core / focus">
                            <span>
                                React & TypeScript Engineering, building scalable, type-safe web applications with
                                pixel-perfect UI.
                            </span>
                        </Card>

                        <Card className="js-show-anim" title="⚡️ Modern solutions">
                            <span>Leveraging modern tech stack for maximum development speed and performance.</span>
                        </Card>

                        <Card className="js-show-anim" title="✨ UX Philosophy">
                            <span>Clean code, instant response times, and interactions that feel natural.</span>
                        </Card>
                    </div> */}
                </div>

                <Scene className={cl.scene} />

                <div className={cl.messages}>
                    <CardMessage
                        classname={cn(cl.message1, "js-show-anim")}
                        name="John Doe"
                        comment="Nice site man 👍"
                        img="https://avatars.githubusercontent.com/u/8675906?v=4"
                    />
                    <CardMessage
                        classname={cn(cl.message2, "js-show-anim")}
                        name="Diana Tred"
                        comment="Amazing😍 solid work!"
                        img="https://avatars.githubusercontent.com/u/23707420?v=4"
                    />
                    <CardMessage
                        classname={cn(cl.message3, "js-show-anim")}
                        name="Petro Prihodko"
                        comment="Modern design fast ui. Great⚡️"
                        img="https://avatars.githubusercontent.com/u/124599?v=4"
                    />
                    {/* <CardMessage classname={cl.message4} name="Jack Piterson" comment="Make frontend great again." /> */}
                </div>

                <div className={cn(cl.fade, cl.fade_left)} />
                <div className={cn(cl.fade, cl.fade_right)} />
            </div>
            <div className={cn(cl.fade, cl.fade_bottom)} />
        </Section>
    );
};

export default Hero;