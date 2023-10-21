import dayjs from 'dayjs'
import Env from './next.config.js'
const isProd = process.env.NODE_ENV === 'production'

const setting = {
  isProd,
  basePath: Env.basePath,
  apiPath: isProd ? '' : 'http://localhost:8000',
  title: '🐙🐬🐸 おおさわ 🐸🐬🐙'
}

export default setting
