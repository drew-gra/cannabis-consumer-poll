# The Cannabis Consumer Poll

In 2023, I created The Cannabis Consumer Poll as an effort to influence federal policy on cannabis access. This coincided with my work as head of communications at an international cannabis telehealth company.

I oversaw the pollster until July 2026, writing the questionnaires, stress-testing the results, and serving as on-record spox. This public repo reflects that work, which remains ongoing.

In April, the federal government for the first time acknowledged the plant has medical use, a major milestone in the $47b legal cannabis market that will make future efforts to improve access more effective.

---

## 🗂️ Data Access

### For Immediate Use
| File | Purpose | Best For |
|------|---------|----------|
| [`latest-poll.json`](latest-poll.json) | Most recent poll data | Automated feeds, APIs |
| [`latest-poll.txt`](latest-poll.txt) | Most recent poll data | Human eyes |
| [`polls/poll_json_YYYY_MM_DD.json`](#) | Poll archive naming schema | Automated feeds, APIs |
| [`polls/poll_txt_YYYY_MM_DD.txt`](#) | Poll archive naming schema | Human eyes |

### Machine-Readable Feed
```
https://raw.githubusercontent.com/drew-gra/cannabis-consumer-poll/main/latest-poll.json
```
*This URL always contains the most current polling data in JSON format*

### API Integration Example
```javascript
// Fetch the latest Cannabis Consumer Poll data
fetch('https://raw.githubusercontent.com/drew-gra/cannabis-consumer-poll/main/latest-poll.json')
  .then(response => response.json())
  .then(data => {
    console.log('Latest poll:', data.poll_info.title);
    console.log('Sample size:', data.poll_info.sample_size);
  });
```

---

## 📊 Data Structure

The JSON format follows a consistent schema across all polls. The schema supports single-question flash polls, multi-question omnibus polls, conditional questions, and other specialized formats.

### Basic Structure
```json
{
  "poll_info": {
    "poll_id": "unique-identifier",
    "title": "Poll title",
    "date_conducted": "Survey period",
    "sample_size": 000,
    "methodology": "Survey method description"
  },
  "questions": [
    {
      "question_id": "short_name",
      "question_text": "Full question as asked",
      "response_type": "multiple_choice",
      "results": {
        "response_1": 00,
        "response_2": 00,
        "response_3": 00,
        "response_4": 00
      }
    }
  ],
  "demographics": {
    "population": "Description of target population",
    "sample_method": "How sample was sourced and selected",
    "verification": "Additional verification or qualification criteria"
  },
  "notes": {
    "margin_of_error": "±X.X%",
    "confidence_level": "95%",
    "z_score": "1.96"
  }
}
```

### Response Types

The `response_type` field indicates how respondents answered:

- **`multiple_choice`** – Single-select question with mutually exclusive options. Results show respondent counts for each option.
- **`multiple_select`** – Respondents could choose multiple options. Results show respondent counts for each option (note: totals may exceed sample size).
- **`matrix_ranking`** – Multiple items rated on the same scale. Results organized by item with counts for each scale level.
- **`redacted`** – Question excluded from public release. Used when data was collected under media partnership exclusivity agreements. The `question_text` field explains the partnership.

> **A note on `results` values.** Depending on the release, the values in `results` are either integer **percentages** (they sum to ~100) or raw **response counts** (they sum to the question's respondent total). Detect which by summing the values, and normalize to percentages when they don't already sum to 100.

### Conditional Questions

Some questions are asked only to a subset of respondents based on their answers to a previous question.

Conditional questions include:
- **`question_note`** field explaining the condition
- **`respondents_who_answered`** field showing how many of the total sample answered this question

Example:
```json
{
  "question_id": "tax_alternative_options_4b",
  "question_text": "Under that scenario, which of the following would you use instead?",
  "question_part": "4B",
  "question_note": "Conditional question - asked only to respondents who answered 'Yes' or 'Maybe' to Question 4A",
  "response_type": "multiple_select",
  "respondents_who_answered": 303,
  "results": { ... }
}
```

### Multi-Part Questions

Questions that are logically connected are labeled with a `question_part` field:

- **`question_part: "4A"`** indicates this is the first part of a multi-part question
- **`question_part: "4B"`** indicates this is the second part
- Numbering continues as needed (4C, 4D, etc.)

### Media Partnership Redactions

Questions asked under exclusive agreements with media partners are included in the public feed with redaction notices. This signals:
1. **Data exists** but is exclusively licensed to specific outlets
2. **Partnership transparency** – which organization has exclusivity
3. **Archive completeness** – the full survey structure is documented

Example:
```json
{
  "question_id": "question_6_redacted",
  "question_text": "REDACTED - This question was asked in partnership with Cultivated Media and is exclusively available to that partner.",
  "response_type": "redacted",
  "results": null
}
```

### Omnibus Polls

Omnibus polls contain multiple questions on different topics in a single survey. All questions share:
- Same `poll_info` (date conducted, sample size, methodology)
- Same `notes` (margin of error, confidence level)

Individual questions may have different respondent counts if some were conditional or had different response rates.

---

## 📋 Methodology & Quality

- **Population:** Representative sample of cannabis consumers in state-legal markets
- **Sampling:** Targeted sampling from verified consumer data — independent providers plus first-party data — for representative coverage across demographics and consumption patterns
- **Data Collection:** Digital surveys distributed via a secure, mobile-optimized online platform
- **Quality Control:** Multi-point validation including consumption verification, attention checks, incomplete-response removal, and statistical outlier detection
- **Reporting:** Margin of error and 95% confidence level (z = 1.96) reported for every release

---

## 📅 Poll Formats

**Flash Polls:** One-question polls with no cross-tabs
**Omnibus Polls:** Multi-question polls covering multiple topics in a single survey
**Trackers and Indexes:** Custom polls done in conjunction with media partners

---

## 📖 Use & Attribution

This repository is published as a public record. © Bread & Law, LLC — see [LICENSE](license) for terms.

If you reference the data, please attribute it:

- **Credit:** "Data from The Cannabis Consumer Poll"
- **Link:** https://www.breadandlaw.com/cannabis-consumer-poll
- **Citation:** The Cannabis Consumer Poll, [Month Year]. Retrieved from https://github.com/drew-gra/cannabis-consumer-poll

For editorial use, note the sample size and margin of error, and link to the applicable TXT file where appropriate.

For use permissions, licensing, or media inquiries: **Andrew Graham**, andrew@breadandlaw.com.

---

## 🔄 Repository

- **Updates:** New polls are added as they are released.
- **Archive:** All historical releases remain available for trend analysis, longitudinal research, and background context.
- **Notifications:** Watch this repository for new-poll alerts, or follow [@drew-gra](https://github.com/drew-gra).

---

## ⚖️ Notes

- **Privacy:** All responses are collected anonymously.
- **Accuracy:** Data is provided for informational purposes; users are responsible for their own verification.

---

**Maintained by:** Andrew Graham · [Bread & Law](https://www.breadandlaw.com) · [@drew-gra](https://github.com/drew-gra)
