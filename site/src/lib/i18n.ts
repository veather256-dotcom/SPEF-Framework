// i18n surface for the SPEF site. Two locales:
//   zh — default, served at the root (/, /docs/..., /diagram)
//   en — served under /en/ (/en/, /en/docs/..., /en/diagram)
// Content lives in the Layer-2 collections docsZh / docsEn (see content.config.ts).
// English chrome strings are drawn from the authored English handbook/paper to
// keep one voice; treat them as editorial and revise freely.

export type Lang = 'zh' | 'en';
export const LANGS: Lang[] = ['zh', 'en'];

export const collectionFor = (lang: Lang) => (lang === 'en' ? 'docsEn' : 'docsZh') as const;
export const otherLang = (lang: Lang): Lang => (lang === 'en' ? 'zh' : 'en');

/** URL prefix for a locale ('' for the default zh, '/en' for English). */
export const prefix = (lang: Lang) => (lang === 'en' ? '/en' : '');
export const homeHref = (lang: Lang) => prefix(lang) + '/';
export const docHref = (lang: Lang, id: string) => `${prefix(lang)}/docs/${id}/`;
export const diagramHref = (lang: Lang) => `${prefix(lang)}/diagram`;
/** Static path to the language's argument-map HTML (synced by sync-static.mjs). */
export const diagramSrc = (lang: Lang) => `${prefix(lang)}/diagram.html`;

export interface DocMeta {
  title: string;
  blurb: string;
  order: number;
}

// Keyed by content-collection id (= markdown filename, lowercased by the glob loader:
// SPEF_handbook.md -> "spef_handbook").
const DOC_META: Record<Lang, Record<string, DocMeta>> = {
  zh: {
    spef_handbook: {
      title: '指导手册',
      blurb: '为什么 / 怎么做 / 边界。每天执行的主文档，每条操作都标注了论证根。',
      order: 1,
    },
    spef_paper_v6: {
      title: '论文 v6',
      blurb: '完整论证：三线并联证明、强度核算纪律与两处不可证明的残洞。',
      order: 2,
    },
    spef_production_card: {
      title: '生产卡片',
      blurb: '贴屏速查。生产时只看这一张，怀疑某条规则时再回查手册。',
      order: 3,
    },
  },
  en: {
    spef_handbook: {
      title: 'Handbook',
      blurb:
        'Why / how / boundaries. The day-to-day master document; every action is annotated with its argument root.',
      order: 1,
    },
    spef_paper_v6: {
      title: 'Paper v6',
      blurb:
        'The full argument: the three-line parallel proof, the strength-grading discipline, and the two unprovable residual holes.',
      order: 2,
    },
    spef_production_card: {
      title: 'Production card',
      blurb:
        'Pin-to-screen quick reference. In production, look only at this; when a rule feels off, fall back to the handbook.',
      order: 3,
    },
  },
};

export function metaFor(lang: Lang, id: string): DocMeta {
  return DOC_META[lang][id.toLowerCase()] ?? { title: id, blurb: '', order: 99 };
}

export interface Ui {
  htmlLang: string;
  siteDescription: string;
  nav: { framework: string; diagram: string; toggleTheme: string; switchLang: string };
  footer: { line: string; fine: string };
  home: {
    eyebrow: string;
    h1: string;
    lede: string;
    phases: { letter: string; word: string; gloss?: string }[];
    lines: { key: 'a' | 'b' | 'c'; tag: string; desc: string }[];
    docsLabel: string;
    diagramCtaTitle: string;
    diagramCtaSub: string;
    cardsLabel: string;
    cards: { src: string; title: string }[];
    closeLabel: string;
  };
  diagram: { title: string; frameTitle: string };
  docs: { back: string };
  notFound: { eyebrow: string; h1: string; lede: string; back: string };
}

const CARD_FILES = ['Phases.svg', 'Criteria.svg', 'Bet.svg', 'Termination.svg'];

