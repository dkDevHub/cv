"use client"
import { Card } from "@/components/atomic/card/Card";
import cl from "./TechAdd.module.css"
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

const additionalSkills: string[] = [
    "Advanced CSS (:has, :not, ...)",
    "CSS flex",
    "Async javascript",
    "UI libraries",
    "Base UI",
    "Lighthouse analytics",
    "Rest API",
    "Redux",
    "shadcn/ui",
    "Maxing Lighthouse",
    "Daisy UI",
    "React Context API",
    "Web Performance Optimization",
    "React Optimization",
    "Debouncing & Throttling",
    "Intersection Observer API",
    "CSS Grid Layouts",
    "Adaptive Design",
    "Responsive Design",
    "Bun.js runtime",
    "Git version control (Gitflow)",
    "Shiki syntax highlighting",
    "Redux Toolkit",
    "Promise API",
    "Theming",
    "i18n",
    "WebSockets",
    "Canvas API",
];

const [upperSkills, lowerSkills] = additionalSkills.reduce<[string[], string[]]>(
    (acc, skill, index) => {
        acc[index % 2].push(skill);
        return acc;
    },
    [[], []],
);

function TechAdd() {    
    return (
        <div className={cl.tech_add}>
            <div className={cl.cards}>
                <Marquee className={cn("w-full py-1", cl.marquee)}>
                    {upperSkills.map((skill, index) => (
                        <div key={index} className="px-0.5 sm:px-1">
                            <Card>{skill}</Card>
                        </div>
                    ))}
                </Marquee>
                <Marquee className={cn("w-full py-1", cl.marquee)} speed={35}>
                    {lowerSkills.map((skill, index) => (
                        <div key={index} className="px-0.5 sm:px-1">
                            <Card>{skill}</Card>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TechAdd;