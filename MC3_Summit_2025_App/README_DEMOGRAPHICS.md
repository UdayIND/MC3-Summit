# 👥 Demographics Stories Branch - Developer 1 Assignment

> **Branch Focus:** Population trends, demographic composition, household characteristics, and income analysis for Monroe County children and families.

---

## 🎯 **Your Mission**

As the **Demographics Data Specialist**, you're responsible for creating compelling visualizations that tell the story of who lives in Monroe County, how the population is changing, and what demographic factors affect childhood conditions.

### **Core Objectives:**
1. **Population Trends** - Show how Monroe County's child population has evolved over time
2. **Demographic Composition** - Visualize age, race, ethnicity, and household structure
3. **Income & Poverty Analysis** - Present economic conditions affecting families with children
4. **Geographic Distribution** - Map demographic patterns across the county

---

## 📊 **Assigned Visualizations**

### **Required Charts to Enhance:**

#### 1. **Population Trends Chart** (`populationChart`)
- **Location:** `pages/demographics.html` 
- **Current Status:** Basic implementation exists
- **Your Task:** Enhance with detailed age group breakdowns and trend analysis

**Requirements:**
```javascript
// Expected data structure
{
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Children 0-4 years',
      data: [8234, 8156, 8089, 7945, 7856, 7789, 7934, 8012, 8156, 8234],
      // Add professional styling and metadata
    },
    {
      label: 'Children 5-9 years', 
      data: [8156, 8098, 8045, 7989, 7923, 7845, 7789, 7856, 7934, 8156],
    },
    // Continue for all age groups: 10-14, 15-17
  ]
}
```

**Key Insights to Highlight:**
- Population growth/decline patterns
- Age group distribution changes
- Birth rate trends implications
- School enrollment projections

#### 2. **Income Distribution Chart** (`incomeChart`) 
- **Location:** `pages/demographics.html`
- **Chart Type:** Histogram or Box Plot
- **Focus:** Household income distribution for families with children

**Requirements:**
- Show income brackets: <$25K, $25K-$50K, $50K-$75K, $75K-$100K, $100K+
- Include median household income trend line
- Highlight poverty thresholds
- Compare to state and national averages

#### 3. **Demographic Composition Chart** (`educationAttainmentChart`)
- **Location:** `pages/demographics.html` 
- **Chart Type:** Stacked bar or pie charts
- **Focus:** Race/ethnicity composition and educational attainment of parents

**Key Data Points:**
- Race/ethnicity percentages
- Educational attainment of parents/guardians
- Language spoken at home
- Household composition (single parent vs. two-parent households)

---

## 🗂️ **Data Files You'll Work With**

### **Primary Dataset:** `data/processed/demographics.json`
```json
{
  "metadata": {
    "source": "U.S. Census Bureau ACS 5-Year Estimates",
    "lastUpdated": "2024-12-15",
    "coverage": "Monroe County, Indiana",
    "methodology": "American Community Survey",
    "qualityScore": 0.98
  },
  "demographics": {
    "totalPopulation": 139718,
    "children": {
      "total": 28447,
      "ageGroups": {
        "0-4": 8234,
        "5-9": 8156,
        "10-14": 7899,
        "15-17": 4158
      },
      "byRace": {
        "white": 20456,
        "black": 2844,
        "hispanic": 3287,
        "asian": 1234,
        "other": 626
      }
    },
    "households": {
      "total": 56789,
      "withChildren": 16234,
      "singleParent": 4567,
      "medianIncome": 52341
    }
  },
  "timeSeries": {
    "years": ["2020", "2021", "2022", "2023", "2024"],
    "population": [137841, 138456, 138934, 139234, 139718],
    "childrenInPoverty": [22.3, 21.5, 19.8, 18.9, 18.4]
  }
}
```

### **Additional Data Sources to Integrate:**
- Census tract level data for geographic mapping
- Historical population data (2010-2024)
- Housing characteristics data
- Migration and mobility patterns

---

## 🎨 **Design Requirements**

