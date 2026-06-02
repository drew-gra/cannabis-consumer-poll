# `_to_publish/` — local staging for upcoming polls

This folder is a **local-only workspace**. Drop the raw, full data pull for an
upcoming poll here (Typeform CSV exports, draft TXT, working notes, anything),
work on it, and it will **never reach GitHub**.

Everything in this folder is gitignored except this README. The published repo
only ever contains the structured release files (see below).

## Why it stays local

Raw exports contain data that must not be published:

- **Media-partner questions** (e.g. Marijuana Moment, Cultivated) that are
  redacted in public releases.
- **Political-affiliation cross-tabs**, which feed the party-affiliation
  benchmark but are not published at the question level.
- Respondent-level rows and timestamps.

## Workflow

1. Save the raw pull(s) for the upcoming poll into this folder.
2. Convert each into the public schema, writing to the repo root:
   - `polls/poll_json_YYYY_MM_DD.json` + `polls/poll_txt_YYYY_MM_DD.txt`
     (date = field-period **end date**)
   - refresh `latest-poll.json` / `latest-poll.txt` from the most recent poll
   - redact media-partner questions in place (`question_N_redacted`)
   - MOE = `(1/√n × 1.96) / 2`
3. If a poll has the affiliation question, add a wave to
   `benchmarks/party-affiliation/` and recompute the pooled estimate.
4. Commit and push the **release files only** — never this folder's contents.
   Pushing to `main` triggers the NuggMD Newsroom webhook.
