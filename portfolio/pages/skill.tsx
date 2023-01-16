import {
  Chart as ChartJS,
  registerables,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { defaults } from 'chart.js';
import Layout from '../components/Layout';
import { skills } from '../data/skill';

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
  scales: {
    y: {
      ticks: {
        callback: function(value: number, _: any) {
          return `${value} h`;
        },
      },
    },
  },
};

const SkillPage = () => (
  <Layout title="osawa's skills">
    <div id='Skill'>
      {skills.map((skill) => (
        <div className='skillUnit'>
          <h2>{skill.category}</h2>
          <Bar
            className='chart'
            data={skill.chart_data}
            options={options}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default SkillPage;
