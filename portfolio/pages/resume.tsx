import Layout from '../components/Layout';
import Settings from '../common/Setting';

const ResumePage = () => {


  return (
    <Layout title="osawa's resume">
      <div id='Resume'>
        <img id='MyIcon' src={`${Settings.IMG_ROOT_PATH}/Avatar.png`} alt="MyIcon" />
        <table>
          <caption>プロフィール</caption>
          <tbody>
            <tr>
              <th>名前</th>
              <td>大澤 公貴</td>
            </tr>
            <tr>
              <th>生年月日</th>
              <td>1998年 10月 25日 (24)</td>
            </tr>
            <tr>
              <th>出身地</th>
              <td>埼玉県</td>
            </tr>
            <tr>
              <th>住所</th>
              <td>埼玉県草加市</td>
            </tr>
            <tr>
              <th>性別</th>
              <td>男</td>
            </tr>
            <tr>
              <th>最終学歴</th>
              <td>都内某私立大学 経営学部 卒業</td>
            </tr>
            <tr>
              <th>資格</th>
              <td>
                <ul>
                  <li>応用情報技術者試験合格</li>
                  <li>情報処理安全確保支援士試験合格</li>
                  <li>日商簿記検定１級合格</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>学歴</caption>
          <tbody>
            <tr>
              <th>2017年 3月</th>
              <td>埼玉県内某公立高校 普通科 卒業</td>
            </tr>
            <tr>
              <th>2017年 4月</th>
              <td>都内某私立大学 経営学部 入学</td>
            </tr>
            <tr>
              <th>2022年 3月</th>
              <td>都内某私立大学 経営学部 卒業</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>職歴</caption>
          <tbody>
            <tr>
              <th>2022年 4月</th>
              <td>都内某Web系企業 セキュリティ系部門 入社</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default ResumePage;
