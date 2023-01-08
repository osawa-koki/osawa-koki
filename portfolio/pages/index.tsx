import Link from 'next/link';
import Layout from '../components/Layout';
import Settings from '../common/Setting';

const IndexPage = () => (
  <Layout>
    <div id='Index'>
      <div id='MainTopic'>
        <h1>osawa's profile</h1>
        <img id='Avatar' src={`${Settings.IMG_ROOT_PATH}/Avatar.png`} alt="Avatar" />
        <p id='OneComment'>たこさんマークのエンジニア🐙🐙🐙</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage;
