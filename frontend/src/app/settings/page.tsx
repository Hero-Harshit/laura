"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { Settings, Check, Palette } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();

  const themes = [
    {
      id: "saffron",
      name: "Kesari (Hindutva)",
      description:
        "Designed to help you achieve absolute detachment from worldly desires, except for the desire to have a really vibrant & paavan (scared) user interface Filled with Bhagwaness (orange). Jai Shree Ram.",
      colors: ["bg-orange-500", "bg-orange-200", "bg-white"],
      image: "/themes/Kesari.jpg",
    },
    {
      id: "blue",
      name: "Pragati (Bhim)",
      description:
        "Channel the profound, uncompromising intellect required to draft an entire national constitution. A deeply logical theme where every single pixel is guaranteed equal rights. Jai Bhim, Jai Bharat.",
      colors: ["bg-blue-800", "bg-blue-300", "bg-white"],
      image: "/themes/Pragati.jpg",
    },
    {
      id: "green",
      name: "Samriddhi (Ummah)",
      description:
        "Fostering a profound sense of universal brotherhood and global solidarity. The world could not have been anymore peaceful without you'll in it. Allah Hu Akbar.",
      colors: ["bg-green-800", "bg-green-500", "bg-white"],
      image: "/themes/Samriddhi.png",
    },
    {
      id: "dark",
      name: "Andhakar (Dark)",
      description:
        "Embrace the cosmic void. For those moments when you realize all digital interfaces are merely Maya (an illusion), and you'd really just prefer to spare your corneas from the blinding light of reality. Andhera Kaayam Rahe.",
      colors: ["bg-slate-800", "bg-slate-600", "bg-black"],
      image: "/themes/Andhakar.jpg",
    },
  ] as const;

  return (
    <main className="min-h-screen flex flex-col transition-colors duration-300">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 flex justify-center items-center py-20">
          <div className="w-full max-w-5xl flex flex-col animate-in fade-in zoom-in duration-500">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-400 to-brand-accent shadow-lg shadow-brand-500/20 flex items-center justify-center text-white">
                <Settings size={28} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight">
                  Settings
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">
                  Manage your application preferences
                </p>
              </div>
            </div>

            <div className="formal-panel p-8 rounded-2xl w-full">
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-2">
                <Palette size={20} className="text-brand-500" />
                Appearance & Theme
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {themes.map((t) => {
                  const isActive = theme === t.id;

                  return (
                    <button
                      key={t.id}
                      onClick={() =>
                        setTheme(t.id as "saffron" | "dark" | "blue" | "green")
                      }
                      className={`group relative text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                        isActive
                          ? "border-brand-500 bg-brand-50/50 dark:bg-brand-900/20 shadow-md shadow-brand-500/10"
                          : "border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 hover:border-brand-300 dark:hover:border-slate-600 hover:shadow-sm"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute top-4 right-4 text-brand-500 bg-brand-100 dark:bg-brand-900/50 rounded-full p-1 shadow-sm">
                          <Check size={16} strokeWidth={3} />
                        </div>
                      )}

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 shadow-sm border border-slate-200/50 dark:border-slate-700/50 relative">
                          <Image
                            src={t.image}
                            alt={t.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg">
                          {t.name}
                        </h3>
                      </div>

                      <p className="text-sm text-slate-500 dark:text-slate-400 min-h-[40px]">
                        {t.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
