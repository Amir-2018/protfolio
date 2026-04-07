export const skillsData = {
  frontend: ["HTML", "CSS", "Tailwind", "React", "Angular", "Next.js"],
  backend: ["Express", "Laravel", "Django", "REST API"],
  mobile: ["React Native", "Flutter"],
  database: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "GitHub", "GitLab", "Jira"]
};

// Keep the old format for backward compatibility
export const skillsList = [
  ...skillsData.frontend,
  ...skillsData.backend,
  ...skillsData.mobile,
  ...skillsData.database,
  ...skillsData.tools
];