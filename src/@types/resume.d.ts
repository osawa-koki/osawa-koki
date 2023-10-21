/**
 * 資格に関する情報のデータ型。
 */
interface ICertification {
  /** 資格名称 */
  name: string
  /** 資格取得日 */
  date: dayjs.Dayjs
}

type ICertifications = ICertification[]

/**
 * 学歴に関する情報のデータ型。
 */
interface IEducationalHistory {
  /** 日付 */
  date: dayjs.Dayjs
  /** イベント */
  event: string
}

type IEducationalHistories = IEducationalHistory[]

/**
 * 職歴に関する情報のデータ型。
 */
interface IWorkHistory {
  /** 日付 */
  date: dayjs.Dayjs
  /** イベント */
  event: string
}

type IWorkHistories = IWorkHistory[]
