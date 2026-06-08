import { ReactNode } from "react";
import cl from "./Card.module.css"
import { cn } from "@/lib/utils";

interface Props {
    title?: string;
    children?: ReactNode;
    className?: string;
}

export function Card({ title, children, className }: Props) {
    return (
        <div className={cn(cl.card, className)}>
            {title && (
                <div className={cl.title}>
                    <span>{title}</span>
                </div>
            )}
            {children && <div className={cl.body}>{children}</div>}
        </div>
    );
}