export const UI: Record<Lang, Ui> = {
  zh: {
    htmlLang: 'zh-CN',
    siteDescription:
      'SPEF 是一套校准人类判断的工作流。它不保证你进步，它保证每一次自欺都留下可验证、赖不掉的痕迹。',
    nav: { framework: '框架', diagram: '论证图', toggleTheme: '切换深浅色', switchLang: 'EN' },
    footer: {
      line: 'SPEF · 一套校准人类判断的工作流',
      fine: '它给不出"你已进步"的证明；它给每一次自欺装一份迟到、但赖不掉的账单。',
    },
    home: {
      eyebrow: 'Scan · Plan · Execute · Feedback',
      h1: 'AI 没报错——你就做对了吗？',
      lede: 'SPEF 是一套校准人类判断的工作流。它不保证你进步，它保证每一次自欺都留下可验证、赖不掉的痕迹。',
      phases: [
        { letter: 'S', word: 'Scan', gloss: '扫描' },
        { letter: 'P', word: 'Plan', gloss: '计划' },
        { letter: 'E', word: 'Execute', gloss: '执行' },
        { letter: 'F', word: 'Feedback', gloss: '反馈' },
      ],
      lines: [
        { key: 'a', tag: '线 A · 结构性', desc: '必然存在一个自动守门员永远看不见、因此无法闭合的反馈环。' },
        { key: 'b', tag: '线 B · 运行性', desc: '人作为闭环传感器,有效增益随负荷衰减——名义闭合、实质开环。' },
        { key: 'c', tag: '线 C · 认识论', desc: '自校准在原理上不可能;校准只能外包给时间上的未来的自己。' },
      ],
      docsLabel: '框架文档',
      diagramCtaTitle: '三线论证映射图',
      diagramCtaSub: '每个章节到其逻辑角色的可视化地图',
      cardsLabel: '速查卡片',
      cards: [
        { src: '/card/Phases.svg', title: 'SPEF 四阶段与边界' },
        { src: '/card/Criteria.svg', title: '强度核算判据' },
        { src: '/card/Bet.svg', title: '瞬时预判押注' },
        { src: '/card/Termination.svg', title: '终止条件' },
      ],
      closeLabel: '关闭',
    },
    diagram: { title: '论证图', frameTitle: 'SPEF 三线论证映射图' },
    docs: { back: '← 返回框架' },
    notFound: {
      eyebrow: '404',
      h1: '这一页不在台账上',
      lede: '你要找的页面不存在，或已被移动。回到框架首页，从索引重新进入。',
      back: '← 返回框架首页',
    },
  },
  en: {
    htmlLang: 'en',
    siteDescription:
      'SPEF is a workflow for calibrating human judgment. It offers no proof that you\u2019ve improved. It attaches to every act of self-deception a verifiable, undeniable trace.',
    nav: { framework: 'Framework', diagram: 'Diagram', toggleTheme: 'Toggle theme', switchLang: '中文' },
    footer: {
      line: 'SPEF · A workflow for calibrating human judgment',
      fine: 'It offers no proof that "you have improved"; it attaches to every act of self-deception a late but undeniable bill.',
    },
    home: {
      eyebrow: 'Scan · Plan · Execute · Feedback',
      h1: 'AI didn\u2019t raise an alarm \u2014 did you get it right?',
      lede: 'SPEF is a workflow for calibrating human judgment. It offers no proof that you\u2019ve improved. It attaches to every act of self-deception a verifiable, undeniable trace.',
      phases: [
        { letter: 'S', word: 'Scan' },
        { letter: 'P', word: 'Plan' },
        { letter: 'E', word: 'Execute' },
        { letter: 'F', word: 'Feedback' },
      ],
      lines: [
        { key: 'a', tag: 'Line A · Structural', desc: 'There necessarily exists a feedback loop that any automated gatekeeper can never see, and therefore can never close.' },
        { key: 'b', tag: 'Line B · Operational', desc: 'The human as closed-loop sensor: effective gain decays under load — nominally closed, effectively open.' },
        { key: 'c', tag: 'Line C · Epistemic', desc: 'Self-calibration is impossible in principle; calibration can only be outsourced to a future self in time.' },
      ],
      docsLabel: 'Framework documents',
      diagramCtaTitle: 'Three-line argument map',
      diagramCtaSub: 'A visual map from each section to its logical role',
      cardsLabel: 'Quick-reference cards',
      cards: [
        { src: '/en/card/Phases.svg', title: 'The four phases and their boundaries' },
        { src: '/en/card/Criteria.svg', title: 'Strength-grading criteria' },
        { src: '/en/card/Bet.svg', title: 'The five-second prediction bet' },
        { src: '/en/card/Termination.svg', title: 'Termination conditions' },
      ],
      closeLabel: 'Close',
    },
    diagram: { title: 'Diagram', frameTitle: 'SPEF three-line argument map' },
    docs: { back: '← Back to framework' },
    notFound: {
      eyebrow: '404',
      h1: 'This page is not on the ledger',
      lede: 'The page you are looking for does not exist, or has been moved. Return to the framework home and re-enter from the index.',
      back: '← Back to framework home',
    },
  },
};

export const uiFor = (lang: Lang) => UI[lang];
export { CARD_FILES };
