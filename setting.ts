import dayjs from 'dayjs'
import Env from './next.config.js'
const isProd = process.env.NODE_ENV === 'production'

const setting = {
  isProd,
  basePath: Env.basePath,
  apiPath: isProd ? '' : 'http://localhost:8000',
  title: '🐙🐬🐸 おおさわ 🐸🐬🐙',
  profile: {
    name: '大澤 公貴',
    birthday: dayjs('1998-10-25'),
    sex: '男性',
    address: '北海道札幌市',
    email: 'koki@osawa.cloud',
    phone: '090-8198-6196',
    github: {
      name: 'osawa-koki',
      uri: 'https://github.com/osawa-koki'
    },
    certifications: [
      {
        name: '応用情報技術者試験 合格',
        date: dayjs('2020-10')
      },
      {
        name: '情報処理安全確保支援士試験 合格',
        date: dayjs('2022-03')
      }
    ],
    educationalHistories: [
      {
        date: dayjs('2014-04'),
        event: '某埼玉県立高校 入学'
      },
      {
        date: dayjs('2017-03'),
        event: '某埼玉県立高校 卒業'
      },
      {
        date: dayjs('2017-04'),
        event: '都内の某私立大学 経営学部 会計学科 入学'
      },
      {
        date: dayjs('2022-03'),
        event: '都内の某私立大学 経営学部 会計学科 卒業'
      }
    ],
    workHistories: [
      {
        date: dayjs('2022-04'),
        event: '都内の某WEB系企業(ECサイト構築事業者)のセキュリティ系部門 入社'
      },
      {
        date: dayjs('2023-03'),
        event: '都内の某WEB系企業(ECサイト構築事業者)のセキュリティ系部門 退社'
      },
      {
        date: dayjs('2023-04'),
        event: '都内の某WEB系企業(セキュリティオートメーションツール開発事業者)の開発系部門 入社'
      }
    ]
  }
}

export default setting
