"use client";

import { useState } from "react";
import { ArrowRight, Book, FlaskConical, Sparkles, Leaf } from "lucide-react";

type Category =
  "classical" | "proprietary" | "cosmetic" | "phytopharmaceutical" | null;

interface WizardProps {
  onComplete: (category: string) => void;
}

export default function ClassificationWizard({ onComplete }: WizardProps) {
  const [selected, setSelected] = useState<Category>(null);

  const categories = [
    {
      id: "classical",
      title: "Classical Medicine",
      description:
        "Formulation and method drawn exactly from a First-Schedule authoritative text.",
      icon: Book,
      color: "from-amber-600 to-orange-600",
    },
    {
      id: "proprietary",
      title: "Patent or Proprietary",
      description:
        "A novel formulation using traditional ingredients but with a new recipe.",
      icon: FlaskConical,
      color: "from-blue-600 to-indigo-600",
    },
    {
      id: "cosmetic",
      title: "Ayurvedic Cosmetic",
      description:
        "Intended for rubbing, pouring, sprinkling, or spraying for beautification.",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "phytopharmaceutical",
      title: "Phytopharmaceutical",
      description:
        "Purified and fractionated botanical extract with minimum 4 markers.",
      icon: Leaf,
      color: "from-emerald-500 to-forest",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-24 p-8 glass-panel rounded-3xl animate-in fade-in zoom-in duration-500">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-accent mb-4">
          What are you trying to protect?
        </h2>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Intellectual property strategy depends entirely on regulatory
          classification. Select the category that best describes your Ayurvedic
          product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isSelected = selected === cat.id;
          return (
            <div
              key={cat.id}
              onClick={() => setSelected(cat.id as Category)}
              className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                isSelected
                  ? "border-brand-400 bg-white dark:bg-slate-900 shadow-xl scale-[1.02]"
                  : "border-transparent bg-white/40 dark:bg-slate-800/40 hover:bg-white/60 dark:bg-slate-900/60 hover:border-white"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md`}
                >
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() => selected && onComplete(selected)}
          disabled={!selected}
          className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all ${
            selected
              ? "bg-gradient-to-r from-brand-500 to-brand-accent text-white shadow-lg hover:shadow-xl hover:-translate-y-1"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Begin Legal Analysis
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}
