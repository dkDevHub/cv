"use client"
//import Spline from "@splinetool/react-spline";
import cl from "./Scene.module.css"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

interface Props {
    className?: string;
}

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
});

function Scene({ className }: Props) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={cn(cl.scene, isLoaded && cl.loaded, className)}>
            <Spline scene="https://prod.spline.design/xwqDYBialmxhQV28/scene.splinecode" onLoad={() => setIsLoaded(true)}/>
        </div>
    );
}

export default Scene;
