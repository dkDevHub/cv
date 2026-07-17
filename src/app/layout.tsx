import ScriptShowAnim from "@/components/atomic/script-show-anim/ScriptShowAnim";
import "@/css/app.css";
import { connectFontClass } from "@/css/fonts";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const SITE_URL = process.env.SITE_URL || "";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Dmytro | Frontend Developer",
        template: "%s | Dmytro",
    },
    description:
        "Dmytro is a frontend developer building fast, deliberate interfaces with TypeScript, Next.js, and Tailwind. Two years commercial experience, 20+ projects, LNTU CS graduate.",
    keywords: [
        "Frontend Developer",
        "React Developer",
        "Next.js Developer",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Web Performance",
        "Dmytro",
        "Portfolio",
    ],
    authors: [{ name: "Dmytro", url: "https://github.com/dkDevHub" }],
    creator: "Dmytro",
    openGraph: {
        type: "website",
        url: SITE_URL,
        title: "Dmytro | Frontend Developer",
        description:
            "Fast, deliberate interfaces in TypeScript, Next.js, and Tailwind. 2 years commercial experience, 20+ projects.",
        siteName: "Dmytro | Frontend Developer",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dmytro | Frontend Developer",
        description:
            "Fast, deliberate interfaces in TypeScript, Next.js, and Tailwind. 2 years commercial experience, 20+ projects.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dmytro",
    jobTitle: "Frontend Developer",
    url: SITE_URL,
    sameAs: [profile.githubUrl, profile.telegramUrl],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Lutsk National Technical University" },
    knowsAbout: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"],
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
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
            </head>
            <body>{children}</body>
            <ScriptShowAnim />
        </html>
    );
}
