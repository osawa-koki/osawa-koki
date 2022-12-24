import {
  Chart as ChartJS,
  registerables,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js';
import Layout from '../components/Layout';
import { skill_frontend, skill_backend, skill_database, skill_os, skill_cloud } from '../data/skill';

ChartJS.register(
  ...registerables,
);
defaults.font.family = 'Consolas';

const SkillPage = () => (
  <Layout title="osawa's skills">
    <div id='Skill'>
      <div className='skillUnit'>
        <h2>Frontend</h2>
        <Bar
          className='chart'
          data={skill_frontend}
        />
      </div>
      <div className='skillUnit'>
        <h2>Backend</h2>
        <Bar
          className='chart'
          data={skill_backend}
        />
      </div>
    </div>
  </Layout>
)

export default SkillPage;
