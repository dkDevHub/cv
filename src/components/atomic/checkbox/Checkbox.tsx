"use client";
import { cn } from "@/lib/utils";
import cl from "./Checkbox.module.css"
import { Check, LoaderCircle } from "lucide-react";
import { useClassNameState } from "@/hooks/useClassNameState";

interface Props
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    children: React.ReactNode;
    isLoading?: boolean;
}

function Checkbox({ className, children, isLoading = false, ...props }: Props) {
    const loadingClass = useClassNameState(cl.loading, isLoading, 500);

    return (
        <label className={cn(cl.checkbox, className, loadingClass)}>
            <input type="checkbox" {...props} />
            <div className={cl.status}>
                <Check size={14} strokeWidth={3.5} />
            </div>
            <LoaderCircle size={16} strokeWidth={3} className={cl.loader} />
            <span className={cl.children}>{children}</span>
        </label>
    );
};

export default Checkbox;