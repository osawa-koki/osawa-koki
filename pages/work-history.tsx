import React from 'react'
import setting from '../setting'
import { Alert, Badge } from 'react-bootstrap'

export default function ContactPage (): JSX.Element {
  return (
    <>
      <h1 className='mt-5 border-start border-danger border-5 ps-3'>職務経歴書</h1>
      {
        setting.works.map((work, index) => (
          <div key={index}>
            <h2 className='mt-5 border-start border-success border-4 ps-3'>{work.title}</h2>
            <Alert className='mt-3' variant='info'>
              <Alert.Heading>{work.startDate.format('YYYY年 MM月')} 〜 {work.endDate?.format('YYYY年 MM月') ?? '現在'}</Alert.Heading>
              <p className='mt-3'>
                {work.description}
              </p>
            </Alert>
            {
              work.projects.map((project, index) => (
                <div key={index}>
                  <h3 className='mt-3 border-start border-primary border-4 ps-3'>#{index + 1} - {project.title}</h3>
                  <Alert className='mt-3' variant='light'>
                    <Alert.Heading>{project.startDate.format('YYYY年 MM月')} 〜 {project.endDate?.format('YYYY年 MM月') ?? '現在'}</Alert.Heading>
                    <p className='mt-3 pre-wrap'>
                      {project.description}
                    </p>
                    {
                      project.technologies.map((technology, index) => (
                        <Badge key={index} bg='secondary' className='me-1'>{technology}</Badge>
                      ))
                    }
                  </Alert>
                </div>
              ))
            }
            <hr className='my-5' />
          </div>
        ))
      }
    </>
  )
}
