
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
    question: 'インデントはタブ派？、スペース派？',
    answer: 'スペース派です。',
    detail: '例外的にGo言語など、タブ文字が推奨されている場合には、タブ文字を使用します。'
  },
  {
    question: 'インデントサイズは何文字？',
    answer: '2文字が好きです。',
    detail: '4タブだとどんどん右に進んでしまうため、2タブが好きです。'
  },
];

const faq: Faq[] = _faq.map((faq, index) => ({
  id: index,
  ...faq
}));

export { faq };
