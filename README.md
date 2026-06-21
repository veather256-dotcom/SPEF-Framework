# SPEF Framework

> **一句话主张**：最危险的错误从不触发报警，自我评估在原理上不可靠，所以判断必须被外置成可证伪、带时间戳、由现实结算的痕迹。

SPEF（**Scan → Plan → Execute → Feedback**）是一套**在低效度反馈环境中校准人类判断**的工作流方法论，面向与不可靠 AI Agent 协作的场景。它综合控制论的结构脚手架与认知科学的承重机制，给出一条三路并联的论证，并落地为可操作的 SOP、判据与验证协议。

## 核心论证（三线并联）

- **线 A（结构）**：Scan 层的语义失真落在观测映射的盲区内，结构上必然存在一个自动守门员永远无法闭合的反馈环。
- **线 B（运行）**：人作为闭合该环的传感器，其有效性随负荷可预测地衰减——回路名义闭合、实质开环。
- **线 C（认识论）**：自校准在原理上不可能，因为测量者与被测量者是同一主体。

三线汇合，导出“瞬时预判押注”作为元认知支架，并将问题从控制论的能观框架重新归属为元认知问题。结论是**条件性的**：若经验前提为真，则方法论提升效率；前提之真伪尚未经数据检验。

## 仓库结构（两层分层）

本仓库只承载**框架文本**，绝不包含运行时数据。

| 路径 | 内容 |
|---|---|
| `public/zh/`、`public/en/` | 框架正文与静态站点源，按语言各成一套完整镜像（中文为默认）。每套含权威 ground truth：`SPEF_paper_v6.md`（完整论证与全部形式化主张）、`SPEF_diagram.html`（每个章节到三线证明逻辑角色的映射），以及 `SPEF_handbook.md`（指导手册）、`SPEF_production_card.md`、`card/`（视觉卡片）。 |
| `site/` | Astro 静态站点，单一来源读取 `public/`：中文走根路径，英文走 `/en/`。 |
| `deploy/` | 部署脚本与 Caddyfile。 |

> **重要**：个人台账数据与真实参数（故障时间戳、赌注文本、校准数据、阈值等）一律存放在本仓库**之外**，绝不进入仓库。

## 文档导览

（中文版位于 `public/zh/`，英文版位于 `public/en/`，结构一致。）

- 第一次读，或想看完整论证：`public/zh/SPEF_paper_v6.md`
- 日常执行的操作手册（含四阶段、瞬时预判押注、押注判据、验证协议、终止条件）：`public/zh/SPEF_handbook.md`
- 论证结构地图（三线 A/B/C 与各章节的对应）：`public/zh/SPEF_diagram.html`
- 生产用速查卡：`public/zh/SPEF_production_card.md` 与 `public/zh/card/`

## 本地运行站点

```bash
cd site
npm install
npm run dev      # predev 会把 diagram.html + card/ 同步进 site/public
```

构建：`npm run build`，产物在 `site/dist/`。生产构建前请在 `astro.config.mjs` 的 `site:` 设置真实部署 URL。部署细节见 `deploy/README.md`。

## 许可

本仓库**双重许可**（详见 `LICENSE.md`）：

- 源代码与配置（`site/`、`deploy/` 等）——**MIT**
- `public/` 下已发布的框架文本与视觉——**CC BY 4.0**

Copyright © 2026 Veather（https://spef.veathered.top）。
