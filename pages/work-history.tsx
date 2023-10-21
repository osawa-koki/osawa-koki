import React, { useMemo, useState } from 'react'
import { Form } from 'react-bootstrap'
import { workHostoryData } from '../data/workHostory'
import Detail from '../components/Detail'

export default function ContactPage (): React.JSX.Element {
  const [workId, setWorkId] = useState<string | null>()
  const [projectId, setProjectId] = useState<string | null>()

  const work = useMemo(() => workHostoryData.find(work => work.id === workId) ?? null, [workId])
  const project = useMemo(() => work?.projects.find(project => project.id === projectId) ?? null, [projectId])

  return (
    <>
      <h1 className='mt-5 border-start border-danger border-5 ps-3'>職務経歴書</h1>
      <Form.Select className='mt-1' onChange={(event) => {
        setWorkId(event.currentTarget.value)
        setProjectId(null)
      }} value={workId ?? ''}>
        <option value='00'>職歴を選択してください。</option>
        {
          workHostoryData.map((work, index) => (
            <option key={index} value={work.id}>#{work.id} - {work.title}</option>
          ))
        }
      </Form.Select>
      {/* プロジェクトを選択させる。 */}
      <Form.Select className='mt-1' onChange={(event) => {
        setProjectId(event.currentTarget.value)
      }} value={projectId ?? ''}>
        <option value='00'>プロジェクトを選択してください。</option>
        {
          workHostoryData.find(work => work.id === workId)?.projects.map((project, index) => (
            <option key={index} value={project.id}>#{project.id} - {project.title}</option>
          ))
        }
      </Form.Select>
      <hr />
      <Detail work={work ?? null} project={project ?? null} />
    </>
  )
}
