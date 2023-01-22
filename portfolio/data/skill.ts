
type SkillCategory =
  | 'Frontend'
  | 'Backend'
  | 'Backend(Framework)'
  | 'Database'
  | 'OS'
  | 'Cloud'
  | 'Service'

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

const _skill: DataFormat[] = ([
  // Frontend
  { name: "HTML&CSS", hours: 200, category: "Frontend" },
  { name: "JavaScript", hours: 80, category: "Frontend" },
  { name: "TypeScript", hours: 150, category: "Frontend" },
  { name: "React", hours: 50, category: "Frontend" },
  { name: "Next.js", hours: 50, category: "Frontend" },
  { name: "Vue.js", hours: 20, category: "Frontend" },
  { name: "Nuxt.js", hours: 20, category: "Frontend" },
  { name: "Angular", hours: 5, category: "Frontend" },
  { name: "elm", hours: 10, category: "Frontend" },
  { name: "JQuery", hours: 10, category: "Frontend" },

  // Backend
  { name: "Node.js", hours: 120, category: "Backend" },
  { name: "Python", hours: 80, category: "Backend" },
  { name: "Ruby", hours: 20, category: "Backend" },
  { name: "Perl", hours: 5, category: "Backend" },
  { name: "PHP", hours: 70, category: "Backend" },
  { name: "Java", hours: 20, category: "Backend" },
  { name: "Kotlin", hours: 25, category: "Backend" },
  { name: "C#", hours: 120, category: "Backend" },
  { name: "VB.NET", hours: 35, category: "Backend" },
  { name: "F#", hours: 5, category: "Backend" },
  { name: "C", hours: 10, category: "Backend"},
  { name: "C++", hours: 10, category: "Backend" },
  { name: "Go", hours: 55, category: "Backend" },
  { name: "Rust", hours: 15, category: "Backend" },
  { name: "Dart", hours: 5, category: "Backend" },
  { name: "Elixir", hours: 5, category: "Backend" },
  { name: "Erlang", hours: 5, category: "Backend" },
  { name: "Swift", hours: 5, category: "Backend" },
  { name: "Powershell", hours: 25, category: "Backend" },
  { name: "Bash", hours: 25, category: "Backend" },
  { name: "Haskell", hours: 50, category: "Backend" },
  { name: "Scala", hours: 5, category: "Backend" },
  { name: "Ocaml", hours: 15, category: "Backend" },
  { name: "Clojure", hours: 5, category: "Backend" },

  // Backend(Framework)
  { name: "Express", hours: 5, category: "Backend(Framework)" },
  { name: "Ruby on Rails", hours: 15, category: "Backend(Framework)" },
  { name: "Laravel", hours: 5, category: "Backend(Framework)" },
  { name: "Spring", hours: 15, category: "Backend(Framework)" },
  { name: "ASP.NET", hours: 35, category: "Backend(Framework)" },
  { name: "ASP.NET Core", hours: 15, category: "Backend(Framework)" },
  { name: "Django", hours: 5, category: "Backend(Framework)" },
  { name: "FastAPI", hours: 55, category: "Backend(Framework)" },
  { name: "Flask", hours: 10, category: "Backend(Framework)" },
  { name: "Phoenix", hours: 5, category: "Backend(Framework)" },

  // Database
  { name: "MySQL", hours: 50, category: "Database" },
  { name: "mariaDB", hours: 10, category: "Database" },
  { name: "SQL Server", hours: 50, category: "Database" },
  { name: "SQLite", hours: 40, category: "Database" },
  { name: "PostgreSQL", hours: 20, category: "Database" },
  { name: "MongoDB", hours: 5, category: "Database" },
  { name: "h2", hours: 5, category: "Database" },
  { name: "Redis", hours: 5, category: "Database" },
  { name: "Firestore", hours: 5, category: "Database" },

  // OS
  { name: "Ubuntu(Linux)", hours: 50, category: "OS" },
  { name: "Debian(Linux)", hours: 10, category: "OS" },
  { name: "CentOS(Linux)", hours: 10, category: "OS" },
  { name: "Windows", hours: 300, category: "OS" },
  { name: "Windows Server", hours: 30, category: "OS" },
  { name: "MacOS", hours: 3, category: "OS" },

  // Cloud
  { name: "Azure", hours: 5, category: "Cloud" },
  { name: "AWS", hours: 5, category: "Cloud" },
  { name: "GCP", hours: 55, category: "Cloud" },
  { name: "Heroku", hours: 15, category: "Cloud" },
  { name: "Streamlit", hours: 5, category: "Cloud" },
  { name: "Render", hours: 55, category: "Cloud" },
  { name: "WebARENA Indigo", hours: 15, category: "Cloud" },

  // Service
  { name: "Git", hours: 200, category: "Service" },
  { name: "GitHub", hours: 200, category: "Service" },
  { name: "Firebase Hosting", hours: 10, category: "Service" },
  { name: "Cloud Build", hours: 10, category: "Service" },
  { name: "Cloud Run", hours: 10, category: "Service" },
  { name: "Apache", hours: 50, category: "Service" },
  { name: "Nginx", hours: 70, category: "Service" },
  { name: "Docker", hours: 50, category: "Service" },
  { name: "Bootstrap5", hours: 25, category: "Service" },
  { name: "Material UI", hours: 5, category: "Service" },
  { name: "Tailwind CSS", hours: 5, category: "Service" },
  { name: "Figma", hours: 5, category: "Service" },
  { name: "Inkscape", hours: 50, category: "Service" },
  { name: "Microsoft Office", hours: 10, category: "Service" },
  { name: "Libre Office", hours: 20, category: "Service" },
  { name: "Hugo", hours: 25, category: "Service" },
  { name: "Firebase Authentication", hours: 15, category: "Service" },
  { name: "Auth0", hours: 15, category: "Service" },
  { name: "Terraform", hours: 5, category: "Service" },
] as DataFormat[]).sort((a, b) => b.hours - a.hours);

const skill_categories: SkillCategory[] = [
  "Frontend",
  "Backend",
  "Backend(Framework)",
  "Database",
  "OS",
  "Cloud",
  "Service",
];

const color = '#0e6efe75';

const skills = skill_categories.map((category) => {
  const skill_ = _skill.filter((s) => s.category === category);
  return {
    skill: skill_,
    category,
    chart_data: {
      labels: skill_.map((s) => s.name),
      datasets: [
        {
          label: category,
          data: skill_.map((s) => s.hours),
          borderWidth: 1,
          borderColor: color,
          backgroundColor: color,
        },
      ],
    } as ChartData
  };
});

export { skills };
