"use client"
import Spline from "@splinetool/react-spline";
import cl from "./Scene.module.css"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
    className?: string;
}

function Scene({ className }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className={cn(cl.scene, isLoaded && cl.loaded, className)}>
            <Spline scene="https://prod.spline.design/xwqDYBialmxhQV28/scene.splinecode" onLoad={() => setIsLoaded(true)}/>
        </div>
    );
}

export default Scene;
