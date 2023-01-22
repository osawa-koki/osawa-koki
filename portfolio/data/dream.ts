
type Timespan =
  | '短期(～3ヶ月)'
  | '中期(3ヶ月～1年)'
  | '長期(1年～)'
  | '終了'

const timespans: Timespan[] = [
  '短期(～3ヶ月)',
  '中期(3ヶ月～1年)',
  '長期(1年～)',
  '終了',
];

type Dream = {
  title: string,
  description: string,
  start_at: Date,
  end_at: Date,
  progress: number,
  timespan: Timespan,
};

const _dreams: Dream[] = ([
  {
    title: 'Laravel学んでみる。',
    description: 'PHPの定番フレームワークであるLaravelに触れてみる。\nおそらく使うことはないだろうけど、Railsに少し触れたついでに、、、',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-01-31'),
    progress: 0,
    timespan: '短期(～3ヶ月)',
  },
  {
    title: 'GrapQLのお勉強。',
    description: 'RESTfulAPIの代替として注目されているGraphQLに触れてみる。\nRESTfulAPIの代わりになるのか、それともRESTfulAPIと併用するのか、、、',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-01-31'),
    progress: 0,
    timespan: '短期(～3ヶ月)',
  },
  {
    title: 'Ruby on Rails学んでみる。',
    description: '日本ではRailsが定番のフレームワークであるらしいので、触ってみる。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-01-31'),
    progress: 100,
    timespan: '短期(～3ヶ月)',
  },
  {
    title: 'ポケモン認識アプリを作る。',
    description: '機械学習の勉強頑張る。\n最初はカントーのポケモン151匹から。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 0,
    timespan: '中期(3ヶ月～1年)',
  },
  {
    title: 'ポケモン認識アプリを作る。',
    description: '機械学習の勉強頑張る。\nスカーレット・バイオレットのポケモンまで。\nまだプレイしていないけど、、、',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 0,
    timespan: '長期(1年～)',
  },
  {
    title: 'データベーススペシャリスト試験合格。',
    description: '定期的にIPAの試験を受けていく。\n次ははデータベーススペシャリスト試験を受けてみる。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 0,
    timespan: '中期(3ヶ月～1年)',
  },
  {
    title: 'Firebase Authenticationのお勉強',
    description: 'IDaasの中でも有名なサービスをマスターして、開発のスピードを上げる。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 100,
    timespan: '中期(3ヶ月～1年)',
  },
  {
    title: 'Auth0のお勉強',
    description: 'IDaasの中でも有名なサービスをマスターして、開発のスピードを上げる。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 100,
    timespan: '中期(3ヶ月～1年)',
  },
  {
    title: 'Security Quizの開発',
    description: 'セキュリティに関するクイズアプリを作ってみる。\nセキュリティに関する知識を身につけるためにも、クイズアプリを作ってみる。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 5,
    timespan: '中期(3ヶ月～1年)',
  },
  {
    title: 'Terraformのお勉強',
    description: '最近はIaCが注目されているので、触ってみる。\nsecurity-quizなどに使用したい。',
    start_at: new Date('2023-01-10'),
    end_at: new Date('2023-03-31'),
    progress: 10,
    timespan: '中期(3ヶ月～1年)',
  },
] as Dream[]).map(dream => {
  const progress = dream.progress >= 100 ? 100 : dream.progress;
  const timespan = progress >= 100 ? '終了' : dream.timespan;
  return {
    ...dream,
    progress,
    timespan,
  };
});

const dreams = timespans.map(timespan => {
  const dreams = _dreams.filter(dream => dream.timespan === timespan);
  return {
    timespan,
    dreams,
  };
});

export { dreams };
