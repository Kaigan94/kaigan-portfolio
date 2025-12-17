import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "devtalk",
    title: "DevTalk Chat App",
    period: {
      start: "10.2025",
      end: "12.2025",
    },
    link: "https://github.com/WictorNisa/DevTalk",
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "Figma",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Zustand",
      "WebSocket",
      "GitHub OAuth",
    ],
    description: `A real-time chat platform for developers with the "Slack meets Discord" mindset.  
- Built with React (Vite + TypeScript), shadcn/ui and Tailwind CSS on the frontend  
- Powered by Java Spring Boot and PostgreSQL on the backend  
- GitHub OAuth authentication  
- Real-time messaging with WebSocket
- State management using Zustand  
- Includes a landing page, login feature using GitHub OAuth and a dashboard with live chat rooms
- Built using an Agile (SCRUM) workflow with Trello and GitHub branches`,
    logo: "/icons/project-icons/devtalk-logo.svg",
    isExpanded: true,
  },
  {
    id: "modern-portfolio",
    title: "Modern Portfolio",
    period: {
      start: "07.2025",
      end: "09.2025",
    },
    link: "https://kaigan-portfolio.vercel.app/",
    skills: [
      "React",
      "TypeScript",
      "Motion",
      "Tailwind CSS",
      "Radix UI",
      "Next.js",
      "shadcn/ui",
      "Figma",
    ],
    description: `A modern take on my portfolio, blog and component library.  
- Built while practicing TypeScript, Next.js, Radix UI, Tailwind CSS and Framer Motion  
- Helped me learn TypeScript, get more comfortable with Next.js and creating cleaner layouts
- Clean and modern design
- Light and dark theme support
- vCard integration
- Spam protected email

Blog Features:
- MDX and markdown support
- RSS Feed for easy content distribution
- Syntax Highlighting for better readability`,
    logo: "/icons/favicons/favicon.svg",
    isExpanded: false,
  },
  {
    id: "rpg-portfolio",
    title: "RPG Inspired Portfolio",
    period: {
      start: "03.2025",
      end: "",
    },
    link: "https://nicholas-sjostrand.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "React", "Piskel"],
    description: `- My first bigger project where I learned the basics of React  
- Inspired by old-school RPG games with custom and reworked pixel art from Piskel  
- A playful way for me to practice coding while also showing my projects`,
    logo: "icons/project-icons/rpg-portfolio.svg",
    // isExpanded: true,
  },
  {
    id: "noctra",
    title: "Noctra Counting App",
    period: {
      start: "09.2024",
      end: "10.2024",
    },
    link: "https://noctra.netlify.app/",
    skills: ["HTML", "CSS", "JavaScript", "Canva"],
    description: `A small practice project where I learned core JavaScript and DOM handling
- Count up/down, then save snapshots to a history
- See total entries and “last updated”
- Remove single counts, or reset everything
- Mobile-friendly design with large buttons
- One-click export of the saved history to a .txt file
- Minimal dark theme with playful, fantasy-styled layout`,
    logo: "/icons/project-icons/noctra-app.svg",
  },
  {
    id: "cocktaildb",
    title: "Cocktail Explorer API",
    period: {
      start: "11.2024",
      end: "12.2024",
    },
    link: "https://kaigan-cocktail-app.netlify.app/",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "TheCocktailDB API",
      "Canva",
    ],
    description: `School project made to practice working with APIs using the free TheCocktailDB API.
    - Features search by name or ingredient, plus saving favorites  
    - Built with vanilla JavaScript and styled with Tailwind CSS
    - Custo logo made in Canva
    `,
    logo: "/icons/project-icons/cocktail-app.svg",
  },
  // Add more project entries by duplicating the object above
];
