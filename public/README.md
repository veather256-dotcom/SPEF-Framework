# SPEF Framework - Bilingual Documentation

This directory contains the SPEF (Scan→Plan→Execute→Feedback) framework documentation in both Chinese and English.

## Directory Structure

```
public/
├── zh/                          # Chinese (中文) version — default locale, served at the site root
│   ├── SPEF_paper_v6.md        # Full academic paper
│   ├── SPEF_handbook.md        # Comprehensive handbook
│   ├── SPEF_production_card.md # Quick reference card
│   ├── SPEF_diagram.html       # Argument structure diagram
│   └── card/                   # Visual cards
│       ├── Bet.svg             # Instantaneous prediction wager
│       ├── Phases.svg          # SPEF four-stage boundaries
│       ├── Criteria.svg        # Wagering criterion L
│       └── Termination.svg     # Red lines & termination conditions
│
└── en/                          # English version — served under /en/
    ├── SPEF_paper_v6.md        # Full academic paper
    ├── SPEF_handbook.md        # Comprehensive handbook
    ├── SPEF_production_card.md # Quick reference card
    ├── SPEF_diagram.html       # Argument structure diagram
    └── card/                   # Visual cards (English with standard fonts)
        ├── Bet.svg             # Instantaneous prediction wager
        ├── Phases.svg          # SPEF four-stage boundaries
        ├── Criteria.svg        # Wagering criterion L
        └── Termination.svg     # Red lines & termination conditions
```

Each language directory is a complete, self-contained mirror; there is no
shared root-level copy. The Astro site reads `zh/` at the root path and `en/`
under `/en/` (see `../site/`).

## File Descriptions

### Documents

- **SPEF_paper_v6.md**: The complete academic paper presenting the three-line parallel argument (Structural / Operational / Epistemic) with formal proofs, appendices, and strength accounting.

- **SPEF_handbook.md**: Practical guide organized in three parts: "Why" (argumentative main line), "How" (operations section), and "Boundaries & Gaps" (honest declarations of limitations).

- **SPEF_production_card.md**: Quick reference for daily use with four key sections: Four-stage boundaries, instantaneous prediction wager template, wagering criterion L, and red lines/termination conditions.

- **SPEF_diagram.html**: Visual representation of the complete argument structure mapping each section to its logical role.

### Visual Cards (SVG)

1. **Bet.svg** - Instantaneous Prediction Wager Template
   - Template for capturing judgment at the moment of decision
   - Confidence tiers and dual-channel value framework

2. **Phases.svg** - SPEF Four-Stage Boundaries
   - Scan, Plan, Execute, Feedback operational stages
   - Functional division and core principles

3. **Criteria.svg** - Wagering Criterion L: Three Regimes
   - Formula: L = R_L / φ
   - Three regime analysis (L > 1, L ≈ 1, L < 1)

4. **Termination.svg** - Red Lines and Termination Conditions
   - Pre-commitment items to freeze before starting
   - Kill-switch and integrity collapse triggers

## English Version Details

### Typography
- **Fonts**: Changed from Chinese-specific fonts (PingFang SC, Microsoft YaHei) to standard English fonts: `system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif`
- **Character Support**: Full support for mathematical notation and English typography

### Translation Notes
- Technical terminology preserved with precision (e.g., "confabulation", "salience bias", "observability")
- Control-theoretic and cognitive science concepts maintained in English
- All cross-references and section numbers aligned between versions
- Formula and notation consistent across both languages

## Usage

### For English Readers
Navigate to `en/` directory for all English-language materials:
- Start with `en/SPEF_production_card.md` for quick reference
- Read `en/SPEF_handbook.md` for detailed operations and reasoning
- Consult `en/SPEF_paper_v6.md` for complete theoretical foundation
- View `en/card/*.svg` for visual reference materials

### For Chinese Readers (中文读者)
Navigate to `zh/` directory for all Chinese-language materials:
- 从 `zh/SPEF_production_card.md` 开始快速入门
- 阅读 `zh/SPEF_handbook.md` 深入理解操作和论证
- 参考 `zh/SPEF_paper_v6.md` 了解完整的理论基础
- 查看 `zh/card/*.svg` 获取可视化参考

## Version Control

- **zh/ directory**: Official Chinese documentation source (default locale)
- **en/ directory**: Official English documentation source
- Both versions share identical structure and cross-referenceable section numbers

---

**SPEF Framework v6** | Calibrating Human Judgment in Agent Workflows
