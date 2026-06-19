"use client"
//import Spline from "@splinetool/react-spline";
import cl from "./Scene.module.css"
import { useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Props {
    className?: string;
}

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
});

function Scene({ className }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const isMobile = useMediaQuery("(max-width: 640px)");

    if (isMobile) return null;

    return (
        <div className={cn(cl.scene, isLoaded && cl.loaded, className)}>
            <Spline
                scene="https://prod.spline.design/xwqDYBialmxhQV28/scene.splinecode"
                onLoad={() => setIsLoaded(true)}
            />
        </div>
    );
}

export default Scene;
