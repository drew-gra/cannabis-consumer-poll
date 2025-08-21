# NuggMD Cannabis Consumer Poll

The NuggMD Cannabis Consumer Poll surveys a validated, representative sample of 1.2+ million cannabis consumers who live in state-legal markets. This is a public Github feed for all of its public releases. 

---

## 📈 Latest Poll Results

**Survey Date:** January 9-12, 2025  
**Sample Size:** 381 respondents  
**Topic:** Cannabis impact on alcohol consumption  
**Margin of Error:** ±5.02% at 95% confidence level  

### Key Findings:
- **54%** - Tend to drink less or not at all when consuming cannabis
- **22%** - No relationship between cannabis and alcohol consumption
- **14%** - Relationship depends on the circumstances
- **9%** - Tend to drink more when consuming cannabis

## Industry Impact

Statement from Andrew Graham, head of communications at NuggMD, on the results:

Today's cannabis consumers are turning to the plant more for wellness than indulgence, a trend we consistently have been observing in our polling data.

From a public health perspective, the replacement effect cannabis use seems to have on alcohol consumption is a positive shift. Many people are substituting a potentially fatal substance with one that isn't. However, this replacement is only a safe, practical option in state-legal recreational markets. Our internal estimates show that 47% of Americans and 37% of domestic cannabis consumers still live in states without access to these markets.

Although there has been a positive shift from alcohol use to cannabis use, from a policy standpoint, federal and state prohibition is restricting the potential benefits cannabis could offer society.

---

## 🗂️ Data Access

### For Immediate Use
| File | Purpose | Best For |
|------|---------|----------|
| [`latest-poll.json`](latest-poll.json) | Most recent poll data | Automated feeds, APIs |
| [`cannabis-poll-YYYY-MM-DD.json`](#) | Specific poll archive | Historical analysis |

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

### Historical Performance
- **Trusted by industry stakeholders** and policymakers since Jan. 1, 2025
- **Professional research standards** maintained with consistent methodology

---

## 📅 Poll Formats

**Flash Polls:** One-question weekly polls with no cross-tabs  
**Omnibus Polls:** Multi-question quarterly polls with demographic cross-tabs  
**Trackers and Indexes:** Bespoke polling projects done in conjunction with media partners

---

## 💼 Commercial Use & Licensing

### Free Use (Attribution Required)
✅ **Academic research and education**  
✅ **News reporting and journalism**  
✅ **Government and policy research**  
✅ **Non-profit organization analysis**  

### Commercial Licensing Available
💰 **Business market research and intelligence**  
💰 **Investment analysis and financial services**  
💰 **Cannabis industry consulting**  
💰 **Product development and marketing research**  

**For commercial licensing:** Contact Andrew Graham andrew@breadandlaw.com

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

## 📞 Contact Information

### Media Inquiries
**Email:** andrew@breadandlaw.com  
**Best for:** Interview requests, story development, expert commentary  

### Data Questions
**Email:** andrew@breadandlaw.com  
**Best for:** Methodology questions, custom analysis, technical support  

### Commercial Licensing
**Email:** andrew@breadandlaw.com  
**Best for:** Business use licensing, partnership opportunities, custom polling  

### General Information
**Website:** https://www.nuggmd.com/cannabis-consumer-polling  
**About NuggMD:** NuggMD is the leading telehealth platform for cannabis. The Cannabis Consumer Poll is its in-house pollster. 

---

## 🔄 Repository Information

**Last Updated:** 21-Aug-2025  
**Next Update:** Repository is updated when new polling data is publicly available  
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
