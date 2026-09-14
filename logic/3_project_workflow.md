# Project Workflow & System Integration

This document maps out the high-level workflow of the entire application, from the moment a user logs in to the moment they receive actionable legal advice.

## The 4-Step Pipeline

### Step 1: User Onboarding & Profiling
When a user (e.g., an MSME, farmer, or startup) enters the platform, they are guided through the **Gamified Assessment Wizard** (The "Product Lab").
- They visually build their product (select ingredients, process, geographic sourcing, and target export markets).
- The frontend captures this state as a structured JSON object.

### Step 2: Semantic Routing & Query Construction
The backend receives the JSON object. Instead of passing raw data to the AI, it constructs a highly targeted RAG query.
- Example: If the user selected `Ingredients: Jatamansi` and `Export: USA`, the backend applies semantic tags to search specifically within the `Biodiversity_Act` and `US_FDA_Regulations` corpus nodes.

### Step 3: The Knowledge Base Retrieval (RAG)
The system connects to the Vector Database where the 65+ legal PDFs are stored as embeddings.
- It performs a cosine similarity search against the user's generated query.
- It pulls the top 5 most relevant legal text chunks that directly address the user's specific product parameters.

### Step 4: AI Synthesis & Final Output
The retrieved text chunks are injected into the context window of a Large Language Model (LLM) along with a strict system prompt: *"You are Laura, a premium Ayurvedic legal assistant. Use the following text to guide the user. You MUST cite the specific Act and Rule."*
- The AI synthesizes the heavy legal jargon into plain, actionable English.
- The frontend displays the final "Compliance Report" to the user, complete with beautiful UI cards, risk thermometers, and direct PDF citations.

## Summary for Judges
This workflow guarantees that the AI acts merely as a "translator" of the law, while the actual "source of truth" remains strictly within the hard-coded legal PDFs. This eliminates liability risks and provides startups with enterprise-grade legal certainty.
