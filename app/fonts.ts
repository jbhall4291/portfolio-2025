// app/fonts.ts
import localFont from "next/font/local";

export const saans = localFont({
    src: [{ path: "../public/fonts/saans/Saans-TRIAL-VF.woff2", weight: "100 900", style: "normal" }],
    variable: "--font-saans",
    display: "swap",
});
