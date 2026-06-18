// Shared metadata for the Layer-2 framework documents.
// Keyed by content-collection id (= markdown filename without extension).
export interface DocMeta {
  title: string;
  blurb: string;
  order: number;
}

// Keys are the content-collection ids, which Astro's glob loader lowercases
// from the filename (SPEF_handbook.md -> "spef_handbook").
export const docMeta: Record<string, DocMeta> = {
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
};

export function metaFor(id: string): DocMeta {
  return docMeta[id.toLowerCase()] ?? { title: id, blurb: '', order: 99 };
}
