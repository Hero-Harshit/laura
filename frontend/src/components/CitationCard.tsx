"use client";

import { ExternalLink, ShieldCheck, Scroll } from "lucide-react";

interface CitationCardProps {
  source: string;
  section: string;
  url?: string;
  confidence?: "high" | "medium" | "low";
}

export default function CitationCard({
  source,
  section,
  url,
  confidence = "high",
}: CitationCardProps) {
  return (
    <div className="flex items-center justify-between p-3 my-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-gov-blue-600">
          <Scroll size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100">
            {source}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {section}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {confidence === "high" && (
          <div className="flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full border border-emerald-200">
            <ShieldCheck size={14} />
            Verified
          </div>
        )}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-gov-blue-600 hover:bg-gov-blue-50 transition-colors"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
