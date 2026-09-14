"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { 
  Info, Eye, Target, Map, BookOpen, Layers, Globe, Shield, 
  Search, CheckCircle2, MessageSquare, Lightbulb, Users, FileText,
  Leaf, Library
} from "lucide-react";

export default function AboutPage() {
  const missionPillars = [
    { title: "Understand", desc: "Help users understand their product, formulation, and IP-related situation.", icon: Lightbulb },
    { title: "Guide", desc: "Identify the relevant intellectual-property, regulatory, or ABS area.", icon: Map },
    { title: "Verify", desc: "Provide answers supported by authoritative sources and citations.", icon: CheckCircle2 },
    { title: "Empower", desc: "Give users enough clarity to take their next step or approach the right professional.", icon: Shield }
  ];

  const differentiators = [
    {
      title: "AI That Searches Before It Answers",
      icon: Search,
      content: "Most chatbots just guess based on past training. Laura works differently using Retrieval-Augmented Generation (RAG). Before answering, she actually searches through our curated knowledge base of official documents, ensuring every response is grounded in facts."
    },
    {
      title: "Built Specifically for Ayurveda",
      icon: BookOpen,
      content: "Laura isn't a generic legal assistant. She was built specifically to tackle the unique challenges of the Ayurveda ecosystem, covering niche areas like Traditional Knowledge, Biodiversity, and Access and Benefit Sharing (ABS)."
    },
    {
      title: "Product Classification Comes First",
      icon: Layers,
      content: "Rules change completely depending on whether your product is a classical medicine, a new drug, or a nutraceutical. That's why Laura asks a few quick questions to figure out exactly what you're building before giving advice."
    },
    {
      title: "Clear Separation of Jurisdictions",
      icon: Globe,
      content: "What works in India might not work abroad. Our system clearly separates Indian laws from international frameworks like TRIPS or WIPO, so you never get confused by mixed-up requirements."
    },
    {
      title: "ABS & Biodiversity Guidance",
      icon: Leaf,
      content: "Working with plants and traditional knowledge often comes with extra responsibilities under the Access and Benefit Sharing (ABS) guidelines. Laura helps you figure out if these rules apply to you."
    },
    {
      title: "Traditional Knowledge & Prior Art",
      icon: Library,
      content: "Telling the difference between a genuinely new invention and existing traditional wisdom can be tricky. Laura points you toward relevant traditional knowledge databases (like the TKDL) to help you see if your idea is truly novel."
    },
    {
      title: "Multilingual by Design",
      icon: MessageSquare,
      content: "Legal jargon is hard enough in English. You should be able to ask questions and get answers in the language you're most comfortable with. We're constantly working to make the system as inclusive as possible."
    },
    {
      title: "Traceable Answers",
      icon: FileText,
      content: "Trust is everything when it comes to regulations. We don't expect you to take our AI's word for it. Every answer includes the context, the exact source, and a citation so you can verify it yourself."
    },
    {
      title: "Human Escalation",
      icon: Users,
      content: "AI isn't perfect, and we know that. When a question is just too complex or highly sensitive, Laura won't guess. She'll respectfully step back and connect you with human IP facilitators who can help."
    }
  ];

  const steps = [
    { title: "Tell us what you're working on", desc: "Just describe your Ayurveda product, formulation, or regulatory question in your own words." },
    { title: "Understand & Classify", desc: "Laura will ask a couple of quick questions to understand the exact context of your product." },
    { title: "Identify the Relevant Area", desc: "The system figures out if your concern relates to Patents, Trademarks, Drug Regulations, ABS, or something else entirely." },
    { title: "Retrieve Trusted Information", desc: "Our RAG engine scans through curated laws, treaties, and official records to find the most relevant rules." },
    { title: "Generate a Simple Answer", desc: "Laura breaks down the complex legal information into simple, understandable advice." },
    { title: "Show Sources & Confidence", desc: "You get a clear answer along with direct citations to the official sources, plus a confidence score." },
    { title: "Help With the Next Step", desc: "If things get too complicated, we'll guide you toward a human expert to take things forward." }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      <Header />
      
      <div className="flex flex-1 w-full max-w-[1600px] mx-auto relative overflow-hidden">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 lg:ml-16 w-full px-4 sm:px-8 lg:px-12 pt-8 pb-24 overflow-y-auto">
          
          {/* Hero Section */}
          <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-8 duration-700 mb-20 relative mt-8">
            <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full -z-10 w-full mx-auto h-full"></div>
            
            <div className="w-20 h-20 mb-6 rounded-2xl bg-gradient-to-tr from-brand-400 to-brand-600 shadow-xl shadow-brand-500/30 flex items-center justify-center text-white rotate-3 hover:rotate-0 transition-transform duration-500">
              <Info size={36} />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-brand-accent mb-6 tracking-tight drop-shadow-sm leading-tight pb-2">
              About Laura
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed font-medium">
              Making Ayurveda IP and regulatory guidance simple, accessible, and trustworthy.
            </p>
          </div>

          <div className="w-full max-w-7xl mx-auto space-y-24">
            
            {/* Our Story & Why We Built */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="animate-in fade-in slide-in-from-left-8 duration-700 delay-100 fill-mode-both">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <h3 className="text-xl font-semibold text-brand-600 dark:text-brand-400 mb-4">Making the Complex World of Ayurveda IPR Easier to Understand</h3>
                <div className="space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                  <p>Ayurveda is so much more than a traditional system of medicine. It&apos;s centuries of knowledge, healing practices, and community-held wisdom passed down through generations. Today, passionate innovators, practitioners, and startups are bringing this ancient wisdom into the modern world.</p>
                  <p>But protecting that knowledge and navigating the regulations around it can be incredibly frustrating. The rules for patents, traditional knowledge, biodiversity, and drug compliance are scattered across dozens of different laws and government portals.</p>
                  <p>If you don&apos;t have a legal background, figuring out what rules apply to you can feel overwhelming. That&apos;s exactly why we built Laura.</p>
                  <p>Laura is a multilingual AI assistant designed specifically for the Ayurveda ecosystem. We aren&apos;t trying to replace your lawyers or regulatory experts. We just want to make taking that crucial first step easier, clearer, and a lot less intimidating.</p>
                </div>
              </div>
              
              <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-200 fill-mode-both">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why We Built Laura</h2>
                <div className="formal-panel rounded-2xl p-8 relative overflow-hidden bg-brand-50/50 dark:bg-zinc-900/50">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-full blur-3xl -mr-10 -mt-10 z-0"></div>
                  <div className="relative z-10 space-y-4 text-slate-500 dark:text-slate-400 leading-relaxed">
                    <p>Imagine you&apos;re a small Ayurveda startup that just developed an amazing new herbal product. You&apos;re probably asking yourself:</p>
                    <ul className="list-disc pl-6 space-y-2 text-foreground font-medium">
                      <li>&quot;Can I actually patent this?&quot;</li>
                      <li>&quot;Is this already considered traditional knowledge?&quot;</li>
                      <li>&quot;Do I need to worry about biodiversity compliance?&quot;</li>
                      <li>&quot;Is my product legally a medicine, a food, or a cosmetic?&quot;</li>
                    </ul>
                    <p>Normally, finding answers to these questions means hiring expensive consultants or digging through complex legal texts. Laura brings all of this into one simple, guided conversation.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision & Mission */}
            <section className="space-y-8 animate-in fade-in duration-1000 delay-300 fill-mode-both">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="formal-panel group rounded-3xl p-8 lg:p-10 relative overflow-hidden hover:shadow-brand-500/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
                    <Eye size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-4">
                    A future where Ayurveda innovators can protect their knowledge with confidence.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    We believe that understanding intellectual property and regulations should not be limited to people who have access to expensive legal or consultancy services.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                    Whether someone is an Ayurvedic practitioner, a researcher, a student, a farmer, a startup founder, an MSME, or an Ayurveda-based innovator, they should be able to understand the basics of protecting and responsibly commercializing their work.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="formal-panel group rounded-3xl p-8 lg:p-10 relative overflow-hidden hover:shadow-brand-500/10 transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
                    <Target size={28} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-lg font-medium text-brand-600 dark:text-brand-400 mb-6">
                    Turning complex legal and regulatory information into clear, useful guidance.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8">
                    Our mission is to use Artificial Intelligence, Retrieval-Augmented Generation (RAG), multilingual technologies, and trusted knowledge sources to help the Ayurveda community navigate IPR and regulatory requirements.
                  </p>
                  
                  {/* Mission 4 Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {missionPillars.map((pillar, idx) => (
                      <div key={idx} className="bg-brand-50/50 dark:bg-zinc-900/50 rounded-xl p-4 border border-brand-500/10">
                        <div className="flex items-center gap-3 mb-2">
                          <pillar.icon size={18} className="text-brand-500" />
                          <h4 className="font-bold text-foreground">{idx + 1}. {pillar.title}</h4>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{pillar.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Differentiators Grid */}
            <section className="animate-in fade-in duration-1000 delay-500 fill-mode-both">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Laura Different?</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-brand-300 to-transparent rounded-full mx-auto opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {differentiators.map((diff, index) => {
                  const Icon = diff.icon;
                  return (
                    <div 
                      key={index} 
                      className="formal-panel group rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 hover:shadow-brand-500/10 transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-500/5 rounded-full blur-2xl -mr-8 -mt-8 group-hover:bg-brand-500/10 transition-colors duration-500 z-0"></div>
                      <div className="relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 flex items-center justify-center shadow-sm mb-4 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-tight mb-3">
                          {diff.title}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {diff.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* How It Works Stepper */}
            <section className="animate-in fade-in duration-1000 delay-700 fill-mode-both pb-12">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-2">Our Smart Approach</h2>
                <p className="text-brand-600 dark:text-brand-400 font-medium">How Laura Works</p>
              </div>

              <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-0.5 bg-brand-500/20 -translate-x-1/2 rounded-full hidden sm:block"></div>
                
                <div className="space-y-12 relative">
                  {steps.map((step, index) => (
                    <div key={index} className={`relative flex flex-col sm:flex-row items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} gap-6 lg:gap-16 group`}>
                      
                      {/* Step Number Bubble */}
                      <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/50 border-4 border-background flex items-center justify-center z-10 text-brand-600 dark:text-brand-400 font-bold text-sm shadow-sm hidden sm:flex group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                        {index + 1}
                      </div>

                      {/* Content Card */}
                      <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-16' : 'lg:pr-16'} pl-16 sm:pl-20 lg:pl-0`}>
                        <div className="formal-panel p-6 rounded-2xl hover:shadow-brand-500/10 transition-shadow duration-300 relative group-hover:border-brand-500/30">
                          <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}
