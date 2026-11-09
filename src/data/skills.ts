/**
 * Languages, platforms and tools, grouped for the "Competências" section.
 * Tool names stay the same in every language; the group names are translated
 * in the dictionaries (`skills.groups`).
 *
 * Only tools Felipe actually uses: backed by the CV (`curriculos em
 * ingles/BASE.md` in Felipe-OS), the site, his own projects in Felipe-OS, or
 * confirmed by him directly.
 *
 * Logos live in public/logos/stack and are trademarks of their owners. They
 * come from Devicon (MIT), Lobe Icons (MIT), Simple Icons (CC0) and the
 * Iconify "logos" set (CC0).
 */

export type SkillGroupKey =
  | "languages"
  | "ai"
  | "observability"
  | "frontend"
  | "backend"
  | "data"
  | "cloud"
  | "automation"
  | "testing"
  | "tools";

export type Skill = { name: string; logo: string };

const logo = (file: string) => `/logos/stack/${file}.svg`;

export const SKILL_GROUPS: { key: SkillGroupKey; items: Skill[] }[] = [
  {
    key: "languages",
    items: [
      { name: "Python", logo: logo("python") },
      { name: "TypeScript", logo: logo("typescript") },
      { name: "JavaScript", logo: logo("javascript") },
      { name: "HTML", logo: logo("html") },
      { name: "CSS", logo: logo("css") },
      { name: "Bash", logo: logo("bash") },
    ],
  },
  {
    key: "ai",
    items: [
      { name: "LangChain", logo: logo("langchain") },
      { name: "LangGraph", logo: logo("langgraph") },
      { name: "OpenAI", logo: logo("openai") },
      { name: "Gemini", logo: logo("gemini") },
      { name: "Claude", logo: logo("claude") },
      { name: "Amazon Bedrock", logo: logo("bedrock") },
      { name: "vLLM", logo: logo("vllm") },
      { name: "Ollama", logo: logo("ollama") },
      { name: "Qwen", logo: logo("qwen") },
      { name: "Gemma", logo: logo("gemma") },
    ],
  },
  {
    key: "observability",
    items: [
      { name: "LangSmith", logo: logo("langsmith") },
      { name: "Langfuse", logo: logo("langfuse") },
      { name: "Grafana", logo: logo("grafana") },
      { name: "Prometheus", logo: logo("prometheus") },
      { name: "OpenTelemetry", logo: logo("opentelemetry") },
      { name: "New Relic", logo: logo("newrelic") },
    ],
  },
  {
    key: "frontend",
    items: [
      { name: "React", logo: logo("react") },
      { name: "Next.js", logo: logo("nextjs") },
      { name: "React Native", logo: logo("reactnative") },
      { name: "Expo", logo: logo("expo") },
      { name: "Vite", logo: logo("vite") },
      { name: "Tailwind CSS", logo: logo("tailwindcss") },
      { name: "Sass", logo: logo("sass") },
      { name: "shadcn/ui", logo: logo("shadcn") },
      { name: "Radix UI", logo: logo("radixui") },
      { name: "TanStack Query", logo: logo("tanstack") },
      { name: "React Router", logo: logo("reactrouter") },
      { name: "React Hook Form", logo: logo("reacthookform") },
      { name: "Storybook", logo: logo("storybook") },
      { name: "GSAP", logo: logo("gsap") },
      { name: "Framer Motion", logo: logo("motion") },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", logo: logo("nodejs") },
      { name: "Express", logo: logo("express") },
      { name: "Hono", logo: logo("hono") },
      { name: "FastAPI", logo: logo("fastapi") },
      { name: "Pydantic", logo: logo("pydantic") },
      { name: "SQLAlchemy", logo: logo("sqlalchemy") },
      { name: "Prisma", logo: logo("prisma") },
      { name: "Zod", logo: logo("zod") },
      { name: "Socket.io", logo: logo("socketio") },
      { name: "RabbitMQ", logo: logo("rabbitmq") },
      { name: "Swagger", logo: logo("swagger") },
    ],
  },
  {
    key: "data",
    items: [
      { name: "PostgreSQL · pgvector", logo: logo("postgresql") },
      { name: "MongoDB", logo: logo("mongodb") },
      { name: "Redis", logo: logo("redis") },
      { name: "SQLite", logo: logo("sqlite") },
      { name: "Power BI", logo: logo("powerbi") },
    ],
  },
  {
    key: "cloud",
    items: [
      { name: "AWS", logo: "/logos/aws.svg" },
      { name: "Docker", logo: logo("docker") },
      { name: "GitHub Actions", logo: logo("githubactions") },
      { name: "Azure DevOps", logo: logo("azuredevops") },
      { name: "Vercel", logo: logo("vercel") },
      { name: "Railway", logo: logo("railway") },
      { name: "Firebase", logo: logo("firebase") },
    ],
  },
  {
    key: "automation",
    items: [
      { name: "n8n", logo: logo("n8n") },
      { name: "Make", logo: logo("make") },
      { name: "Resend", logo: logo("resend") },
      { name: "Cloudinary", logo: logo("cloudinary") },
    ],
  },
  {
    key: "testing",
    items: [
      { name: "Playwright", logo: logo("playwright") },
      { name: "Jest", logo: logo("jest") },
      { name: "Vitest", logo: logo("vitest") },
      { name: "Pytest", logo: logo("pytest") },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", logo: logo("git") },
      { name: "VS Code", logo: logo("vscode") },
      { name: "Cursor", logo: logo("cursor") },
      { name: "Figma", logo: logo("figma") },
      { name: "Google Analytics", logo: logo("googleanalytics") },
    ],
  },
];
