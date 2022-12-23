
type Faq = {
  id: number;
  question: string;
  answer: string;
  detail: string;
}

type _Faq = {
  question: string;
  answer: string;
  detail: string;
}

const _faq: _Faq[] = [
  {
    question: 'How to use this app?',
    answer: 'You can use this app by following the steps below.',
    detail: '1. Open the app. 2. Click the button. 3. Enjoy the app.'
  },
  {
    question: 'How to use this app?',
    answer: 'You can use this app by following the steps below.',
    detail: '1. Open the app. 2. Click the button. 3. Enjoy the app.'
  },
];

const faq: Faq[] = _faq.map((faq, index) => ({
  id: index,
  ...faq
}));

export { faq };
