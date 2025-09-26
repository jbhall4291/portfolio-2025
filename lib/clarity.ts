// lib/clarity.ts
export function clarityEvent(name: string, props?: Record<string, any>) {
    // @ts-ignore
    window.clarity?.("event", name, props ?? {});
}
