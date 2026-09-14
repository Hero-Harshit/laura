"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function TeamCodeveda() {
  return (
    <main className="min-h-screen pb-10 flex flex-col bg-background text-foreground transition-colors duration-300">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        {/* Main Content Area - Centered */}
        <div className="flex-1 lg:ml-16 w-full px-4 lg:px-12 pt-8 pb-12 overflow-x-hidden flex justify-center">
          <div className="w-full max-w-4xl">
            {/* Blank as of now for Future Developments */}
            <div className="flex flex-col items-center justify-center h-[60vh] text-center formal-panel rounded-2xl p-10 animate-in fade-in zoom-in duration-500">
              <h2 className="text-3xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-accent">Team Codeveda</h2>
              <p className="text-muted-foreground max-w-md">
                This dedicated team page is currently empty but we will develop it in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
