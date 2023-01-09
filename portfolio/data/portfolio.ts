
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
    description: "イベントの開始時刻をカウントダウンするサイト🐬🐬🐬",
    repo_url: "https://github.com/osawa-koki/Web-Timer",
    production_url: "https://osawa-koki.github.io/Web-Timer/",
    created_at: new Date("2021-08-29"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 1,
  },
  {
    name: "404Finder",
    description: "Webサイトをクローリングして404ページを検出するツール🦑🦑🦑",
    repo_url: "https://github.com/osawa-koki/404Finder",
    created_at: new Date("2022-09-05"),
    tech_used: ["C#", "SQL Server"],
    recommend: 1,
  },
  {
    name: "ベジェ曲線クリエイター",
    description: "3次ベジェ曲線をGUIで生成するツール🥗🥗🥗",
    repo_url: "https://github.com/osawa-koki/bezier-maker.js",
    production_url: "https://osawa-koki.github.io/bezier-maker.js/",
    created_at: new Date("2021-09-03"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 2,
  },
  {
    name: "特殊文字コピーサイト",
    description: "特殊文字をコピーするためのサイト🐔🐔🐔",
    repo_url: "https://github.com/osawa-koki/special-char.ts",
    production_url: "https://osawa-koki.github.io/special-char.ts/",
    created_at: new Date("2021-11-07"),
    tech_used: ["TypeScript", "Vue.js"],
    recommend: 2,
  },
  {
    name: "テキスト差分比較ツール",
    description: "テキストの差分を比較するツール🐪🐪🐪",
    repo_url: "https://github.com/osawa-koki/diff.js",
    production_url: "https://osawa-koki.github.io/diff.js/",
    created_at: new Date("2021-10-23"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 3,
  },
  {
    name: "整列アルゴリズム可視化ツール",
    description: "整列アルゴリズムを可視化するツール🦀🦀🦀",
    repo_url: "https://github.com/osawa-koki/sorter-demo.ts",
    production_url: "https://osawa-koki.github.io/sorter-demo.ts/",
    created_at: new Date("2021-12-16"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "シンプル画像エディタ",
    description: "画像を編集するためのシンプルなサイト🐈🐈🐈",
    repo_url: "https://github.com/osawa-koki/simple-image-manipulator.ts",
    production_url: "https://osawa-koki.github.io/simple-image-manipulator.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "React"],
    recommend: 3,
  },
  {
    name: "シンプルGREP",
    description: "ファイル内テキストを検索するためのシンプルなツール🐻🐻🐻",
    repo_url: "https://github.com/osawa-koki/simple-grep.ts",
    production_url: "https://osawa-koki.github.io/simple-grep.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "Nuxt.js"],
    recommend: 2,
  },
  {
    name: "Fractal Drawer",
    description: "フラクタル画像を描画するツール👾👾👾",
    repo_url: "https://github.com/osawa-koki/fractal-drawer.ts",
    production_url: "https://osawa-koki.github.io/fractal-drawer.ts/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "gui on linux",
    description: "LinuxをGUIで操作するためのツール🌸🌸🌸",
    repo_url: "https://github.com/osawa-koki/gui-on-linux",
    created_at: new Date("2021-12-15"),
    tech_used: ["Python", "FastAPI", "Next.js", "Nginx", "Docker"],
    recommend: 2,
    in_development: true,
  },
  {
    name: "Simple Quiz",
    description: "クイズ大会を開催できるシンプルなサイト❓❓❓",
    repo_url: "https://github.com/simple-quiz-org",
    production_url: "https://simple-quiz.org/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap", "C#", "SQL Server", "Docker", "Nginx"],
    recommend: 5,
    in_development: true,
  },
  {
    name: "猿・猪・烏 判定AI",
    description: "猿・猪・烏の画像を判定するAI🧠🧠🧠",
    repo_url: "https://github.com/osawa-koki/startup-TensorFlow_Keras.py",
    created_at: new Date("2021-10-23"),
    tech_used: ["Python", "scikit-learn", "Keras", "Anaconda", "Docker"],
    recommend: 3,
  },
  {
    name: "ps1-games",
    description: "PowerShellで動作する簡単なゲーム🎮🎮🎮",
    repo_url: "https://github.com/osawa-koki/ps1-games",
    created_at: new Date("2021-11-17"),
    tech_used: ["PowerShell", "Docker"],
    recommend: 2,
  },
  {
    name: "bash-games",
    description: "ShellScript(bash)で動作する簡単なゲーム🎮🎮🎮",
    repo_url: "https://github.com/osawa-koki/bash-games",
    created_at: new Date("2021-11-21"),
    tech_used: ["ShellScript", "Docker"],
    recommend: 2,
  },
  {
    name: "情報処理安産確保支援士試験対策サイト(2022)",
    description: "2022年版の情報処理安産確保支援士試験対策サイト📚📚📚",
    repo_url: "https://github.com/osawa-koki/SC2022",
    production_url: "https://osawa-koki.github.io/SC2022/",
    created_at: new Date("2022-12-24"),
    tech_used: ["TypeScript", "Next.js", "Bootstrap"],
    recommend: 4,
  },
  {
    name: "koko-campus.net",
    description: "ITに関する総合学習サイト📚📚📚",
    repo_url: "https://github.com/osawa-koki/koko-campus.net",
    production_url: "https://koko-campus.net/",
    created_at: new Date("2021-12-15"),
    tech_used: ["HTML&CSS", "JavaScript", "Go", "MySQL", "Docker", "Nginx"],
    recommend: 2,
  },
  {
    name: "octo-campus",
    description: "ITに関する総合学習サイト📚📚📚",
    repo_url: "https://github.com/osawa-koki/octo-campus",
    production_url: "https://osawa-koki.github.io/octo-campus/",
    created_at: new Date("2021-12-15"),
    tech_used: ["Gatsby.js", "Bootstrap"],
    recommend: 3,
  },
  {
    name: "img2excel",
    description: "C#で実装した画像のピクセルデータから、Excelのセルの背景色を着色するお遊びツール🐼🐼🐼",
    repo_url: "https://github.com/osawa-koki/img2excel",
    created_at: new Date("2021-11-20"),
    tech_used: ["C#"],
    recommend: 2,
  },
  {
    name: "img2excel.macro",
    description: "Excelマクロで実装した画像のピクセルデータから、Excelのセルの背景色を着色するお遊びツール🐺🐺🐺",
    repo_url: "https://github.com/osawa-koki/img2excel.macro",
    created_at: new Date("2021-11-22"),
    tech_used: ["VBA"],
    recommend: 2,
  },
  {
    name: "データベーススペシャリスト試験対策サイト(2023)",
    description: "2022年版のデータベーススペシャリスト試験対策サイト📚📚",
    repo_url: "https://github.com/osawa-koki/DB2023",
    production_url: "https://osawa-koki.github.io/DB2023/",
    created_at: new Date("2022-12-26"),
    tech_used: ["HTML&CSS", "Hugo"],
    recommend: 4,
  },
  {
    name: "ShellConnected",
    description: "WebSocketで実装したリアルタイム対話型のダブルクライアントサーバシステム🦓🦓🦓",
    repo_url: "https://github.com/osawa-koki/ShellConnected",
    production_url: "https://shellconnected.onrender.com/",
    created_at: new Date("2022-12-28"),
    tech_used: ["Next.js", "Bootstrap", "C#", "WebSocket", "SignalR", "Docker"],
    recommend: 4,
    in_development: true,
  },
  {
    name: "Web-Host-Stat",
    description: "名前解決やポートスキャンを行うWebアプリケーション🐧🐧🐧",
    repo_url: "https://github.com/osawa-koki/web-host-stat",
    production_url: "https://web-host-stat.onrender.com/",
    created_at: new Date("2022-12-28"),
    tech_used: ["Next.js", "Bootstrap", "Go", "Docker"],
    recommend: 4,
  },
  {
    name: "img2excel-server",
    description: "画像のピクセルデータから、Excelのセルの背景色を着色するお遊びツールのサーバサイド版🐓🐓🐓",
    repo_url: "https://github.com/osawa-koki/img2excel-server",
    production_url: "https://img2excel.onrender.com/",
    created_at: new Date("2022-12-29"),
    tech_used: ["Next.js", "Bootstrap", "Material UI", "C#", "Docker"],
    recommend: 5,
  },
  {
    name: "simple-chat-chat",
    description: "Firebase(Firestore)を使用して実装したチャットアプリ🐤🐤🐤",
    repo_url: "https://github.com/osawa-koki/simple-chat-chat",
    production_url: "https://simple-chat-chat.web.app/chat/",
    created_at: new Date("2023-01-03"),
    tech_used: ["Firebase", "Firestore", "Node.js", "Nuxt.js", "Bootstrap"],
    recommend: 5,
  },
  {
    name: "sorting-algo-func.py",
    description: "整列アルゴリズムを実装したPythonの関数群🐣🐣🐣",
    repo_url: "https://github.com/osawa-koki/sorting-algo-func.py",
    created_at: new Date("2023-01-09"),
    tech_used: ["Python", "Docker"],
    recommend: 3,
  },
  {
    name: "sorting-algo-func.c",
    description: "整列アルゴリズムを実装したC言語の関数群🐥🐥🐥",
    repo_url: "https://github.com/osawa-koki/sorting-algo-func.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "mandelbrot.c",
    description: "C言語でマンデルブロ集合を描写するプログラムを作成しました🌠🌠🌠",
    repo_url: "https://github.com/osawa-koki/mandelbrot.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "julia.c",
    description: "C言語でジュリア集合を描写するプログラムを作成しました🌞🌞🌞",
    repo_url: "https://github.com/osawa-koki/julia.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C", "Docker"],
    recommend: 3,
  },
  {
    name: "TCP-client-server.c",
    description: "C++でTCPクライアントとTCPサーバの通信を行うプログラムを作成しました🐆🐆🐆",
    repo_url: "https://github.com/osawa-koki/julia.c",
    created_at: new Date("2023-01-09"),
    tech_used: ["C++", "Docker", "TCP/IP"],
    recommend: 3,
  },
];

export default portfolio.sort((a, b) => {
  // 開発中のものを最後にする
  if (a.in_development && !b.in_development) return 1;
  if (!a.in_development && b.in_development) return -1;

  // それ以外はオススメ度でソート
  if (a.recommend === b.recommend) {
    // (同じオススメ度の場合は作成日時でソート)
    return a.created_at > b.created_at ? -1 : 1;
  }
  return a.recommend > b.recommend ? -1 : 1;
});
