export type BeginnerTopic = {
  slug: string;
  technicalSlug: string;
  title: string;
  shortTitle: string;
  module: string;
  moduleSlug: string;
  moduleTitle: string;
  summary: string;
  plainMeaning: string;
  whyItMatters: string;
  safeExample: string;
  firstMoves: string[];
  commonMistake: string;
  guardrails: string[];
  order: number;
};

export const beginnerTopics: BeginnerTopic[] = [
  {
    slug: 'simple-ai',
    technicalSlug: 'simple-ai',
    title: 'Simple AI, for beginners',
    shortTitle: 'Simple AI',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Start safely',
    summary:
      'A plain-language doorway into what AI is, what it is not, and how to use it without giving away judgment.',
    plainMeaning:
      'AI is software that recognizes patterns and generates useful outputs from the context you give it. It can help you draft, compare, summarize, explain, code, and plan, but it does not become responsible for the decision.',
    whyItMatters:
      'A beginner needs a stable mental model before learning tools. If you know AI is a helper, not an authority, every later workflow becomes safer and easier to judge.',
    safeExample:
      'Ask an AI tool to explain a public article in five bullets, then compare the answer with the article and correct what it missed.',
    firstMoves: [
      'Start with public or invented material.',
      'Ask for a simple explanation before asking for a final answer.',
      'Compare the answer with reality.',
      'Decide what you will use, ignore, or verify.'
    ],
    commonMistake:
      'Treating a confident answer as proof. Confidence is style, not verification.',
    guardrails: [
      'Keep private details out of first experiments.',
      'Use AI for drafts and options before decisions.',
      'Check important claims with better sources.',
      'Keep the human responsible for taste, ethics, and consequence.'
    ],
    order: 1
  },
  {
    slug: 'start-safely-with-ai',
    technicalSlug: 'safety-baseline',
    title: 'Start safely with AI tools',
    shortTitle: 'Start safely',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Start safely',
    summary:
      'A beginner safety baseline for using AI tools without giving away private data, judgment, or responsibility.',
    plainMeaning:
      'AI safety starts before the prompt. Decide what the system should not see, then use the tool on material that is safe to copy, store, or be wrong about.',
    whyItMatters:
      'The first durable AI habit is not prompt technique. It is separating useful help from sensitive context and risky decisions.',
    safeExample:
      'Use invented customer notes or a public paragraph to practice summarizing. Do not start with real account details, passwords, legal issues, or private plans.',
    firstMoves: [
      'Use harmless material first.',
      'Remove names, account data, secrets, addresses, and internal plans.',
      'Ask for a draft, not a final answer.',
      'Slow down when the output affects another person or a serious decision.'
    ],
    commonMistake:
      'Pasting real private context because the task feels small. Small prompts can still leak important information.',
    guardrails: [
      'Do not paste secrets or credentials.',
      'Do not let AI approve access, money movement, or irreversible actions alone.',
      'Verify high-impact answers with authoritative sources.',
      'Use low-risk examples while learning a new tool.'
    ],
    order: 2
  },
  {
    slug: 'access-secrets',
    technicalSlug: 'access-secrets',
    title: 'Access and secrets, for beginners',
    shortTitle: 'Access and secrets',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Start safely',
    summary:
      'A beginner explanation of API keys, passwords, environment variables, and why secrets should not be pasted into AI tools.',
    plainMeaning:
      'A secret is any value that lets someone access an account, service, model, database, or private system. API keys, tokens, passwords, private keys, and recovery codes are all secrets.',
    whyItMatters:
      'Many AI workflows need access to tools. If access is handled carelessly, a useful workflow can become a security problem.',
    safeExample:
      'When asking for help with setup, replace a real key with a placeholder like YOUR_API_KEY and describe where it is stored without sharing the value.',
    firstMoves: [
      'Learn what counts as a secret.',
      'Store secrets in the tool or environment meant for them.',
      'Use placeholders when asking for help.',
      'Rotate a secret if you accidentally expose it.'
    ],
    commonMistake:
      'Thinking a token is safe because it is only shown once or only used for a test.',
    guardrails: [
      'Never paste real secrets into public issues, chats, docs, or prompts.',
      'Do not commit .env files unless they are explicit examples without real values.',
      'Use least privilege when possible.',
      'Treat leaked secrets as compromised.'
    ],
    order: 3
  },
  {
    slug: 'running-inference-locally',
    technicalSlug: 'running-inference-locally',
    title: 'Running AI locally, for beginners',
    shortTitle: 'Running AI locally',
    module: 'Module 0: Setup & Safety',
    moduleSlug: 'module-0',
    moduleTitle: 'Start safely',
    summary:
      'A plain-language first path for understanding local AI inference before reading the full technical guide.',
    plainMeaning:
      'Running AI locally means using an AI model on your own computer instead of sending every prompt to a hosted chat service. You are using an already trained model, not training a new one.',
    whyItMatters:
      'Local AI teaches the real pieces: model file, runtime, memory, speed, and quality. It can improve control, but it also brings setup friction and hardware limits.',
    safeExample:
      'Install one runtime, choose one small model, and ask a public test question about the difference between local AI and hosted chat.',
    firstMoves: [
      'Start with one small model.',
      'Use one runtime.',
      'Ask one safe test question.',
      'Notice the trade-off between control, privacy, speed, and setup.'
    ],
    commonMistake:
      'Trying the largest model first, then mistaking hardware friction for personal failure.',
    guardrails: [
      'Do not paste secrets or sensitive internal context.',
      'Use smaller models when the first one is too slow.',
      'Check answers before trusting them.',
      'Treat local inference as a learning lab before production.'
    ],
    order: 4
  },
  {
    slug: 'agent-notifications',
    technicalSlug: 'agent-notifications',
    title: 'Agent notifications, for beginners',
    shortTitle: 'Agent notifications',
    module: 'Module 0: Setup & Safety',
    moduleSlug: 'module-0',
    moduleTitle: 'Start safely',
    summary:
      'A beginner guide to why agents should notify humans when work finishes, blocks, or needs approval.',
    plainMeaning:
      'A notification is the agent raising its hand. It tells the human that something finished, failed, or needs a decision.',
    whyItMatters:
      'Agents can run longer than a normal chat response. Without notifications, useful work becomes easy to miss and risky work can continue without attention.',
    safeExample:
      'Have an agent send a message when a local build finishes instead of checking the terminal repeatedly.',
    firstMoves: [
      'Decide which events deserve a notification.',
      'Keep routine progress quiet.',
      'Notify on completion, blockers, and approval points.',
      'Make the message short enough to act on.'
    ],
    commonMistake:
      'Notifying on every small event. Too many alerts train the human to ignore the system.',
    guardrails: [
      'Use notifications for decisions, not noise.',
      'Do not include secrets in notification text.',
      'Make failure states visible.',
      'Keep humans in control of risky next steps.'
    ],
    order: 5
  },
  {
    slug: 'prompt-mastery',
    technicalSlug: 'prompt-mastery',
    title: 'Prompt mastery, for beginners',
    shortTitle: 'Prompt mastery',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Use AI for everyday work',
    summary:
      'A simple path from vague requests to useful prompts with goals, context, constraints, examples, and review.',
    plainMeaning:
      'A prompt is the instruction and context you give the model. A good prompt tells the model what you want, what matters, what to avoid, and what format helps you review the result.',
    whyItMatters:
      'Most weak AI output starts with an unclear task. Better prompts make the model easier to steer and easier to check.',
    safeExample:
      'Ask for a summary of a public article with the goal, audience, length, format, and caveats included.',
    firstMoves: [
      'State the goal.',
      'Add context and constraints.',
      'Give an example when possible.',
      'Ask for a format you can review quickly.'
    ],
    commonMistake:
      'Trying to fix a vague task with more words instead of a clearer goal.',
    guardrails: [
      'Do not include private data just to improve context.',
      'Ask for uncertainty when facts matter.',
      'Review before using output externally.',
      'Separate drafting from deciding.'
    ],
    order: 10
  },
  {
    slug: 'multi-tool-workflows',
    technicalSlug: 'multi-tool-workflows',
    title: 'Multi-tool AI workflows, for beginners',
    shortTitle: 'Multi-tool workflows',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Use AI for everyday work',
    summary:
      'How to choose the right AI tool for each step instead of forcing one chat box to do everything.',
    plainMeaning:
      'A multi-tool workflow splits one job across tools. One tool might search, another might summarize, another might code, and the human checks the result.',
    whyItMatters:
      'Different tools have different strengths. Matching tool to task makes the workflow clearer and reduces blind trust in one answer.',
    safeExample:
      'Use search to gather public sources, a chat model to summarize them, and your own judgment to choose what matters.',
    firstMoves: [
      'Name the job you are doing.',
      'Split it into steps.',
      'Pick one tool per step.',
      'Review the combined result before acting.'
    ],
    commonMistake:
      'Using more tools because it feels advanced. More tools only help when the steps are clear.',
    guardrails: [
      'Do not move sensitive data through tools that do not need it.',
      'Keep a record of sources.',
      'Check tool outputs against each other.',
      'Keep final judgment with the human.'
    ],
    order: 11
  },
  {
    slug: 'model-selection-economics',
    technicalSlug: 'model-selection-economics',
    title: 'Model selection and economics, for beginners',
    shortTitle: 'Model choice',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Use AI for everyday work',
    summary:
      'A beginner way to choose between fast, cheap, capable, and careful models for the task in front of you.',
    plainMeaning:
      'Model selection means choosing the AI system that fits the job. Some models are fast and cheap. Some reason better. Some are better for code, images, long context, or voice.',
    whyItMatters:
      'Using the strongest model for every task wastes quota and money. Using a weak model for a hard task wastes time and may create subtle errors.',
    safeExample:
      'Use a fast model to rewrite a short note, then use a stronger model for a high-stakes architecture review.',
    firstMoves: [
      'Estimate task difficulty.',
      'Use smaller models for drafts and cleanup.',
      'Use stronger models for complex reasoning.',
      'Track whether the output was worth the cost.'
    ],
    commonMistake: 'Treating one favorite model as the answer to every task.',
    guardrails: [
      'Escalate when the task is ambiguous or high-impact.',
      'Do not optimize cost by skipping verification.',
      'Watch quotas and limits.',
      'Measure usefulness, not just speed.'
    ],
    order: 12
  },
  {
    slug: 'voice-multimodal-workflows',
    technicalSlug: 'voice-multimodal-workflows',
    title: 'Voice and multimodal workflows, for beginners',
    shortTitle: 'Voice and multimodal AI',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Use AI for everyday work',
    summary:
      'How voice, images, screenshots, and audio can make AI more useful when text is not enough.',
    plainMeaning:
      'Multimodal AI can work with more than text. It may listen to audio, inspect an image, read a screenshot, describe a chart, or speak an answer back.',
    whyItMatters:
      'Real work is not always clean text. Voice and images can reduce friction, especially when you are mobile, tired, or dealing with visual material.',
    safeExample:
      'Send a screenshot of a public error message and ask for a plain-language explanation, with no account details visible.',
    firstMoves: [
      'Choose the input that matches the task.',
      'Remove private details from images or audio.',
      'Ask for a short answer first.',
      'Verify anything important in text afterward.'
    ],
    commonMistake:
      'Forgetting that images and audio can reveal private context in the background.',
    guardrails: [
      'Crop sensitive screenshots.',
      'Avoid recording people without consent.',
      'Use voice for drafting, not irreversible decisions.',
      'Check visual interpretations against the original.'
    ],
    order: 13
  },
  {
    slug: 'human-ai-collaboration-handbook',
    technicalSlug: 'human-ai-collaboration-handbook',
    title: 'Human-AI collaboration, for beginners',
    shortTitle: 'Human-AI collaboration',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Use AI for everyday work',
    summary:
      'A beginner handbook for working with AI as a collaborator while keeping human direction and taste.',
    plainMeaning:
      'Human-AI collaboration means the human sets direction, gives context, reviews output, and decides what becomes real. The model helps with options, drafts, and analysis.',
    whyItMatters:
      'AI is most useful when it extends human attention instead of replacing human responsibility.',
    safeExample:
      'Ask the model for three draft outlines, choose the strongest structure yourself, then ask it to improve only that version.',
    firstMoves: [
      'Set the goal yourself.',
      'Ask for options before asking for final copy.',
      'Give feedback on what worked.',
      'Keep the final decision human.'
    ],
    commonMistake:
      'Letting the model define the goal because it is faster than thinking through the work.',
    guardrails: [
      'Use AI as a mirror, not a boss.',
      'Do not outsource ethics or taste.',
      'Keep private boundaries clear.',
      'Make the final artifact something you stand behind.'
    ],
    order: 14
  },
  {
    slug: 'automation-pipelines',
    technicalSlug: 'automation-pipelines',
    title: 'Automation pipelines, for beginners',
    shortTitle: 'Automation pipelines',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Build an AI operating rhythm',
    summary:
      'A beginner way to turn repeated work into checked steps before adding automation.',
    plainMeaning:
      'An automation pipeline is a sequence of steps that runs with less manual effort. AI can help collect, transform, summarize, draft, or route work inside that sequence.',
    whyItMatters:
      'Automation compounds when the process is clear. Automating a messy process usually makes the mess faster.',
    safeExample:
      'Create a weekly workflow that collects public links, summarizes them, and waits for human approval before anything is published.',
    firstMoves: [
      'Write the manual checklist first.',
      'Mark where AI helps.',
      'Mark where a human approves.',
      'Automate only the stable steps.'
    ],
    commonMistake: 'Automating before you know what correct output looks like.',
    guardrails: [
      'Keep approval before public or irreversible actions.',
      'Log what ran and what changed.',
      'Start with low-risk inputs.',
      'Make failure visible.'
    ],
    order: 20
  },
  {
    slug: 'ai-first-lifestyle',
    technicalSlug: 'ai-first-lifestyle',
    title: 'AI-first lifestyle, for beginners',
    shortTitle: 'AI-first lifestyle',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Build an AI operating rhythm',
    summary:
      'How to build daily AI habits that prepare work, clarify thinking, and still leave decisions to the human.',
    plainMeaning:
      'An AI-first lifestyle means looking for places where AI can reduce friction in thinking and making. It does not mean letting AI run your life.',
    whyItMatters:
      'Small habits compound. A morning brief, a clearer plan, or a review checklist can improve the whole day without needing a giant system.',
    safeExample:
      'Ask AI to turn your non-sensitive task list into three priorities and one risk to watch.',
    firstMoves: [
      'Pick one daily friction point.',
      'Use AI to prepare, not decide.',
      'Review what helped.',
      'Keep the habit only if it saves real attention.'
    ],
    commonMistake: 'Adding AI everywhere because it is available.',
    guardrails: [
      'Protect private life details.',
      'Keep agency with the person.',
      'Avoid fake productivity metrics.',
      'Use habits that make judgment sharper.'
    ],
    order: 21
  },
  {
    slug: 'building-mcp-server',
    technicalSlug: 'building-mcp-server',
    title: 'MCP servers, for beginners',
    shortTitle: 'MCP servers',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Build an AI operating rhythm',
    summary:
      'A plain explanation of how an MCP server lets an AI tool read from or act through a controlled interface.',
    plainMeaning:
      'An MCP server is a small bridge between an AI client and a tool or knowledge source. It exposes specific actions the AI can request, instead of giving the AI uncontrolled access.',
    whyItMatters:
      'Tool access is where AI becomes more useful and more risky. A controlled interface keeps the system understandable.',
    safeExample:
      'Expose a read-only search tool over public articles, then let the AI answer questions using those articles.',
    firstMoves: [
      'Decide what the AI should be allowed to do.',
      'Start with read-only tools.',
      'Name inputs and outputs clearly.',
      'Check every tool result before using it.'
    ],
    commonMistake:
      'Giving the AI broad access because a narrow tool feels slower to design.',
    guardrails: [
      'Prefer least privilege.',
      'Log tool calls.',
      'Avoid exposing secrets through tool outputs.',
      'Require human approval for risky actions.'
    ],
    order: 22
  },
  {
    slug: 'living-institutional-memory',
    technicalSlug: 'living-institutional-memory',
    title: 'Living institutional memory, for beginners',
    shortTitle: 'Living memory',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Build an AI operating rhythm',
    summary:
      'How notes, decisions, lessons, and public artifacts can become a memory system that compounds.',
    plainMeaning:
      'Living memory is the practice of keeping useful lessons findable and reusable, instead of relearning them every time.',
    whyItMatters:
      'Teams and solo builders lose leverage when knowledge disappears into chat logs, stale docs, or someone’s head.',
    safeExample:
      'After solving a recurring problem, save the reusable pattern as a short checklist instead of only keeping the chat transcript.',
    firstMoves: [
      'Capture the lesson.',
      'Remove private details.',
      'Write the reusable pattern.',
      'Link it where future work will find it.'
    ],
    commonMistake:
      'Saving everything. Memory works when it is curated, not when it becomes a dump.',
    guardrails: [
      'Do not store secrets as memory.',
      'Separate temporary task state from durable lessons.',
      'Keep public artifacts safe and abstracted.',
      'Review old memory for stale assumptions.'
    ],
    order: 23
  },
  {
    slug: 'persistent-agents',
    technicalSlug: 'persistent-agents',
    title: 'Persistent agents, for beginners',
    shortTitle: 'Persistent agents',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Build an AI operating rhythm',
    summary:
      'A beginner explanation of agents that keep context, run over time, and need clear boundaries.',
    plainMeaning:
      'A persistent agent is an AI workflow that can continue across time instead of answering once and disappearing. It may keep memory, run scheduled tasks, or watch for changes.',
    whyItMatters:
      'Persistence creates leverage, but it also makes mistakes last longer if boundaries are weak.',
    safeExample:
      'A weekly read-only agent can prepare a private summary and wait for review before any publication step.',
    firstMoves: [
      'Choose a narrow job.',
      'Define what it can read.',
      'Define what it can write.',
      'Decide when it must ask the human.'
    ],
    commonMistake:
      'Treating persistence as autonomy. Running longer does not mean the system should decide more.',
    guardrails: [
      'Start read-only when possible.',
      'Keep logs and review points.',
      'Do not let scheduled jobs publish or deploy without approval.',
      'Make stop and rollback paths clear.'
    ],
    order: 24
  },
  {
    slug: 'context-is-not-memory',
    technicalSlug: 'context-is-not-memory',
    title: 'Context is not memory, for beginners',
    shortTitle: 'Context is not memory',
    module: 'Module 3: Builder Foundations',
    moduleSlug: 'module-3',
    moduleTitle: 'Understand the ideas under the hood',
    summary:
      'A beginner explanation of the difference between what a model sees now and what a system remembers later.',
    plainMeaning:
      'Context is the information available in the current task. Memory is information saved for reuse in future tasks.',
    whyItMatters:
      'A model can only use what it can see or retrieve. Bigger context helps, but it is not the same as a reliable memory system.',
    safeExample:
      'Paste a short public note into a chat for one answer. Save only the durable lesson if it will help future work.',
    firstMoves: [
      'Ask what the model can see right now.',
      'Decide what should be remembered later.',
      'Keep memory short and durable.',
      'Remove temporary details after the task.'
    ],
    commonMistake:
      'Expecting a model to remember something because it appeared in an old conversation.',
    guardrails: [
      'Do not save secrets as memory.',
      'Do not confuse long context with truth.',
      'Keep stored memory specific and stable.',
      'Use sources when facts matter.'
    ],
    order: 30
  },
  {
    slug: 'planning-decomposition-control-structures',
    technicalSlug: 'planning-decomposition-control-structures',
    title: 'Planning and decomposition, for beginners',
    shortTitle: 'Planning and decomposition',
    module: 'Module 3: Builder Foundations',
    moduleSlug: 'module-3',
    moduleTitle: 'Understand the ideas under the hood',
    summary:
      'How to make AI work better by splitting a goal into smaller steps with checks between them.',
    plainMeaning:
      'Decomposition means breaking a big task into smaller tasks. Control structures decide what happens next after each step.',
    whyItMatters:
      'AI often fails when it tries to solve a large fuzzy job in one jump. Smaller steps make errors easier to catch.',
    safeExample:
      'Instead of asking for a complete project plan, ask for goals, risks, milestones, first task, and validation separately.',
    firstMoves: [
      'Name the final outcome.',
      'Split the work into steps.',
      'Add a check after each step.',
      'Only continue when the check passes.'
    ],
    commonMistake:
      'Asking for a perfect final answer when what you need is a controlled process.',
    guardrails: [
      'Keep risky actions gated.',
      'Verify intermediate outputs.',
      'Do not hide uncertainty.',
      'Revise the plan when evidence changes.'
    ],
    order: 31
  },
  {
    slug: 'agent-loop-controlled-feedback-loop',
    technicalSlug: 'agent-loop-controlled-feedback-loop',
    title: 'The agent loop, for beginners',
    shortTitle: 'The agent loop',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'A plain-language view of how agents observe, choose an action, inspect the result, and repeat safely.',
    plainMeaning:
      'An agent loop is a cycle: look at the state, choose an action, use a tool or produce output, inspect what happened, then decide the next step.',
    whyItMatters:
      'The loop is what makes agents useful and risky. Each turn can compound progress or compound errors.',
    safeExample:
      'A coding agent reads a failing test, edits one file, reruns the test, and stops if the result is unclear.',
    firstMoves: [
      'Define the goal.',
      'Limit available tools.',
      'Check each result.',
      'Stop for human approval at risky points.'
    ],
    commonMistake:
      'Letting the loop continue without a clear success condition.',
    guardrails: [
      'Use bounded actions.',
      'Log tool use.',
      'Require checks before continuing.',
      'Keep humans responsible for external effects.'
    ],
    order: 50
  },
  {
    slug: 'agentic-ai-systems-learning-path',
    technicalSlug: 'agentic-ai-systems-learning-path',
    title: 'Agentic AI systems, for beginners',
    shortTitle: 'Agentic systems',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'A beginner map of the ideas behind agents: loop, tools, memory, planning, approval, reliability, trust infrastructure, and coordination.',
    plainMeaning:
      'An agentic system is an AI workflow that can take steps toward a goal by using context, tools, checks, and sometimes memory.',
    whyItMatters:
      'Agents are not magic workers. They are systems that need structure, boundaries, observability, and human responsibility.',
    safeExample:
      'Map a research agent as: question, sources, search tool, summary, citation check, human decision.',
    firstMoves: [
      'Learn the loop.',
      'Add tools carefully.',
      'Add memory only when needed.',
      'Place approvals before risky actions.'
    ],
    commonMistake: 'Calling any chatbot an agent because it sounds proactive.',
    guardrails: [
      'Define authority boundaries.',
      'Keep tool permissions narrow.',
      'Test reliability with real cases.',
      'Escalate uncertainty to humans.'
    ],
    order: 51
  },
  {
    slug: 'human-agency-is-not-a-button',
    technicalSlug: 'human-agency-is-not-a-button',
    title: 'Human agency is not a button, for beginners',
    shortTitle: 'Human agency',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'Why responsible agent systems need real human authority, not just a decorative approval prompt.',
    plainMeaning:
      'Human agency means the person keeps meaningful control over direction, boundaries, and consequences. A button only helps if the person has real information and real choice.',
    whyItMatters:
      'A system can look safe while quietly pushing humans to approve things they do not understand.',
    safeExample:
      'Before an agent sends an external message, show the draft, source context, risk, and exact action for human approval.',
    firstMoves: [
      'Decide what humans must control.',
      'Give the human enough context.',
      'Make approval specific.',
      'Make refusal and revision easy.'
    ],
    commonMistake:
      'Adding an approval step after the system already made the important decision.',
    guardrails: [
      'Use approvals before external effects.',
      'Avoid vague yes or no prompts.',
      'Keep authority boundaries visible.',
      'Respect human override.'
    ],
    order: 52
  },
  {
    slug: 'smart-is-not-reliable',
    technicalSlug: 'smart-is-not-reliable',
    title: 'Smart is not reliable, for beginners',
    shortTitle: 'Smart is not reliable',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'Why impressive AI answers are not the same as dependable systems.',
    plainMeaning:
      'A smart output can still be inconsistent. Reliability comes from checks, constraints, tests, recovery paths, and clear human escalation.',
    whyItMatters:
      'People overtrust systems that sound fluent. Useful agents need more than intelligence. They need dependable behavior under messy conditions.',
    safeExample:
      'A summarizer should cite sources, handle missing data, and say when it cannot answer, not just produce a polished paragraph.',
    firstMoves: [
      'Define what good looks like.',
      'Test on normal and edge cases.',
      'Add checks and fallbacks.',
      'Track failures and improve the system.'
    ],
    commonMistake: 'Judging reliability from one impressive demo.',
    guardrails: [
      'Require verification for important claims.',
      'Plan for tool failures.',
      'Make uncertainty visible.',
      'Escalate repeated failures to humans.'
    ],
    order: 53
  },
  {
    slug: 'trust-is-earned-through-evidence-not-vibes',
    technicalSlug: 'trust-is-earned-through-evidence-not-vibes',
    title: 'Trust through evidence, for beginners',
    shortTitle: 'Trust through evidence',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'A plain-language guide to trusting agents only when they can show what happened, what was checked, and when humans must decide.',
    plainMeaning:
      'Do not trust an agent because it sounds confident. Trust grows when the system can show its work, prove results, respect permissions, and stop at the right boundary.',
    whyItMatters:
      'As agents get more tools, mistakes can move from text into real actions. Evidence helps people decide when an agent may continue alone and when it needs review.',
    safeExample:
      'A file helper should show the created file path and a verification check before saying the upload or save worked.',
    firstMoves: [
      'Start with a small task.',
      'Name what evidence proves success.',
      'Keep permissions narrow.',
      'Require human approval before consequences increase.'
    ],
    commonMistake:
      "Treating the agent's success message as proof that the real-world result happened.",
    guardrails: [
      'Ask what the agent is allowed to touch.',
      'Look for an artifact, status, trace, or independent check.',
      'Use read-only access before write access when possible.',
      'Escalate public, financial, account, data, or irreversible actions.'
    ],
    order: 54
  },
  {
    slug: 'model-choice-is-system-design',
    technicalSlug: 'model-choice-is-system-design',
    title: 'Model choice is system design, for beginners',
    shortTitle: 'Model choice as design',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Understand agents without the hype',
    summary:
      'A beginner guide to choosing the right model route for the task, risk, cost, and human decision boundary.',
    plainMeaning:
      'Model routing means deciding which model path should handle a task. Simple work can use a routine route. Hard, risky, private, or ambiguous work may need stronger reasoning, more checks, or a human decision.',
    whyItMatters:
      'The best agent systems do not blindly use the biggest or cheapest model. They match capability to consequence so the system stays useful, affordable, and reviewable.',
    safeExample:
      'Use a fast route to clean up a public paragraph. Use a stronger route to compare public sources. Ask a human before anything is published or acted on externally.',
    firstMoves: [
      'Name the task.',
      'Estimate difficulty and consequence.',
      'Choose a default, escalation, or human route.',
      'Define what evidence proves the route worked.'
    ],
    commonMistake:
      'Treating model choice as personal preference instead of system design.',
    guardrails: [
      'Do not optimize cost by skipping verification.',
      'Escalate ambiguous or high-impact work.',
      'Keep private context out of routes that do not need it.',
      'Require humans for external or irreversible consequences.'
    ],
    order: 55
  }
];

