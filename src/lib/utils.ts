import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}


export const fetchWithTimeout = async (url: string, config: RequestInit, timeout: number) => {
    const controller = new AbortController();

    const id = setTimeout(() => {
        controller.abort();
        console.log("Запрос прерван по таймауту");
    }, timeout);

    try {
        const res = await fetch(url, {
            ...config,
            signal: controller.signal,
        });
        return res;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        if (error.name === "AbortError") {
            console.error("Fetch error: запрос был отменен");
        }
        throw error;
    } finally {
        clearTimeout(id);
    }
};

export const formatCryptoPrice = (price: string | number | null): string => {
    if (price === null) return "Loading..."

    const num = typeof price === "string" ? parseFloat(price) : price;
    if (isNaN(num)) return "Loading...";

    const formatted = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);

    return formatted.replace(",", ".").replace(/\u00a0/g, " ");
};

export const isHeadlessBrowser = () => {
    if (typeof window === "undefined") return false;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const anyWindow = window as any;
    const userAgent = navigator.userAgent.toLowerCase();
    

    const isHeadlessUA =
        userAgent.includes("headless") ||
        userAgent.includes("phantomjs") ||
        userAgent.includes("slimerjs") ||
        userAgent.includes("puppeteer");

    const hasLighthouseVar =
        !!anyWindow.__lighthouseUserAgentString ||
        !!anyWindow.__LighthouseTelemetryIds ||
        /Lighthouse|SpeedInsights|HeadlessChrome/i.test(navigator.userAgent) ||
        navigator.webdriver;

    return isHeadlessUA || hasLighthouseVar;
}