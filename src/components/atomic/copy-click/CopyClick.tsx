"use client";

import { ReactNode, useRef } from "react";
import cl from "./CopyClick.module.css";

interface Props {
    copyText: string;
    children: ReactNode;
}

const keyframes = [
    { opacity: 0, transform: "translate(-50%, 0) scale(0.9)" },
    { opacity: 1, transform: "translate(-50%, -4px) scale(1)", offset: 0.25 },
    { opacity: 0, transform: "translate(-50%, -12px) scale(1)" },
];

const options: KeyframeAnimationOptions = {
    duration: 600,
    easing: "ease-out",
    fill: "forwards",
};

function CopyClick({ children, copyText }: Props) {
    const labelRef = useRef<HTMLSpanElement>(null);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText);

            const label = labelRef.current;
            if (!label) return;

            label.animate(keyframes, options);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <span className={cl.copy} onClick={handleCopy}>
            <span className={cl.text}>{children}</span>
            <span ref={labelRef} className={cl.label}>
                Copied
            </span>
        </span>
    );
}

export default CopyClick;
