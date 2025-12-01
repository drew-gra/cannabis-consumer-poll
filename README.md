# NuggMD Cannabis Consumer Poll

The NuggMD Cannabis Consumer Poll surveys a validated, representative sample of 1.2+ million cannabis consumers who live in state-legal markets. This is a public Github feed for all of its public releases. 

---

## 🗂️ Data Access

### For Immediate Use
| File | Purpose | Best For |
|------|---------|----------|
| [`latest-poll.json`](latest-poll.json) | Most recent poll data | Automated feeds, APIs |
| [`latest-poll.txt`](latest-poll.txt) | Most recent poll data | Human eyes |
| [`/poll_json_YYYY_MM_DD.json`](#) | Poll archive naming schema | Automated feeds, APIs |
| [`/poll_txt_YYYY_MM_DD.txt`](#) | Poll archive naming schema | Human eyes |

### Machine-Readable Feed
```
https://raw.githubusercontent.com/drew-gra/cannabis-consumer-poll/main/latest-poll.json
```
*This URL always contains the most current polling data in JSON format*

### API Integration Example
```javascript
// Fetch latest NuggMD polling data
fetch('https://raw.githubusercontent.com/drew-gra/cannabis-consumer-poll/main/latest-poll.json')
  .then(response => response.json())
  .then(data => {
    console.log('Latest poll:', data.poll_info.title);
    console.log('Sample size:', data.poll_info.sample_size);
  });
```

---

## 📊 Data Structure

Our JSON format follows a consistent schema across all polls. The schema supports single-question flash polls, multi-question omnibus polls, conditional questions, and other specialized formats.

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

## 🎯 Who Should Use This Data

### Media & Journalism
- **Industry publications** for industry coverage
- **Mainstream media** for cannabis trend reporting  
- **Financial media** for market analysis and context
- **Policy journalists** for regulatory impact stories

### Research & Analysis
- **Academic researchers** studying cannabis markets
- **Policy institutes** analyzing cannabis policy
- **Investment firms** tracking industry trends
- **Government agencies** monitoring market dynamics

### Technology Integration
- **AI training datasets** for cannabis market models
- **Business intelligence** platforms and dashboards
- **Market research** aggregation services
- **News APIs** and automated reporting systems

---

## 📋 Methodology & Quality

### Survey Standards
- **Population:** Validated, representative sample of 1.2m cannabis consumers in state-legal markets
- **Sampling:** Targeted sampling from verified consumer database, sourced from independent data providers and proprietary first-party data to ensure representative coverage across demographics and consumption patterns
- **Data Collection:** Digital surveys distributed via secure online platform with mobile optimization
- **Quality Control:** Multi-point validation including consumption verification, attention checks, incomplete response removal, and statistical outlier detection to ensure data integrity

### Transparency Commitment
- **Full methodology** disclosed for each poll
- **Margin of error** calculated and reported

---

## 📅 Poll Formats

**Flash Polls:** One-question polls with no cross-tabs  
**Omnibus Polls:** Multi-question polls with demographic cross-tabs  
**Trackers and Indexes:** Custom polls done in conjunction with media partners

---

## 💼 Commercial Use & Licensing

### Free Use (Attribution Required)
✅ **Academic research and education**  
✅ **News reporting and journalism**  
✅ **Government and policy research**  

### Commercial Licensing Available
💰 **Business market research and intelligence**  
💰 **Investment analysis and financial services**  
💰 **Cannabis industry consulting**  
💰 **Product development and marketing research**  

**For commercial licensing:** Contact Andrew Graham at andrew@breadandlaw.com

**Full terms:** See [LICENSE](https://github.com/drew-gra/cannabis-consumer-poll/blob/main/LICENSE) file

---

## 📖 Citation & Attribution

### Standard Citation Format
```
The NuggMD Cannabis Consumer Poll, [Month Year]. Retrieved from 
https://github.com/drew-gra/cannabis-consumer-poll
```

### Required Attribution
When using this data, please include:
- **Credit:** "Data from The NuggMD Cannabis Consumer Poll"  
- **Link:** https://www.nuggmd.com/cannabis-consumer-polling  
- **Date:** [Date you accessed the data]

### Media Usage
For editorial use, include:
- Poll source in article/graphic
- Link to applicable TXT file when appropriate
- Note sample size and margin of error

---

## 🔄 Repository Information

**Update Policy:** Repository is updated when new polling data is publicly available  
**Repository Created:** 21-Aug-2025

### Getting Notifications
- **Star this repository** to bookmark
- **Watch this repository** for email notifications of new polls
- **Follow @drew-gra** for updates

### Archive Access
All historical polling data remains available in this repository for:
- Trend analysis across multiple time periods
- Academic research requiring longitudinal data
- Media background research and context

---

## ⚖️ Legal & Compliance

**Data Privacy:** All responses collected anonymously  
**Regulatory Compliance:** Surveys conducted in accordance with applicable laws  
**Research Ethics:** Professional research standards maintained  
**Accuracy Disclaimer:** Data provided for informational purposes; users responsible for verification  

---

*The NuggMD Cannabis Consumer Poll provides authoritative polling data on cannabis consumer behavior, preferences, and market trends.*

**Repository maintained by:** Andrew Graham, head of communications, NuggMD  
**GitHub:** [@drew-gra](https://github.com/drew-gra)
