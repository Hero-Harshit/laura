# AI & RAG Architecture

This document explains how the AI operates within this platform, specifically focusing on the Retrieval-Augmented Generation (RAG) pipeline used to guarantee 100% accurate legal advice without hallucination.

## 1. The Corpus (Ground Truth Data)
The platform is powered by a localized `/corpus` directory containing 65+ highly sanitized, text-extractable PDFs of actual Indian and International law.
- **Categorization**: The PDFs are split into 6 core modules (Product Classification, National IP, Biodiversity, Advertising, International Regimes, Pharmaceutical Standards).
- **Sanitization**: All files use a pristine `Snake_Case` naming convention (e.g., `Patent_Act_1970.pdf`). This ensures that the RAG chunking engine can seamlessly map filenames to citation metadata without URI encoding errors.

## 2. The Retrieval-Augmented Generation (RAG) Flow
When a user asks a legal question or completes the Assessment Wizard, the AI does not rely on its pre-trained memory (which is prone to hallucination in legal domains). Instead, it follows this strict pipeline:

1. **User Input / Wizard Mapping**: The user's choices in the Assessment Wizard act as semantic filters. For example, selecting "Cosmetics" and "USA" tells the system to strictly prioritize the `US_Cosmetics_FDC_MoCRA` documents.
2. **Chunking & Vectorization**: The PDFs in the corpus are chunked into smaller, semantic blocks (e.g., 500-word segments) and embedded into a Vector Database.
3. **Similarity Search**: The user's query is converted into an embedding, and the Vector DB returns the top-K most legally relevant chunks from the corpus.
4. **Contextual Generation**: The AI (LLM) is fed the exact legal chunks and instructed: *"Answer the user's question using ONLY the provided legal text. Cite your sources."*

## 3. Why this Architecture Wins
- **Zero Hallucination**: By restricting the AI to the `corpus` documents, we eliminate the risk of the AI giving illegal or fake advice.
- **Auditability**: Every AI response points directly back to a specific PDF and page number, allowing lawyers or users to verify the claim.
- **Scalability**: As new laws are passed (e.g., a 2026 amendment to the Biodiversity Act), we simply drop the new PDF into the `/corpus` folder. No AI retraining is required.
