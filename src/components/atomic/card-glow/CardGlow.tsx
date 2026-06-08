import { ReactNode } from "react";
import cl from "./CardGlow.module.css"
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode;
    className?: string;
}

function CardGlow({ children, className }: Props) {
    return (
        <div className={cn(cl.card_glow, className)}>
            <div className={cl.bg}></div>
            <div className={cl.content}>{children}</div>
        </div>
    );
};

export default CardGlow;