### **Visual Standards:**
- **Color Scheme:** Use Monroe County Navy (#003366) and Gold (#FFB500)
- **Chart Types:** Line charts for trends, bar charts for comparisons, pie/donut for composition
- **Accessibility:** Ensure WCAG 2.1 AAA compliance with ARIA labels
- **Mobile-First:** All charts must be responsive and touch-friendly

### **Professional Features Required:**
```javascript
// Example enhanced chart configuration
const chartConfig = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Monroe County Child Population Trends (2015-2024)',
        font: { size: 16, weight: 'bold' }
      },
      subtitle: {
        display: true,
        text: 'Source: U.S. Census Bureau ACS 5-Year Estimates | Confidence Interval: ±2.1%'
      },
      legend: {
        position: 'bottom',
        labels: { usePointStyle: true }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          afterLabel: function(context) {
            return `Sample Size: n≈${context.parsed.y * 35}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: { display: true, text: 'Year' }
      },
      y: {
        title: { display: true, text: 'Population Count' },
        beginAtZero: false
      }
    }
  }
};
```

---

## 📋 **Specific Tasks & Deliverables**

### **Phase 1: Data Analysis & Planning (Estimated: 1 day)**
- [ ] Review existing demographic data in `data/processed/demographics.json`
- [ ] Identify additional data sources needed
- [ ] Create data processing plan for new datasets
- [ ] Design wireframes for your 3 main visualizations

### **Phase 2: Chart Implementation (Estimated: 2-3 days)**
- [ ] Enhance `populationChart` with age group breakdowns and trend analysis
- [ ] Create comprehensive `incomeChart` with income distribution analysis  
- [ ] Develop `educationAttainmentChart` with demographic composition insights
- [ ] Add professional tooltips, labels, and metadata to all charts

### **Phase 3: Data Stories & Insights (Estimated: 1 day)**
- [ ] Write compelling narratives for each visualization
- [ ] Add data quality indicators and source citations
- [ ] Create accessibility features (ARIA labels, keyboard navigation)
- [ ] Implement export functionality for all charts

### **Phase 4: Testing & Polish (Estimated: 1 day)**  
- [ ] Test charts on multiple browsers and devices
- [ ] Verify accessibility compliance
- [ ] Validate data accuracy and calculations
- [ ] Create pull request with detailed description

---

## 💡 **Key Insights to Uncover**

Your demographics analysis should answer these critical questions:

### **Population Dynamics:**
- How has the child population changed over the past decade?
- Which age groups are growing or declining?
- What do birth rate trends suggest for future school enrollment?

### **Demographic Equity:**
- How diverse is Monroe County's child population?
- Are there disparities in household income by race/ethnicity?
- What percentage of children live in single-parent households?

### **Economic Conditions:**
- What income levels characterize families with children?
- How does Monroe County compare to state and national averages?
- Which neighborhoods have the highest concentrations of child poverty?

### **Educational Context:**
- What educational backgrounds do parents have?
- How does parental education correlate with child outcomes?
- What languages are spoken in homes with children?

---

## 🔧 **Code Examples & Templates**

### **Enhanced Chart Creation Template:**
```javascript
async createPopulationChart() {
    const canvas = document.getElementById('populationChart');
    if (!canvas) return;

    // Load and validate data
    const demographicsData = await this.loadDemographicsData();
    if (!this.validateDataQuality(demographicsData, 'population')) {
        this.showDataWarning('Population data quality concerns detected');
        return;
    }

    const ctx = canvas.getContext('2d');
    
    // Professional data structure with metadata
    const data = {
        labels: demographicsData.timeSeries.years,
        datasets: [
            {
                label: 'Children 0-4 years',
                data: demographicsData.ageGroups.data['0-4'],
                borderColor: this.colorSchemes.primary.monroe,
                backgroundColor: this.addAlpha(this.colorSchemes.primary.monroe, 0.1),
                fill: true,
                tension: 0.2,
                dataSource: 'U.S. Census Bureau ACS 5-Year Estimates',
                methodology: 'Decennial Census with annual updates',
                confidenceInterval: '±2.1%',
                sampleSize: '28,447 total children'
            }
            // Add additional age groups...
        ]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            ...this.chartDefaults,
            plugins: {
                ...this.chartDefaults.plugins,
                title: {
                    display: true,
                    text: 'Monroe County Child Population by Age Group (2015-2024)'
                },
                subtitle: {
                    display: true, 
                    text: 'Demographic trends show changing family composition patterns'
                }
            }
        }
    };

    const chart = new Chart(ctx, config);
    this.charts.set('population', chart);
    
    // Add accessibility features
    this.addChartAccessibility(canvas, data, 'Population trends by age group');
}
```

### **Data Processing Helper:**
```javascript
async loadDemographicsData() {
    try {
        const response = await fetch('data/processed/demographics.json');
        const data = await response.json();
        
        // Validate data structure
        this.validateDemographicsStructure(data);
        
        // Process additional calculations
        data.calculated = {
            diversityIndex: this.calculateDiversityIndex(data.demographics.children.byRace),
            povertyTrend: this.calculateTrendDirection(data.timeSeries.childrenInPoverty),
            populationGrowthRate: this.calculateGrowthRate(data.timeSeries.population)
        };
        
        return data;
    } catch (error) {
        console.error('Demographics data loading failed:', error);
        throw new Error('Unable to load demographic data for analysis');
    }
}
```

---

## 🧪 **Testing Checklist**

Before submitting your work, verify:

### **Functionality:**
- [ ] All 3 charts render correctly on page load
- [ ] Charts are responsive on mobile, tablet, and desktop
- [ ] Tooltips show accurate data with proper formatting
- [ ] Export functionality works for PNG, PDF, and CSV
- [ ] Print styles display charts properly

### **Accessibility:**
- [ ] Charts have descriptive ARIA labels
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader compatibility verified
- [ ] High contrast mode displays clearly
- [ ] Color schemes are colorblind-friendly

### **Data Quality:**
- [ ] All numbers add up correctly and are properly formatted
- [ ] Source citations are accurate and complete
- [ ] Confidence intervals and sample sizes are included
- [ ] Trend calculations are mathematically sound
- [ ] No data points are missing or incorrectly plotted

---

## 📚 **Resources & References**

### **Data Sources:**
- [U.S. Census Bureau ACS Data](https://data.census.gov/cedsci/)
- [Indiana Demographics Profile](https://www.stats.indiana.edu/profiles/)
- [Monroe County Health Department](https://www.co.monroe.in.us/department/health/)

### **Technical Documentation:**
- [Chart.js API Reference](https://www.chartjs.org/docs/latest/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Palette Guidelines](./docs/style-guide.md)

### **Statistical Methods:**
- Population growth rate calculations
- Diversity index methodology  
- Confidence interval interpretation
- Trend analysis techniques

---

## ✅ **Definition of Done**

Your demographics branch is complete when:

1. **All 3 assigned charts** are professionally implemented with proper styling
2. **Data accuracy** is verified with appropriate quality indicators
3. **Accessibility compliance** meets WCAG 2.1 AAA standards
4. **Mobile responsiveness** works on all device sizes
5. **Export functionality** operates correctly for all chart types
6. **Documentation** includes clear comments and data source citations
7. **Testing** passes on Chrome, Firefox, Safari, and Edge browsers
8. **Pull request** includes detailed description of changes and insights discovered

---

## 🎉 **Success Metrics**

Your demographics visualizations should achieve:
- **Engagement:** Clear, compelling stories that communicate key demographic trends
- **Accuracy:** All data points verified against original sources with <1% error rate
- **Performance:** Charts load in <2 seconds on standard broadband
- **Accessibility:** 100% compliance with WCAG 2.1 AAA guidelines
- **Usability:** Intuitive navigation and interaction for all user types

---

**🚀 Ready to dive into Monroe County's demographic story? Your insights will help community leaders understand the changing landscape of childhood conditions in our county!**

**Questions?** Create an issue in the repository or reach out to the project coordinator.

---

**📊 Demographics Stories Branch | MC3 Summit 2025**  
*Understanding our community through data* 