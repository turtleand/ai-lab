# LLM & GenAI Builder Modules

## Module 0: Setup & Safety {#module-0}

- Model access & runtimes: Choose and set up how you will access LLMs (hosted APIs vs local runtimes like Ollama or vLLM), and understand the trade-offs.
- Access & secrets: Configure API keys and secrets securely for model access.
- Safety baseline: Learn basic safety concepts such as prompt injection, misuse, and data handling.

## Module 1: Foundations for LLM Builders {#module-1}

- LLM interfaces: Work directly with LLM client libraries/runtimes and solid request/response patterns.
- Inputs & outputs: Structure prompts, messages, and JSON/tool outputs for downstream use.
- Model economics: Tokens, context windows, latency, and cost basics.

## Module 2: Prompting & Reasoning Patterns {#module-2}

- Prompt structures: Roles, instructions, examples, CoT, and RAG-style hints.
- Output evaluation: Compare good/bad outputs and tune prompts with feedback.
- Micro-tools: Small utilities like AI note cleaners or explainers.

## Module 3: RAG & Tools Integration {#module-3}

- Retrieval basics: Minimal RAG over local documents using embeddings and search.
- Tool wiring: Hook models to search, calculator, or file/DB lookups.
- Observability: Log prompts/outputs to debug and iterate reliably.

## Module 4: Agents & Workflows {#module-4}

- Agent design: One or two small agents (research assistant, task automator).
- Control flow: Compare state machines vs. looping-prompt approaches.
- Resilience: Handle failures, retries, and graceful fallbacks.

## Module 5: Productized LLM App {#module-5}

- Packaging: Wrap a project into a CLI or simple web UI (Streamlit/FastAPI).
- Run & deploy: Document how to run locally and how to deploy it.
- Reality check: Call out limitations, risks, and future improvements.

### Notes

Future modules can be appended.

Each entry records start date, key resources, and next steps.
