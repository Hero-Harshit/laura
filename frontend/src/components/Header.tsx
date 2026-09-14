"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <>
      <header className="bg-brand-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-brand-600 dark:border-white/20 fixed top-0 left-0 w-full h-[73px] z-50 pl-2 pr-6 flex items-center justify-between shadow-sm">
        <div className="w-12 h-12 flex items-center justify-center shrink-0">
          <div
            className="w-8 h-10 bg-slate-800 dark:bg-slate-100"
            style={{
              maskImage: "url(/emblem.svg)",
              WebkitMaskImage: "url(/emblem.svg)",
              maskSize: "contain",
              WebkitMaskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskPosition: "center",
              WebkitMaskPosition: "center",
            }}
          ></div>
        </div>

        <nav className="hidden md:flex items-center gap-2 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-brand-600 bg-brand-50/80 shadow-sm dark:bg-brand-900/20 dark:text-brand-400"
                    : "text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50/80 dark:hover:bg-zinc-900/50 hover:shadow-sm"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </header>
      {/* Spacer to prevent content from going under the fixed header */}
      <div className="h-[73px] w-full shrink-0"></div>
    </>
  );
}
