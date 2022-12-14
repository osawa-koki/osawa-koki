
type Tech =
  // Web Language
  | "HTML&CSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js"
  | "Vue.js"
  | "Nuxt.js"
  // Script Language
  | "Python"
  | "FastAPI"
  | "numpy"
  | "scipy"
  | "matplotlib"
  | "TensorFlow"
  | "scikit-learn"
  | "Keras"
  | "Anaconda"
  | "pandas"
  | "Ruby"
  | "Perl"
  | "PHP"
  | "PowerShell"
  | "ShellScript"
  // System Language
  | "Go"
  | "C#"
  | "VB.NET"
  | "VBA"
  | "C"
  | "C++"
  | "Java"
  | "Rust"
  | "Swift"
  | "Kotlin"
  // Database
  | "MySQL"
  | "PostgreSQL"
  | "SQLite"
  | "MongoDB"
  | "SQL Server"
  | "Redis"
  | "Oracle"
  | "MariaDB"
  | "Firestore"
  // Web Server
  | "Apache"
  | "Nginx"
  | "Docker"
  // SSG Framework
  | "Hugo"
  | "Gatsby.js"
  | "WebSocket"
  | "GraphQL"
  // Cloud Service
  | "AWS"
  | "Azure"
  | "GCP"
  | "Firebase"
  | "Firestore"
  // Technology
  | "REST API"
  | "SignalR"
  | "Machine Learning"
  | "AI"
  // UI
  | "Bootstrap"
  | "Material UI"
  // Network
  | "TCP/IP"
  | "HTTP"
  | "HTTPS"
  | "DNS"
  | "FTP"
  | "SSH"
  | "SMTP"
  | "POP3"
  | "IMAP"
  | "SFTP"
  | "VPN"

type Portfolio = {
  name: string;
  description: string;
  repo_url: string;
  production_url?: string;
  created_at: Date;
  tech_used: Tech[];
  recommend: 1 | 2 | 3 | 4 | 5; // 1: Not recommended, 5: Highly recommended
  in_development?: boolean;
}