export const beginnerTopicsEs: BeginnerTopic[] = [
  {
    slug: 'simple-ai',
    technicalSlug: 'simple-ai',
    title: 'IA simple, para principiantes',
    shortTitle: 'IA simple',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Empezar con seguridad',
    summary:
      'Una puerta en lenguaje claro para entender qué es la IA, qué no es y cómo usarla sin entregar el juicio.',
    plainMeaning:
      'La IA es software que reconoce patrones y genera salidas útiles a partir del contexto que le das. Puede ayudarte a redactar, comparar, resumir, explicar, programar y planear, pero no se vuelve responsable de la decisión.',
    whyItMatters:
      'Una persona principiante necesita un modelo mental estable antes de aprender herramientas. Si entendés que la IA ayuda pero no manda, todo workflow posterior es más seguro.',
    safeExample:
      'Pedile a una herramienta de IA que explique un artículo público en cinco bullets, después compará la respuesta con el artículo y corregí lo que omitió.',
    firstMoves: [
      'Empezá con material público o inventado.',
      'Pedí una explicación simple antes de pedir una respuesta final.',
      'Compará la respuesta con la realidad.',
      'Decidí qué vas a usar, ignorar o verificar.'
    ],
    commonMistake:
      'Tomar una respuesta segura como prueba. La confianza es estilo, no verificación.',
    guardrails: [
      'Mantené detalles privados fuera de los primeros experimentos.',
      'Usá IA para borradores y opciones antes de decidir.',
      'Chequeá afirmaciones importantes con fuentes mejores.',
      'Mantené a la persona responsable por gusto, ética y consecuencia.'
    ],
    order: 1
  },
  {
    slug: 'start-safely-with-ai',
    technicalSlug: 'safety-baseline',
    title: 'Empezar con seguridad con herramientas de IA',
    shortTitle: 'Empezar con seguridad',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Empezar con seguridad',
    summary:
      'Una base de seguridad para usar IA sin entregar datos privados, juicio o responsabilidad.',
    plainMeaning:
      'La seguridad con IA empieza antes del prompt. Decidí qué no debería ver el sistema y usá material que sea seguro de copiar, guardar o malinterpretar.',
    whyItMatters:
      'El primer hábito durable no es técnica de prompting. Es separar ayuda útil de contexto sensible y decisiones riesgosas.',
    safeExample:
      'Usá notas inventadas o un párrafo público para practicar resúmenes. No empieces con datos de cuentas, claves, temas legales o planes privados.',
    firstMoves: [
      'Usá primero material inocuo.',
      'Sacá nombres, datos de cuenta, secretos, direcciones y planes internos.',
      'Pedí un borrador, no una respuesta final.',
      'Frená cuando la salida afecte a otra persona o una decisión seria.'
    ],
    commonMistake:
      'Pegar contexto privado real porque la tarea parece chica. Los prompts chicos también pueden filtrar información importante.',
    guardrails: [
      'No pegues secretos ni credenciales.',
      'No dejes que la IA apruebe accesos, dinero o acciones irreversibles sola.',
      'Verificá respuestas de alto impacto con fuentes autorizadas.',
      'Usá ejemplos de bajo riesgo mientras aprendés una herramienta nueva.'
    ],
    order: 2
  },
  {
    slug: 'access-secrets',
    technicalSlug: 'access-secrets',
    title: 'Accesos y secretos, para principiantes',
    shortTitle: 'Accesos y secretos',
    module: 'Module 0: Fast Track Setup',
    moduleSlug: 'module-0',
    moduleTitle: 'Empezar con seguridad',
    summary:
      'Una explicación simple de API keys, contraseñas, variables de entorno y por qué no se pegan secretos en herramientas de IA.',
    plainMeaning:
      'Un secreto es cualquier valor que permite acceder a una cuenta, servicio, modelo, base de datos o sistema privado. API keys, tokens, contraseñas, claves privadas y códigos de recuperación son secretos.',
    whyItMatters:
      'Muchos workflows con IA necesitan acceso a herramientas. Si el acceso se maneja mal, un workflow útil puede convertirse en un problema de seguridad.',
    safeExample:
      'Cuando pidas ayuda con setup, reemplazá una clave real por YOUR_API_KEY y describí dónde está guardada sin compartir el valor.',
    firstMoves: [
      'Aprendé qué cuenta como secreto.',
      'Guardá secretos en el lugar diseñado para eso.',
      'Usá placeholders al pedir ayuda.',
      'Rotá un secreto si lo expusiste por accidente.'
    ],
    commonMistake:
      'Pensar que un token es seguro porque aparece una sola vez o porque era solo una prueba.',
    guardrails: [
      'Nunca pegues secretos reales en issues públicos, chats, docs o prompts.',
      'No commitees archivos .env salvo ejemplos explícitos sin valores reales.',
      'Usá el menor permiso posible.',
      'Tratálos secretos filtrados como comprometidos.'
    ],
    order: 3
  },
  {
    slug: 'running-inference-locally',
    technicalSlug: 'running-inference-locally',
    title: 'Ejecutar IA localmente, para principiantes',
    shortTitle: 'IA local',
    module: 'Module 0: Setup & Safety',
    moduleSlug: 'module-0',
    moduleTitle: 'Empezar con seguridad',
    summary:
      'Una primera ruta en lenguaje simple para entender inferencia local antes de leer la guía técnica completa.',
    plainMeaning:
      'Ejecutar IA localmente significa usar un modelo en tu propia computadora en vez de enviar cada prompt a un chat alojado. Estás usando un modelo ya entrenado, no entrenando uno nuevo.',
    whyItMatters:
      'La IA local muestra las piezas reales: archivo de modelo, runtime, memoria, velocidad y calidad. Puede dar más control, pero también trae fricción de setup y límites de hardware.',
    safeExample:
      'Instalá un runtime, elegí un modelo chico y hacé una pregunta pública sobre la diferencia entre IA local y chat alojado.',
    firstMoves: [
      'Empezá con un modelo chico.',
      'Usá un solo runtime.',
      'Hacé una pregunta de prueba segura.',
      'Observá el trade-off entre control, privacidad, velocidad y setup.'
    ],
    commonMistake:
      'Probar primero el modelo más grande y confundir fricción de hardware con fracaso personal.',
    guardrails: [
      'No pegues secretos ni contexto interno sensible.',
      'Usá modelos más chicos si el primero es muy lento.',
      'Chequeá respuestas antes de confiar.',
      'Tratála inferencia local como laboratorio antes de producción.'
    ],
    order: 4
  },
  {
    slug: 'agent-notifications',
    technicalSlug: 'agent-notifications',
    title: 'Notificaciones de agentes, para principiantes',
    shortTitle: 'Notificaciones de agentes',
    module: 'Module 0: Setup & Safety',
    moduleSlug: 'module-0',
    moduleTitle: 'Empezar con seguridad',
    summary:
      'Por qué los agentes deberían avisar cuando terminan, se bloquean o necesitan aprobación humana.',
    plainMeaning:
      'Una notificación es el agente levantando la mano. Le dice a la persona que algo terminó, falló o necesita una decisión.',
    whyItMatters:
      'Los agentes pueden correr más tiempo que una respuesta normal de chat. Sin notificaciones, el trabajo útil se pierde y el trabajo riesgoso puede seguir sin atención.',
    safeExample:
      'Hacé que un agente avise cuando termina un build local en vez de mirar la terminal todo el tiempo.',
    firstMoves: [
      'Decidí qué eventos merecen notificación.',
      'Mantené silencioso el progreso rutinario.',
      'Avisá al completar, bloquearse o pedir aprobación.',
      'Hacé que el mensaje sea corto y accionable.'
    ],
    commonMistake:
      'Notificar cada evento chico. Demasiadas alertas entrenan a la persona a ignorar el sistema.',
    guardrails: [
      'Usá notificaciones para decisiones, no ruido.',
      'No incluyas secretos en el texto.',
      'Hacé visibles los fallos.',
      'Mantené a las personas en control de los pasos riesgosos.'
    ],
    order: 5
  },
  {
    slug: 'prompt-mastery',
    technicalSlug: 'prompt-mastery',
    title: 'Dominio de prompts, para principiantes',
    shortTitle: 'Prompts',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Usar IA para trabajo cotidiano',
    summary:
      'Una ruta simple desde pedidos vagos hacia prompts útiles con objetivo, contexto, límites, ejemplos y revisión.',
    plainMeaning:
      'Un prompt es la instrucción y el contexto que le das al modelo. Un buen prompt dice qué querés, qué importa, qué evitar y qué formato ayuda a revisar.',
    whyItMatters:
      'Mucha salida débil de IA empieza con una tarea poco clara. Mejores prompts hacen que el modelo sea más fácil de guiar y revisar.',
    safeExample:
      'Pedí el resumen de un artículo público indicando objetivo, audiencia, largo, formato y advertencias.',
    firstMoves: [
      'Decí el objetivo.',
      'Agregá contexto y límites.',
      'Dá un ejemplo si podés.',
      'Pedí un formato fácil de revisar.'
    ],
    commonMistake:
      'Intentar arreglar una tarea vaga con más palabras en vez de un objetivo más claro.',
    guardrails: [
      'No agregues datos privados solo para mejorar el contexto.',
      'Pedí incertidumbre cuando importan los hechos.',
      'Revisá antes de usar la salida afuera.',
      'Separá redactar de decidir.'
    ],
    order: 10
  },
  {
    slug: 'multi-tool-workflows',
    technicalSlug: 'multi-tool-workflows',
    title: 'Workflows multi-herramienta, para principiantes',
    shortTitle: 'Workflows multi-herramienta',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Usar IA para trabajo cotidiano',
    summary:
      'Cómo elegir la herramienta adecuada para cada paso en vez de forzar una sola caja de chat a hacer todo.',
    plainMeaning:
      'Un workflow multi-herramienta divide un trabajo entre herramientas. Una busca, otra resume, otra programa y la persona revisa el resultado.',
    whyItMatters:
      'Distintas herramientas tienen distintas fortalezas. Elegir herramienta por paso hace el workflow más claro y reduce la confianza ciega en una respuesta.',
    safeExample:
      'Usá búsqueda para juntar fuentes públicas, un modelo de chat para resumirlas y tu juicio para decidir qué importa.',
    firstMoves: [
      'Nombrá el trabajo.',
      'Dividilo en pasos.',
      'Elegí una herramienta por paso.',
      'Revisá el resultado combinado antes de actuar.'
    ],
    commonMistake:
      'Usar más herramientas porque parece avanzado. Más herramientas solo ayudan si los pasos están claros.',
    guardrails: [
      'No muevas datos sensibles por herramientas que no los necesitan.',
      'Guardá registro de fuentes.',
      'Compará salidas entre herramientas.',
      'Mantené el juicio final en la persona.'
    ],
    order: 11
  },
  {
    slug: 'model-selection-economics',
    technicalSlug: 'model-selection-economics',
    title: 'Selección de modelos y economía, para principiantes',
    shortTitle: 'Elegir modelo',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Usar IA para trabajo cotidiano',
    summary:
      'Una forma principiante de elegir entre modelos rápidos, baratos, capaces y cuidadosos según la tarea.',
    plainMeaning:
      'Seleccionar modelo significa elegir el sistema de IA que encaja con el trabajo. Algunos modelos son rápidos y baratos. Otros razonan mejor o sirven más para código, imágenes, contexto largo o voz.',
    whyItMatters:
      'Usar el modelo más fuerte para todo desperdicia cuota y dinero. Usar uno débil para una tarea difícil desperdicia tiempo y puede crear errores sutiles.',
    safeExample:
      'Usá un modelo rápido para reescribir una nota corta y uno más fuerte para revisar una arquitectura importante.',
    firstMoves: [
      'Estimá la dificultad.',
      'Usá modelos chicos para borradores y limpieza.',
      'Usá modelos fuertes para razonamiento complejo.',
      'Registrá si la salida valió el costo.'
    ],
    commonMistake: 'Tratar un modelo favorito como respuesta para toda tarea.',
    guardrails: [
      'Escalá cuando la tarea es ambigua o de alto impacto.',
      'No optimices costo saltando verificación.',
      'Cuidá cuotas y límites.',
      'Medí utilidad, no solo velocidad.'
    ],
    order: 12
  },
  {
    slug: 'voice-multimodal-workflows',
    technicalSlug: 'voice-multimodal-workflows',
    title: 'Voz y workflows multimodales, para principiantes',
    shortTitle: 'Voz y multimodalidad',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Usar IA para trabajo cotidiano',
    summary:
      'Cómo voz, imágenes, capturas y audio pueden hacer más útil la IA cuando el texto no alcanza.',
    plainMeaning:
      'La IA multimodal puede trabajar con más que texto. Puede escuchar audio, mirar una imagen, leer una captura, describir un gráfico o responder con voz.',
    whyItMatters:
      'El trabajo real no siempre viene como texto limpio. Voz e imágenes bajan fricción, sobre todo en mobile, cansancio o material visual.',
    safeExample:
      'Mandá una captura de un error público y pedí una explicación simple, sin datos de cuenta visibles.',
    firstMoves: [
      'Elegí el input que encaja con la tarea.',
      'Sacá detalles privados de imágenes o audio.',
      'Pedí primero una respuesta corta.',
      'Verificá después lo importante en texto.'
    ],
    commonMistake:
      'Olvidar que imágenes y audio pueden revelar contexto privado de fondo.',
    guardrails: [
      'Recortá capturas sensibles.',
      'No grabes personas sin consentimiento.',
      'Usá voz para borradores, no decisiones irreversibles.',
      'Chequeá interpretaciones visuales contra el original.'
    ],
    order: 13
  },
  {
    slug: 'human-ai-collaboration-handbook',
    technicalSlug: 'human-ai-collaboration-handbook',
    title: 'Colaboración humano-IA, para principiantes',
    shortTitle: 'Colaboración humano-IA',
    module: 'Module 1: AI Power User',
    moduleSlug: 'module-1',
    moduleTitle: 'Usar IA para trabajo cotidiano',
    summary:
      'Una guía para trabajar con IA como colaboradora manteniendo dirección y criterio humano.',
    plainMeaning:
      'Colaborar con IA significa que la persona define dirección, da contexto, revisa salida y decide qué se vuelve real. El modelo ayuda con opciones, borradores y análisis.',
    whyItMatters:
      'La IA es más útil cuando extiende la atención humana en vez de reemplazar la responsabilidad humana.',
    safeExample:
      'Pedí tres esquemas posibles, elegí vos la estructura más fuerte y después pedí mejorar solo esa versión.',
    firstMoves: [
      'Definí vos el objetivo.',
      'Pedí opciones antes de pedir copia final.',
      'Dá feedback sobre lo que funcionó.',
      'Mantené humana la decisión final.'
    ],
    commonMistake:
      'Dejar que el modelo defina el objetivo porque es más rápido que pensar el trabajo.',
    guardrails: [
      'Usá IA como espejo, no como jefe.',
      'No externalices ética ni gusto.',
      'Mantené claros los límites privados.',
      'Hacé que el artefacto final sea algo que puedas sostener.'
    ],
    order: 14
  },
  {
    slug: 'automation-pipelines',
    technicalSlug: 'automation-pipelines',
    title: 'Pipelines de automatización, para principiantes',
    shortTitle: 'Pipelines de automatización',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Construir un ritmo operativo con IA',
    summary:
      'Una forma principiante de convertir trabajo repetido en pasos revisados antes de automatizar.',
    plainMeaning:
      'Un pipeline de automatización es una secuencia de pasos que corre con menos esfuerzo manual. La IA puede ayudar a recolectar, transformar, resumir, redactar o enrutar trabajo.',
    whyItMatters:
      'La automatización compone cuando el proceso está claro. Automatizar un proceso desordenado suele hacer más rápido el desorden.',
    safeExample:
      'Creá un workflow semanal que recopile links públicos, los resuma y espere aprobación humana antes de publicar algo.',
    firstMoves: [
      'Escribí primero el checklist manual.',
      'Marcá dónde ayuda la IA.',
      'Marcá dónde aprueba una persona.',
      'Automatizá solo los pasos estables.'
    ],
    commonMistake: 'Automatizar antes de saber cómo se ve una salida correcta.',
    guardrails: [
      'Mantené aprobación antes de acciones públicas o irreversibles.',
      'Registrá qué corrió y qué cambió.',
      'Empezá con inputs de bajo riesgo.',
      'Hacé visibles los fallos.'
    ],
    order: 20
  },
  {
    slug: 'ai-first-lifestyle',
    technicalSlug: 'ai-first-lifestyle',
    title: 'Estilo de vida AI-first, para principiantes',
    shortTitle: 'AI-first',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Construir un ritmo operativo con IA',
    summary:
      'Cómo construir hábitos diarios con IA que preparan trabajo y aclaran pensamiento sin entregar decisiones.',
    plainMeaning:
      'Un estilo AI-first significa buscar dónde la IA puede bajar fricción al pensar y crear. No significa dejar que la IA maneje tu vida.',
    whyItMatters:
      'Los hábitos chicos componen. Un briefing matinal, un plan más claro o un checklist de revisión pueden mejorar el día entero sin un sistema gigante.',
    safeExample:
      'Pedile a la IA convertir una lista no sensible de tareas en tres prioridades y un riesgo a observar.',
    firstMoves: [
      'Elegí una fricción diaria.',
      'Usá IA para preparar, no decidir.',
      'Revisá qué ayudó.',
      'Conservá el hábito solo si ahorra atención real.'
    ],
    commonMistake: 'Agregar IA en todos lados porque está disponible.',
    guardrails: [
      'Protegé detalles de vida privada.',
      'Mantené la agencia en la persona.',
      'Evitá métricas falsas de productividad.',
      'Usá hábitos que afinen el juicio.'
    ],
    order: 21
  },
  {
    slug: 'building-mcp-server',
    technicalSlug: 'building-mcp-server',
    title: 'Servidores MCP, para principiantes',
    shortTitle: 'Servidores MCP',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Construir un ritmo operativo con IA',
    summary:
      'Una explicación simple de cómo un servidor MCP permite que una herramienta de IA lea o actúe mediante una interfaz controlada.',
    plainMeaning:
      'Un servidor MCP es un puente chico entre un cliente de IA y una herramienta o fuente de conocimiento. Expone acciones específicas que la IA puede pedir, no acceso sin control.',
    whyItMatters:
      'El acceso a herramientas es donde la IA se vuelve más útil y más riesgosa. Una interfaz controlada mantiene el sistema entendible.',
    safeExample:
      'Exponé una herramienta read-only de búsqueda sobre artículos públicos y dejá que la IA responda usando esos artículos.',
    firstMoves: [
      'Decidí qué debería poder hacer la IA.',
      'Empezá con herramientas read-only.',
      'Nombrá inputs y outputs con claridad.',
      'Chequeá cada resultado de herramienta antes de usarlo.'
    ],
    commonMistake:
      'Dar acceso amplio porque una herramienta estrecha parece más lenta de diseñar.',
    guardrails: [
      'Preferí menor privilegio.',
      'Registrá llamadas a herramientas.',
      'Evitá exponer secretos por salidas de herramientas.',
      'Pedí aprobación humana para acciones riesgosas.'
    ],
    order: 22
  },
  {
    slug: 'living-institutional-memory',
    technicalSlug: 'living-institutional-memory',
    title: 'Memoria institucional viva, para principiantes',
    shortTitle: 'Memoria viva',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Construir un ritmo operativo con IA',
    summary:
      'Cómo notas, decisiones, lecciones y artefactos públicos pueden convertirse en un sistema de memoria que compone.',
    plainMeaning:
      'La memoria viva es la práctica de mantener lecciones útiles encontrables y reutilizables, en vez de reaprenderlas cada vez.',
    whyItMatters:
      'Equipos y builders solitarios pierden apalancamiento cuando el conocimiento desaparece en chats, docs viejos o la cabeza de alguien.',
    safeExample:
      'Después de resolver un problema recurrente, guardá el patrón reutilizable como checklist corto, no solo como transcripción de chat.',
    firstMoves: [
      'Capturá la lección.',
      'Sacá detalles privados.',
      'Escribí el patrón reutilizable.',
      'Enlazalo donde el trabajo futuro lo encuentre.'
    ],
    commonMistake:
      'Guardar todo. La memoria funciona cuando está curada, no cuando se vuelve un basurero.',
    guardrails: [
      'No guardes secretos como memoria.',
      'Separá estado temporal de lecciones durables.',
      'Mantené artefactos públicos seguros y abstraídos.',
      'Revisá memorias viejas por supuestos vencidos.'
    ],
    order: 23
  },
  {
    slug: 'persistent-agents',
    technicalSlug: 'persistent-agents',
    title: 'Agentes persistentes, para principiantes',
    shortTitle: 'Agentes persistentes',
    module: 'Module 2: AI Integration & Orchestration',
    moduleSlug: 'module-2',
    moduleTitle: 'Construir un ritmo operativo con IA',
    summary:
      'Una explicación de agentes que conservan contexto, corren en el tiempo y necesitan límites claros.',
    plainMeaning:
      'Un agente persistente es un workflow de IA que puede continuar en el tiempo en vez de responder una vez y desaparecer. Puede tener memoria, tareas programadas o vigilancia de cambios.',
    whyItMatters:
      'La persistencia crea apalancamiento, pero también hace que los errores duren más si los límites son débiles.',
    safeExample:
      'Un agente semanal read-only puede preparar un resumen privado y esperar revisión antes de publicar algo.',
    firstMoves: [
      'Elegí un trabajo estrecho.',
      'Definí qué puede leer.',
      'Definí qué puede escribir.',
      'Decidí cuándo debe preguntar a la persona.'
    ],
    commonMistake:
      'Tratar persistencia como autonomía. Correr más tiempo no significa que el sistema deba decidir más.',
    guardrails: [
      'Empezá read-only cuando sea posible.',
      'Mantené logs y puntos de revisión.',
      'No dejes que jobs programados publiquen o desplieguen sin aprobación.',
      'Aclarà caminos de detener y revertir.'
    ],
    order: 24
  },
  {
    slug: 'context-is-not-memory',
    technicalSlug: 'context-is-not-memory',
    title: 'Contexto no es memoria, para principiantes',
    shortTitle: 'Contexto no es memoria',
    module: 'Module 3: Builder Foundations',
    moduleSlug: 'module-3',
    moduleTitle: 'Entender las ideas bajo la superficie',
    summary:
      'La diferencia entre lo que un modelo ve ahora y lo que un sistema recuerda después.',
    plainMeaning:
      'Contexto es la información disponible en la tarea actual. Memoria es información guardada para reutilizar en tareas futuras.',
    whyItMatters:
      'Un modelo solo puede usar lo que ve o recupera. Más contexto ayuda, pero no es lo mismo que un sistema de memoria confiable.',
    safeExample:
      'Pegá una nota pública corta para una respuesta. Guardá solo la lección durable si va a servir después.',
    firstMoves: [
      'Preguntá qué puede ver el modelo ahora.',
      'Decidí qué debería recordarse después.',
      'Mantené la memoria corta y durable.',
      'Sacá detalles temporales al terminar.'
    ],
    commonMistake:
      'Esperar que un modelo recuerde algo porque apareció en una conversación vieja.',
    guardrails: [
      'No guardes secretos como memoria.',
      'No confundas contexto largo con verdad.',
      'Mantené la memoria específica y estable.',
      'Usá fuentes cuando importan los hechos.'
    ],
    order: 30
  },
  {
    slug: 'planning-decomposition-control-structures',
    technicalSlug: 'planning-decomposition-control-structures',
    title: 'Planificación y descomposición, para principiantes',
    shortTitle: 'Planificación',
    module: 'Module 3: Builder Foundations',
    moduleSlug: 'module-3',
    moduleTitle: 'Entender las ideas bajo la superficie',
    summary:
      'Cómo hacer que la IA trabaje mejor dividiendo un objetivo en pasos chicos con controles entre medio.',
    plainMeaning:
      'Descomponer significa dividir una tarea grande en tareas más chicas. Las estructuras de control deciden qué pasa después de cada paso.',
    whyItMatters:
      'La IA suele fallar cuando intenta resolver un trabajo grande y borroso de un salto. Los pasos chicos hacen que los errores sean más visibles.',
    safeExample:
      'En vez de pedir un plan completo, pedí objetivos, riesgos, hitos, primera tarea y validación por separado.',
    firstMoves: [
      'Nombrá el resultado final.',
      'Dividí el trabajo en pasos.',
      'Agregá una revisión después de cada paso.',
      'Seguí solo cuando la revisión pasa.'
    ],
    commonMistake:
      'Pedir una respuesta final perfecta cuando lo que necesitás es un proceso controlado.',
    guardrails: [
      'Mantené acciones riesgosas con aprobación.',
      'Verificá salidas intermedias.',
      'No escondas incertidumbre.',
      'Revisá el plan cuando cambie la evidencia.'
    ],
    order: 31
  },
  {
    slug: 'agent-loop-controlled-feedback-loop',
    technicalSlug: 'agent-loop-controlled-feedback-loop',
    title: 'El loop de agente, para principiantes',
    shortTitle: 'Loop de agente',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Cómo los agentes observan, eligen una acción, revisan el resultado y repiten con seguridad.',
    plainMeaning:
      'Un loop de agente es un ciclo: mirar el estado, elegir una acción, usar una herramienta o producir salida, revisar qué pasó y decidir el próximo paso.',
    whyItMatters:
      'El loop es lo que hace útiles y riesgosos a los agentes. Cada vuelta puede componer progreso o errores.',
    safeExample:
      'Un agente de código lee un test fallido, edita un archivo, vuelve a correr el test y frena si el resultado no es claro.',
    firstMoves: [
      'Definí el objetivo.',
      'Limitá las herramientas disponibles.',
      'Chequeá cada resultado.',
      'Frená para aprobación humana en puntos riesgosos.'
    ],
    commonMistake: 'Dejar que el loop siga sin una condición clara de éxito.',
    guardrails: [
      'Usá acciones acotadas.',
      'Registrá uso de herramientas.',
      'Exigí checks antes de seguir.',
      'Mantené a las personas responsables por efectos externos.'
    ],
    order: 50
  },
  {
    slug: 'agentic-ai-systems-learning-path',
    technicalSlug: 'agentic-ai-systems-learning-path',
    title: 'Sistemas agentic de IA, para principiantes',
    shortTitle: 'Sistemas agentic',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Un mapa principiante de agentes: loop, herramientas, memoria, planificación, aprobación, confiabilidad, infraestructura de confianza y coordinación.',
    plainMeaning:
      'Un sistema agentic es un workflow de IA que puede dar pasos hacia un objetivo usando contexto, herramientas, checks y a veces memoria.',
    whyItMatters:
      'Los agentes no son trabajadores mágicos. Son sistemas que necesitan estructura, límites, observabilidad y responsabilidad humana.',
    safeExample:
      'Mapeá un agente de investigación como: pregunta, fuentes, herramienta de búsqueda, resumen, chequeo de citas, decisión humana.',
    firstMoves: [
      'Aprendé el loop.',
      'Agregá herramientas con cuidado.',
      'Agregá memoria solo cuando haga falta.',
      'Poné aprobaciones antes de acciones riesgosas.'
    ],
    commonMistake: 'Llamar agente a cualquier chatbot porque suena proactivo.',
    guardrails: [
      'Definí límites de autoridad.',
      'Mantené permisos de herramientas estrechos.',
      'Probá confiabilidad con casos reales.',
      'Escalá incertidumbre a personas.'
    ],
    order: 51
  },
  {
    slug: 'human-agency-is-not-a-button',
    technicalSlug: 'human-agency-is-not-a-button',
    title: 'La agencia humana no es un botón, para principiantes',
    shortTitle: 'Agencia humana',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Por qué los sistemas de agentes responsables necesitan autoridad humana real, no solo un prompt decorativo de aprobación.',
    plainMeaning:
      'Agencia humana significa que la persona mantiene control real sobre dirección, límites y consecuencias. Un botón solo ayuda si la persona tiene información y elección real.',
    whyItMatters:
      'Un sistema puede parecer seguro mientras empuja a las personas a aprobar cosas que no entienden.',
    safeExample:
      'Antes de que un agente mande un mensaje externo, mostrà el borrador, contexto fuente, riesgo y acción exacta para aprobación.',
    firstMoves: [
      'Decidí qué deben controlar las personas.',
      'Dale a la persona suficiente contexto.',
      'Hacé específica la aprobación.',
      'Hacé fácil rechazar o revisar.'
    ],
    commonMistake:
      'Agregar aprobación después de que el sistema ya tomó la decisión importante.',
    guardrails: [
      'Usá aprobaciones antes de efectos externos.',
      'Evitá prompts vagos de sí o no.',
      'Mantené visibles los límites de autoridad.',
      'Respetá el override humano.'
    ],
    order: 52
  },
  {
    slug: 'smart-is-not-reliable',
    technicalSlug: 'smart-is-not-reliable',
    title: 'Inteligente no es confiable, para principiantes',
    shortTitle: 'Inteligente no es confiable',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Por qué respuestas impresionantes de IA no son lo mismo que sistemas confiables.',
    plainMeaning:
      'Una salida inteligente puede seguir siendo inconsistente. La confiabilidad viene de checks, límites, tests, caminos de recuperación y escalamiento humano claro.',
    whyItMatters:
      'La gente sobreconfía en sistemas que suenan fluidos. Los agentes útiles necesitan más que inteligencia. Necesitan comportamiento estable bajo condiciones desordenadas.',
    safeExample:
      'Un resumidor debería citar fuentes, manejar datos faltantes y decir cuándo no puede responder, no solo producir un párrafo pulido.',
    firstMoves: [
      'Definí cómo se ve una buena salida.',
      'Probá casos normales y borde.',
      'Agregá checks y fallbacks.',
      'Registrá fallos y mejorá el sistema.'
    ],
    commonMistake: 'Juzgar confiabilidad por una demo impresionante.',
    guardrails: [
      'Exigí verificación para afirmaciones importantes.',
      'Planeá fallos de herramientas.',
      'Hacé visible la incertidumbre.',
      'Escalá fallos repetidos a personas.'
    ],
    order: 53
  },
  {
    slug: 'trust-is-earned-through-evidence-not-vibes',
    technicalSlug: 'trust-is-earned-through-evidence-not-vibes',
    title: 'Confianza con evidencia, para principiantes',
    shortTitle: 'Confianza con evidencia',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Una guía simple para confiar en agentes solo cuando pueden mostrar qué pasó, qué se chequeó y cuándo decide una persona.',
    plainMeaning:
      'No confíes en un agente porque suena seguro. La confianza crece cuando el sistema puede mostrar su trabajo, probar resultados, respetar permisos y frenar en el límite correcto.',
    whyItMatters:
      'A medida que los agentes ganan herramientas, los errores pueden pasar del texto a acciones reales. La evidencia ayuda a decidir cuándo un agente puede seguir solo y cuándo necesita revisión.',
    safeExample:
      'Un ayudante de archivos debería mostrar la ruta del archivo creado y un chequeo de verificación antes de decir que el upload o guardado funcionó.',
    firstMoves: [
      'Empezá con una tarea chica.',
      'Nombrá qué evidencia prueba el éxito.',
      'Mantené permisos estrechos.',
      'Pedí aprobación humana antes de que suban las consecuencias.'
    ],
    commonMistake:
      'Tratar el mensaje de éxito del agente como prueba de que el resultado real ocurrió.',
    guardrails: [
      'Preguntá qué puede tocar el agente.',
      'Buscá un artefacto, status, trace o chequeo independiente.',
      'Usá acceso read-only antes de acceso de escritura cuando se pueda.',
      'Escalá acciones públicas, financieras, de cuentas, datos o irreversibles.'
    ],
    order: 54
  },
  {
    slug: 'model-choice-is-system-design',
    technicalSlug: 'model-choice-is-system-design',
    title: 'Elegir modelo es diseñar el sistema, para principiantes',
    shortTitle: 'Elegir modelo como diseño',
    module: 'Module 5: Agent Architecture',
    moduleSlug: 'module-5',
    moduleTitle: 'Entender agentes sin hype',
    summary:
      'Una guía principiante para elegir la ruta de modelo correcta según tarea, riesgo, costo y límite de decisión humana.',
    plainMeaning:
      'Model routing significa decidir qué ruta de modelo debería manejar una tarea. El trabajo simple puede usar una ruta rutinaria. El trabajo difícil, riesgoso, privado o ambiguo puede necesitar razonamiento más fuerte, más checks o una decisión humana.',
    whyItMatters:
      'Los mejores sistemas de agentes no usan ciegamente el modelo más grande o más barato. Hacen coincidir capacidad con consecuencia para que el sistema siga siendo útil, sostenible y revisable.',
    safeExample:
      'Usá una ruta rápida para limpiar un párrafo público. Usá una ruta más fuerte para comparar fuentes públicas. Pedí decisión humana antes de publicar o actuar externamente.',
    firstMoves: [
      'Nombrá la tarea.',
      'Estimá dificultad y consecuencia.',
      'Elegí una ruta por defecto, de escalamiento o humana.',
      'Definí qué evidencia prueba que la ruta funcionó.'
    ],
    commonMistake:
      'Tratar la elección de modelo como preferencia personal en vez de diseño de sistema.',
    guardrails: [
      'No optimices costo salteando verificación.',
      'Escalá trabajo ambiguo o de alto impacto.',
      'Mantené contexto privado fuera de rutas que no lo necesitan.',
      'Exigí humanos para consecuencias externas o irreversibles.'
    ],
    order: 55
  }
];

