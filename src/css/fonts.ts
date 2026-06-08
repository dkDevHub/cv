import { Outfit, Raleway, Merriweather, Noto_Color_Emoji } from "next/font/google";

export const ralewayFont = Raleway({
    display: "swap",
    variable: "--font-raleway",
    subsets: ["latin-ext", "cyrillic-ext"],
});

export const outfitFont = Outfit({
    display: "swap",
    variable: "--font-outfit",
    subsets: ["latin-ext"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const merriweatherFont = Merriweather({
    display: "swap",
    variable: "--font-lora",
    subsets: ["latin-ext", "cyrillic-ext"],
    weight: ["400", "500", "600", "700"],
});

export const notoColorEmojiFont = Noto_Color_Emoji({
    display: "swap",
    variable: "--font-noto-color-emoji",
    subsets: ["emoji"],
    weight: "400",
});

export const connectFontClass = `${outfitFont.variable} ${merriweatherFont.variable} ${ralewayFont.variable} ${notoColorEmojiFont.variable}`;
