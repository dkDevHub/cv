"use client";
import { isHeadlessBrowser } from "@/lib/utils";
import { useEffect } from "react";

function ScriptShowAnim() {
    useEffect(() => {
        const isHeadless = isHeadlessBrowser()

        if (isHeadless) {
            document.querySelectorAll(".js-show-anim").forEach((el) => {
                el.classList.remove("js-show-anim");
            });
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

            setTimeout(() => {
                processQueue();
            }, 100);
        };

        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: "0px 0px -10% 0px",
            threshold: 0.05,
        };

        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                const target = entry.target;

                // Если элемент уже анимирован, полностью игнорируем его
                if (target.classList.contains("visible")) return;

                if (entry.isIntersecting) {
                    // МЕХАНИКА 1: Элемент зашел в экран — добавляем в очередь
                    if (!appearanceQueue.includes(target)) {
                        appearanceQueue.push(target);
                    }

                    // Сортируем очередь сверху вниз по физическому положению на странице
                    appearanceQueue.sort((a, b) => {
                        return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
                    });

                    if (!isProcessingQueue) {
                        processQueue();
                    }
                } else {
                    // МЕХАНИКА 2: Элемент ВЫШЕЛ из экрана (пользователь проскроллил мимо)
                    // Проверяем, находится ли он в очереди, которую мы еще не успели отрендерить
                    const indexInQueue = appearanceQueue.indexOf(target);

                    if (indexInQueue !== -1) {
                        // Удаляем его из плавной очереди, чтобы он не задерживал нижние элементы
                        appearanceQueue.splice(indexInQueue, 1);

                        // Включаем видимость мгновенно (втихаря за экраном)
                        target.classList.add("visible");

                        // Больше за ним следить не нужно
                        observer.unobserve(target);
                    }
                }
            });
        }, observerOptions);

        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return null;
}

export default ScriptShowAnim;
