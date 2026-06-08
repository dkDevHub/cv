"use client";
import { cn } from "@/lib/utils";
import cl from "./Button.module.css";
import type { VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";
import { useClassNameState } from "@/hooks/useClassNameState";
import { buttonVariants } from "./variants";

type Btn = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">

interface ButtonProps extends Btn, VariantProps<typeof buttonVariants> {
    isLoading?: boolean;
}

function Button({
    children,
    className = "",
    variant,
    size,
    disabled = false,
    isLoading = false,
    ...props
}: ButtonProps) {
    const loadingClass = useClassNameState(cl.button_loading, isLoading, 600);

    return (
        <button className={cn(className, buttonVariants({ variant, size, disabled }), loadingClass)} {...props}>
            <LoaderCircle size={20} strokeWidth={3} className={cl.loader} />
            {children}
        </button>
    );
}

export default Button;
