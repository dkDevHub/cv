import ScriptShowAnim from "@/components/atomic/script-show-anim/ScriptShowAnim";
import "@/css/app.css";
import { connectFontClass } from "@/css/fonts";
import { cn } from "@/lib/utils";

export const metadata = {
    title: "Dmytro / Frontend Developer",
    description: "Frontend developer with experience in React, Next.js, and TypeScript. Passionate about creating beautiful and functional web applications.",
};

interface Props {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" className={cn(`h-full antialiased`, connectFontClass)} data-theme="dark">
            <head>
                <noscript>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: `
                            .js-show-anim { 
                                opacity: 1 !important; 
                                transform: none !important; 
                                transition: none !important;
                            }`,
                        }}
                    />
                </noscript>
            </head>
            <body>{children}</body>
            <ScriptShowAnim />
        </html>
    );
}
