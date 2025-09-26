// components/ClarityInit.tsx
"use client";

import { useEffect, useRef } from "react";
import clarity from "@microsoft/clarity";

export default function ClarityInit() {
    const started = useRef(false);

    useEffect(() => {
        if (started.current) return;
        started.current = true;

        clarity.init("tgzuqorfy3");
    }, []);

    return null;
}
