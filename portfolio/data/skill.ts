
type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'OS'
  | 'Cloud'

type ChartData = {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderWidth: number;
    borderColor: string;
    backgroundColor: string;
  }[];
};

type DataFormat = {
  name: string;
  hours: number;
  category: SkillCategory;
};

const _skill: DataFormat[] = [
  // Frontend
  { name: "HTML&CSS", hours: 200, category: "Frontend" },
  { name: "JavaScript", hours: 80, category: "Frontend" },
  { name: "TypeScript", hours: 120, category: "Frontend" },
  { name: "React", hours: 50, category: "Frontend" },
  { name: "Next.js", hours: 50, category: "Frontend" },
  { name: "Vue.js", hours: 20, category: "Frontend" },
  { name: "Nuxt.js", hours: 20, category: "Frontend" },
  { name: "Angular", hours: 5, category: "Frontend" },
  { name: "elm", hours: 10, category: "Frontend" },
  { name: "JQuery", hours: 10, category: "Frontend" },

  // Backend
  { name: "Node.js", hours: 70, category: "Backend" },
  { name: "Python", hours: 100, category: "Backend" },
  { name: "Ruby", hours: 20, category: "Backend" },
  { name: "Perl", hours: 5, category: "Backend" },
  { name: "PHP", hours: 70, category: "Backend" },
  { name: "Java", hours: 20, category: "Backend" },
  { name: "Kotlin", hours: 25, category: "Backend" },
  { name: "C#", hours: 100, category: "Backend" },
  { name: "C", hours: 5, category: "Backend"},
  { name: "C++", hours: 5, category: "Backend" },
  { name: "Go", hours: 35, category: "Backend" },
  { name: "Rust", hours: 15, category: "Backend" },
  { name: "Dart", hours: 5, category: "Backend" },
  { name: "Elixir", hours: 5, category: "Backend" },
  { name: "Erlang", hours: 5, category: "Backend" },
  { name: "Scala", hours: 5, category: "Backend" },
  { name: "Swift", hours: 5, category: "Backend" },

  // Database
  { name: "MySQL", hours: 50, category: "Database" },
  { name: "mariaDB", hours: 10, category: "Database" },
  { name: "SQL Server", hours: 50, category: "Database" },
  { name: "SQLite", hours: 40, category: "Database" },
  { name: "PostgreSQL", hours: 20, category: "Database" },
  { name: "MongoDB", hours: 5, category: "Database" },

  // OS
  { name: "Ubuntu(Linux)", hours: 20, category: "OS" },
  { name: "Debian(Linux)", hours: 10, category: "OS" },
  { name: "Windows", hours: 100, category: "OS" },
  { name: "MacOS", hours: 3, category: "OS" },

  // Cloud
  { name: "Azure", hours: 5, category: "Cloud" },
  { name: "AWS", hours: 5, category: "Cloud" },
  { name: "GCP", hours: 15, category: "Cloud" },
  { name: "Heroku", hours: 15, category: "Cloud" },
  { name: "Render", hours: 15, category: "Cloud" },
];

const _skill_frontend = _skill.filter((s) => s.category === "Frontend");
const _skill_backend = _skill.filter((s) => s.category === "Backend");
const _skill_database = _skill.filter((s) => s.category === "Database");
const _skill_os = _skill.filter((s) => s.category === "OS");
const _skill_cloud = _skill.filter((s) => s.category === "Cloud");

const color = 'skyblue';

const skill_frontend: ChartData = {
  labels: _skill_frontend.map((s) => s.name),
  datasets: [
    {
      label: "Frontend",
      data: _skill_frontend.map((s) => s.hours),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: color,
    },
  ],
};

const skill_backend: ChartData = {
  labels: _skill_backend.map((s) => s.name),
  datasets: [
    {
      label: "Backend",
      data: _skill_backend.map((s) => s.hours),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: color,
    },
  ],
};

const skill_database: ChartData = {
  labels: _skill_database.map((s) => s.name),
  datasets: [
    {
      label: "Database",
      data: _skill_database.map((s) => s.hours),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: color,
    },
  ],
};

const skill_os: ChartData = {
  labels: _skill_os.map((s) => s.name),
  datasets: [
    {
      label: "OS",
      data: _skill_os.map((s) => s.hours),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: color,
    },
  ],
};

const skill_cloud: ChartData = {
  labels: _skill_cloud.map((s) => s.name),
  datasets: [
    {
      label: "Cloud",
      data: _skill_cloud.map((s) => s.hours),
      borderWidth: 1,
      borderColor: color,
      backgroundColor: color,
    },
  ],
};

export { skill_frontend, skill_backend, skill_database, skill_os, skill_cloud };
