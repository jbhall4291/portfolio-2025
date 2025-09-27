"use client";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { trackGoat } from "@/lib/metrics";


export default function CvButtons() {
    return (
        <div className="flex flex-row flex-wrap gap-3 shrink-0">
            <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg"
                onClick={() => trackGoat("cv_open")}
            >
                <a
                    href="/cv/Johnny_Hall_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ExternalLink />
                    Open CV
                </a>
            </Button>

            <Button
                asChild
                size="lg"
                className="text-lg"
                onClick={() => trackGoat("cv_download")}
            >
                <a href="/cv/Johnny_Hall_CV.pdf" download>
                    <Download />
                    Download CV (PDF)
                </a>
            </Button>
        </div>
    );
}
