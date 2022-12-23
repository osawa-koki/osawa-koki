import Date2String from '../common/Date';
import Layout from '../components/Layout';
import portfolio from '../data/portfolio';

const AboutPage = () => (
  <Layout title="osawa's portfolio">
    <div id='Portfolio'>
      <h1>osawa's portfolio</h1>
      <div id='portfolioContainer'>
      {
        portfolio.map((item, _) => {
          return (
            <div className='portfolio'>
              <h2 className='title'>{item.name}</h2>
              <p className='description'>{item.description}</p>
              <a className='repo_url' href={item.repo_url} target='_blank'>Source Code</a>
              {
                item.production_url ? <a className='production_url' href={item.production_url} target='_blank'>Production Uri</a> : null
              }
              <ul className='tech_used'>
                {
                  item.tech_used.map((tech, _) => <li>{tech}</li>)
                }
              </ul>
              <input type="date" value={Date2String(item.created_at)} readOnly />
            </div>
          )
        })
      }
      </div>
    </div>
  </Layout>
)

export default AboutPage;
