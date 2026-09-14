"use client";

import { HelpCircle, Sparkles, Scale } from "lucide-react";

interface FieldHelperProps {
  title: string;
}

export default function FieldHelper({ title }: FieldHelperProps) {
  return (
    <div className="relative inline-flex items-center ml-3 align-middle group cursor-help z-20">
      <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600 dark:group-hover:bg-brand-900/40 dark:group-hover:text-brand-400 transition-all shadow-sm">
        <HelpCircle size={14} strokeWidth={2.5} />
      </div>

      {/* Tooltip Card (hidden by default, shown on group-hover) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[130%] mb-2 w-80 sm:w-96 p-6 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-brand-900/10 border border-slate-200/60 dark:border-slate-700/60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pointer-events-none transform translate-y-4 group-hover:translate-y-0 font-normal normal-case">
        {/* Subtle glowing accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50 rounded-t-2xl" />

        <div className="flex items-center gap-2 text-[11px] font-bold text-brand-600 dark:text-brand-400 uppercase tracking-widest mb-3">
          <Sparkles size={14} className="animate-pulse" />
          Regulatory Engine Context
        </div>

        <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-[16px] mb-3 leading-tight">
          {title}
        </h4>

        <div className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300 bg-slate-50/80 dark:bg-slate-950/80 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 mb-5 shadow-inner">
          <p>
            This field determines the regulatory pathway for &quot;{title}
            &quot;. The engine analyzes this to detect compliance triggers.
          </p>
        </div>

        <div>
          <h5 className="font-bold text-slate-900 dark:text-slate-200 text-[12px] uppercase tracking-wider mb-3 text-brand-600/80 border-b border-slate-100 dark:border-slate-800 pb-2">
            Active Statutes
          </h5>
          <ul className="space-y-3 text-[13px] text-slate-600 dark:text-slate-300 font-medium">
            <li className="flex gap-3 items-start">
              <Scale className="text-brand-500 shrink-0 mt-0.5" size={16} />
              <span>Drugs & Cosmetics Act, 1940</span>
            </li>
            <li className="flex gap-3 items-start">
              <Scale className="text-brand-500 shrink-0 mt-0.5" size={16} />
              <span>Biological Diversity Act, 2002</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
