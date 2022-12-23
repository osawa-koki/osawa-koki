
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
    detail: '一時期Haskellを使用していた際の名残でスペース派です。\nそれ以降は原則としてスペースによるインデントを採用しています。\n例外的にGo言語など、タブ文字が推奨されている場合には、タブ文字を使用します。'
  },
  {
    question: 'インデントサイズは何文字？',
    answer: '2文字が好きです。',
    detail: '4タブだとどんどん右に進んでしまうため、2タブが好きです。\nもっとも、そんなにインデントで右に進んでしまうようなコードは書くべきではないですけどね、、、\n自分的には3段階右に進んだだけでも好きではありませんので2タブが好きです、、、笑'
  },
  {
    question: '静的型付け派？、動的型付け派？',
    answer: '圧倒的、静的派です。',
    detail: '静的型付け言語は動的型付け言語に比べて圧倒的に安心感・信頼感があるためです。'
  },
];

const faq: Faq[] = _faq.map((faq, index) => ({
  id: index,
  ...faq
}));

export { faq };
