"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
  Activity,
  Leaf,
  FlaskConical,
  Globe,
  FileText,
  Target,
  Download,
  Share2,
} from "lucide-react";
import FieldHelper from "./FieldHelper";
import { MODULES } from "../data/modules";

interface LegalIntakeFormProps {
  onComplete: (data: Record<string, string | string[]>) => void;
}

interface LauraMessage {
  id: string;
  type: "info" | "warning" | "success";
  text: string;
}

// ----------------------------------------------------------------------------
// Memoized Sub-Components
// ----------------------------------------------------------------------------

const LiveProductDossier = React.memo(
  ({ formData }: { formData: Record<string, string | string[]> }) => {
    const ingredients = (formData["ingredients"] as string[]) || [];
    const productType = formData["finalForm"] as string;
    const claims = (formData["healthClaims"] as string[]) || [];
    const markets = (formData["targetMarkets"] as string[]) || [];
    
    const companyStructure = formData["companyStructure"] as string;
    const sourcingRegion = formData["sourcingRegion"] as string;

    // Calculate complexity
    let complexityScore = 5; // Base
    if (ingredients.includes("Red Sanders (Pterocarpus santalinus)"))
      complexityScore += 45;
    if (
      markets.includes("USA (FDA)") ||
      markets.includes("European Union (EMA)")
    )
      complexityScore += 35;
    if (claims.includes("Cures Diabetes / Cancer / Blindness"))
      complexityScore += 30;
    if (ingredients.includes("Sarpagandha (Rauvolfia serpentina)"))
      complexityScore += 20;
    if (ingredients.includes("Jatamansi (Nardostachys jatamansi)"))
      complexityScore += 20;
    if (companyStructure === "Contains Foreign Equity / NRI")
      complexityScore += 40; // Section 3 BD Act
    if (sourcingRegion === "Himalayan Belt")
      complexityScore += 15;

    const boundedScore = Math.min(complexityScore, 100);

    const complexityColor =
      boundedScore > 60
        ? "text-red-500"
        : boundedScore > 30
          ? "text-orange-500"
          : "text-green-500";
    const complexityBg =
      boundedScore > 60
        ? "bg-red-500"
        : boundedScore > 30
          ? "bg-orange-500"
          : "bg-green-500";

    return (
      <div className="flex flex-col gap-5 mt-6 w-full animate-in fade-in duration-500 relative z-10 pb-8">
        {/* Complexity Meter */}
        <div className="bg-white/60 dark:bg-slate-950/60 rounded-2xl p-5 border border-brand-200/50 dark:border-brand-800/50 backdrop-blur-md shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Activity size={14} className={complexityColor} /> Regulatory Risk
            </span>
            <span className={`text-[11px] font-black ${complexityColor}`}>
              {boundedScore}%
            </span>
          </div>
          <div className="w-full bg-slate-200/50 dark:bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
            <div
              className={`h-full ${complexityBg} transition-all duration-1000 ease-out`}
              style={{ width: `${boundedScore}%` }}
            />
          </div>
        </div>

        {/* Blueprint: Ingredients */}
        <div className="bg-white/60 dark:bg-slate-950/60 rounded-2xl p-5 border border-brand-200/50 dark:border-brand-800/50 backdrop-blur-md shadow-sm">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <Leaf size={14} className="text-brand-500" /> The Blueprint
          </div>
          <div className="flex flex-wrap gap-2 min-h-[30px]">
            {ingredients.length === 0 ? (
              <span className="text-[13px] text-slate-400 dark:text-slate-500 font-medium italic">
                Awaiting ingredients...
              </span>
            ) : (
              ingredients.map((ing, i) => {
                const shortName = ing.split(" ")[0];
                return (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 rounded-xl text-[12px] font-bold animate-in zoom-in duration-300 shadow-sm border border-brand-200/50 dark:border-brand-800/50"
                  >
                    {shortName}
                  </span>
                );
              })
            )}
          </div>
        </div>

        {/* Architecture: Format */}
        <div className="bg-white/60 dark:bg-slate-950/60 rounded-2xl p-5 border border-brand-200/50 dark:border-brand-800/50 backdrop-blur-md shadow-sm">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <FlaskConical size={14} className="text-brand-500" /> Architecture
          </div>
          <div className="flex items-center min-h-[40px]">
            {productType ? (
              <div className="flex items-center gap-3 animate-in slide-in-from-left-4 duration-300">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center shadow-md shadow-brand-500/20">
                  <FlaskConical size={20} className="text-white" />
                </div>
                <span className="font-bold text-[13px] text-slate-800 dark:text-slate-200 leading-tight">
                  {productType}
                </span>
              </div>
            ) : (
              <span className="text-[13px] text-slate-400 dark:text-slate-500 font-medium italic">
                Pending format...
              </span>
            )}
          </div>
        </div>

        {/* Reach: Markets */}
        <div className="bg-white/60 dark:bg-slate-950/60 rounded-2xl p-5 border border-brand-200/50 dark:border-brand-800/50 backdrop-blur-md shadow-sm">
          <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
            <Globe size={14} className="text-brand-500" /> The Reach
          </div>
          <div className="flex flex-col gap-3 min-h-[30px]">
            {markets.length === 0 ? (
              <span className="text-[13px] text-slate-400 dark:text-slate-500 font-medium italic">
                No markets selected...
              </span>
            ) : (
              markets.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 animate-in slide-in-from-right-4 duration-300"
                >
                  <Globe
                    size={16}
                    className="text-brand-500 dark:text-brand-400"
                  />
                  <span className="font-bold text-[13px] text-slate-700 dark:text-slate-300">
                    {m}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  },
);
LiveProductDossier.displayName = "LiveProductDossier";

const ActionBlock = React.memo(
  ({
    optionLabel,
    optionDescription,
    isSelected,
    type,
    name,
    onRadioChange,
    onCheckboxChange,
  }: {
    optionLabel: string;
    optionDescription: string;
    isSelected: boolean;
    type: string;
    name: string;
    onRadioChange: (name: string, val: string) => void;
    onCheckboxChange: (name: string, val: string, checked: boolean) => void;
  }) => {
    // Highlight visually dangerous options for the demo
    const isDangerous =
      optionLabel.includes("Cures Diabetes") ||
      optionLabel.includes("Red Sanders") ||
      optionLabel.includes("Jatamansi") ||
      optionLabel.includes("Sarpagandha");

    return (
      <label
        className={`relative flex flex-col p-5 cursor-pointer transition-all border-2 rounded-xl ${
          isSelected
            ? isDangerous
              ? "border-red-500 bg-red-50 dark:bg-red-950/20"
              : "border-brand-500 bg-brand-50 dark:bg-brand-950/30 ring-4 ring-brand-500/10"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-brand-300 dark:hover:border-brand-700"
        }`}
      >
        <input
          type={type}
          name={name}
          value={optionLabel}
          checked={isSelected}
          onChange={(e) => {
            if (type === "radio") {
              onRadioChange(name, optionLabel);
            } else {
              onCheckboxChange(name, optionLabel, e.target.checked);
            }
          }}
          className="sr-only"
        />

        {isSelected && (
          <div
            className={`absolute top-4 right-4 ${
              isDangerous ? "text-red-500" : "text-brand-600 dark:text-brand-400"
            }`}
          >
            {isDangerous ? (
              <AlertTriangle size={24} strokeWidth={2.5} />
            ) : (
              <CheckCircle2 size={24} strokeWidth={2.5} />
            )}
          </div>
        )}

        <div className="pr-10">
          <div
            className={`text-[16px] font-bold mb-1.5 ${
              isSelected
                ? isDangerous
                  ? "text-red-700 dark:text-red-400"
                  : "text-brand-900 dark:text-brand-100"
                : "text-slate-800 dark:text-slate-200"
            }`}
          >
            {optionLabel}
          </div>

          <div
            className={`text-sm leading-relaxed ${
              isSelected
                ? isDangerous
                  ? "text-red-600/80 dark:text-red-300/80"
                  : "text-brand-800/80 dark:text-brand-300/80"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {optionDescription}
          </div>
        </div>
      </label>
    );
  },
);
ActionBlock.displayName = "ActionBlock";

// ----------------------------------------------------------------------------
// Main Component (3-Column Layout)
// ----------------------------------------------------------------------------

export default function LegalIntakeForm({ onComplete }: LegalIntakeFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string | string[]>>(
    {},
  );
  const [isCompleted, setIsCompleted] = useState(false);
  const [lauraMessages, setLauraMessages] = useState<LauraMessage[]>([
    {
      id: "welcome",
      type: "info",
      text: "Hi! I'm Laura, your AI regulatory co-pilot. I'll monitor your choices in real-time to prevent compliance risks. Let's build your product!",
    },
  ]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const currentModule = MODULES[currentStep];
  const isLastStep = currentStep === MODULES.length - 1;

  // Real-time AI Co-Pilot Logic
  useEffect(() => {
    const newMessages: LauraMessage[] = [];
    const ingredients = formData["ingredients"] || [];
    const claims = formData["healthClaims"] || [];

    if (ingredients.includes("Red Sanders (Pterocarpus santalinus)")) {
      newMessages.push({
        id: "rs",
        type: "warning",
        text: "Wait! Red Sanders is highly endangered. This triggers strict National Biodiversity Authority (NBA) approval.",
      });
    }
    if (ingredients.includes("Ashwagandha (Withania somnifera)")) {
      newMessages.push({
        id: "ash",
        type: "success",
        text: "Ashwagandha is a great choice! It's generally safe and well-documented in classical texts.",
      });
    }
    if (claims.includes("Cures Diabetes / Cancer / Blindness")) {
      newMessages.push({
        id: "claim-warn",
        type: "warning",
        text: "ALERT: Claiming to cure Diabetes violates the Drugs & Magic Remedies Act. This could result in product recall.",
      });
    }
    if (claims.includes("Boosts Immunity & General Wellness")) {
      newMessages.push({
        id: "claim-ok",
        type: "success",
        text: "General wellness claims are perfectly safe and ASCI compliant!",
      });
    }

    // Deduplicate and append new messages
    if (newMessages.length > 0) {
      setLauraMessages((prev) => {
        const unique = newMessages.filter(
          (nm) => !prev.some((pm) => pm.id === nm.id),
        );
        return [...prev, ...unique];
      });
    }
  }, [formData]);

  // Auto-scroll Laura chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lauraMessages]);

  const handleRadioChange = useCallback((fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  }, []);

  const handleCheckboxChange = useCallback(
    (fieldName: string, value: string, checked: boolean) => {
      setFormData((prev) => {
        const currentList = (prev[fieldName] as string[]) || [];
        if (checked) {
          return { ...prev, [fieldName]: [...currentList, value] };
        } else {
          return {
            ...prev,
            [fieldName]: currentList.filter((v: string) => v !== value),
          };
        }
      });
    },
    [],
  );

  const handleNext = useCallback(() => {
    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [isLastStep]);

  // Render Final Climax Export Screen
  if (isCompleted) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 animate-in fade-in zoom-in-95 duration-500 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl w-full bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl shadow-brand-500/20 border border-slate-200/60 dark:border-slate-800 flex flex-col z-10 overflow-hidden">
          {/* Document Header */}
          <div className="bg-gradient-to-r from-brand-600 to-brand-800 p-8 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 p-8 opacity-10">
              <FileText size={250} />
            </div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-brand-500/30 flex items-center justify-center backdrop-blur-md">
                <ShieldCheck size={20} className="text-white" />
              </div>
              <span className="font-extrabold tracking-widest uppercase text-xs text-brand-200">
                Assessment Complete
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 relative z-10">
              Regulatory Strategy Dossier
            </h1>
            <p className="text-brand-100/90 max-w-xl leading-relaxed text-lg relative z-10 font-medium">
              Your initial product profile has been successfully generated. Use
              this document as a foundation for your official compliance
              strategy.
            </p>
          </div>

          {/* Document Body */}
          <div className="p-8 lg:p-14 flex flex-col gap-8 bg-white dark:bg-slate-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Box */}
              <div className="bg-slate-50 dark:bg-slate-950/50 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm">
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <Leaf size={14} className="text-brand-500" /> Product
                  Composition
                </h3>
                <ul className="space-y-3">
                  {((formData["ingredients"] as string[]) || []).length > 0 ? (
                    (formData["ingredients"] as string[]).map((ing, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 font-semibold text-slate-800 dark:text-slate-200 text-sm leading-snug"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-brand-500 shrink-0 mt-0.5"
                        />{" "}
                        {ing}
                      </li>
                    ))
                  ) : (
                    <li className="text-slate-500 text-sm italic">
                      None selected
                    </li>
                  )}
                </ul>
              </div>

              {/* Right Box */}
              <div className="bg-slate-50 dark:bg-slate-950/50 p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800 shadow-sm flex flex-col gap-6">
                <div>
                  <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <FlaskConical size={14} className="text-brand-500" />{" "}
                    Architecture
                  </h3>
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-lg">
                    {formData["finalForm"] || "Not specified"}
                  </span>
                </div>
                <div>
                  <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Target size={14} className="text-brand-500" /> Target
                    Claims
                  </h3>
                  <ul className="space-y-2.5">
                    {((formData["healthClaims"] as string[]) || []).length >
                    0 ? (
                      (formData["healthClaims"] as string[]).map((c, i) => (
                        <li
                          key={i}
                          className="font-semibold text-slate-700 dark:text-slate-300 text-sm flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 shrink-0" />
                          {c}
                        </li>
                      ))
                    ) : (
                      <li className="text-slate-500 text-sm italic">
                        None selected
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-6 pt-10 border-t border-slate-200/60 dark:border-slate-800">
              <button
                onClick={() => onComplete(formData)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-2xl shadow-lg shadow-brand-500/30 transition-all active:scale-95"
              >
                <Download size={18} strokeWidth={2.5} /> Download Full PDF
              </button>
              <button
                onClick={() => onComplete(formData)}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold rounded-2xl shadow-lg transition-all active:scale-95 border border-transparent"
              >
                <Share2 size={18} strokeWidth={2.5} /> Share with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-white dark:bg-slate-950 animate-in fade-in duration-300 relative overflow-hidden">
      {/* COLUMN 1: Left Panel (Live Product Dossier) */}
      <div className="hidden lg:flex w-[320px] shrink-0 bg-brand-50 dark:bg-brand-950/20 border-r border-brand-200/50 dark:border-brand-800/50 flex-col z-20 relative overflow-y-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-100/50 to-transparent dark:from-brand-900/10 pointer-events-none"></div>

        <div className="flex flex-col min-h-full p-6 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center shadow-md">
              <FileText size={16} className="text-white" />
            </div>
            <span className="font-extrabold tracking-tight text-lg text-slate-800 dark:text-slate-100">
              Product Dossier
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            Your live regulatory profile. Watch it build as you make selections.
          </p>

          <LiveProductDossier formData={formData} />
        </div>
      </div>

      {/* COLUMN 2: Center Panel (The Lab) */}
      <div className="flex-1 h-full overflow-y-auto relative bg-slate-50/50 dark:bg-slate-950 p-6 lg:p-12 z-10">
        <div
          className="max-w-3xl mx-auto min-h-full flex flex-col relative z-10"
          key={`form-${currentStep}`}
        >
          <div className="mb-10 animate-in slide-in-from-left-4 fade-in duration-500">
            <div className="text-[12px] font-extrabold text-brand-500 uppercase tracking-widest mb-2">
              Phase {currentModule.id} of {MODULES.length}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 dark:text-white tracking-tight">
              {currentModule.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium text-lg">
              {currentModule.description}
            </p>
          </div>

          <div className="flex-1 space-y-12 pb-12">
            {currentModule.fields.map((field, fieldIdx) => (
              <div
                key={field.name}
                className="animate-in slide-in-from-bottom-4 fade-in duration-300"
                style={{ animationDelay: `${fieldIdx * 50}ms` }}
              >
                <label className="block text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center tracking-tight">
                  {field.label}
                  <FieldHelper title={field.label} />
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {field.options.map((optionObj) => {
                    const isSelected =
                      field.type === "radio"
                        ? formData[field.name] === optionObj.label
                        : (formData[field.name] || []).includes(
                            optionObj.label,
                          );

                    return (
                      <ActionBlock
                        key={optionObj.label}
                        optionLabel={optionObj.label}
                        optionDescription={optionObj.description}
                        isSelected={isSelected}
                        type={field.type}
                        name={field.name}
                        onRadioChange={handleRadioChange}
                        onCheckboxChange={handleCheckboxChange}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-auto pt-6 pb-4 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 disabled:opacity-0 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={16} /> Back
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold bg-brand-600 text-white hover:bg-brand-700 transition-all uppercase tracking-wider shadow-lg shadow-brand-500/20 active:scale-95"
            >
              {isLastStep ? "Complete Lab" : "Next Phase"}
              {isLastStep ? (
                <CheckCircle2 size={18} strokeWidth={2.5} />
              ) : (
                <ChevronRight size={18} strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* COLUMN 3: Right Panel (Laura Co-Pilot) */}
      <div className="hidden xl:flex w-[350px] shrink-0 bg-brand-50/50 dark:bg-slate-900/50 border-l border-brand-200/50 dark:border-slate-800 flex-col z-20">
        {/* Header */}
        <div className="p-6 border-b border-brand-200/50 dark:border-slate-800 flex items-center gap-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-400 to-brand-600 flex items-center justify-center shadow-md animate-pulse">
            <Sparkles size={18} className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">
              Laura AI
            </h3>
            <p className="text-xs text-brand-600 dark:text-brand-400 font-medium">
              Regulatory Co-Pilot
            </p>
          </div>
        </div>

        {/* Chat Feed */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
        >
          {lauraMessages.map((msg, i) => (
            <div
              key={i}
              className="flex gap-3 animate-in slide-in-from-right-4 fade-in duration-300"
            >
              <div className="w-8 h-8 shrink-0 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center mt-1 shadow-sm">
                <Sparkles size={14} className="text-brand-500" />
              </div>
              <div
                className={`p-4 rounded-2xl text-[13px] font-medium shadow-sm leading-relaxed border ${
                  msg.type === "warning"
                    ? "bg-red-50 text-red-900 border-red-200 dark:bg-red-950/30 dark:text-red-200 dark:border-red-900/50"
                    : msg.type === "success"
                      ? "bg-green-50 text-green-900 border-green-200 dark:bg-green-950/30 dark:text-green-200 dark:border-green-900/50"
                      : "bg-white text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700"
                }`}
              >
                {msg.type === "warning" && (
                  <AlertTriangle
                    size={16}
                    className="inline mr-2 mb-1 text-red-500"
                  />
                )}
                {msg.type === "success" && (
                  <ShieldCheck
                    size={16}
                    className="inline mr-2 mb-1 text-green-500"
                  />
                )}
                {msg.text}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
