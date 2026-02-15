import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // --- Languages ---
  {
    key: "html",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    segment: "stack",
    categories: ["Language"],
  },
  {
    key: "css",
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    segment: "stack",
    categories: ["Language"],
  },
  {
    key: "js",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    segment: "stack",
    categories: ["Language"],
  },
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    segment: "stack",
    categories: ["Language"],
  },

  // --- Frameworks & Libraries ---
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    segment: "stack",
    categories: ["Library", "UI Library"],
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    segment: "stack",
    categories: ["Framework"],
  },
  {
    key: "coherent",
    title: "Coherent Gameface",
    href: "https://coherent-labs.com/gameface/",
    segment: "stack",
    categories: ["Library", "Game UI"],
  },
  {
    key: "nextjs2",
    title: "Next.js",
    href: "https://nextjs.org/",
    segment: "stack",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    segment: "stack",
    categories: ["Library", "Animation"],
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    segment: "stack",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "java",
    title: "Java",
    href: "https://www.java.com/",
    segment: "stack",
    categories: ["Language"],
  },
  {
    key: "c++",
    title: "C++",
    href: "https://isocpp.org/",
    segment: "stack",
    categories: ["Language"],
  },

  // --- Runtime & Backend ---

  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    segment: "stack",
    categories: ["Runtime Environment"],
  },
  {
    key: "spring",
    title: "Spring",
    href: "https://spring.io/",
    segment: "stack",
    categories: ["Framework"],
  },

  // --- Database ---
  {
    key: "my-sql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    segment: "stack",
    categories: ["Database"],
  },

  // --- Tools (API, Version Control, IDE) ---
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    segment: "tools",
    categories: ["Version Control"],
  },
  {
    key: "perforce",
    title: "Perforce",
    href: "https://www.perforce.com/",
    segment: "tools",
    categories: ["Version Control"],
  },
  {
    key: "intellij",
    title: "IntelliJ IDEA",
    href: "https://www.jetbrains.com/idea/",
    segment: "tools",
    categories: ["Tools", "IDE"],
  },
  {
    key: "vscode",
    title: "VS Code",
    href: "https://code.visualstudio.com/",
    segment: "tools",
    categories: ["Tools", "IDE"],
  },

  // --- Design Tools ---
  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    segment: "tools",
    categories: ["Tools", "Design"],
  },

  // --- AI Tools ---
  // {
  //   key: "chat-gpt",
  //   title: "ChatGPT",
  //   href: "https://chatgpt.com/",
  //   segment: "tools",
  //   categories: ["Tools", "AI"],
  //   theme: true,
  // },
];
