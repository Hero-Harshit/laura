"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, UserPlus } from "lucide-react";
export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Assessment",
      href: "/dashboard",
      icon: (
        <svg
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="7" height="9" x="3" y="3" rx="1" />
          <rect width="7" height="5" x="14" y="3" rx="1" />
          <rect width="7" height="9" x="14" y="12" rx="1" />
          <rect width="7" height="5" x="3" y="16" rx="1" />
        </svg>
      ),
    },
    {
      name: "Legal Corpus",
      href: "/corpus",
      icon: (
        <svg
          className="shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
    },
    {
      name: "Expert Escalation",
      href: "/expert-escalation",
      icon: <UserPlus size={22} className="shrink-0" />,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: <Settings size={22} className="shrink-0" />,
    },
  ];

  return (
    <aside className="hidden lg:flex w-16 hover:w-64 fixed left-0 top-[73px] h-[calc(100vh-73px)] border-r border-brand-600 dark:border-white/20 bg-brand-50/80 dark:bg-zinc-950/80 backdrop-blur-xl z-50 flex-col pt-6 pb-1 gap-2 group transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden shadow-[1px_0_10px_rgba(0,0,0,0.02)]">
      <div className="px-2 w-full flex flex-col gap-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`w-full flex items-center h-12 rounded-xl active:scale-95 transition-all relative overflow-hidden group/btn ${
                isActive
                  ? "text-brand-600 bg-brand-50/80 shadow-sm dark:bg-brand-900/20 dark:text-brand-400"
                  : "text-slate-400 dark:text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm"
              }`}
              title={link.name}
            >
              <div className="w-12 h-12 flex items-center justify-center shrink-0">
                {link.icon}
              </div>
              <span className="ml-2 font-semibold text-sm tracking-wide whitespace-nowrap opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                {link.name}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto px-3 w-full flex flex-col items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
        <Link
          href="/team"
          className={`w-full flex items-center justify-center h-10 rounded-full border active:scale-95 transition-all duration-500 overflow-hidden ${
            pathname === "/team"
              ? "text-brand-600 bg-brand-500/10 border-brand-500/30 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] dark:text-brand-400"
              : "text-slate-400 dark:text-slate-500 border-transparent bg-transparent hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/30 hover:shadow-[0_0_15px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.08)]"
          }`}
          title="Team Codeveda"
        >
          <span className="font-bold text-sm tracking-wide whitespace-nowrap">
            Team Codeveda
          </span>
        </Link>
      </div>
    </aside>
  );
}
