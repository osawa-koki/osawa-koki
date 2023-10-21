import React from 'react'
import { Alert, Badge } from 'react-bootstrap'
import useSWR from 'swr'
import setting from '../setting'
import { textFetcher } from '../src/common/fetcher'

interface Props {
  work: IWork | null
  project: IProject | null
}

export default function Detail (props: Props): React.JSX.Element {
  const { work, project } = props

  const { data: description, error } = useSWR(
    work != null && project != null ? `${setting.basePath}/data/${work.id}/${project.id}.txt` : null,
    textFetcher
  )

  if (work == null || project == null) return <></>

  if (error != null) return <div>failed to load</div>
  if (description == null) return <div>loading...</div>

  return (
    <>
      <div>
        <h3 className='mt-3 border-start border-primary border-4 ps-3'>#{project.id} - {project.title}</h3>
        <Alert className='mt-3' variant='light'>
          <Alert.Heading>{project.startDate.format('YYYY年 MM月')} 〜 {project.endDate?.format('YYYY年 MM月') ?? '現在'}</Alert.Heading>
          <p className='mt-3 pre-wrap'>
            {description}
          </p>
          {
            project.technologies.map((technology, index) => (
              <Badge key={index} bg='secondary' className='me-1'>{technology}</Badge>
            ))
          }
        </Alert>
      </div>
    </>
  )
}
