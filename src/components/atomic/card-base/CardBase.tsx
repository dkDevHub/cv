import { ReactNode } from "react";
import cl from "./CardBase.module.css"
import { cn } from "@/lib/utils";

interface Props {
    children: ReactNode,
    className?: string
}

function CardBase({ children, className }: Props) {
    return <div className={cn(cl.card_base, className)}>{children}</div>;
};

export default CardBase;