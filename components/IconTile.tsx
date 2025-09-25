// components/IconTile.tsx
type Props = {
    src: string;
    alt?: string;
    bg: string;
    pad?: number;    // px value
    padLg?: number;  // px value
    hasBorder?: boolean;
};

export default function IconTile({ src, alt = "", bg, pad = 2, padLg, hasBorder }: Props) {
    return (

        <div
            className={`
        pointer-events-auto rounded-xl
        w-[52px] h-[52px] lg:w-[80px] lg:h-[80px]
         transition-all duration-300
        p-[var(--pad)] lg:p-[var(--pad-lg)]
        ${hasBorder ? "border-2 border-foreground/5 dark:border-white" : ""}
      `}
            style={
                {
                    background: bg,
                    // per-instance values:
                    ["--pad" as any]: `${pad}px`,
                    ["--pad-lg" as any]: `${padLg}px`,
                } as React.CSSProperties
            }
        >
            <img src={src} alt={alt} className="block w-full h-full" />
        </div>



    );
}
