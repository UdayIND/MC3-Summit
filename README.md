# MC3 Summit 2025 - Data Portal & Visualization Platform 🏛️

[![Deploy Status](https://img.shields.io/badge/deploy-ready-brightgreen.svg)](./deploy.sh)
[![Data Quality](https://img.shields.io/badge/data%20quality-98%25-brightgreen.svg)](#data-quality)
[![Accessibility](https://img.shields.io/badge/accessibility-WCAG%202.1%20AAA-blue.svg)](#accessibility)

> **Monroe County Childhood Conditions Summit 2025**  
> Professional data visualization platform for analyzing childhood conditions and community outcomes in Monroe County, Indiana.

---

## 🎯 **Project Overview**

The MC3 Summit 2025 Data Portal is a comprehensive web application designed to present critical data insights about childhood conditions in Monroe County. Built for data analysts, researchers, policymakers, and community stakeholders.

### **Key Features:**
- ✅ **Professional-grade visualizations** using Chart.js with advanced configurations
- ✅ **Accessibility-compliant** (WCAG 2.1 AAA standards) 
- ✅ **Responsive design** for desktop, tablet, and mobile
- ✅ **Export capabilities** (PNG, PDF, CSV)
- ✅ **Multi-language support** with Google Translate integration
- ✅ **Data quality validation** with metadata and source citations
- ✅ **Government-standard styling** following Monroe County branding

---

## 🗂️ **Project Structure**

```
MC3_Summit_2025_App/
├── 📄 index.html              # Main homepage with key correlations
├── 📂 pages/                  # Individual data story pages
│   ├── demographics.html      # Population & demographic analysis
│   ├── education.html         # Educational outcomes & trends  
│   ├── economy.html           # Economic indicators & employment
│   ├── social-services.html   # Social services utilization
│   └── correlations.html      # Cross-factor correlation analysis
├── 📂 css/                    # Styling and themes
│   ├── style.css             # Main application styles
│   └── visualizations.css    # Chart and data visualization styles
├── 📂 js/                     # JavaScript application logic
│   ├── main.js               # Core app controller & functionality
│   ├── visualizations.js     # Professional chart rendering engine
│   ├── narratives.js         # Data stories and insights
│   └── dataLoader.js         # Data management and validation
├── 📂 data/                   # Data files and processing
│   └── processed/            # Clean, validated datasets
├── 📂 assets/                 # Images, icons, and media
├── 📂 docs/                   # Documentation and guides
├── 🚀 deploy.sh              # Deployment and testing script
└── 📋 FIXES_APPLIED.md       # Error resolution documentation
```

---

## 🌟 **Branch Structure & Team Collaboration**

This repository is organized into **5 specialized branches** for parallel development by different team members:

| Branch | Focus Area | Assigned Visualizations | Team Member |
|--------|------------|-------------------------|-------------|
| **[demographics-stories](#-demographics-branch)** | Population & Demographics | Population trends, Age distributions, Income analysis | Developer 1 |
| **[education-insights](#-education-branch)** | Educational Outcomes | Graduation rates, Achievement gaps, Enrollment trends | Developer 2 |
| **[economic-analysis](#-economy-branch)** | Economic Indicators | Employment, Income, Housing costs | Developer 3 |
| **[social-services](#-social-services-branch)** | Social Services Impact | SNAP, Childcare, Housing assistance | Developer 4 |
| **[correlation-analysis](#-correlations-branch)** | Cross-Factor Analysis | Multi-variate correlations, Predictive insights | Developer 5 |

### 🔄 **Branch Workflow:**
1. **Check out your assigned branch:** `git checkout [branch-name]`
2. **Read the branch-specific README** for detailed tasks and requirements
3. **Develop your visualizations** using the existing framework
4. **Test locally** using `./deploy.sh start`
5. **Create pull request** when ready for review

---

## 🚀 **Quick Start**

### **Prerequisites:**
- Python 3.7+ (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git for version control

### **Local Development:**
```bash
# Clone the repository
git clone https://github.com/UdayIND/MC3-Summit.git
cd MC3-Summit

# Start development server
./deploy.sh start

# Access the application
open http://localhost:8000
```

### **Available Commands:**
```bash
./deploy.sh start [port]    # Start local server (default: 8000)
./deploy.sh validate        # Check for HTML/JS issues  
./deploy.sh check          # Verify file structure
./deploy.sh help           # Show all available commands
```

---

## 📊 **Data Sources & Quality**

All data is sourced from verified government and academic sources:

- **U.S. Census Bureau** - American Community Survey 5-Year Estimates
- **Indiana Department of Education** - School performance and enrollment data
- **Bureau of Labor Statistics** - Employment and economic indicators  
- **Indiana Family and Social Services Administration** - Social services data
- **Monroe County Health Department** - Local health and demographic data

### **Data Quality Standards:**
- ✅ 95%+ completeness required
- ✅ 98%+ accuracy threshold
- ✅ Data must be within 30 days of collection
- ✅ 99%+ consistency across sources
- ✅ All datasets include metadata and source citations

---

## 🎨 **Design Standards**

### **Visual Identity:**
- **Primary Colors:** Monroe County Navy (#003366), County Gold (#FFB500)
- **Typography:** Professional, government-standard fonts
- **Charts:** Clean, accessible color schemes with high contrast
- **Layout:** Responsive CSS Grid and Flexbox

### **Accessibility Requirements:**
- **WCAG 2.1 AAA** compliance
- **Screen reader** compatibility with ARIA labels
- **Keyboard navigation** support
- **High contrast** mode available
- **Color-blind friendly** visualization palettes

---

## 🛠️ **Technical Architecture**

### **Frontend Technologies:**
- **HTML5** with semantic markup
- **CSS3** with modern layout techniques
- **Vanilla JavaScript** (ES6+) for maximum compatibility
- **Chart.js** for professional data visualizations
- **Google Translate API** for multi-language support

### **Performance Features:**
- **Lazy loading** for images and content
- **Intersection Observer** for efficient rendering
- **Debounced event handlers** for smooth interactions
- **Local caching** for improved load times

---

## 📝 **Branch-Specific Instructions**

Each specialized branch contains a detailed README with:
- **Specific visualization requirements**
- **Data processing guidelines** 
- **Design specifications**
- **Testing criteria**
- **Code examples and templates**

### 👥 **Demographics Branch**
Focus on population trends, age distributions, household composition, and income analysis.
[Switch to demographics-stories branch](../../tree/demographics-stories)

### 🎓 **Education Branch**  
Analyze graduation rates, achievement gaps, enrollment trends, and educational outcomes.
[Switch to education-insights branch](../../tree/education-insights)

### 💼 **Economy Branch**
Employment data, income trends, housing costs, and economic indicators.
[Switch to economic-analysis branch](../../tree/economic-analysis)

### 🤝 **Social Services Branch**
SNAP participation, childcare access, housing assistance, and social safety net analysis.
[Switch to social-services branch](../../tree/social-services)

### 🔗 **Correlations Branch**
Multi-factor analysis, predictive modeling, and cross-domain correlations.
[Switch to correlation-analysis branch](../../tree/correlation-analysis)

---

## 🔧 **Development Guidelines**

### **Code Standards:**
- Use **semantic HTML5** elements
- Follow **CSS BEM** methodology for class naming
- Write **ES6+ JavaScript** with proper error handling
- Include **comprehensive comments** and documentation
- Ensure **cross-browser compatibility**

### **Data Standards:**
- All datasets must include **metadata** and **source citations**
- Use **consistent date formats** (ISO 8601)
- Include **confidence intervals** and **sample sizes** where applicable
- Provide **data quality metrics** for each visualization

### **Testing Requirements:**
- Test on **multiple browsers** (Chrome, Firefox, Safari, Edge)
- Verify **mobile responsiveness** on various screen sizes
- Check **accessibility** with screen readers and keyboard navigation
- Validate **data accuracy** and chart functionality

---

## 📞 **Support & Resources**

### **Getting Help:**
- 📖 **Documentation:** Check branch-specific READMEs for detailed guidance
- 🐛 **Issues:** Report bugs or request features via GitHub Issues
- 💬 **Discussions:** Use GitHub Discussions for questions and coordination
- 📧 **Contact:** Reach out to project maintainers for urgent issues

### **Useful Resources:**
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Monroe County Style Guide](./docs/style-guide.md)
- [Data Processing Guidelines](./docs/data-guidelines.md)

---

## 🎉 **Contributing**

We welcome contributions from all team members! Please:

1. **Work in your assigned branch** to avoid conflicts
2. **Follow coding standards** and include proper documentation
3. **Test thoroughly** before submitting pull requests
4. **Include meaningful commit messages** explaining your changes
5. **Review others' work** and provide constructive feedback

---

## 📄 **License & Usage**

This project is developed for the Monroe County MC3 Summit 2025. All data visualizations and insights are intended for public benefit and community improvement.

**Data Sources:** Please cite original sources when using or referencing data from this platform.

---

**🏛️ Monroe County, Indiana | MC3 Summit 2025 Data Portal**  
*Building better conditions for children through data-driven insights* 