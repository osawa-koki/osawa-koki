import dayjs from 'dayjs'

export const workHistoryData00: IWork = {
  id: '01',
  title: 'ECサイト構築企業のセキュリティ系部門',
  startDate: dayjs('2022-04'),
  endDate: dayjs('2023-03'),
  description: 'ECサイト構築企業のセキュリティ系部門で、WEBアプリケーションに起因する脆弱性の診断・対策を行っていました。',
  projects: [
    {
      id: '01',
      title: 'SQLインジェクション対策',
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
      id: '02',
      title: 'JSファイルの改竄検知プログラムの開発',
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
      id: '03',
      title: 'CSPヘッダの導入検証',
      startDate: dayjs('2022-07'),
      endDate: dayjs('2022-12'),
      technologies: [
        'C#',
        'ASP.NET',
        'HTTP'
      ]
    },
    {
      id: '04',
      title: 'PCI-DSS 3.0対応',
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
}
