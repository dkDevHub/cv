"use client";
import dynamic from "next/dynamic";

const DynamicLogic = dynamic(() => import("./ScriptShowAnimLogic"), {
    ssr: false,
});

export default function ScriptShowAnim() {
    return <DynamicLogic />;
}