export const moduleIntros = [
  {
    slug: 'module-0',
    label: 'Module 0',
    title: 'Start safely',
    titleEs: 'Empezar con seguridad',
    summary:
      'The first beginner path through AI Lab: basic mental models, safety, access, local AI, and notifications.',
    summaryEs:
      'La primera ruta principiante de AI Lab: modelos mentales básicos, seguridad, accesos, IA local y notificaciones.'
  },
  {
    slug: 'module-1',
    label: 'Module 1',
    title: 'Use AI for everyday work',
    titleEs: 'Usar IA para trabajo cotidiano',
    summary:
      'Plain-language counterparts to prompting, tools, model choice, voice, and collaboration.',
    summaryEs:
      'Contrapartes en lenguaje claro para prompts, herramientas, elección de modelo, voz y colaboración.'
  },
  {
    slug: 'module-2',
    label: 'Module 2',
    title: 'Build an AI operating rhythm',
    titleEs: 'Construir un ritmo operativo con IA',
    summary:
      'Beginner bridges into automation, memory, MCP, persistent agents, and daily AI habits.',
    summaryEs:
      'Puentes principiantes hacia automatización, memoria, MCP, agentes persistentes y hábitos diarios con IA.'
  },
  {
    slug: 'module-3',
    label: 'Module 3',
    title: 'Understand the ideas under the hood',
    titleEs: 'Entender las ideas bajo la superficie',
    summary:
      'Beginner explanations for context, memory, planning, decomposition, and control structures.',
    summaryEs:
      'Explicaciones principiantes sobre contexto, memoria, planificación, descomposición y estructuras de control.'
  },
  {
    slug: 'module-5',
    label: 'Module 5',
    title: 'Understand agents without the hype',
    titleEs: 'Entender agentes sin hype',
    summary:
      'Beginner versions of agent loops, agentic systems, human agency, reliability, trust infrastructure, and model routing.',
    summaryEs:
      'Versiones principiantes de loops de agentes, sistemas agentic, agencia humana, confiabilidad, infraestructura de confianza y model routing.'
  }
];

export function getTopicsByModule(topics: BeginnerTopic[] = beginnerTopics) {
  return moduleIntros.map((module) => ({
    ...module,
    topics: topics
      .filter((topic) => topic.moduleSlug === module.slug)
      .sort((a, b) => a.order - b.order)
  }));
}

export function getBeginnerTopic(lang: 'en' | 'es', slug: string) {
  const topics = lang === 'es' ? beginnerTopicsEs : beginnerTopics;
  return topics.find((topic) => topic.slug === slug);
}
