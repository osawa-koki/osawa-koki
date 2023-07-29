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
    }
  }
}

export default setting
