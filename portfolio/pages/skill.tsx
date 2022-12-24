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

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const SkillPage = () => (
  <Layout title="osawa's skills">
    <div id='Skill'>
      <div className='skillUnit'>
        <h2>Frontend</h2>
        <Bar
          className='chart'
          data={skill_frontend}
          options={options}
          />
      </div>
      <div className='skillUnit'>
        <h2>Backend</h2>
        <Bar
          className='chart'
          data={skill_backend}
          options={options}
        />
      </div>
      <div className='skillUnit'>
        <h2>Database</h2>
        <Bar
          className='chart'
          data={skill_database}
          options={options}
        />
      </div>
      <div className='skillUnit'>
        <h2>OS</h2>
        <Bar
          className='chart'
          data={skill_os}
          options={options}
        />
      </div>
      <div className='skillUnit'>
        <h2>Cloud</h2>
        <Bar
          className='chart'
          data={skill_cloud}
          options={options}
        />
      </div>
    </div>
  </Layout>
)

export default SkillPage;
