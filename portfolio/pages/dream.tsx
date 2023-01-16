import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Layout from '../components/Layout';

import { dreams } from '../data/dream';

const DreamPage = () => (
  <Layout title="in my future...">
    <div id='Dream'>
      <h1>In My Future...</h1>
      <p>"こんなこといいな♪" "できたらいいな♪"<br />のおおさわのプログラミングバージョン。<br /><br />おおさわのやってみたいこと(目標)を短期・中期・長期に分けて記載。<br /><br />一度開始したら一気に終わらせるから、0%か100%かのどちらかがほとんどを占めることになると思う、、、</p>
      <div id='DreamContent'>
      {
        dreams.map((timespan, index) => (
          <div key={index}>
            <h2>{timespan.timespan}</h2>
            {
              timespan.dreams.map((dream, index) => (
                <Alert variant="info" key={index} className="DreamUnit">
                  <Alert.Heading>{dream.title}</Alert.Heading>
                  <p className='description'>{dream.description}</p>
                  <ProgressBar now={dream.progress} label={`${dream.progress}%`} />
                </Alert>
              ))
            }
            <hr />
          </div>
        ))
      }
      </div>
    </div>
  </Layout>
)

export default DreamPage;
