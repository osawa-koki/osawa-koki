import dayjs from 'dayjs'

export const workHistoryData01: IWork = {
  id: '02',
  title: 'セキュリティオートメーションツール開発企業の開発系部門',
  startDate: dayjs('2023-04'),
  endDate: null,
  description: 'セキュリティオートメーションツール開発企業の開発系部門で、セキュリティオートメーションツールの設計・開発を行っています。',
  projects: [
    {
      id: '01',
      title: '新規格対応のための機能追加',
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
      id: '02',
      title: '既存システムの不具合対応',
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
