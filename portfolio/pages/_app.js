import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Layout.scss';
import '../styles/index.scss';
import '../styles/about.scss';
import '../styles/portfolio.scss';
import '../styles/resume.scss';
import '../styles/skill.scss';
import '../styles/faq.scss';
import '../styles/dream.scss';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
