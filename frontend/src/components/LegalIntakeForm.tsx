"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Scale,
  Sparkles,
  AlertTriangle,
  ShieldCheck,
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

const FormStepper = React.memo(
  ({
    currentStep,
    setCurrentStep,
  }: {
    currentStep: number;
    setCurrentStep: (val: number) => void;
  }) => {
    return (
      <div className="flex flex-col w-full gap-4 mt-8">
        {MODULES.map((m, idx) => {
          const isCompleted = idx < currentStep;
          const isCurrent = idx === currentStep;

          return (
            <div
              key={m.id}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                isCurrent
                  ? "bg-brand-500 text-white shadow-md scale-105 origin-left"
                  : isCompleted
                    ? "hover:bg-brand-200/50 dark:hover:bg-brand-800/50 text-slate-700 dark:text-slate-300"
                    : "opacity-50 grayscale pointer-events-none text-slate-500"
              }`}
              onClick={() => idx <= currentStep && setCurrentStep(idx)}
            >
              <div
                className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                  isCurrent
                    ? "bg-white/20"
                    : isCompleted
                      ? "bg-brand-200 text-brand-700 dark:bg-brand-800 dark:text-brand-300"
                      : "bg-slate-200 dark:bg-slate-800"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 size={16} />
                ) : (
                  <span className="font-bold text-sm">{m.id}</span>
                )}
              </div>
              <span className="font-semibold text-sm leading-tight">
                {m.title}
              </span>
            </div>
          );
        })}
      </div>
    );
  },
);
FormStepper.displayName = "FormStepper";

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
      optionLabel.includes("Jatamansi");

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
            className={`absolute top-4 right-4 ${isDangerous ? "text-red-500" : "text-brand-600 dark:text-brand-400"}`}
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
      onComplete(formData);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  }, [isLastStep, formData, onComplete]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row bg-white dark:bg-slate-950 animate-in fade-in duration-300 relative overflow-hidden">
      {/* COLUMN 1: Left Panel (The Guide) */}
      <div className="hidden lg:flex w-[280px] shrink-0 bg-brand-100 dark:bg-brand-900 border-r border-brand-200 dark:border-brand-800 flex-col z-20 relative overflow-y-auto">
        <div className="flex flex-col min-h-full p-6 relative z-10">
          <div className="flex items-center gap-2 mb-4 pb-4 border-b border-brand-200/50 dark:border-brand-800/50">
            <Scale size={20} className="text-brand-600 dark:text-brand-400" />
            <span className="font-bold tracking-widest uppercase text-xs text-brand-900 dark:text-brand-100">
              Product Builder
            </span>
          </div>
          <FormStepper
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>

      {/* COLUMN 2: Center Panel (The Lab) */}
      <div className="flex-1 h-full overflow-y-auto relative bg-slate-50 dark:bg-slate-950 p-6 lg:p-12 z-10">
        <div
          className="max-w-3xl mx-auto min-h-full flex flex-col relative z-10"
          key={`form-${currentStep}`}
        >
          <div className="mb-10 animate-in slide-in-from-left-4 fade-in duration-500">
            <div className="text-[12px] font-bold text-brand-500 uppercase tracking-widest mb-2">
              Phase {currentModule.id}
            </div>
            <h2 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white tracking-tight">
              {currentModule.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium">
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
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold bg-brand-500 text-white hover:bg-brand-600 transition-colors uppercase tracking-wider shadow-lg shadow-brand-500/20"
            >
              {isLastStep ? "Complete Lab" : "Next Phase"}
              {isLastStep ? (
                <CheckCircle2 size={18} />
              ) : (
                <ChevronRight size={18} />
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
                className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed border ${
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

        {/* Input area mockup */}
        <div className="p-4 bg-white dark:bg-slate-950 border-t border-brand-200/50 dark:border-slate-800">
          <div className="bg-slate-100 dark:bg-slate-900 rounded-xl p-3 flex items-center text-slate-400 text-sm">
            <span className="truncate">
              Laura is monitoring your choices...
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
