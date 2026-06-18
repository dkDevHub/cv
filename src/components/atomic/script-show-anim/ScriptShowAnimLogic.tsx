"use client";
import { useEffect } from "react";
import { isHeadlessBrowser } from "@/lib/utils";

export default function ScriptShowAnimLogic() {
    useEffect(() => {
        if (isHeadlessBrowser()) {
            document.querySelectorAll(".js-show-anim").forEach((el) => el.classList.remove("js-show-anim"));
            return;
        }

        const elements = document.querySelectorAll(".js-show-anim");
        if (elements.length === 0) return;

        const appearanceQueue: Element[] = [];
        let isProcessingQueue = false;

        const processQueue = (): void => {
            if (appearanceQueue.length === 0) {
                isProcessingQueue = false;
                return;
            }
            isProcessingQueue = true;
            const nextElement = appearanceQueue.shift();
            nextElement?.classList.add("visible");
            setTimeout(processQueue, 100);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const target = entry.target;
                    if (target.classList.contains("visible")) return;

                    if (entry.isIntersecting) {
                        if (!appearanceQueue.includes(target)) {
                            appearanceQueue.push(target);
                        }
                        if (!isProcessingQueue) processQueue();
                    } else {
                        const indexInQueue = appearanceQueue.indexOf(target);
                        if (indexInQueue !== -1) {
                            appearanceQueue.splice(indexInQueue, 1);
                            target.classList.add("visible");
                            observer.unobserve(target);
                        }
                    }
                });
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return null;
}
