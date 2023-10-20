import React from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { BsFillEnvelopeFill, BsGithub } from 'react-icons/bs'
import dayjs from 'dayjs'
import { resumeData } from '../data/resume'

export default function ResumePage (): React.JSX.Element {
  return (
    <>
      <h1 className='mt-5 border-start border-danger border-5 ps-3'>履歴書</h1>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>基本情報</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>項目</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>名前</td>
            <td>{resumeData.name}</td>
          </tr>
          <tr>
            <td>生年月日</td>
            <td>{resumeData.birthday.format('YYYY年 MM月 D日')} ({dayjs().diff(dayjs('1998-10-25'), 'year')}歳)</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>{resumeData.sex}</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>{resumeData.address}</td>
          </tr>
          <tr>
            <td>メールアドレス</td>
            <td><a href={`mailto:${resumeData.email}`}><BsFillEnvelopeFill /></a>&nbsp;{resumeData.email}</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>
              <a href={resumeData.github.uri}><BsGithub /></a>&nbsp;{resumeData.github.name}
            </td>
          </tr>
          <tr>
            <td>資格</td>
            <td>
            <ListGroup>
              {resumeData.certifications.map((certification, index) => (
                <ListGroup.Item key={index}>{certification.name}</ListGroup.Item>
              ))}
            </ListGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>学歴</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>年月</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            resumeData.educationalHistories.map((educationalHistory, index) => (
              <tr key={index}>
                <td>{educationalHistory.date.format('YYYY年 MM月')}</td>
                <td>{educationalHistory.event}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>職歴</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>年月</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            resumeData.workHistories.map((workHistory, index) => (
              <tr key={index}>
                <td>{workHistory.date.format('YYYY年 MM月')}</td>
                <td>{workHistory.event}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}
