"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LegalIntakeForm from "@/components/LegalIntakeForm";
import { Sparkles } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState<Record<string, unknown> | null>(
    null,
  );

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative h-[calc(100vh-64px)]">
        {/* Expanding Icon Rail (Left Edge on Desktop) */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full h-full overflow-hidden flex">
          <div className="w-full h-full">
            {!formData ? (
              <LegalIntakeForm onComplete={setFormData} />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-10 animate-in fade-in zoom-in duration-500 bg-card text-card-foreground">
                <Sparkles className="text-brand-500 mb-4" size={48} />
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Assessment Submitted
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Your technical profile has been captured. The results
                  interface is currently being redesigned for the next phase.
                </p>
                <button
                  onClick={() => setFormData(null)}
                  className="mt-8 px-6 py-2.5 rounded-xl text-sm font-semibold text-foreground bg-card text-card-foreground border border-border hover:border-brand-400 hover:text-brand-700 shadow-sm transition-all"
                >
                  Restart Assessment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
