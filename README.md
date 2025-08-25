# NuggMD Cannabis Consumer Poll

The NuggMD Cannabis Consumer Poll surveys a validated, representative sample of 1.2+ million cannabis consumers who live in state-legal markets. This is a public Github feed for all of its public releases. 

---

## 📈 Latest Poll Results

**Survey Date:** August 21 -- August 24, 2025  
**Sample Size:** 391 respondents  
**Topic:** Effectiveness of cannabis when used to manage pain  
**Margin of Error:** ±4.96% at 95% confidence level  

QUESTION: How effective is cannabis at helping you manage pain?  

RESULTS:  
65% - Very effective  
26% - Mildly effective  
4% - Not sufficiently effective  
5% - Not applicable – I do not use cannabis for that purpose  
  
CONTACT: Andrew Graham, NuggMD head of communications, at andrew.g@getnugg.com with questions or quote requests.  

## 🗂️ Data Access

### For Immediate Use
| File | Purpose | Best For |
|------|---------|----------|
| [`latest-poll.json`](latest-poll.json) | Most recent poll data | Automated feeds, APIs |
| [`latest-poll.json`](latest-poll.txt) | Most recent poll data | Human eyes |
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

Our JSON format follows a consistent schema across all polls:

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
- Link to full methodology when possible
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
