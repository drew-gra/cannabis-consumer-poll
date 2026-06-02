# Cannabis Consumer Party Affiliation Benchmark

## What this is

A rolling comparison of the political party affiliation of cannabis consumers against the general adult population of the same states.

## Key finding

There is no statistically significant difference in partisan affiliation between cannabis consumers and the general population of the 31 states where the Cannabis Consumer Poll operates.

| Group | Republican | Democrat | Other / Unaffiliated |
|---|---|---|---|
| **CCP pooled (n = 3,099)** | 27.4% | 33.8% | 38.8% |
| **CES 2024, same 31 states (n = 46,069)** | 28.6% | 33.6% | 37.8% |
| **Δ (CCP − CES)** | −1.2 | +0.2 | +1.0 |

All deltas fall within the pooled margin of error (±1.76%). The 31 CCP states are only ~1.5 points more Democratic than the nation as a whole, so geography explains very little of any surface-level differences.

## Context paragraph

> Across six waves of Cannabis Consumer Poll (CCP) data spanning May 2025 through May 2026 (combined n = 3,099), the political affiliation of cannabis consumers closely mirrors that of the general adult population in the same 31 states. Cannabis consumers identify as Republican (27.4%), Democrat (33.8%), and Other or unaffiliated (38.8%), compared to 28.6%, 33.6%, and 37.8% respectively among the general population of those states, as measured by the 2024 Cooperative Election Study. The differences — about a point on each axis — fall within the pooled margin of error and are not statistically significant. Notably, the 31-state CCP footprint is only 1.5 points more Democratic than the nation as a whole, meaning geography explains very little of any surface-level differences between cannabis consumers and Americans broadly. To the extent cannabis consumers are distinctive at all, it is in a modest tilt away from both major parties and toward unaffiliated status — a pattern consistent with the record-high 45% of Americans who identified as political independents nationally in 2025.

## Source polls

| Wave | Poll ID | Date | n | MOE | R | D | Other |
|---|---|---|---|---|---|---|---|
| 2Q25 OM | `nuggmd-q2-omnibus-2025-06-03` | May 19 – Jun 3, 2025 | 602 | ±3.99% | 28.7% | 38.9% | 32.4% |
| 3Q25 OM | `nuggmd-q3-omnibus-2025-09-24` | Aug 29 – Sep 24, 2025 | 574 | ±4.09% | 28.4% | 36.2% | 35.4% |
| 4Q25 OM | `nuggmd-q4-omnibus-2025-12-14` | Dec 4 – Dec 14, 2025 | 448 | ±4.63% | 24.6% | 33.3% | 42.2% |
| S3 EO | `nuggmd-rescheduling-legalization-2026-01-28` | Jan 8 – Jan 28, 2026 | 457 | ±4.59% | 24.2% | 34.5% | 41.3% |
| 1Q26 OM | `nuggmd-q1-omnibus-2026-04-13` | Mar 12 – Apr 13, 2026 | 534 | ±4.24% | 29.0% | 32.8% | 38.2% |
| S3 FO | `nuggmd-rescheduling-legalization-2026-05-26` | May 7 – May 26, 2026 | 484 | ±4.45% | 29.5% | 27.3% | 43.2% |

## General-population baseline

**Source:** Cooperative Election Study (CES) 2024 Common Content
**Access:** [Harvard Dataverse](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/X11EP6)
**Sample:** 60,000 U.S. adults (46,069 weighted in 31 CCP states)
**Fielded:** September – November 2024
**Variables used:** `pid3` (party ID), `inputstate` (state FIPS), `commonweight` (survey weight)

### CES results

| Scope | Republican | Democrat | Other/Ind |
|---|---|---|---|
| 31 CCP states (weighted) | 28.6% | 33.6% | 37.8% |
| National (weighted) | 29.7% | 32.1% | 38.2% |

Geographic skew between the 31-state composite and the nation is ~1.5 points on the Democratic side.

## Question wording

**CCP:** "Which of the following best describes your political affiliation?" → Republican / Democrat / Other or Something Else

**CES pid3:** "Generally speaking, do you think of yourself as a...?" → Democrat / Republican / Independent / Other / Not Sure

## How to update

When a new CCP poll includes the affiliation question:
1. Add a new entry to the `waves` array in `benchmark.json`
2. Recalculate `pooled_estimate` (simple average of all wave percentages; combined n is sum of all sample sizes)
3. Recalculate `pooled_margin_of_error` as 1.96 × √(0.5 × 0.5 / combined_n)
4. Update `comparison.deltas` (pooled minus CES baseline)
5. Update `context.paragraph` if the interpretation changes
6. Update `benchmark_info.last_updated`

## Caveats

- CCP uses "Other" or "Something Else" while CES uses "Independent/Other/Not Sure." This may affect response distribution at the margins.
- CES 2024 was fielded September–November 2024. CCP waves in this benchmark span the dates listed in the source polls table above. Party ID is slow-moving but not static.
- CCP does not ask a partisan leaner follow-up, which is where most actionable political signal resides.

## License

Data and analysis by Bread & Law LLC for NuggMD. CES data is publicly available under the terms of the Harvard Dataverse.
