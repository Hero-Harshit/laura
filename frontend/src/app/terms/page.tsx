import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {
  FileText,
  Lightbulb,
  Scale,
  Sparkles,
  BookOpen,
  UserCheck,
  Globe,
  FlaskConical,
  Library,
  Leaf,
  Lock,
  RefreshCw,
  ShieldAlert,
  UserPlus,
  ShieldCheck,
  Fingerprint,
  Cloud,
  Edit3,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const terms = [
    {
      id: 1,
      title: "Purpose of the Platform",
      icon: Lightbulb,
      content:
        "Laura is an AI-powered platform designed to provide informational and preliminary guidance on Ayurveda-related Intellectual Property Rights (IPR), regulatory requirements, Traditional Knowledge, Biodiversity, and Access and Benefit Sharing (ABS).",
    },
    {
      id: 2,
      title: "Not Legal or Professional Advice",
      icon: Scale,
      content:
        "The information provided by Laura is for educational and informational purposes only. It does not constitute legal, regulatory, medical, or professional advice and does not replace a qualified lawyer, IP professional, or regulatory authority.",
    },
    {
      id: 3,
      title: "AI-Generated Responses",
      icon: Sparkles,
      content:
        "The platform uses Artificial Intelligence and Retrieval-Augmented Generation (RAG) to generate responses. Although the system is designed to provide reliable information, AI-generated responses may contain errors, omissions, or incomplete interpretations.",
    },
    {
      id: 4,
      title: "Source-Cited Information",
      icon: BookOpen,
      content:
        "Where available, responses will include references to official laws, rules, regulations, treaties, government databases, standards, and other authoritative sources. Users are encouraged to verify important information against the original source.",
    },
    {
      id: 5,
      title: "User Responsibility",
      icon: UserCheck,
      content:
        "Users are responsible for providing accurate information and for independently verifying the guidance before making legal, regulatory, commercial, or intellectual-property decisions.",
    },
    {
      id: 6,
      title: "Jurisdiction-Specific Guidance",
      icon: Globe,
      content:
        "Legal and regulatory requirements vary by country. Users must select the appropriate India or International jurisdiction. Information applicable in one jurisdiction must not be assumed to apply to another.",
    },
    {
      id: 7,
      title: "Product Classification",
      icon: FlaskConical,
      content:
        "The system may provide preliminary guidance regarding product categories such as classical medicine, proprietary medicine, new/non-classical drug, phytopharmaceutical, AyurvedaAahar/nutraceutical, or cosmetic. Such guidance does not represent an official regulatory classification or approval.",
    },
    {
      id: 8,
      title: "Traditional Knowledge and Prior Art",
      icon: Library,
      content:
        "Laura may provide pointers to relevant Traditional Knowledge and prior-art resources. However, the system does not make a final determination regarding patentability, novelty, or ownership of intellectual property.",
    },
    {
      id: 9,
      title: "Biodiversity and ABS",
      icon: Leaf,
      content:
        "Where products involve biological resources or traditional knowledge, the platform may help users identify potentially relevant Biodiversity and Access and Benefit Sharing requirements. Users remain responsible for completing applicable legal compliance.",
    },
    {
      id: 10,
      title: "Confidential Information",
      icon: Lock,
      content:
        "Users should avoid submitting unpublished formulations, trade secrets, confidential research, proprietary business information, passwords, or other highly sensitive information unless appropriate protection is specifically provided by the platform.",
    },
    {
      id: 11,
      title: "Legal and Regulatory Updates",
      icon: RefreshCw,
      content:
        "Laws, regulations, policies, and international requirements may change. The platform aims to maintain an updated knowledge base, but users should always check the latest official requirements before taking important action.",
    },
    {
      id: 12,
      title: "Safe Abstention",
      icon: ShieldAlert,
      content:
        "If sufficient verified information is not available, the system may decline to provide a definitive answer rather than guess. This helps reduce the risk of misleading legal or regulatory information.",
    },
    {
      id: 13,
      title: "Human Expert Escalation",
      icon: UserPlus,
      content:
        "For complex, case-specific, or legally sensitive matters, users may be directed toward a qualified IP professional, legal expert, regulatory authority, or IP facilitator.",
    },
    {
      id: 14,
      title: "Responsible Use",
      icon: ShieldCheck,
      content:
        "Users must use Laura only for lawful and responsible purposes and must not use the platform to violate intellectual-property rights, regulatory requirements, or applicable laws.",
    },
    {
      id: 15,
      title: "Privacy and Data Protection",
      icon: Fingerprint,
      content:
        "The platform is designed around principles of data minimization, responsible data processing, confidentiality, and security. Users should provide only the information necessary to receive the requested guidance.",
    },
    {
      id: 16,
      title: "External Services",
      icon: Cloud,
      content:
        "If external services are used for translation, multilingual processing, or other supporting functions, applicable data-processing and privacy considerations should be communicated transparently to users.",
    },
    {
      id: 17,
      title: "Changes to the Terms",
      icon: Edit3,
      content:
        "These Terms & Conditions may be updated when there are changes to the platform, features, applicable laws, regulations, or security and privacy requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Header />

      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative overflow-hidden">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full px-4 sm:px-8 lg:px-12 pt-8 pb-20 overflow-y-auto animate-in fade-in duration-300">
          {/* Hero Section */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-in slide-in-from-bottom-4 fade-in duration-300 mb-16 relative">
            <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full -z-10 w-3/4 mx-auto h-full"></div>

            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-600 shadow-xl shadow-brand-500/30 flex items-center justify-center text-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <FileText size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent mb-4 tracking-tight drop-shadow-sm">
              Terms & Conditions
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
              Please review the terms guiding your use of the Laura platform.
              These terms ensure safe, responsible, and effective interactions
              with our AI guidance system.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {terms.map((term, index) => {
              const Icon = term.icon;
              return (
                <div
                  key={term.id}
                  className="formal-panel group rounded-2xl p-6 relative overflow-hidden hover:scale-[1.02] hover:shadow-brand-500/10 transition-all duration-500 animate-in slide-in-from-bottom-4 fade-in"
                  style={{
                    animationDelay: index * 50 + "ms",
                    animationFillMode: "both",
                  }}
                >
                  {/* Subtle Background Accent on Hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-500/10 transition-colors duration-500 z-0"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-tight">
                        {term.id}. {term.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {term.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className="w-full max-w-3xl mx-auto mt-16 text-center text-sm text-slate-400 animate-in fade-in duration-1000 delay-500">
            Last updated: September 2026. <br />
            By using Laura, you agree to these Terms & Conditions.
          </div>
        </div>
      </div>
    </main>
  );
}
