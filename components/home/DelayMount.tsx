
// components/DelayMount.tsx
"use client";
import * as React from "react";

export function DelayMount({ delayMs = 1000, children }: { delayMs?: number; children: React.ReactNode }) {
    const [ready, setReady] = React.useState(false);
    React.useEffect(() => {
        const id = setTimeout(() => setReady(true), delayMs);
        return () => clearTimeout(id);
    }, [delayMs]);
    return ready ? <>{children}</> : null;
}