const portfolio: Portfolio[] = [
  {
    name: "Web Timer",
    description: "ð¬ð¬ð¬ ã¤ãã³ãã®éå§æå»ãã«ã¦ã³ããã¦ã³ãããµã¤ãã",
    repo_url: "https://github.com/osawa-koki/Web-Timer",
    production_url: "https://osawa-koki.github.io/Web-Timer/",
    created_at: new Date("2021-08-29"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 1,
  },
  {
    name: "404Finder",
    description: "ð¦ð¦ð¦ Webãµã¤ããã¯ã­ã¼ãªã³ã°ãã¦404ãã¼ã¸ãæ¤åºãããã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/404Finder",
    created_at: new Date("2022-09-05"),
    tech_used: ["C#", "SQL Server"],
    recommend: 1,
  },
  {
    name: "ãã¸ã§æ²ç·ã¯ãªã¨ã¤ã¿ã¼",
    description: "ð¥ð¥ð¥ 3æ¬¡ãã¸ã§æ²ç·ãGUIã§çæãããã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/bezier-maker.js",
    production_url: "https://osawa-koki.github.io/bezier-maker.js/",
    created_at: new Date("2021-09-03"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 2,
  },
  {
    name: "ç¹æ®æå­ã³ãã¼ãµã¤ã",
    description: "ððð ç¹æ®æå­ãã³ãã¼ããããã®ãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/special-char.ts",
    production_url: "https://osawa-koki.github.io/special-char.ts/",
    created_at: new Date("2021-11-07"),
    tech_used: ["TypeScript", "Vue.js"],
    recommend: 2,
  },
  {
    name: "ãã­ã¹ãå·®åæ¯è¼ãã¼ã«",
    description: "ðªðªðª ãã­ã¹ãã®å·®åãæ¯è¼ãããã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/diff.js",
    production_url: "https://osawa-koki.github.io/diff.js/",
    created_at: new Date("2021-10-23"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 3,
  },
  {
    name: "æ´åã¢ã«ã´ãªãºã å¯è¦åãã¼ã«",
    description: "ð¦ð¦ð¦ æ´åã¢ã«ã´ãªãºã ãå¯è¦åãããã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/sorter-demo.ts",
    production_url: "https://osawa-koki.github.io/sorter-demo.ts/",
    created_at: new Date("2021-12-16"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "ã·ã³ãã«ç»åã¨ãã£ã¿",
    description: "ððð ç»åãç·¨éããããã®ã·ã³ãã«ãªãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/simple-image-manipulator.ts",
    production_url: "https://osawa-koki.github.io/simple-image-manipulator.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "React"],
    recommend: 3,
  },
  {
    name: "ã·ã³ãã«GREP",
    description: "ð»ð»ð» ãã¡ã¤ã«åãã­ã¹ããæ¤ç´¢ããããã®ã·ã³ãã«ãªãã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/simple-grep.ts",
    production_url: "https://osawa-koki.github.io/simple-grep.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "Nuxt.js"],
    recommend: 2,
  },
  {
    name: "Fractal Drawer",
    description: "ð¾ð¾ð¾ ãã©ã¯ã¿ã«ç»åãæç»ãããã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/fractal-drawer.ts",
    production_url: "https://osawa-koki.github.io/fractal-drawer.ts/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "gui on linux",
    description: "ð¸ð¸ð¸ LinuxãGUIã§æä½ããããã®ãã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/gui-on-linux",
    created_at: new Date("2021-12-15"),
    tech_used: ["Python", "FastAPI", "Next.js", "Nginx", "Docker"],
    recommend: 2,
    in_development: true,
  },
  {
    name: "Simple Quiz",
    description: "âââ ã¯ã¤ãºå¤§ä¼ãéå¬ã§ããã·ã³ãã«ãªãµã¤ãã",
    repo_url: "https://github.com/simple-quiz-org",
    production_url: "https://simple-quiz.org/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap", "C#", "SQL Server", "Docker", "Nginx"],
    recommend: 5,
    in_development: true,
  },
  {
    name: "ç¿ã»çªã»ç å¤å®AI",
    description: "ð§ ð§ ð§  ç¿ã»çªã»çã®ç»åãå¤å®ããAIã",
    repo_url: "https://github.com/osawa-koki/startup-TensorFlow_Keras.py",
    created_at: new Date("2021-10-23"),
    tech_used: ["Python", "scikit-learn", "Keras", "Anaconda", "Docker"],
    recommend: 3,
  },
  {
    name: "ps1-games",
    description: "ð®ð®ð® PowerShellã§åä½ããç°¡åãªã²ã¼ã ã",
    repo_url: "https://github.com/osawa-koki/ps1-games",
    created_at: new Date("2021-11-17"),
    tech_used: ["PowerShell", "Docker"],
    recommend: 2,
  },
  {
    name: "bash-games",
    description: "ð®ð®ð® ShellScript(bash)ã§åä½ããç°¡åãªã²ã¼ã ã",
    repo_url: "https://github.com/osawa-koki/bash-games",
    created_at: new Date("2021-11-21"),
    tech_used: ["ShellScript", "Docker"],
    recommend: 2,
  },
  {
    name: "æå ±å¦çå®ç£ç¢ºä¿æ¯æ´å£«è©¦é¨å¯¾ç­ãµã¤ã(2022)",
    description: "ððð 2022å¹´çã®æå ±å¦çå®ç£ç¢ºä¿æ¯æ´å£«è©¦é¨å¯¾ç­ãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/SC2022",
    production_url: "https://osawa-koki.github.io/SC2022/",
    created_at: new Date("2022-12-24"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 4,
  },
  {
    name: "koko-campus.net",
    description: "ððð ITã«é¢ããç·åå­¦ç¿ãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/koko-campus.net",
    production_url: "https://koko-campus.net/",
    created_at: new Date("2021-12-15"),
    tech_used: ["HTML&CSS", "JavaScript", "Go", "MySQL", "Docker", "Nginx"],
    recommend: 2,
  },
  {
    name: "octo-campus",
    description: "ððð ITã«é¢ããç·åå­¦ç¿ãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/octo-campus",
    production_url: "https://osawa-koki.github.io/octo-campus/",
    created_at: new Date("2021-12-15"),
    tech_used: ["Gatsby.js", "Bootstrap"],
    recommend: 3,
  },
  {
    name: "img2excel",
    description: "ð¼ð¼ð¼ C#ã§å®è£ããç»åã®ãã¯ã»ã«ãã¼ã¿ãããExcelã®ã»ã«ã®èæ¯è²ãçè²ãããéã³ãã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/img2excel",
    created_at: new Date("2021-11-20"),
    tech_used: ["C#"],
    recommend: 2,
  },
  {
    name: "img2excel.macro",
    description: "ðºðºðº Excelãã¯ã­ã§å®è£ããç»åã®ãã¯ã»ã«ãã¼ã¿ãããExcelã®ã»ã«ã®èæ¯è²ãçè²ãããéã³ãã¼ã«ã",
    repo_url: "https://github.com/osawa-koki/img2excel.macro",
    created_at: new Date("2021-11-22"),
    tech_used: ["VBA"],
    recommend: 2,
  },
  {
    name: "ãã¼ã¿ãã¼ã¹ã¹ãã·ã£ãªã¹ãè©¦é¨å¯¾ç­ãµã¤ã(2023)",
    description: "ððð 2022å¹´çã®ãã¼ã¿ãã¼ã¹ã¹ãã·ã£ãªã¹ãè©¦é¨å¯¾ç­ãµã¤ãã",
    repo_url: "https://github.com/osawa-koki/DB2023",
    production_url: "https://osawa-koki.github.io/DB2023/",
    created_at: new Date("2022-12-26"),
    tech_used: ["HTML&CSS", "Hugo"],
    recommend: 4,
  },
  {
    name: "ShellConnected",
    description: "ð¦ð¦ð¦ WebSocketã§å®è£ãããªã¢ã«ã¿ã¤ã å¯¾è©±åã®ããã«ã¯ã©ã¤ã¢ã³ããµã¼ãã·ã¹ãã ã",
    repo_url: "https://github.com/osawa-koki/ShellConnected",
    production_url: "https://shellconnected.onrender.com/",
    created_at: new Date("2022-12-28"),
    tech_used: ["Next.js", "Bootstrap", "C#", "WebSocket", "SignalR", "Docker"],
    recommend: 4,
    in_development: true,
  },
  {
    name: "Web-Host-Stat",
    description: "ð§ð§ð§ ååè§£æ±ºããã¼ãã¹ã­ã£ã³ãè¡ãWebã¢ããªã±ã¼ã·ã§ã³ã",
    repo_url: "https://github.com/osawa-koki/web-host-stat",
    production_url: "https://web-host-stat.onrender.com/",
    created_at: new Date("2022-12-28"),
    tech_used: ["Next.js", "Bootstrap", "Go", "Docker"],
    recommend: 4,
  },
  {
    name: "img2excel-server",
    description: "ððð ç»åã®ãã¯ã»ã«ãã¼ã¿ãããExcelã®ã»ã«ã®èæ¯è²ãçè²ãããéã³ãã¼ã«ã®ãµã¼ããµã¤ãçã",
    repo_url: "https://github.com/osawa-koki/img2excel-server",
    production_url: "https://img2excel.onrender.com/",
    created_at: new Date("2022-12-29"),
    tech_used: ["Next.js", "Bootstrap", "Material UI", "C#", "Docker"],
    recommend: 5,
  },
  {
    name: "simple-chat-chat",
    description: "ð¤ð¤ð¤ Firebase(Firestore)ãä½¿ç¨ãã¦å®è£ãããã£ããã¢ããªã",
    repo_url: "https://github.com/osawa-koki/simple-chat-chat",
    production_url: "https://simple-chat-chat.web.app/chat/",
    created_at: new Date("2023-01-03"),
    tech_used: ["Firebase", "Firestore", "Node.js", "Nuxt.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "sorting-algo-func.py",
    description: "ð£ð£ð£ æ´åã¢ã«ã´ãªãºã ãå®è£ããPythonã®é¢æ°ç¾¤ã",
    repo_url: "https://github.com/osawa-koki/sorting-algo-func.py",
    created_at: new Date("2023-01-09"),
    tech_used: ["Python", "Docker"],
    recommend: 3,
  },
  {
    name: "sorting-algo-func.c",
    description: "ð¥ð¥ð¥ æ´åã¢ã«ã´ãªãºã ãå®è£ããCè¨èªã®é¢æ°ç¾¤ã",
    repo_url: "https://github.com/osawa-koki/sorting-algo-func.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "mandelbrot.c",
    description: "ð ð ð  Cè¨èªã§ãã³ãã«ãã­éåãæåãããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/mandelbrot.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "julia.c",
    description: "ððð Cè¨èªã§ã¸ã¥ãªã¢éåãæåãããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/julia.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "TCP-client-server.cpp",
    description: "ððð C++ã§TCPã¯ã©ã¤ã¢ã³ãã¨TCPãµã¼ãã®éä¿¡ãè¡ããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/TCP-client-server.cpp",
    created_at: new Date("2023-01-09"),
    tech_used: ["C++", "Docker", "TCP/IP"],
    recommend: 3,
  },
  {
    name: "port-scanner.cpp",
    description: "ð ð ð  C++ã§ãã¼ãã¹ã­ã£ã³ãå®è¡ãããã­ã°ã©ã ãéçºãã¾ããã",
    repo_url: "https://github.com/osawa-koki/port-scanner.cpp",
    created_at: new Date("2023-01-09"),
    tech_used: ["C++", "Docker", "TCP/IP"],
    recommend: 3,
  },
  {
    name: "mandelbrot.py",
    description: "ððð Pythonã§ãã³ãã«ãã­éåãæåãããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/mandelbrot.py",
    created_at: new Date("2023-01-10"),
    tech_used: ["Python", "Docker"],
    recommend: 3,
  },
  {
    name: "julia.py",
    description: "ððð Pythonã§ã¸ã¥ãªã¢éåãæåãããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/julia.py",
    created_at: new Date("2023-01-10"),
    tech_used: ["Python", "Docker"],
    recommend: 3,
  },
  {
    name: "TCP-client-server.py",
    description: "ð¦ð¦ð¦ Pythonã§TCPã¯ã©ã¤ã¢ã³ãã¨TCPãµã¼ãã®éä¿¡ãè¡ããã­ã°ã©ã ãä½æãã¾ããã",
    repo_url: "https://github.com/osawa-koki/TCP-client-server.py",
    created_at: new Date("2023-01-10"),
    tech_used: ["Python", "Docker", "TCP/IP"],
    recommend: 3,
  },
  {
    name: "port-scanner.py",
    description: "ð»ð»ð» Pythonã§ãã¼ãã¹ã­ã£ã³ãå®è¡ãããã­ã°ã©ã ãéçºãã¾ããã",
    repo_url: "https://github.com/osawa-koki/port-scanner.py",
    created_at: new Date("2023-01-10"),
    tech_used: ["Python", "Docker", "TCP/IP"],
    recommend: 3,
  },
  {
    name: "fractal.php",
    description: "ððð PHPã®GDã©ã¤ãã©ãªãç¨ãã¦ãã©ã¯ã¿ã«å³å½¢ãæåãã¾ããã",
    repo_url: "https://github.com/osawa-koki/fractal.php",
    created_at: new Date("2023-01-11"),
    tech_used: ["PHP", "Docker"],
    recommend: 3,
  },
];

export default portfolio.sort((a, b) => {
  // éçºä¸­ã®ãã®ãæå¾ã«ãã
  if (a.in_development && !b.in_development) return 1;
  if (!a.in_development && b.in_development) return -1;

  // ããä»¥å¤ã¯ãªã¹ã¹ã¡åº¦ã§ã½ã¼ã
  if (a.recommend === b.recommend) {
    // (åããªã¹ã¹ã¡åº¦ã®å ´åã¯ä½ææ¥æã§ã½ã¼ã)
    return a.created_at > b.created_at ? -1 : 1;
  }
  return a.recommend > b.recommend ? -1 : 1;
});
