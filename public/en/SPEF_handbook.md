# SPEF Handbook
### A workflow method for calibrating human judgment in low-fidelity feedback environments

> **One-sentence claim**: The most dangerous errors never trigger alarms; self-assessment is structurally unreliable; therefore judgment must be externalized into falsifiable, timestamped traces settled by reality.

---

## How to use this handbook

This handbook comprises three sections, corresponding to three use scenarios:

- **Section One "Why"** is the argumentative main line, answering "why must we do this." Read it on first encounter, or whenever you doubt an operational step. It preserves the three-line parallel proof of the original paper (Line A structure / Line B operational / Line C epistemic) and the strength-accounting discipline.
- **Section Two "How"** is the operations section, the part you actually execute daily: SPEF four-stage, instantaneous prediction wagers, wagering criteria, verification protocol, termination conditions. Every operation is annotated with its argumentative basis in Section One.
- **Section Three "Boundaries and Gaps"** honestly declares where this method does not reach. Treat it as both a disclaimer and a final gate against self-deception.

**Do not read the entire handbook during production** — that is an antipattern. During production, consult only the accompanying "Production Card" (text quick-reference + visual cards). This handbook is the "why" behind the card; consult it when you doubt a rule.

**One discipline running through the entire book**: Every conclusion in this handbook is marked for strength — **hard** (depends only on borrowed theorems), **conditionally hard** (theorem + declared empirical bridge; if bridge is true, conclusion is hard), **soft** (pure empirical assertion, refutable by data). Always read with this yardstick; do not treat "conditionally hard" as "hard," and above all do not treat "soft" as "hard."

---

# Part One  Why: There necessarily exists a loop that only humans can close

## 1.1 Three blind spots that disable "optimize by experience"

Agent workflows are difficult to optimize systematically because they lack a standard of acceptance independent of the operator's subjective judgment. Three blind spots compound to systematically disable "optimize by feel":

1. **Salience ≠ risk**. Attention rushes toward "things that look suspicious," while the most lethal failures shine green the whole time. [Cognitive science: salience bias / WYSIATI]
2. **Inspected places yield no echo**. "Checked and found no problem" and "actually no problem" are subjectively indistinguishable; the operator never receives a signal saying "you missed something."
3. **Diligence itself is causing harm**. The first two compound: you exhaust bandwidth scrutinizing low-risk conspicuous places, miss high-risk hidden places, and gain false confidence from "having been thorough."

## 1.2 The core dilemma: self-reference

To judge "has my workflow gotten better," you must ultimately pass through an act of self-assessment, where **the measurer (you) and the thing measured (your judgment) are the same entity**. This self-referential structure is the pivot of the entire book: **any present-tense self-assessment is structurally unreliable.**

It carries one consequence often overlooked: **any present judgment about "should I continue/stop this method" also passes through this gate**. Therefore termination conditions cannot be entrusted to the present-tense you; they must be pre-committed (see §2.5).

## 1.3 Three-line proof map

The core proof of this handbook advances along three paths, converging at §1.7:

- **Line A (structural, §1.4)**: There necessarily exists a feedback loop that an automatic gatekeeper can never see, and therefore can never close.
- **Line B (operational, §1.5)**: The human, as the sensor closing that loop, suffers predictably declining effectiveness with load — the loop nominally closes but is actually open.
- **Line C (epistemic, §1.6)**: Self-calibration is impossible in principle; this in turn precisely specifies what conditions the closing action must satisfy.

## 1.4 Line A: Scan-layer distortion is unobservable to any automatic gatekeeper

The deadliest errors are buried in the Scan layer — in modeling distortion of the task's true state. Two control-theoretic lemmas compound here:

- [Control theory: Conant–Ashby Good Regulator Theorem] — Any good regulator must contain a model of the system being regulated. Viewing "workflow+human" as the regulator and "the actual need being served" as the system, control quality is capped by the fidelity of the reality model: **Scan distortion = model error, model error = regulator fails**, no matter how correct Plan/Execute are downstream.
- [Control theory: observability] — That model error is unobservable to any automatic gatekeeper. Compilers guard syntax; tests guard "stated expectations"; neither can verify "whether the expectations themselves match the real need." Formally, that distortion lies in the kernel of the observation map $\ker H$ (colloquially: it falls into the category of errors that never trigger any alarm).

