import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import Layout from '../components/Layout';
import { faq as _faq } from '../data/faq';

type Faq = {
  id: number;
  question: string;
  answer: string;
  detail: string;
  open: boolean;
}

const faq: Faq[] = _faq.map((f, _) => {
  return {
    id: f.id,
    question: f.question,
    answer: f.answer,
    detail: f.detail,
    open: false,
  }
});

const FaqPage = () => {
  const [faqs, setFaqs] = useState(faq);

  return (
    <Layout title="osawa's FAQ">
    <div id='Faq'>
      <h1>FAQ</h1>
      {
        faqs.map((f, _) => {
          return (
            <div className='FaqUnit' key={f.id}>
              <Button
                className='FaqQuestion'
                variant='outline-primary'
                onClick={() => {
                  const new_open = faqs.map((o, _) => {
                    if (o.id === f.id) {
                      return {
                        id: o.id,
                        question: o.question,
                        answer: o.answer,
                        detail: o.detail,
                        open: !o.open,
                      }
                    } else {
                      return o;
                    }
                  }
                  );
                  setFaqs(new_open);
                }}
                aria-controls='example-collapse-text'
                aria-expanded={f.open}
              >
                {f.question}
              </Button>
              <Collapse in={f.open}>
                <div className='answer-detail'>
                  <div className='answer'>
                    {f.answer}
                  </div>
                  <div className='detail'>
                    {f.detail}
                  </div>
                </div>
              </Collapse>
            </div>
          )
        })
      }
    </div>
  </Layout>
  )
}

export default FaqPage;

