"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Loader2, Info } from "lucide-react";
import CitationCard from "./CitationCard";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  statusUpdates?: string[];
  citations?: { source: string; section: string; url: string }[];
}

export default function ChatInterface({
  formData,
}: {
  formData: { applicantType?: string; [key: string]: unknown };
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(true); // Starts true for initial processing
  const [currentStatus, setCurrentStatus] = useState<string | null>(null);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentStatus]);

  // Initial processing simulation based on form data
  useEffect(() => {
    const processInitialAssessment = async () => {
      const statuses = [
        "Analyzing Entity Profile against Biological Diversity Act...",
        "Evaluating Formulation Source for Section 3(p) Bar...",
        "Cross-referencing Botanical Ingredients with NTAC Registry...",
        "Generating comprehensive initial legal assessment...",
      ];

      for (let i = 0; i < statuses.length; i++) {
        setCurrentStatus(statuses[i]);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      setCurrentStatus(null);

      setMessages([
        {
          id: "1",
          role: "assistant",
          content: `Based on your profile, I have generated an initial legal assessment.\n\n**Key Findings:**\n1. Since you are an **${formData.applicantType || "Applicant"}**, your ABS (Access & Benefit Sharing) obligations fall under the National Biodiversity Authority.\n2. Your textual source indicates this is a Classical Medicine. Therefore, you **cannot** obtain a product patent under Section 3(p) of the Patents Act.\n3. However, since you selected an innovative extraction process, you may be eligible for a **process patent**.\n\nDo you have any specific questions about this assessment or how to proceed with filing?`,
          citations: [
            {
              source: "The Patents Act, 1970",
              section: "Section 3(p) - What are not inventions",
              url: "#",
            },
            {
              source: "Biological Diversity Act, 2002",
              section: "Section 3(2) - Prior approval for certain persons",
              url: "#",
            },
          ],
        },
      ]);
      setIsTyping(false);
    };

    if (formData) {
      processInitialAssessment();
    }
  }, [formData]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, newUserMsg]);
    setInput("");
    setIsTyping(true);

    const statuses = [
      "Querying LAURA Legal Knowledge Graph...",
      "Analyzing precedent case law...",
      "Synthesizing guidance...",
    ];

    for (let i = 0; i < statuses.length; i++) {
      setCurrentStatus(statuses[i]);
      await new Promise((resolve) => setTimeout(resolve, 1500));
    }

    setCurrentStatus(null);
    setIsTyping(false);

    const newAssistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content:
        "This is a placeholder response. In the actual integration, LAURA will utilize the vector database and LLM to provide a highly accurate, cited response based specifically on the context of your question.",
    };

    setMessages((prev) => [...prev, newAssistantMsg]);
  };

  return (
    <div className="w-full mx-auto h-[calc(100vh-8rem)] flex flex-col formal-panel rounded-2xl overflow-hidden animate-in slide-in-from-bottom-8 duration-500 mt-2">
      {/* Disclaimer Header */}
      <div className="bg-brand-50/50 px-4 py-2 border-b border-brand-100 flex items-center justify-center gap-2 text-xs text-brand-700 font-medium">
        <Info size={14} />
        LAURA provides regulatory information, not legal advice.
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white/40 dark:bg-slate-800/40">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] p-5 rounded-2xl shadow-sm border ${
                msg.role === "user"
                  ? "bg-gradient-to-br from-brand-500 to-brand-accent border-brand-600 text-white rounded-tr-sm"
                  : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm"
              }`}
            >
              <div className="whitespace-pre-wrap leading-relaxed text-[15px] prose prose-slate">
                {msg.content}
              </div>

              {/* Citations block */}
              {msg.citations && msg.citations.length > 0 && (
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Citations & Authorities
                  </span>
                  <div className="mt-3 space-y-2">
                    {msg.citations.map((cit, idx) => (
                      <CitationCard
                        key={idx}
                        source={cit.source}
                        section={cit.section}
                        url={cit.url}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Real-time Status Ping UI */}
        {currentStatus && (
          <div className="flex justify-start animate-in fade-in">
            <div className="max-w-[80%] p-3 px-5 rounded-xl bg-white dark:bg-slate-900 border border-brand-100 text-brand-600 shadow-sm flex items-center gap-3">
              <Loader2 className="animate-spin" size={16} />
              <span className="text-sm font-semibold animate-pulse">
                {currentStatus}
              </span>
            </div>
          </div>
        )}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-brand-100">
        <div className="relative flex items-center max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask a follow-up question regarding your assessment..."
            className="w-full formal-input rounded-xl py-4 pl-5 pr-14 text-slate-900 focus:outline-none shadow-inner"
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="absolute right-2 p-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-accent text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md hover:scale-105 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
