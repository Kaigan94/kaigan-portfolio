import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Nicholas",
  lastName: "Sjöstrand",
  displayName: "Nicholas Sjöstrand",
  username: "Kaigan",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Frontend Developer",
    "Coffee Monster",
    "Game Enthusiast",
    "Backend Explorer",
  ],
  address: "Lund, Sweden",
  phoneNumber: "KzQ2NzMwMzQwNDM0", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2FpZ2FuLmNvZGVzQGdtYWlsLmNvbQ==", // base64 encoded
  website: "https://kaigan-portfolio.vercel.app/",
  jobTitle: "Game UI Developer Intern (at Avalanche Studios Group)",
  jobs: [
    {
      title: "Junior UI Developer",
      company: "Avalanche Studios Group",
      website: "https://avalanchestudios.com/",
    },
  ],
  about: `
Hej 👋  
I’m Nicholas – a frontend developer in the making and fullstack student who enjoys turning my ideas into usable interfaces.

When I’m not deep in code, you’ll probably find me gaming, headbanging, spending time with my dog and partner, exploring fantasy worlds filled with dragons, swords and magic – or recharging with a cup of Java ☕️ (pun intended).

I'm always on the hunt for new challenges and opportunities to grow as a developer. Feel free to reach out if you want to connect or collaborate on something exciting!
  `,
  avatar: "/images/kaigan.svg",
  ogImage: "/og.png",
  namePronunciationUrl: "/audio/nicholas.mp3",
  keywords: [
    "nicholas sjöstrand",
    "nicholas",
    "nico",
    "kaigan",
    "fullstack",
    "frontend",
    "developer",
    "avalanche",
    "portfolio",
    "personal",
    "student",
    "tech",
    "game",
    "ui",
    "developer",
    "portfolio",
    "react",
    "lund",
    "sweden",
  ],
  dateCreated: "2025-09-11", // YYYY-MM-DD
};
