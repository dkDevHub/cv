import cl from "./Button.module.css";
import { cva } from "class-variance-authority";

export const buttonVariants = cva(cl.button, {
    variants: {
        variant: {
            default: "",
            neutral: cl.button_neutral,
            outline: cl.button_outline,
            ghost: cl.button_ghost,
            shadow: cl.button_shadow,
        },
        size: {
            default: [],
            icon: cl.button_icon,
            "icon-sm": cl.button_icon_sm,
            "icon-xs": cl.button_icon_xs,
            sm: cl.button_sm,
        },
        disabled: {
            false: null,
            true: cl.button_disabled,
        },
        isLoading: {
            false: null,
            true: cl.button_loading,
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        disabled: false,
    },
});
