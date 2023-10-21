/** プロジェクトのデータ型。 */
interface IProject {
  id: string
  title: string
  startDate: Dayjs
  endDate: Dayjs | null
  technologies: string[]
}

type IProjects = IProject[]

/** 職歴に関する情報のデータ型。 */
interface IWork {
  id: string
  title: string
  startDate: Dayjs
  endDate: Dayjs | null
  description: string
  projects: IProjects
}

type IWorks = IWork[]
