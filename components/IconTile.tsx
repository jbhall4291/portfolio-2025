// components/IconTile.tsx
type Props = {
    src: string;
    alt?: string;
    bg: string;   // brand/background colour
    pad?: number; // mobile padding in px (default 2)
    padLg?: number; // desktop padding in px (default = pad)
    hasBorder?: boolean;
};

export default function IconTile({ src, alt = "", bg, pad = 2, padLg, hasBorder }: Props) {
    return (
        // <div
        //     aria-hidden
        //     className="relative overflow-hidden pointer-events-none will-change-transform
        //          w-[56px] h-[56px] lg:w-[80px] lg:h-[80px]
        //          rounded-[8px] md:rounded-[10px]
        //          "
        //     style={{ background: bg }}
        // >
        //     <div
        //         className="absolute inset-0 p-[var(--pad)] lg:p-[var(--pad-lg)]"
        //         style={
        //             { ["--pad" as any]: `${pad}px`, ["--pad-lg" as any]: `${padLg ?? pad}px` }
        //         }
        //     >
        //         <img src={src} alt={alt} className="block w-full h-full" />
        //     </div>
        // </div>

        <div
            className={`pointer-events-auto rounded-xl z-30  w-[56px] h-[56px] lg:w-[80px] lg:h-[80px] hover:brightness-90 transition-all duration-500
                
                 ${hasBorder ? "border-2   border-foreground/5 dark:border-white" : ""}
                `}
            style={{ background: bg, padding: pad }}
        >

            <img src={src} alt={alt} className="block w-full h-full" />
        </div>



    );
}
