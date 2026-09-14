import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  Database,
  ExternalLink,
  FileText,
  Search,
  Library,
  Scale,
} from "lucide-react";

export default function CorpusPage() {
  const officialSources = [
    {
      name: "Traditional Knowledge Digital Library",
      acronym: "TKDL",
      url: "https://tkdl.res.in",
      icon: <Library className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Database of Indian traditional knowledge to prevent misappropriation.",
    },
    {
      name: "Statutes & Rules (India Code)",
      acronym: "India Code",
      url: "https://indiacode.nic.in",
      icon: <Scale className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Digital repository of all Central and State Acts.",
    },
    {
      name: "IP India Public Databases",
      acronym: "IP India",
      url: "https://ipindia.gov.in",
      icon: <Search className="w-6 h-6 mb-3 text-brand-600" />,
      desc: "Patents, Trade Marks, Designs & GI Registry.",
    },
  ];

  const placeholderDocs: { title: string; date: string }[] = [];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative">
        <Sidebar />

        <div className="flex-1 lg:ml-16 w-full p-6 lg:p-12 animate-in fade-in zoom-in duration-500">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header Section */}
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-accent tracking-tight pb-2">
                Legal Corpus
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
                Access official intellectual property databases and important
                regulatory documents from recognized authorities in India.
              </p>
            </div>

            {/* Official Sources - Premium Buttons */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Database className="w-6 h-6 text-brand-500" />
                Official Sources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {officialSources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    {/* Decorative gradient blur */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-100 to-transparent rounded-full opacity-50 blur-2xl group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {source.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-1">
                        {source.acronym}
                      </h3>
                      <h4 className="text-sm font-semibold text-brand-600 mb-3">
                        {source.name}
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">
                        {source.desc}
                      </p>

                      <div className="flex items-center text-sm font-semibold text-slate-400 dark:text-slate-500 group-hover:text-brand-600 transition-colors">
                        <span>Access Database</span>
                        <ExternalLink className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Docs List Placeholder */}
            <div className="space-y-6 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-500" />
                  Internal Documents
                </h2>
                <span className="text-sm font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                  Google Docs
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {placeholderDocs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 dark:text-slate-200 group-hover:text-slate-900 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                          Uploaded: {doc.date}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
