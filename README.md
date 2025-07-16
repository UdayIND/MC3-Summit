# MC3 Summit Interactive Data Narrative

## "A Decade of Growth: Empowering Youth, Strengthening Our Village"

This interactive web presentation showcases the well-being of youth in Monroe County over the past decade through three compelling narrative threads. Built for the 2025 Monroe County Childhood Conditions (MC3) Summit.

![MC3 Summit Preview](https://img.shields.io/badge/Monroe_County-MC3_Summit_2025-green?style=for-the-badge)

## 🎯 Overview

The presentation transforms complex datasets into an accessible, story-driven experience that highlights:

- **Economic Squeeze**: Family financial health and housing stability trends
- **Education Pathway**: Student journey from enrollment to employment outcomes  
- **Community Wellbeing**: Shift from crisis intervention to proactive care

## 📊 Interactive Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Charts**: Hover for detailed data points and trends
- **Professional Styling**: Clean, accessible design optimized for presentations
- **Real-time Tooltips**: Contextual information on data visualization
- **Export Capability**: Data export functionality for further analysis

## 🚀 Quick Start

### Option 1: Use with Sample Data (Immediate)

1. **Download or clone** this repository
2. **Open `index.html`** in any modern web browser
3. **Present immediately** - all visualizations are ready with representative sample data

### Option 2: Process Real Data

1. **Install Python dependencies**:
   ```bash
   # Create virtual environment (recommended)
   python3 -m venv mc3-env
   source mc3-env/bin/activate  # On Windows: mc3-env\Scripts\activate
   
   # Install required packages
   pip install pandas openpyxl xlrd
   ```

2. **Run data processing**:
   ```bash
   python3 data_processing.py
   ```

3. **Update visualizations** (see Data Integration section below)

## 📁 Project Structure

```
MC3 Summit Presentation/
├── index.html              # Main presentation file
├── style.css               # Professional styling
├── script.js               # Interactive visualizations
├── data_processing.py      # Data cleaning and processing
├── requirements.txt        # Python dependencies
├── README.md               # This file
├── processed_data/         # Output directory for clean data
│   ├── economic_squeeze.csv
│   ├── education_pathway.csv
│   └── community_wellbeing.csv
└── [Original Data Files]   # Excel and CSV files from sources
```

## 📈 Data Sources

### Primary Datasets
- **S1903 Median Income**: U.S. Census Bureau ACS (2010-2023)
- **Child Care Costs**: Indiana Family and Social Services Administration
- **Housing Instability**: Monroe County School Corporation
- **Education Metrics**: Indiana Department of Education
- **Employment Data**: S2301 Employment Status (ACS)
- **Child Welfare**: Monroe County Health Department
- **Juvenile Justice**: Monroe County Youth Services Bureau

### Data Processing Features
- Automated Excel and CSV file handling
- Standardized column naming (snake_case)
- Missing value and inconsistency detection
- Multi-year trend analysis
- Export to analysis-ready CSV format

## 🔧 Data Integration

### Using Real Data

1. **Process your data**:
   ```bash
   python3 data_processing.py
   ```

2. **Update the JavaScript** (`script.js`):
   - Replace `sampleData` object with your processed CSV data
   - Use libraries like D3.js or Papa Parse to load CSV files
   - Maintain the same data structure for seamless integration

3. **Example CSV loading**:
   ```javascript
   // Add this to script.js to load real data
   async function loadRealData() {
       const economicData = await d3.csv('processed_data/economic_squeeze.csv');
       const educationData = await d3.csv('processed_data/education_pathway.csv');
       const wellbeingData = await d3.csv('processed_data/community_wellbeing.csv');
       
       // Update charts with real data
       updateCharts(economicData, educationData, wellbeingData);
   }
   ```

### Sample Data Structure

The current implementation uses representative sample data that follows this structure:

```javascript
{
    economic: {
        years: [2014, 2015, ...],
        medianIncome: [51200, 53800, ...],
        childcareCostRatio: [18.5, 19.2, ...],
        homelessStudents: [287, 312, ...]
    },
    // ... education and wellbeing data
}
```

## 🎨 Customization

### Color Scheme
Update the `colors` object in `script.js`:
```javascript
const colors = {
    primary: '#2c5530',    // Main brand color
    secondary: '#34495e',  // Secondary elements
    success: '#16a085',    // Positive trends
    warning: '#f39c12',    // Cautionary data
    danger: '#e74c3c'      // Concerning trends
};
```

### Chart Types
The presentation uses Plotly.js for maximum interactivity:
- **Dual-axis line charts** for contrasting trends
- **Color-coded bar charts** for categorical data
- **Multi-series scatter plots** for complex relationships
- **Responsive layouts** for all screen sizes

## 📱 Browser Compatibility

- **Chrome/Edge**: Full support (recommended)
- **Firefox**: Full support
- **Safari**: Full support
- **Mobile browsers**: Responsive design optimized
- **Internet Explorer**: Not supported (uses modern ES6+)

## 🔒 Data Privacy

- **No external data transmission**: All processing happens locally
- **Static file hosting**: Can be served from any web server
- **No tracking or analytics**: Privacy-focused presentation
- **Offline capable**: Works without internet connection after initial load

## 🛠️ Technical Details

### Dependencies
- **Plotly.js**: Interactive data visualization library (CDN)
- **Source Sans Pro**: Google Fonts for typography (CDN)
- **Python 3.7+**: For data processing (if using real data)
- **Pandas**: Data manipulation and analysis
- **OpenPyXL/XLRD**: Excel file reading capabilities

### Performance
- **Optimized loading**: Staggered chart initialization
- **Responsive charts**: Automatic resizing and debounced events
- **Minimal footprint**: Lightweight CSS and JavaScript
- **Print-friendly**: Optimized for PDF generation

## 📖 Usage Instructions

### For Presenters
1. **Open `index.html`** in your browser
2. **Navigate using scroll** or arrow keys
3. **Interact with charts** by hovering over data points
4. **Use full-screen mode** for projection (F11)
5. **Print to PDF** for handouts (Ctrl/Cmd + P)

### For Analysts
1. **Review data processing** script for methodology
2. **Examine sample data** structure for integration
3. **Customize narratives** by editing HTML content
4. **Extend visualizations** using Plotly.js documentation
5. **Export data** using `MC3.exportData()` in browser console

## 🤝 Contributing

### To update narratives:
1. Edit the descriptive text in `index.html`
2. Modify chart titles and annotations in `script.js`
3. Update color schemes and styling in `style.css`

### To add new data sources:
1. Add processing methods to `data_processing.py`
2. Update the data structure in `script.js`
3. Create new visualization functions as needed

## 📞 Support

For questions about:
- **Data methodology**: Review `data_processing.py` comments
- **Visualization customization**: Check Plotly.js documentation
- **Technical issues**: Ensure modern browser and JavaScript enabled
- **Data integration**: Follow the sample data structure format

## 📄 License

This project is created for the Monroe County Childhood Conditions (MC3) Summit. The code is provided as-is for educational and presentation purposes.

---

**Built with ❤️ for the Monroe County community**

*"Empowering Youth, Strengthening Our Village"* 