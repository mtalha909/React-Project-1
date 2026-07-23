/**
 * Each track is a "station" on the TrackRail (see TrackRail.jsx).
 * Order matters here — it's rendered left to right as a route.
 */
export const tracks = [
  {
    id: "frontend",
    title: "Frontend Development",
    level: "Beginner",
    duration: "6 weeks",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    desc: "Build real, responsive interfaces and ship your first production component library.",
  },
  {
    id: "backend",
    title: "Backend Development",
    level: "Intermediate",
    duration: "8 weeks",
    stack: ["Node.js", "Express", "REST APIs"],
    desc: "Design APIs, handle auth, and connect services the way production teams do.",
  },
  {
    id: "database",
    title: "Database Systems",
    level: "Intermediate",
    duration: "6 weeks",
    stack: ["MySQL", "MongoDB", "Schema Design"],
    desc: "Model real data, write efficient queries, and avoid the mistakes that break at scale.",
  },
  {
    id: "data-science",
    title: "Data Science",
    level: "Advanced",
    duration: "10 weeks",
    stack: ["Python", "Pandas", "Visualization"],
    desc: "Turn messy datasets into decisions — from cleaning to charts stakeholders trust.",
  },
  {
    id: "devops",
    title: "DevOps",
    level: "Advanced",
    duration: "8 weeks",
    stack: ["Docker", "CI/CD", "Linux"],
    desc: "Ship code the way real teams do — automated, reproducible, and monitored.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    level: "Beginner",
    duration: "6 weeks",
    stack: ["Figma", "Wireframing", "User Research"],
    desc: "Design interfaces people actually enjoy using — from wireframe to a working prototype.",
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    level: "Intermediate",
    duration: "8 weeks",
    stack: ["React Native", "APIs", "App Store Deploy"],
    desc: "Build and ship a cross-platform mobile app, from first screen to app store listing.",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    level: "Advanced",
    duration: "8 weeks",
    stack: ["AWS", "Serverless", "Infrastructure"],
    desc: "Deploy and scale real applications on cloud infrastructure teams actually use.",
  },
];
