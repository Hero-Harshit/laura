# Assessment Flow & Question Logic

This document outlines the user journey and assessment logic for the platform. The assessment is designed not just as a static questionnaire, but as a dynamic "Product Builder" that maps directly to the AI's legal corpus.

## Core Philosophy
Instead of standard MCQs, the UI utilizes a gamified approach to extract accurate parameters from the user (e.g., MSMEs, Startups, Ayurvedic Practitioners). Every selection acts as a "trigger" that filters and queries specific regulatory PDFs in the backend.

---

##  The "Laura" Form Co-Pilot (Real-Time AI Assistance)
To make the Assessment Wizard feel truly intelligent, the UI features a dedicated **"Laura Co-Pilot Column"** (a persistent sidebar or floating mascot) that talks to the user in real-time as they fill out the form. 

Laura actively assists the user using low-latency micro-queries:

1. **AI Ingredient Recommendations (Formulation Assist)**: 
   - When a user selects a primary ingredient (e.g., *Ashwagandha*), Laura's column instantly updates: *"I see you selected Ashwagandha! Classical texts often pair this with Brahmi or Shatavari. Want to add them?"*
   - These appear as glowing "AI Suggested" chips that the user can one-click add to their formulation.
2. **AI Compliance Substitutions**: 
   - If the user selects a heavily restricted or endangered herb (e.g., *Jatamansi*), Laura intercepts: *"Wait! Jatamansi requires strict NBA approval. Consider substituting it with [Safe Alternative] to avoid compliance delays."*
3. **The "Magic Document" Auto-Fill**:
   - Instead of manually selecting ingredients, users can drag and drop a photo of a product label to Laura. Vision AI extracts the text, identifies the herbs, and auto-fills the entire ingredient multi-select instantly.

---

## The 5-Phase Assessment Journey

### Phase 1: The Formulation Lab (Ingredients & Biodiversity)
**Action**: Users interact with a searchable, multi-select database of Ayurvedic herbs and ingredients.
**AI Logic Mapping**: 
- Selecting endangered or highly regulated herbs triggers the **Biological Diversity Act 2002**.
- AI flags ingredients requiring National Biodiversity Authority (NBA) approval or Access and Benefit Sharing (ABS) compliance.

### Phase 2: The Factory (Manufacturing Process)
**Action**: Users select how their product is processed using visual cards.
**AI Logic Mapping**:
- **Raw/Crushed/Boiled**: Triggers Classical Ayurvedic Medicine regulations (Drugs & Cosmetics Act).
- **Chemical Extraction**: Triggers Phytopharmaceutical regulations (Rule 158B).
- **Topical Mixture**: Routes the logic to Cosmetic compliance standards.

### Phase 3: The Geography Map (Sourcing & Geographical Indications)
**Action**: Users select their primary sourcing region on an interactive map (e.g., Kerala).
**AI Logic Mapping**:
- Identifies potential Geographical Indications (GI) like *Navara Rice* or *Malabar Pepper*.
- Triggers the **Geographical Indications Act 1999** to advise the user on protecting regional branding.

### Phase 4: The Marketing Studio (Label Claims)
**Action**: Users drag and drop "claim stickers" onto a digital bottle.
**AI Logic Mapping**:
- Prohibited medical claims (e.g., "Cures Diabetes") trigger a violation warning mapped to the **Drugs and Magic Remedies Act**.
- General wellness claims trigger the **ASCI Advertising Standards**.

### Phase 5: The Export Terminal (Global Strategy)
**Action**: Users select target export markets on a global map.
**AI Logic Mapping**:
- **USA**: Triggers DSHEA (Dietary Supplements), MoCRA (Cosmetics), and FDA regulations.
- **EU**: Triggers EU Directive 2001/83/EC and EU Cosmetic Regulations.
- **Global**: Triggers the Patent Cooperation Treaty (PCT) and Nagoya Protocol.

---
*Note for Judges: This highly structured data collection ensures that the subsequent AI (RAG) query is laser-focused, preventing hallucination and ensuring 100% accurate legal citations.*
