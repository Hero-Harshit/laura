"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function ExpertEscalation() {
  return (
    <main className="min-h-screen pb-10 flex flex-col bg-background text-foreground">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        {/* Main Content Area - Centered */}
        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 pt-8 pb-12 overflow-x-hidden flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Blank as of now for Future Developments */}
            <div className="flex flex-col items-center justify-center h-[60vh] text-center formal-panel rounded-2xl p-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Expert Escalation
              </h2>
              <p className="text-muted-foreground max-w-md">
                This page is currently blank and will be updated in future
                developments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
