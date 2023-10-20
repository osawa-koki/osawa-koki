import dayjs from 'dayjs'
import Env from './next.config.js'
const isProd = process.env.NODE_ENV === 'production'

interface IProject {
  title: string
  description: string
  startDate: dayjs.Dayjs
  endDate: dayjs.Dayjs | null
  technologies: string[]
}

interface IWork {
  title: string
  startDate: dayjs.Dayjs
  endDate: dayjs.Dayjs | null
  description: string
  projects: IProject[]
}

const setting = {
  isProd,
  basePath: Env.basePath,
  apiPath: isProd ? '' : 'http://localhost:8000',
  title: '🐙🐬🐸 おおさわ 🐸🐬🐙',
  works: [
    {
      title: 'ECサイト構築企業のセキュリティ系部門',
      startDate: dayjs('2022-04'),
      endDate: dayjs('2023-03'),
      description: 'ECサイト構築企業のセキュリティ系部門で、WEBアプリケーションに起因する脆弱性の診断・対策を行っていました。',
      projects: [
        {
          title: 'SQLインジェクション対策',
          description: 'Roslynと呼ばれる.NET(C#, VB.NET)のコンパイラを利用して、SQLインジェクションの検知を行うツールを開発。\n\n受け取ったリクエストオブジェクトの遷移先をたどって、エスケープされずにSQL実行オブジェクトに渡されているコードを検知するように実装し、合計10件程度の脆弱性を検知・修正コードの提案して対応。\n\n社内プロジェクトの一環として行い、要件定義・設計・実装・運用保守を包括して担当。',
          startDate: dayjs('2022-07'),
          endDate: dayjs('2022-10'),
          technologies: [
            'C#',
            'VB.NET',
            'ASP.NET',
            'Roslyn',
            'SQL Server',
            'Azure DevOps',
            'Windows Server'
          ]
        },
        {
          title: 'JSファイルの改竄検知プログラムの開発',
          description: 'ECサイトのJSファイルの改竄検知プログラムを開発。\n\nECサイトのJSファイルを定期的に取得し、ハッシュ値を計算して、前回取得したハッシュ値と比較して、変更があった場合に通知するプログラムを開発。\n\n社内プロジェクトの一環として行い、要件定義・設計・実装・運用保守を包括して担当。',
          startDate: dayjs('2022-07'),
          endDate: dayjs('2022-12'),
          technologies: [
            'C#',
            'Docker',
            'SQL Server',
            'Azure DevOps',
            'Azure Pipelines',
            'Windows Server',
            'Nuxt.js',
            'TypeScript',
            'Vue.js',
            'Terraform'
          ]
        },
        {
          title: 'CSPヘッダの導入検証',
          description: 'ECサイトにCSPヘッダを導入することで、XSS脆弱性の対策を行うプロジェクトに参加。\n\nCSPヘッダの導入によって、XSS脆弱性の対策ができるかどうかを検証し、検証結果をまとめて報告。\n\n社内プロジェクトの一環として行い、要件定義・設計・実装・運用保守を包括して担当。',
          startDate: dayjs('2022-07'),
          endDate: dayjs('2022-12'),
          technologies: [
            'C#',
            'ASP.NET',
            'HTTP'
          ]
        },
        {
          title: 'PCI-DSS 3.0対応',
          description: 'PCI-DSS 3.0準拠のための対応を担当。\n\nECサイト(クレジットカード取扱事業者)が準拠すべきセキュリティ基準であるPCI-DSS 3.0の対応を実施。\n\nプログラムの開発面では、費用面で外部サービスの導入を断念した重要なファイルの改竄を検知するプログラムの開発を担当し、要件定義・設計・実装を担当。',
          startDate: dayjs('2022-012'),
          endDate: dayjs('2023-3'),
          technologies: [
            'C#',
            'Docker',
            'SQL Server',
            'SQLite',
            'Azure DevOps',
            'Azure Pipelines',
            'Windows Server',
            'Terraform'
          ]
        }
      ]
    },
    {
      title: 'セキュリティオートメーションツール開発企業の開発系部門',
      startDate: dayjs('2023-04'),
      endDate: null,
      description: 'セキュリティオートメーションツール開発企業の開発系部門で、セキュリティオートメーションツールの設計・開発を行っています。',
      projects: [
        {
          title: '新規格対応のための機能追加',
          description: 'ISMS新規格対応のための機能追加を担当。\n\n実装を主に担当し、設計・テスト・運用保守も一部担当。',
          startDate: dayjs('2023-04'),
          endDate: dayjs('2023-06'),
          technologies: [
            'Ruby on Rails',
            'RSpec',
            'Docker',
            'MySQL',
            'GitHub Actions',
            'AWS',
            'React',
            'TypeScript'
          ]
        },
        {
          title: '既存システムの不具合対応',
          description: '既存システムの不具合対応を担当。\n\n原因追及と修正コードの提案を行い、リリース時期の調整とリリースを実施。',
          startDate: dayjs('2023-04'),
          endDate: null,
          technologies: [
            'Ruby on Rails',
            'RSpec',
            'Docker',
            'MySQL',
            'React',
            'TypeScript'
          ]
        }
      ]
    }
  ] as IWork[]
}

export default setting
