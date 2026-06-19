import { Outfit, Raleway, Noto_Color_Emoji } from "next/font/google";

export const ralewayFont = Raleway({
    display: "swap",
    variable: "--font-raleway",
    subsets: ["latin"],
    weight: ["700"],
});

export const outfitFont = Outfit({
    display: "swap",
    variable: "--font-outfit",
    subsets: ["latin"],
    weight: ["500", "700"],
});

// export const notoColorEmojiFont = Noto_Color_Emoji({
//     display: "swap",
//     variable: "--font-noto-color-emoji",
//     subsets: ["emoji"],
//     weight: "400",
// });

export const connectFontClass = `${outfitFont.variable} ${ralewayFont.variable}`;
