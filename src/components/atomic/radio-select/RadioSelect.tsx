"use client"
import { cn } from "@/lib/utils";
import cl from "./RadioSelect.module.css"
import { ReactElement } from "react";

interface RadioSelectProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    children: ReactElement<typeof RadioItem> | ReactElement<typeof RadioItem>[];
}

function RadioSelect({ children, className, ...props }: RadioSelectProps) {
    return (
        <fieldset
            {...props}
            className={cn(cl.radio_select, className)}
        >
            {children}
        </fieldset>
    );
};

interface RadioItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    checked?: boolean;
    isLoading?: boolean;
}

function RadioItem({ children, className, isLoading, ...props }: RadioItemProps) {
    const loadingClass = isLoading ? cl.loading : undefined;

    return (
        <label className={cn(cl.item, className, loadingClass)}>
            {children}
            <input type="radio" {...props} />
        </label>
    );
};

export { RadioSelect, RadioItem };