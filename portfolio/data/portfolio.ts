
type Tech =
  | "HTML&CSS"
  | "JavaScript"
  | "TypeScript"
  | "Node.js"
  | "React"
  | "Next.js"
  | "Vue.js"
  | "Nuxt.js"
  | "Docker"
  // Python
  | "Python"
  | "FastAPI"
  | "Ruby"
  | "Perl"
  | "PHP"
  | "Go"
  | "C#"
  | "C"
  | "C++"
  | "Java"
  | "Rust"
  | "Swift"
  | "Kotlin"
  | "SQL"
  | "NoSQL"
  | "Nginx"

type Portfolio = {
  name: string;
  description: string;
  repo_url: string;
  production_url?: string;
  created_at: Date;
  tech_used: Tech[];
  recommend: 1 | 2 | 3 | 4 | 5; // 1: Not recommended, 5: Highly recommended
}

const portfolio: Portfolio[] = [
  {
    name: "Web Timer",
    description: "イベントの開始時刻をカウントダウンするサイト。",
    repo_url: "https://github.com/osawa-koki/Web-Timer",
    production_url: "https://osawa-koki.github.io/Web-Timer/",
    created_at: new Date("2021-08-29"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 1,
  },
  {
    name: "404Finder",
    description: "Webサイトをクローリングして404ページを検出するツール。",
    repo_url: "https://github.com/osawa-koki/404Finder",
    created_at: new Date("2022-09-05"),
    tech_used: ["C#", "SQL"],
    recommend: 1,
  },
  {
    name: "ベジェ曲線クリエイター",
    description: "3次ベジェ曲線をGUIで生成するツール。",
    repo_url: "https://github.com/osawa-koki/bezier-maker.js",
    production_url: "https://osawa-koki.github.io/bezier-maker.js/",
    created_at: new Date("2021-09-03"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 3,
  },
  {
    name: "特殊文字コピーサイト",
    description: "特殊文字をコピーするためのサイト。",
    repo_url: "https://github.com/osawa-koki/special-char.ts",
    production_url: "https://osawa-koki.github.io/special-char.ts/",
    created_at: new Date("2021-11-07"),
    tech_used: ["TypeScript", "Vue.js"],
    recommend: 2,
  },
  {
    name: "テキスト差分比較ツール",
    description: "テキストの差分を比較するツール。",
    repo_url: "https://github.com/osawa-koki/diff.js",
    production_url: "https://osawa-koki.github.io/diff.js/",
    created_at: new Date("2021-10-23"),
    tech_used: ["HTML&CSS", "JavaScript"],
    recommend: 3,
  },
  {
    name: "整列アルゴリズム可視化ツール",
    description: "整列アルゴリズムを可視化するツール。",
    repo_url: "https://github.com/osawa-koki/sorter-demo.ts",
    production_url: "https://osawa-koki.github.io/sorter-demo.ts/",
    created_at: new Date("2021-12-16"),
    tech_used: ["TypeScript", "Next.js"],
    recommend: 5,
  },
  {
    name: "シンプル画像エディタ",
    description: "画像を編集するためのシンプルなサイト。",
    repo_url: "https://github.com/osawa-koki/simple-image-manipulator.ts",
    production_url: "https://osawa-koki.github.io/simple-image-manipulator.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "React"],
    recommend: 3,
  },
  {
    name: "シンプルGREP",
    description: "ファイル内テキストを検索するためのシンプルなツール。",
    repo_url: "https://github.com/osawa-koki/simple-grep.ts",
    production_url: "https://osawa-koki.github.io/simple-grep.ts/",
    created_at: new Date("2021-12-09"),
    tech_used: ["TypeScript", "Nuxt.js"],
    recommend: 2,
  },
  {
    name: "Fractal Drawer",
    description: "フラクタル画像を描画するツール。",
    repo_url: "https://github.com/osawa-koki/fractal-drawer.ts",
    production_url: "https://osawa-koki.github.io/fractal-drawer.ts/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js"],
    recommend: 5,
  },
  {
    name: "gui on linux",
    description: "LinuxをGUIで操作するためのツール。",
    repo_url: "https://github.com/osawa-koki/gui-on-linux",
    created_at: new Date("2021-12-15"),
    tech_used: ["Python", "FastAPI", "Docker"],
    recommend: 2,
  },
  {
    name: "Simple Quiz",
    description: "クイズ大会を開催できるシンプルなサイト。",
    repo_url: "https://github.com/simple-quiz-org",
    production_url: "https://simple-quiz.org/",
    created_at: new Date("2021-12-15"),
    tech_used: ["TypeScript", "Next.js", "C#", "SQL", "Docker", "Nginx"],
    recommend: 5,
  }
];

export default portfolio.sort((a, b) => b.recommend - a.recommend);
