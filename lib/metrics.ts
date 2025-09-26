// lib/metrics.ts
export function trackGoat(name: string, data?: Record<string, any>) {
    if (typeof window === "undefined") return;
    const gc = (window as any).goatcounter;
    if (!gc || typeof gc.count !== "function") return;

    // GoatCounter doesn't have structured event props; we can stash a tiny payload in title.
    gc.count({
        path: name,          // shows as the event name
        event: true,         // mark as an event (not a pageview)
        title: data ? JSON.stringify(data) : undefined,
    });
}
