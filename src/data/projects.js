/* 
  INSTRUCTIONS FOR EDITING:
  1. Add your project details here.
  2. 'contributions' is an object where keys are member IDs (from team.js) and values are their specific contributions.
*/

export const projects = [
    {
        id: 1,
        title: "Autonomous Code Synthesis Core",
        description: "An advanced multi-agent AI ecosystem designed to autonomously handle the entire software development lifecycle. It translates high-level user goals into executable, validated code by orchestrating specialized agents for planning, coding, and debugging. The system features a self-healing mechanism that iteratively fixes errors and optimizes performance, ensuring robust production-ready outputs.",
        techStack: ["Python", "OpenAI/Groq", "Agentic AI", "Self-Healing"],
        contributions: {
            1: "Designed the agentic dashboard interface for monitoring real-time agent execution and state transitions.",
            2: "Architected the multi-agent orchestration layer and implemented the self-healing iterative feedback loops.",
            3: "Integrated support for dynamic LLM switching (OpenAI/Groq) and optimized token usage for cost efficiency.",
            4: "Designed the user flow for 'Goal to Code' transformation and visualized the agent decision trees.",
            5: "Managed the deployment pipeline and validated the system against complex coding benchmarks."
        }
    },
    {
        id: 2,
        title: "Cognitive Research & Summarization Vector",
        description: "A sophisticated intelligence gathering system that monitors and synthesizes the latest advancements in LLM security and AI research. By deploying autonomous crawler agents across repositories like ArXiv and SSRN, it filters noise and generates concise, high-impact summaries. The insights are delivered via a daily digest, empowering researchers to stay ahead of the curve without information overload.",
        techStack: ["Python", "CrewAI", "Google Gemini API"],
        contributions: {
            1: "Built the frontend for the daily digest archive and email preference settings.",
            2: "Developed the specialized retrieval agents for ArXiv, ViXra, and SSRN using Python.",
            3: "Implemented the summarization logic using Google Gemini API and the automated email delivery system.",
            4: "Created the layout for the automated HTML emails to ensure high readability on all devices.",
            5: "Coordinated the research sources list and verified the quality of autonomous summaries."
        }
    },
    {
        id: 3,
        title: "Semantic Document Intelligence Matrix",
        description: "A hybrid Retrieval-Augmented Generation (RAG) platform that solves the challenge of querying static PDF documents. It combines vector database indexing with dynamic web scraping fallbacks to provide comprehensive answers. When local context is insufficient, the system intelligently searches the web to bridge knowledge gaps, ensuring accurate and context-aware responses to complex queries.",
        techStack: ["Local LLMs", "RAG", "Vector DB", "Web Scraping"],
        contributions: {
            1: "Implemented the interactive chat interface with citation highlights for the PDF viewer.",
            2: "Engineered the document indexing pipeline and vector database storage for efficient retrieval.",
            3: "Developed the dynamic web scraping fallback mechanism when local context is insufficient.",
            4: "Designed the 'Source vs. Web' toggle UI and the document upload experience.",
            5: "Defined the privacy constraints for local processing and tested offline capabilities."
        }
    },
    {
        id: 4,
        title: "Algorithmic Procurement Negotiation Nexus",
        description: "An intelligent automation tool that revolutionizes the procurement process by analyzing requirements and generating structured Request for Quotation (RFQ) documents. Leveraging LLMs, it parses historical data and project constraints to create professional, industry-standard RFQs. This reduces manual drafting time and ensures consistency, accuracy, and compliance in vendor communications.",
        techStack: ["Multi-Agent", "LLM", "Document Analysis"],
        contributions: {
            1: "Developed the form-based interface for inputting initial RFQ requirements and constraints.",
            2: "Built the logic for extracting specifications from past RFQ and PDF reference documents.",
            3: "Orchestrated the collaboration between specialized agents to different sections of the RFQ.",
            4: "Designed the final PDF output template to ensure professional formatting of generated RFQs.",
            5: "Validated the generated RFQs against industry standards and ensured data privacy compliance."
        }
    },
    {
        id: 5,
        title: "Neural-Sync Enterprise Mirror",
        description: "This platform acts as a background-running neuromorphic digital twin that observes daily company activity and learns the owner's decision patterns. It emulates human memory by linking context over time, storing meaning rather than just raw logs. The system identifies organizational weak points and alignment with business goals through internal agent debate. Insights are delivered proactively through voice and chat interfaces to ensure continuous understanding. It is built for enterprise trust with zero-trust access and a separate encrypted database for every company.",
        techStack: [
            "Cognitive Engine: Neuromorphic Memory",
            "Multi-agent System",
            "CRM & Finance Integrations",
            "Voice & Chat Interface",
            "Zero-Trust Security"
        ],
        contributions: {
            1: "Designed the neuromorphic memory architecture for context retention.",
            2: "Implemented the zero-trust security model and encrypted database sharding.",
            3: "Developed the voice interface and real-time chat interactions.",
            4: "Created the internal agent debate logic for organizational insight generation.",
            5: "Integrated CRM and Finance API connectors for seamless data flow."
        }
    },
    {
        id: 6,
        title: "Agentic Full-Stack Synthesis Engine",
        description: "This AI-driven platform functions as a virtual software engineering team to transform natural language prompts into production-ready web applications. It follows a 'Clarity before Code' philosophy, using specialized agents to resolve ambiguity through intelligent questioning before any development begins. The system designs enterprise-ready technical architectures first, defining APIs and data models upfront. Development is then executed in parallel across frontend, backend, and database agents to maximize productivity. It features an automated quality loop (Build-Test-Fix-Stabilize) and full CI/CD deployment.",
        techStack: [
            "React & Next.js",
            "Node.js & Python",
            "SQL & NoSQL",
            "Master Orchestrator Agent",
            "Docker & Cloud Infra"
        ],
        contributions: {
            1: "Architected the 'Clarity before Code' questioning engine.",
            2: "Built the parallel execution pipeline for frontend and backend agents.",
            3: "Designed the automated quality loop and CI/CD integration.",
            4: "Implemented the real-time build status dashboard.",
            5: "Optimized the database schema generation and migration logic."
        }
    },
    {
        id: 7,
        title: "Adversarial Resilience & Chaos Simulator",
        description: "This platform strengthens system reliability by safely simulating real-world failures and adversarial behavior within distributed microservices. It utilizes an intelligence engine that thinks like a malicious user or 'careless admin' to generate edge-condition test scenarios. A core 'Monk Discipline' controller enforces safety gates, blast radius rules, and emergency kill switches to prevent actual outages. The system continuously learns from outcome patterns to recommend architecture hardening and security improvements. It provides detailed resilience scoring by evaluating factors like data integrity and alert effectiveness.",
        techStack: [
            "Adversarial Intelligence Engine",
            "Chaos Injection Engine",
            "Telemetry Collector",
            "Chaos Orchestrator",
            "RBAC & Audit Trails"
        ],
        contributions: {
            1: "Developed the Monk Discipline safety gate logic.",
            2: "Implemented the chaos injection engine for distributed systems.",
            3: "Designed the resilience scoring algorithm and dashboard.",
            4: "Built the adversarial intelligence engine for edge-case generation.",
            5: "Integrated full audit trails and RBAC for experiment governance."
        }
    },
    {
        id: 8,
        title: "Autonomous Governance & Action Orchestrator",
        description: "This enterprise-grade platform transforms raw operational data into compliant, explainable, and autonomous actions. It addresses fragmented intelligence by normalizing data from PDFs, emails, and ERP systems into machine-understandable knowledge. The architecture uses specialized agents (Sentinel, Reviewer, and Planning) that collaborate to mirror real-world organizational roles. Decisions are validated against business rules and domain constraints to ensure governance and prevent compliance violations. The system supports both fully autonomous execution and human-in-the-loop models for high-stakes decisions.",
        techStack: [
            "LLM Selection & Routing",
            "Knowledge Graphs",
            "LangGraph & LangSmith",
            "Automated Action Layer",
            "Jira/Docker/AWS Integration"
        ],
        contributions: {
            1: "Designed the multi-agent collaboration workflow (Sentinel, Reviewer, Planning).",
            2: "Implemented the knowledge graph normalization for unstructured data.",
            3: "Built the compliance validation engine against business rules.",
            4: "Developed the human-in-the-loop interface for high-stakes decisions.",
            5: "Integrated the platform with Jira, Docker, and AWS."
        }
    }
];

export const teamInfo = {
    vision: "To be a trusted on demand engineering partner that bridges ambitious ideas and technical reality.We operate as a tightly integrated engineering unit, delivering the security, speed, and execution quality of an in house team with the flexibility of a modern, distributed workforce.",
    mission: "We provide immediate, high caliber engineering support to companies facing staffing constraints or complex delivery challenges. Deploying as a pre integrated, cross functional team across strategy, development, infrastructure, quality assurance, and delivery management, we take end to end ownership of the software lifecycle. Our focus is to ship secure, production ready systems that enable clients to scale efficiently without the delays of recruitment or the risks of fragmented freelance execution."
};
