export interface ModuleFieldOption {
  label: string;
  description: string;
}

export interface ModuleField {
  name: string;
  label: string;
  type: 'radio' | 'checkbox';
  options: ModuleFieldOption[];
}

export interface Module {
  id: number;
  title: string;
  description: string;
  fields: ModuleField[];
}

export const MODULES: Module[] = [
  {
    id: 1,
    title: "The Formulation Lab",
    description: "Build your product by selecting your primary ingredients and herbs.",
    fields: [
      {
        name: "ingredients",
        label: "Primary Active Ingredients",
        type: "checkbox",
        options: [
          { label: "Ashwagandha (Withania somnifera)", description: "Common adaptogen. Generally safe under standard AYUSH rules." },
          { label: "Tulsi (Ocimum sanctum)", description: "Holy Basil. Widely cultivated, minimal compliance risk." },
          { label: "Red Sanders (Pterocarpus santalinus)", description: "Highly Endangered. Triggers strict CITES and National Biodiversity Authority (NBA) approval." },
          { label: "Jatamansi (Nardostachys jatamansi)", description: "Endangered Himalayan herb. Requires stringent Access and Benefit Sharing (ABS) compliance." },
          { label: "Purified Chemical Extract (e.g., Curcumin 95%)", description: "Not a whole herb. May trigger Phytopharmaceutical regulations." }
        ]
      },
      {
        name: "knowledgeSource",
        label: "Source of Formulation Knowledge",
        type: "radio",
        options: [
          { label: "Classical Text (e.g., Charaka Samhita)", description: "Exempt from new safety/efficacy data requirements." },
          { label: "Proprietary Mix", description: "Standard patent and proprietary medicine rules apply." },
          { label: "Tribal / Traditional Community Knowledge", description: "Triggers mandatory Benefit Sharing agreements with the indigenous community." }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Factory",
    description: "How are your ingredients processed and manufactured?",
    fields: [
      {
        name: "processingMethod",
        label: "Manufacturing Process",
        type: "radio",
        options: [
          { label: "Raw / Crushed / Water-Boiled (Aqueous)", description: "Standard classical Ayurvedic manufacturing." },
          { label: "Solvent Extraction (Alcohol, Hexane)", description: "Requires residue disclosures and heavy metal testing." },
          { label: "Advanced Chemical Isolation", description: "Classified as a Phytopharmaceutical. Requires clinical trials." }
        ]
      },
      {
        name: "finalForm",
        label: "Final Product Form",
        type: "radio",
        options: [
          { label: "Oral (Pill, Syrup, Churna)", description: "Subject to internal medicine heavy metal standards." },
          { label: "Topical (Cream, Shampoo, Oil)", description: "Easier compliance pathway as a Cosmetic or external application." }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "The Geography Map",
    description: "Where are your biological resources sourced from?",
    fields: [
      {
        name: "sourcingRegion",
        label: "Primary Sourcing Region",
        type: "radio",
        options: [
          { label: "Kerala (e.g., Navara Rice, Malabar Pepper)", description: "High potential for Geographical Indication (GI) protection." },
          { label: "Himalayan Belt", description: "High altitude flora. Strict state forest department oversight." },
          { label: "Imported from outside India", description: "Exempt from India's Biodiversity Act, but subject to Plant Quarantine." }
        ]
      },
      {
        name: "companyStructure",
        label: "Entity Ownership",
        type: "radio",
        options: [
          { label: "100% Indian Citizens", description: "Section 7 of BD Act applies (State Biodiversity Board intimation)." },
          { label: "Contains Foreign Equity / NRI", description: "Section 3 of BD Act applies (Strict National Biodiversity Authority approval required)." }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The Marketing Studio",
    description: "What claims will you make on your product label?",
    fields: [
      {
        name: "healthClaims",
        label: "Label Claims",
        type: "checkbox",
        options: [
          { label: "Boosts Immunity & General Wellness", description: "Safe claim. ASCI compliant." },
          { label: "Improves Skin Glow", description: "Safe claim for cosmetics." },
          { label: "Cures Diabetes / Cancer / Blindness", description: "PROHIBITED. Violates the Drugs & Magic Remedies Act." },
          { label: "Clinically Proven", description: "Requires CTRI registered human clinical trial data on file." }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "The Export Terminal",
    description: "Where do you intend to sell this product globally?",
    fields: [
      {
        name: "targetMarkets",
        label: "Global Markets",
        type: "checkbox",
        options: [
          { label: "Domestic Market (India Only)", description: "AYUSH and FSSAI rules apply." },
          { label: "United States", description: "Subject to US FDA, DSHEA (Dietary Supplements), and MoCRA (Cosmetics)." },
          { label: "European Union", description: "Subject to EU Traditional Herbal Medicinal Products Directive." },
          { label: "Filing for Global Patents", description: "Requires Patent Cooperation Treaty (PCT) filing and prior NBA approval." }
        ]
      }
    ]
  }
];