> **Terminology precision**: The cost of unobservability is not "measurement noise," but **no error signal to feed back through, and therefore no way to correct from output**. We need "uncorrectable," not uncontrollable (which is dual to observability but independent).

The foundational proposition follows in two steps, with **different strengths that must not be conflated**:

- **Step one (hard, binds L1+L2+M1+M2)**: Structurally there must exist **a loop that no current automatic gatekeeper can close** — for states falling in $\ker H$, no automaton receives an error signal.
- **Step two (soft, binds empirical premise E2)**: Closing that loop **must be done by a sensor whose range covers that dimension**, and **at present the only sensor with that range is human**. The moment a new sensor covering that dimension exists, this step is overturned.

Precise formulation: an open loop is not a question of whether it will happen, but **structurally there necessarily exists a loop that current automatic gatekeepers cannot close (hard); under present conditions, that loop can only be offloaded to humans (soft)**; and that loop stays green the whole time, making it the most dangerous.

## 1.5 Line B: The human closing this loop will suffer degradation and fake closure

The human as outer-loop sensor has effective gain that declines with load: error continues to be produced but is multiplied by gain approaching zero. The loop nominally closes; substantively it is open, and the system drifts slowly while instruments display "all controlled."

The evidence must be chosen carefully: if anchored to ego depletion, the empirical foundation is weak (preregistered replications have dropped to nearly zero over the last decade; **not suitable for bearing load**). This handbook instead anchors to [cognitive science: vigilance decrement] — in sustained monitoring tasks, detection rate reliably declines over time, a classically well-evidenced finding. **The strength of premise E3 is tied to the evidentiary choice here**.

The solution is not "try harder" (bandwidth averaged across more targets must decline), but **wager**: concentrate limited bandwidth on **dual-high nodes** — simultaneously "producing output that feeds the next Scan" (high coupling) and "their distortion is invisible to the inner loop" (high unobservability) — leaving the rest to tireless cheap sensors like compilers and tests. **Close only the loop only humans can close.**

Make "wager not average" into something auditable post hoc, using ratios not differences:

$$L = \frac{R_L}{\phi}$$

where $R_L$ is the true risk proportion covered by attention, and $\phi$ is **subjective estimate of wager coverage**. Three regimes: $L>1$ wagered correctly (risk proportion outpaces coverage proportion); $L\approx1$ rubber stamp (uncorrelated with risk, includes expensive full coverage); $L<1$ **salience trap** (only watching places where nothing breaks, diligence backfires).

Reading $L$ requires clarity on three points: (1) it is a **distributed/periodic aggregated quantity, not a single-instance score**, readable only by regime, not linearly; (2) the divergence at $\phi\to0$ is **$L$ unidentifiable in single-instance conditions**, requiring periodic aggregation before reading; (3) $L$ is essentially a **resolution metric** — this thread returns in §2.4.

$L<1$ is an attractor: high-risk nodes precisely have low salience appearance. This is Line B's final verdict — not a problem "harder work" solves, but structural. Yet it harbors a deeper problem: **Can you see yourself falling into this attractor?**

## 1.6 Line C: Your wager intuition is biased, and self-calibration is impossible

No. [Cognitive science: bias blind spot] shows humans can recognize others' biases but systematically underestimate their own. You cannot discover through introspection that you have fallen into the $L<1$ attractor; correction must be outsourced.

But outsource to whom? The sensor calibrating attention and the subject being calibrated are the same entity; zero range difference; **self-calibration is impossible in principle**. "Only" must carry a qualifier: spatially *another person* often shares your salience bias toward the same model, unable to calibrate your Scan; but *a different model / adversarial role* has different failure modes and genuine range difference, expanding coverage **on a different axis** (see Appendix D).

> **The only outer loop capable of calibrating "your judgment of the same reality model" is not spatially another person, but temporally the future version of you** — the latter knows where things went wrong and is not held hostage by present-moment salience bias.

