export interface Skill {
  name: string;
  proficiency: 1 | 2 | 3; // 1=beginner, 2=proficient, 3=expert
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", proficiency: 3 },
      { name: "Python", proficiency: 3 },
      { name: "JavaScript", proficiency: 3 },
      { name: "SQL", proficiency: 3 },
      { name: "HTML / CSS", proficiency: 3 },
      { name: "Bash", proficiency: 2 }
    ]
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Next.js", proficiency: 3 },
      { name: "React", proficiency: 3 },
      { name: "FastAPI", proficiency: 3 },
      { name: "Node.js", proficiency: 2 },
      { name: "Tailwind CSS", proficiency: 3 },
      { name: "Electron", proficiency: 2 }
    ]
  },
  {
    category: "Tools & Systems",
    skills: [
      { name: "Git / GitHub", proficiency: 3 },
      { name: "Docker", proficiency: 2 },
      { name: "Postman", proficiency: 3 },
      { name: "Linux", proficiency: 2 },
      { name: "Vector Search", proficiency: 2 },
      { name: "LangChain", proficiency: 2 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", proficiency: 3 },
      { name: "SQLite", proficiency: 3 },
      { name: "Oracle DB", proficiency: 2 },
      { name: "Vector DB", proficiency: 2 },
      { name: "Redis", proficiency: 1 },
      { name: "Prisma", proficiency: 2 }
    ]
  }
];
