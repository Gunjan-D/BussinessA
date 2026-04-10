# Business Intelligence

> **6 end-to-end BI projects** built with Power BI, SAS, SQL Server, SSIS & Power Automate, covering insurance analytics, fraud detection, predictive modelling, and pricing.

**Live Site → [https://gunjan-d.github.io/BussinessA/](https://gunjan-d.github.io/BussinessA/)**

---

![Power BI](https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)
![SAS](https://img.shields.io/badge/SAS-0076C0?style=for-the-badge&logo=sas&logoColor=white)
![SSIS](https://img.shields.io/badge/SSIS-CC2927?style=for-the-badge&logo=microsoft&logoColor=white)
![Power Automate](https://img.shields.io/badge/Power%20Automate-0066FF?style=for-the-badge&logo=powerautomate&logoColor=white)

---

## Projects

### 01 · Insurance Claims Analytics Dashboard
`Power BI` `T-SQL` `DAX` `SSRS`

Multi-page Power BI dashboard built on 300K+ claim records. Tracks claim frequency, SLA compliance, severity trends, and adjuster performance with full drill-through capability.

| Metric | Result |
|--------|--------|
| Claim Processing Time | ↓ 22% |
| Cost Identified | $1.8M |
| Dashboard Pages | 5 |

---

### 02 · Policy Renewal Prediction & Retention  Featured
`Base SAS` `PROC LOGISTIC` `SAS EG` `T-SQL` `Power BI`

SAS logistic regression model scoring all active policies 60 days before renewal — identifying at-risk accounts for proactive retention outreach.

| Metric | Result |
|--------|--------|
| Model AUC | 87% |
| Retention Improvement | ↑ 9.4% |
| Early Warning Window | 60 days |

---

### 03 · Automated KPI Reporting Pipeline
`SSIS` `Power Automate` `T-SQL` `Power BI` `Microsoft Forms`

End-to-end automation replacing 12 hours of manual weekly Excel reporting. Four SSIS packages feed a SQL Server DW; Power Automate distributes personalised PDF reports by role every morning.

| Metric | Result |
|--------|--------|
| Hours Saved Weekly | 12 hrs |
| Manual Errors | 0 |
| Source Systems | 4 |

---

### 04 · Customer Segmentation & Marketing Analytics
`T-SQL` `SAS PROC FASTCLUS` `Power BI` `Window Functions`

RFM scoring on 500K policyholders combined with SAS k-means clustering to produce 6 actionable customer segments. Power BI executive dashboard tracks campaign ROI per segment.

| Metric | Result |
|--------|--------|
| Campaign Response Rate | ↑ 31% |
| Opt-out Rate | ↓ 55% |
| Customer Segments | 6 |

---

### 05 · Insurance Fraud Detection Analytics
`Base SAS` `PROC SQL` `T-SQL` `SSIS` `Power BI`

18-rule scoring engine in SAS flags suspicious claims before payment release. An SSIS nightly batch automates scoring; a Power BI SIU dashboard serves as the investigator alert queue.

| Metric | Result |
|--------|--------|
| Fraud Prevented (Yr 1) | ₹2.4 Cr |
| False Positive Rate | ↓ 41% |
| Claims Scored / Month | 850+ |

---

### 06 · Premium Pricing Sophistication Dashboard
`SAS EG` `PROC GENMOD` `GLM` `Power BI` `DAX` `RLS`

Generalised Linear Model (Tweedie GLM) built in SAS PROC GENMOD, modelling 12 rating variables on 1.2M policy records. Power BI dashboard with Row-Level Security allows actuaries and product managers to monitor actual vs expected loss ratios.

| Metric | Result |
|--------|--------|
| Loss Ratio Improvement | ↑ 6.2 pp |
| Rating Variables | 12 |
| Training Data | 5 Years |

---

## Tech Stack

| Category | Tools |
|----------|-------|
| **Visualisation** | Power BI, SSRS, Excel PowerPivot |
| **Database & ETL** | SQL Server, T-SQL, SSIS, SSAS |
| **Statistical Analysis** | Base SAS, SAS EG, PROC LOGISTIC, PROC GENMOD, PROC FASTCLUS |
| **Automation** | Power Automate, Microsoft Forms, SharePoint |
| **Web** | HTML, CSS, JavaScript, Chart.js |

---

##  Repository Structure

```
BussinessA/
├── index.html          # Portfolio home — all 6 project cards
├── project-1.html      # Claims Analytics Dashboard
├── project-2.html      # Policy Renewal Prediction
├── project-3.html      # Automated KPI Pipeline
├── project-4.html      # Customer Segmentation
├── project-5.html      # Fraud Detection
├── project-6.html      # Premium Pricing Dashboard
├── project.css         # Shared styles for all project pages
├── styles.css          # Portfolio page styles
└── script.js           # Portfolio interactivity
```

---

##  View Live

The portfolio is hosted on GitHub Pages and publicly accessible:

** [https://gunjan-d.github.io/BussinessA/](https://gunjan-d.github.io/BussinessA/)**

Each project card links to a full standalone page with:
- Interactive Chart.js visualisations
- Tabbed code samples (SAS / T-SQL / DAX)
- Sample data output tables
- Step-by-step process documentation

---
////////////////////////////////////////////////////////////////
*Built with HTML, CSS & Chart.js · Hosted on GitHub Pages*