The reason outsourcing must land at the moment of judgment: [cognitive science: hindsight bias] makes post hoc recall systematically rewrite itself as "I knew all along," and [cognitive science: memory is reconstruction not retrieval] means the decision-moment mental state is not encoded in traces and decays rapidly. Therefore the calibration signal **must be captured at the moment of judgment** — post-hoc post-writing is as good as not writing.

## 1.7 Three lines converge

Line A requires **human participation** (no automatic gatekeeper can ever cover that dimension); Line B requires **wagering not averaging** (humans' effective bandwidth is finite and declines); Line C requires **capturing the signal at the moment of judgment** (post hoc recall is systematically distorted). The intersection of all three precisely specifies the form of action that closes that loop — this is what Part Two operationalizes into the instantaneous prediction wager.

## 1.8 Re-attribution: observability is just metacognition's shadow

Control theory frames the problem as "the subject cannot perceive certain states" (observability). But the real culprit is elsewhere: even if you had all states before your eyes, the problem would persist — because your second-order judgment about "how well do I perceive?" is **itself** systematically distorted and inaccessible to introspection. This is the realm of [cognitive science: metacognition]. **Instantaneous prediction wagers and "outsourcing to your future self" are essentially a metacognitive scaffold — they externalize unreliable self-monitoring into a trace settable by reality.**

This yields a pair of results that directly dictate feasibility: [Kahneman–Klein conditions for intuitive expertise] and [Ericsson deliberate practice] both require **high-fidelity, fast-feedback** environments, while Agent workflows are precisely **low-fidelity, delayed, and censored**. Double edge: first, **this explains why this method is necessary** (you inhabit an environment where intuition cannot self-correct); second, **it warns that this method's own feedback may be too slow and noisy** to develop true expertise.

**Direct naming consequence**: Since the environment structurally fails to train true expertise, the calibration curve in §2.4 is **almost guaranteed only to show "no degradation," rarely showing "progress."** Therefore it is called a **degeneration-prevention mirror**, not a "growth mirror" — name and substance match.

---

# Part Two  How: Operations section

## 2.1 SPEF Four-Stage SOP

Not "how do we make AI err less" (unachievable), but "**how do we keep this workflow stably closed?**" Split the work into four segments, each with its own job; errors are locatable:

| Stage | Action | Boundary (what not to do) |
|---|---|---|
| **Scan** | Read the system/task's actual state accurately | Only read reality; do not propose solutions |
| **Plan** | Devise a solution based on the scan | Propose intent only; do not execute |
| **Execute** | Carry out the solution | Faithfully implement; do not inject judgment |
| **Feedback** | Verify; close the loop | **Requires human participation** |

**Ideal configuration**: S/P/E carried by three agents; F carried by a human.

**Operational notes**:

- Four stages are **functional division, not temporal sequence**. Local loops are permitted, but macroscopically you must always be able to identify "which function are we in."
- **The S/P junction is a high-distortion hotbed**: A person doing both scan and plan will smuggle "I think we should do this" (Plan's untested assumption) into "reality is this" (Scan's reality model). So S/P entanglement is both high-coupling and high-unobservability, a textbook **dual-high node** — the place to wager (see §2.3).
- **Core principle**: system correctness is not guaranteed by "one step being right," but by "this loop being able to close stably."

> Argumentative basis: Line A (§1.4) establishes that F requires humans; §1.7's three-line convergence specifies F's exact action.

## 2.2 Instantaneous Prediction Wager (the core move)

Operationalize the three-line convergence into an instantaneous act:

> At the moment you are wagering that a high-risk point "should be fine," write one sentence:
> **"I predict this is correct because ___"**
> Write it as an unfalsifiable hardball statement, and before you see the result, timestamp-lock it (e.g., git commit).

Its value comes from **two independent channels**, with different load-bearing capacity and different corruption resistance; **you must keep them separate** (this segregation is decisive when combating confabulation, see §3.2):

- **Channel One: prediction—settlement**. Write a falsifiable prediction, lock it before results, score it against reality afterward, and you care about the score — this gathers every active ingredient from [calibration training (Brier, Tetlock)]. **It depends only on the wager's existence and falsifiability, not on whether "because ___" is the true cause.** Reality settles it; confabulation cannot corrupt it.
- **Channel Two: self-explanation**. Writing "because" forces [self-explanation effect] — externalizing your mental model before seeing results inherently exposes its cracks. **It requires your stated reason to be genuinely related to your true model; it fails when confabulation is severe.**

**Graceful degradation**: Even in the extreme where introspection is wholly unreliable, Channel One still functions as a pure prediction scorer — you just lose the self-explanation bonus. This is why load should be shifted toward Channel One.

> ⚠️ **Do not** use "two consistent 'becauses' to catch confabulation" — people can fluently generate internally coherent but false reasons, which rewards the most glib. The real value of two "becauses" lies in **expanding falsifiability surface and improving resolution** (see §2.4), not in resisting confabulation.

## 2.3 Wagering criteria: wager only dual-high nodes

Operating rules for breaking the salience trap:

- **What to wager on**: dual-high nodes = high coupling (output feeds next Scan) × high unobservability (distortion is invisible to inner loop). The S/P junction is the canonical example.
- **What not to wager on**: outsource to compilers/tests/type checkers (tireless cheap sensors). **Do not average.**
- **Self-check with L three-regime rule** (read after period aggregation, not per-instance):
  - $L>1$　wagered correctly — limited bandwidth truly concentrated on high-risk.
  - $L\approx1$　rubber stamp — independent of risk, includes "full-coverage expensive averaging."
  - $L<1$　**salience trap** — only watching places where nothing breaks; diligence backfires. An attractor requiring vigilance.

**Shallow/deep triage** (see Appendix B): wager intuition heavily on shallow problems (losses are cheap); move deep problems to scanning early (deep bugs are not salient; intuition has lowest hit rate). **Most dangerous case**: scanning takes far longer than predicted, yet probability does not rise → bug is outside the boundary → jump out and rescan the boundary assumptions themselves.

> Argumentative basis: Line B (§1.5).

## 2.4 Verification protocol: dead/live variable separation

Methods must submit to their own declared standard. Treat failures as **timestamped event streams** and permit statistics to enter — but only the **analysis end**, not the **intake end**.

**Three variable types separated**:

| Class | Content | Status |
|---|---|---|
| Dead | Failure timestamp $t_i$, commit metadata, command history | Auto-logged, zero judgment |
| Frozen before use | `is_fault` (per rule $R$), `is_seen` (reducible to git) | Become dead after rules are locked |
| Live | Instantaneous wager $b_i$ + confidence three-tier | Subject-produced, bearing load |

**Process notes**: Live wagers **timestamp-lock before results are visible**, making "unfalsifiable post hoc" enforced by commit order rather than self-discipline.

**Output metrics (triggers only, not dashboards)**:

| Metric | Subject | Period | Action trigger |
|---|---|---|---|
| $N(t)=a(1-e^{-bt})$ | System | Month | Detection rate >90% → can close; $b$ low and far from target → cut losses, rescan |
| $CV=\sigma(\Delta t)/\mu(\Delta t)$ | System | Month | Jump after change → revert that change |
| Hawkes $\hat\alpha$ | System | Month | Significantly $>0$ → stop patching, rescan corrupted area |
| Judgment calibration curve | **Subject** | Quarter/year | High-confidence hit rate declining → overconfident; raise scrutiny gain |

**Three corrections to the calibration curve** (without them it systematically lies, claiming you are better calibrated than you are):

1. **Censoring bias → one-way use**. Worst errors lurk longest, surface latest, so "wagered correctly" is right-censored and optimistically biased. Treat the curve as **a one-way alarm trusting only bad news**: *hit rate declining* is a true signal; *hit rate holding* cannot ground the claim "I am well-calibrated"; weight by survival time (errors exposed later score heavier penalties).
2. **Calibration ≠ resolution**. [Brier's Murphy three-decomposition]: a predictor that always reports base rates can be perfectly calibrated and utterly useless. Add **resolution's second axis** — $L$ (§2.3) is its entry point. Writing two independent "becauses" improves resolution (value lies in expanding falsifiability, not resisting confabulation).
3. **Difficulty drift → deduct**. [Hard-easy effect]: "curve moves toward the diagonal" may just mean the task is getting easier. Disentangle task-difficulty drift from judgment improvement.

**Do not extract motivation fuel from calibration signals** (self-reference trap): positive reinforcement of an already-declared-uninformative signal ("hit rate holding") rebuilds the self-deception it was meant to eliminate. The right move is to hang motivation fuel elsewhere: **current, non-censored throughput**.

- Dead failure stream: this month's ledger located $X$ failures (instruments are working).
- Wager-settlement events: this week $Y$ wagers resolved; $Z$ of them changed my original judgment on the spot.

This is **throughput-level positive feedback** ("the system is producing"), not **self-improvement-level** ("I got better" — the latter is structurally slow and censored).

## 2.5 Red lines and termination conditions (freeze before start)

**Before you start, pay a one-time sunk cost locking three items simultaneously; retroactive adjustment is forbidden**:

1. **Failure definition rule $R$** — nail down "does this count as a failure," **forbidden to reverse-engineer $R$ while looking at data**.
2. **Self-termination trigger (kill-switch)** — pre-commit a set of stop conditions. Must be locked now, before seeing any data (reason: §1.2, any "I think this is not worth doing" passes through the self-reference gate).
3. **Honesty collapse trigger** — the moment you detect backdated timestamps or post-hoc $R$ adjustments, declare E5 has failed, **immediately terminate this method**.

**Pre-committed termination line**:

> If, by pre-committed month $X$, $N(t)$'s $b$ is still below threshold (even "stop-loss tool" this real component does not materialize) **and** you cannot find in the ledger a single failure "the present me would have missed, yet accounting alone recovered" — then terminate. Both conditions satisfied means neither real tool value nor anti-self-deception win; continuation is ritual.

**The only empirical judgment available** (fit one month's ledger to $N(t)$):

- **Converges** → stop-loss tool materializes; this method contains a real component you cannot generate by feel. Worth doing.
- **Does not converge** (Agent keeps burying new mines; $a$ drifts) → degrades to pure translation; value drops to "anti-self-deception + experience transfer." Downgrade speed expectations accordingly.

> An honest methodology contains its own termination conditions — otherwise it exempts itself from the very standard of "not granting itself immunity" it claims to uphold.

---

# Part Three  Boundaries and gaps (honest declaration)

## 3.1 Scope boundaries

- **B1**: Applies only to workflows where "critical states are unobservable to automatic sensors."
- **B2**: Applies only where human bandwidth is finite and declines with load.
- **B3**: Makes no claim of portability (wager thresholds, retrospective periods, $R$, kill-switch $X$ and threshold all depend on the specific workflow).
- **B4**: Any conclusion marked "current" can be overturned by future mechanisms ("only humans can close it" is this type; binds E2).

## 3.2 Two unproofable gaps

**Gap R1: Honest recursion is bottomless**. Downstream conclusions conditionally depend on E5 (user honest record-keeping). Auditing honesty requires a perspective more honest than the auditee — infinite regress. Mitigation: wherever objective traces are available, swap them in ("did you look?" → git; "was it effective?" → failure rate; wagers → pre-result timestamps); unmitigated remainder ultimately bears on E5. **Declared unproofable.**

**Gap R2: Confabulation, deeper than R1**. [Confabulation / Nisbett–Wilson] reveals that people lack reliable introspective access to the true grounds of their judgments. So "because ___" can be **sincere yet false**. R1 assumes "honesty can save us"; R2 shows honesty is insufficient.

Yet R2's damage is precisely localized (using §2.2's channel segregation):

- **It corrupts Channel Two**: when confabulation is severe, the "because" drifts from your true model, "exposing cracks" fails.
- **It cannot corrupt Channel One**: Channel One depends on existence, falsifiability, and reality settlement; it is indifferent to whether "because" is the true cause.

Therefore in the extreme, instantaneous prediction wagers **degrade gracefully to a pure prediction scorer**: still effective, losing only the self-explanation bonus. This handbook does not pretend to solve R2, but it locates exactly what it can and cannot corrupt, and accordingly shifts load toward Channel One.

## 3.3 What this method actually establishes

Strictly: this handbook establishes "**if empirical premises hold, then this method improves efficiency**," not "this method improves efficiency." The empirical truth of premises remains untouched by logic.

- "Do *I right now* judge accurately?" — flatly denied (passes the self-reference gate).
- "Do *I now* judge better than *I in the past*?" — not denied, but converted into a slowly-accumulating empirical wager. The degeneration-prevention mirror measures precisely this **difference**: your future self cannot judge your present self, but your future self can use reality-settled wagers to score how often your past self was right. Layered with §1.8's caveat: even this difference, given low-fidelity environment, is likelier to display "no degradation" than "progress."

> It cannot provide objective proof "you have progressed" (it does not exist in principle); what it can do is make **every act of self-deception more expensive, harder, and more easily punctured by future reality**. It does not eliminate human illusion; it appends an **overdue but unchallengeable bill**.

**Maximum real risk**: terminating this method will very likely not be a logical error, but **discipline drift** — all cost up front (daily notes, record-keeping), all benefit later. The most likely outcome is not "disproof," but stopping note-taking after a few weeks. Two sections directly address it: motivation is fueled by current, non-censored throughput (§2.4), and an honest termination condition is pre-locked (§2.5), making "stopping" a dignified, pre-scheduled option rather than silent abandonment. **On the witness stand sits the human, not the logic.**

---

# Appendices

## Appendix A: Strength accounting table

**Strength legend**: hard = depends only on borrowed theorems; conditionally hard = theorem + declared soft premise (if premise true, conclusion hard); soft = pure empirical. **Anything crossing an M bridge reaches at most "conditionally hard."** Soft premises carry robustness markers: **robust** = replication solid; **fragile** = replication uncertain, unsuitable for load.

**Lemmas (control theory)**: L1 observability ($x\in\ker H\Rightarrow$ uncorrectable); L2 Conant–Ashby (good regulator must model); L3 timescale separation (across cascade layers, not within single S/P/E/F pass).

**Mapping premises (soft bridges)**: M1 (Scan distortion ≈ $\ker H$ component); M2 ("workflow+human" = regulator); M3 (calibration cascade is separably timescaled). All unformalized; declared soft.

**Empirical premises (cognitive science)**: E1 unobservability [robust]; E2 current only sensor is human [robust, marked "current"]; E3 gain declines with load [choose vigilance (robust), not ego depletion (fragile)]; E4 decision-moment mental state not encoded in traces [robust]; E5 user honest record-keeping [unproofable, carries R1].

| Proposition | Depends on | Strength | Falsification point |
|---|---|---|---|
| P1 loop must exist that auto gatekeepers cannot close | L1+L2+M1+M2 | **conditionally hard** (excludes E2) | Auto mechanism verifies "expectations match reality" emerges |
| P2 loop currently only loadable on humans | P1+E2 | conditionally hard (stacks E2) | New sensor covering that dimension emerges |
| P3 high load makes human-closed loop fake-close | E3+L1+M1 | soft-conditional | Error correction rate does not drop under load |
| P4 must wager not average | P2+P3+B2 | soft-conditional | Averaging failure-drift ≤ wagering |
| P5 self-calibration impossible; outer loop must be time | L1+M1+B3 | conditionally hard | Post hoc recall reliably reconstructs decision state |
| P6 signal must be captured at moment of judgment | P5+E4 | conditionally hard | Post hoc recall can reliably reconstruct it |
| P7 instantaneous prediction wager (operationalization) | P4+P6 | conditionally hard, executable | Ledger long-term shows no improvement |
| P8 strategy-change frequency must be below signal-settling | L3+M3+P3 | conditionally hard | Frequent strategy changes do not increase failure-rate variance |
| P9 failure timings computable objectively (analysis end) | timestamps | **hard (analysis end)** | Input completeness still binds E5 |

## Appendix B: Debugging scenarios grounded (brute force is theory made concrete)

| Brute force | Framework maps to | Mechanism |
|---|---|---|
| Add logging/breakpoints | Install sensor on unobserved state | Drag $s^\perp\in\ker H$ into observable |
| Comment out irrelevant code | Binary shrink scan boundary | Full comment, bug persists = bug outside boundary |
| Predict branches | Instantaneous prediction wager (Channel One primary) | Wager before results; bet-wrong exposes mental-model cracks |
| Draw process diagram | Externalize and reconstruct Scan layer | Force brain's distorted model into reviewable paper form |

## Appendix C: Four-level cascade and organizational map

Bandwidth decreases per level; period lengthens per level; dimension rises per level: compiler/tests (seconds) → ledger check $\theta$ (weeks) → reclassify (quarters) → market/user data (versions). **Throughline criterion: any timestampable sensor must be immune to salience** (compiler/ledger/behavior data are timestampable; intuition/forums are diagnosis hints only). Organizational hierarchy (junior → exec) nearly perfectly mirrors this speed chain; solo workflows rotate through four roles in time.

## Appendix D: Variance expansion

[Control theory: Ashby's Law of Requisite Variety] — controller variance must ≥ disturbance variance. Responses: parallel multimodels (sensor range in series); adversarial assignment (assign one side to be red team, explicitly harass its weak points, not "what about this plan" — that gets false consensus). Spatial multiaxial expansion is **coverage dimensionality**; time-domain outer-loop calibration of **same judgment** (§1.6) is complementary, not conflicting.

## Appendix E: External theoretical anchors (formal references forthcoming)

| Purpose | Discipline | Borrowed theory/effect | Load status |
|---|---|---|---|
| §1.4 Reality model error undetectable by automation | Control theory | Observability | Theorem hard; conditionally hard past M1 |
| §1.4 Scan distortion means control must fail | Control theory | Conant–Ashby | Theorem hard; conditionally hard past M2 |
| §1.5 Gain declines with load (E3) | Cognitive science | Vigilance decrement (**adopted**) | Soft/robust |
| §1.5 Cautionary example | Cognitive science | Ego depletion (**rejected**) | Soft/fragile |
| §1.1 Salience ≠ risk | Cognitive science | Salience bias / WYSIATI | Soft/robust |
| §1.6 Cannot see your own bias | Cognitive science | Bias blind spot | Soft/robust |
| §1.6 Post hoc recall unreliable | Cognitive science | Hindsight bias, memory reconstruction | Soft/robust |
| §2.2 Wager Channel One | Cognitive science | Calibration training (Brier, Tetlock) | Soft/robust (confabulation does not affect) |
| §2.2 Wager Channel Two | Cognitive science | Self-explanation effect | Soft/robust (fails when confabulation severe) |
| §1.8 Real problem is metacognition | Cognitive science | Metacognition (Nelson–Narens, Flavell, Dunlosky) | More precise than observability |
| §1.8 Can true expertise be trained | Cognitive science | Kahneman–Klein; Ericsson | Double edge: proves necessity; warns feedback too weak |
| §2.4 Calibration ≠ resolution | Cognitive science | Brier's Murphy decomposition | Adds second axis to degeneration mirror |
| §2.4 Curve approach may be task-easing | Cognitive science | Hard-easy effect | Second source of optimistic bias besides censoring |
| §3.2 Sincere but false reasoning | Cognitive science | Confabulation / Nisbett–Wilson | R1's subcategory gap; corrupts only Channel Two |
| §1.6 / Appendix D Coverage expansion | Control theory | Ashby's Law of Requisite Variety | Theorem hard; hard under coverage use |
| Appendix A Timescale separation | Control theory | Cascade timescale separation | Theorem hard; conditionally hard past M3 |

---

*This handbook uses control theory to illuminate its own structure, cognitive science to bear its weight, and borrows neither's authority to endorse conclusions. All "hard" comes from cited theorems; all "soft" from explicitly declared premises. To refute: cite a line.*

> **Source**: This handbook is reorganized from SPEF_paper_v6.md, preserving all argumentative main lines and load dependencies, adding Part Two operations and introduction. Proof structure, proposition strength, and appendix dependencies are substantively unchanged.
