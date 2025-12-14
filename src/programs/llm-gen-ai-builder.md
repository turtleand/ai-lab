# LLM & GenAI Builder Track

**Goal:** Self-learner path for going from zero to shipping practical LLM-based tools and agents, with an emphasis on clarity, reproducibility, and real usage inside the Turtleand ecosystem.

## Module 0: Setup & Safety

* **Environment readiness:** Set up a Python environment for LLM work (vLLM, Ollama, Colab, or local).
* **Access & secrets:** Configure API keys and secrets securely for model access.
* **Safety baseline:** Learn basic safety concepts such as prompt injection, misuse, and data handling.

## Module 1: Foundations for LLM Builders

* **LLM interfaces:** Work directly with LLM client libraries and model runtimes (local or API-based), focusing on request/response patterns.
* **Inputs & outputs:** Structure prompts, messages, and model outputs (JSON, schemas, tool calls) for reliable downstream use. Work with HTTP APIs, JSON payloads, and basic async requests.
* **Model economics:** Understand tokens, context windows, latency tradeoffs, and cost basics.

## Module 2: Prompting & Reasoning Patterns

* **Prompt structures:** Apply common prompting patterns (roles, instructions, examples, CoT, RAG-style hints).
* **Output evaluation:** Evaluate model outputs by comparison (good vs bad examples).
* **Micro-tools:** Build tiny utilities like an AI note cleaner or explainer.

## Module 3: RAG & Tools Integration

* **Retrieval basics:** Build a minimal RAG pipeline over local documents using embeddings and retrieval.
* **Tool wiring:** Connect models to external tools (search, calculator, file or DB lookup).
* **Observability:** Log prompts and outputs to debug and iterate reliably.

## Module 4: Agents & Workflows

* **Agent design:** Build one or two small agents, such as a multi-step research assistant or task automator.
* **Control flow:** Compare state machines with looping-prompt approaches.
* **Resilience:** Handle failures, retries, and graceful fallbacks.

## Module 5: Productized LLM App

* **Packaging:** Select one project and wrap it in a simple CLI or web UI (Streamlit or FastAPI).
* **Run & deploy:** Document how to run it locally and deploy it.
* **Reality check:** Clearly describe limitations, risks, and future improvements.
