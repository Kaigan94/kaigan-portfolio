import type { ExperienceItemType } from "@/registry/work-experience";
import { WorkExperience } from "@/registry/work-experience";

const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "teknikhogskolan-lund",
    companyName: "Teknikhögskolan, Lund",
    companyLogo: "/icons/th-logga.svg",
    positions: [
      {
        id: "fullstack-development-student",
        title: "Fullstack Development Student",
        employmentPeriod: "2024 — Present",
        employmentType: "Full-time studies",
        icon: "code",
        description:
          "Two-year Higher Vocational Education (YH) program focused on JavaScript, Node.js, Java, Spring, databases, testing, and version control.",
        skills: [
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "Java",
          "Spring Boot",
          "SQL",
          "Git",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-1",
        title: "Fullstack Developer (JavaScript focus)",
        employmentPeriod: "2024 — 2026",
        employmentType: "Education",
        icon: "education",
        description:
          "Full-time YH program covering JavaScript, Node.js, Java, Spring, databases, testing, and collaborative delivery with a six-month LIA internship.",
        skills: [
          "JavaScript",
          "HTML",
          "CSS",
          "Node.js",
          "Java",
          "Spring Boot",
          "Spring Security",
          "SQL",
          "Git",
          "Postman",
        ],
        isExpanded: true,
      },
      {
        id: "edu-2",
        title: "Painter and Decorator – Municipal Adult Education (Komvux)",
        employmentPeriod: "2022 — 2023",
        employmentType: "Education",
        icon: "education",
        description:
          "One-year adult education at Vipan, Lund (Komvux) covering surface preparation, interior/exterior techniques, materials, and safety procedures.",
        skills: [
          "Painting",
          "Surface Preparation",
          "Color Theory",
          "Safety Protocols",
          "Teamwork",
          "Time Management",
          "Attention to Detail",
        ],
      },
      {
        id: "edu-3",
        title: "Furniture Carpentry – Municipal Adult Education (Komvux)",
        employmentPeriod: "2020 — 2021",
        employmentType: "Education",
        icon: "education",
        description:
          "One-year adult education in Malmö (Komvux) with practical woodworking, joinery, and project-based furniture builds from plan to finished piece.",
        skills: ["Woodworking", "Furniture Design", "Tool Use"],
      },
      {
        id: "edu-4",
        title: "Graphic Design",
        employmentPeriod: "2010 — 2013",
        employmentType: "High School Education",
        icon: "education",
        description:
          "Three-year program at Mediegymnasiet, Malmö covering visual communication, digital media, typography, layout, and foundational HTML.",
        skills: [
          "Graphic Design",
          "Adobe Photoshop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Typography",
          "Layout Design",
          "Creativity",
          "HTML",
        ],
      },
    ],
  },
];

export default function WorkExperienceDemo() {
  return (
    <WorkExperience
      className="w-full rounded-lg border"
      experiences={WORK_EXPERIENCE}
    />
  );
}
