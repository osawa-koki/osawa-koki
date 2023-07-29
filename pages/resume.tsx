import React from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import setting from '../setting'
import dayjs from 'dayjs'

export default function ResumePage (): JSX.Element {
  return (
    <>
      <h1 className='mt-5 border-start border-danger border-5 ps-3'>履歴書</h1>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>基本情報</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>項目</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>名前</td>
            <td>{setting.profile.name}</td>
          </tr>
          <tr>
            <td>生年月日</td>
            <td>{setting.profile.birthday.format('YYYY年 MM月 D日')} ({dayjs().diff(dayjs('1998-10-25'), 'year')}歳)</td>
          </tr>
          <tr>
            <td>性別</td>
            <td>{setting.profile.sex}</td>
          </tr>
          <tr>
            <td>住所</td>
            <td>{setting.profile.address}</td>
          </tr>
          <tr>
            <td>電話番号</td>
            <td>{setting.profile.phone}</td>
          </tr>
          <tr>
            <td>メールアドレス</td>
            <td>{setting.profile.email}</td>
          </tr>
          <tr>
            <td>GitHub</td>
            <td>
              <a href={setting.profile.github.uri}>@{setting.profile.github.name}</a>
            </td>
          </tr>
          <tr>
            <td>資格</td>
            <td>
            <ListGroup>
              {setting.profile.certifications.map((certification, index) => (
                <ListGroup.Item key={index}>{certification.name}</ListGroup.Item>
              ))}
            </ListGroup>
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>学歴</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>年月</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            setting.profile.educationalHistories.map((educationalHistory, index) => (
              <tr key={index}>
                <td>{educationalHistory.date.format('YYYY年 MM月')}</td>
                <td>{educationalHistory.event}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      <h2 className='mt-5 border-start border-success border-4 ps-3'>職歴</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>年月</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          {
            setting.profile.workHistories.map((workHistory, index) => (
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
