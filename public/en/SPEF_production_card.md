# SPEF Production Card · Text Quick-Reference

> Tape this to your monitor during production. When unsure why you're doing something, consult the Handbook section referenced below.
> **One line**: The most dangerous errors never alarm; present self-assessment is unreliable; judgment must be externalized into falsifiable, timestamped traces settled by reality.

---

## 1. SPEF Four-Stage Boundaries  [Handbook §2.1]

| Stage | Do this | **Do not do this** |
|---|---|---|
| **Scan** | Read actual state accurately | Only read reality, do not propose solutions |
| **Plan** | Design solution based on scan | State intent only, do not execute |
| **Execute** | Carry out the solution | Implement faithfully, do not inject judgment |
| **Feedback** | Verify, close loop | **Requires human participation** |

- Ideal config: S/P/E to agents; **F to human**.
- Core rule: Correctness does not depend on "one step succeeds," it depends on "**this loop closes stably.**"
- **Close only the loop only humans can close**; outsource the rest to compiler/tests.
- S/P junction = dual-high node (high coupling × high unobservability) = best place to wager.

---

## 2. Instantaneous Prediction Wager Template  [Handbook §2.2]

> At the moment you are wagering on a high-risk point "should be fine," write:
>
> **"I predict this is correct because ___"**
>
> Write it unfalsifiable and hardball → **timestamp-lock before seeing results** (git commit).

**Confidence three-tier**: 🟢 high / 🟡 medium / 🔴 low (log with the wager)

**Two channels (different load-capacity; keep separate)**:

- **Channel One prediction—settlement**: Depends only on "exists + falsifiable + reality settles." Confabulation cannot corrupt it → **primary load-bearer**.
- **Channel Two "because" text**: Self-explanation exposes cracks. Confabulation corrupts it when severe → bonus value.

⚠️ Do not use "two consistent 'becauses' to catch confabulation" (rewards the most fluent). Two "becauses" serve to **expand falsifiability and improve resolution**.

---

## 3. Wagering Criterion L Three-Regime  [Handbook §2.3]

$$L = \dfrac{R_L\ (\text{true risk proportion covered})}{\phi\ (\text{subjective wager coverage estimate})}$$

| Regime | Meaning | Action |
|---|---|---|
| **L > 1** | Wagered correctly, bandwidth on high-risk | Hold |
| **L ≈ 1** | Rubber stamp / expensive averaging | Stop averaging, refocus |
| **L < 1** | **Salience trap** (only watching safe places) | Alert: diligence backfiring |

- Read by **regime**, not by linear value; **aggregate over periods**, not per-instance.
- Shallow/deep triage: heavy wager on shallow (cost is cheap); move deep to scanning (deep bugs are not salient).
- **Most dangerous signal**: scan takes far longer than predicted, probability does not rise → bug outside boundary → jump out and rescan boundary assumptions.

---

## 4. Red Lines and Termination Conditions  [Handbook §2.5]

**Lock three items before start; retroactive change forbidden**:

1. **Failure rule R** — nail "counts as a failure," forbidden to reverse-engineer R from data.
2. **Kill-switch** — pre-commit stop conditions (end power does not go to future-you).
3. **Honesty-collapse trigger** — timestamp backdating or post-hoc R adjustment → declare E5 failed → **terminate immediately**.

**Pre-committed termination line**: By month $X$, $N(t)$'s $b$ still below threshold **and** cannot find "past-me would have missed, accounting alone recovered" ledger entry → terminate.

**Do not extract motivation from calibration curve**: "hit rate holding" is right-censored, uninformative; positive reinforcement rebuilds self-deception.
**Hang motivation on current throughput instead**: This month ledger located $X$ failures; this week $Y$ wagers resolved, $Z$ changed my judgment on spot.

---

*It gives no proof "you improved"; it appends an overdue but unchallengeable bill to every act of self-deception. On the witness stand sits the human, not the logic.*
