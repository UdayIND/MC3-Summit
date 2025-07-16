/**
 * MC3 Summit Interactive Data Visualizations - V4 Final Enhanced
 * "A Decade of Growth: Empowering Youth, Strengthening Our Village"
 * Enhanced version showing consequence and impact directly within visualizations
 */

// Enhanced comprehensive sample data representing Monroe County trends
const sampleData = {
    economic: {
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        medianIncome: [51200, 53800, 55100, 57400, 59200, 61800, 60400, 62100, 64800, 67200, 69500],
        childcareCostRatio: [18.5, 19.2, 20.8, 22.1, 23.4, 24.7, 25.1, 26.3, 27.8, 28.9, 29.4],
        childcareCostDollar: [9472, 10330, 11467, 12685, 13855, 15265, 15160, 16341, 18019, 19423, 20443],
        homelessStudents: [287, 312, 298, 334, 356, 389, 423, 401, 378, 345, 321],
        snapRecipients: [12450, 13200, 12800, 13500, 14200, 15100, 18200, 16800, 15400, 14100, 13600],
        housingInstabilityPeaks: [
            { year: 2018, value: 356, annotation: "Economic pressure builds" },
            { year: 2019, value: 389, annotation: "Pre-pandemic stress peak" },
            { year: 2020, value: 423, annotation: "COVID-19 crisis - 420 students affected" }
        ],
        censusTractData: {
            "001": { name: "Tract 1", povertyRate: 8.2, unemploymentRate: 3.1, stressIndex: 0.28 },
            "002": { name: "Tract 2", povertyRate: 12.4, unemploymentRate: 4.8, stressIndex: 0.43 },
            "003": { name: "Tract 3", povertyRate: 23.1, unemploymentRate: 7.2, stressIndex: 0.76 },
            "004": { name: "Tract 4", povertyRate: 15.3, unemploymentRate: 5.1, stressIndex: 0.51 },
            "005": { name: "Tract 5", povertyRate: 31.2, unemploymentRate: 9.8, stressIndex: 1.0 },
            "006": { name: "Tract 6", povertyRate: 18.7, unemploymentRate: 6.3, stressIndex: 0.63 },
            "007": { name: "Tract 7", povertyRate: 9.8, unemploymentRate: 3.7, stressIndex: 0.34 },
            "008": { name: "Tract 8", povertyRate: 14.2, unemploymentRate: 4.9, stressIndex: 0.48 }
        }
    },
    education: {
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        enrollment: [17800, 17650, 17520, 17400, 17250, 17100, 16950, 16800, 16650, 16500, 16350],
        graduationRate: [89.2, 90.1, 91.4, 92.1, 92.8, 93.2, 92.9, 93.5, 94.1, 94.3, 94.7],
        dropoutRate: [4.2, 3.8, 3.4, 3.1, 2.9, 2.6, 2.8, 2.4, 2.2, 2.0, 1.8],
        suspensions: [1240, 1180, 1120, 1050, 980, 920, 850, 790, 730, 680, 630],
        unemploymentRate: [6.8, 5.9, 4.2, 3.8, 3.5, 3.2, 8.1, 5.4, 4.1, 3.6, 3.2],
        demographics: {
            overall: { available: true, label: "All Students" },
            hispanic: { available: true, label: "Hispanic/Latino" },
            black: { available: true, label: "Black/African American" },
            white: { available: true, label: "White" },
            asian: { available: true, label: "Asian" },
            freeReduced: { available: true, label: "Free/Reduced Lunch Eligible" }
        },
        sankeyData: {
            2020: {
                overall: {
                    totalEnrollment: 4200, suspendedStudents: 210,
                    dropouts: { fromMainPopulation: 95, fromSuspended: 25 },
                    graduates: { fromMainPopulation: 3885, fromSuspended: 185 },
                    employment: { employed: 3600, unemployed: 470 }
                },
                hispanic: {
                    totalEnrollment: 840, suspendedStudents: 63,
                    dropouts: { fromMainPopulation: 25, fromSuspended: 12 },
                    graduates: { fromMainPopulation: 754, fromSuspended: 51 },
                    employment: { employed: 645, unemployed: 160 }
                },
                freeReduced: {
                    totalEnrollment: 2100, suspendedStudents: 147,
                    dropouts: { fromMainPopulation: 63, fromSuspended: 22 },
                    graduates: { fromMainPopulation: 1868, fromSuspended: 125 },
                    employment: { employed: 1694, unemployed: 299 }
                },
                suspendedOnly: {
                    totalEnrollment: 210, suspendedStudents: 210,
                    dropouts: { fromMainPopulation: 0, fromSuspended: 25 },
                    graduates: { fromMainPopulation: 0, fromSuspended: 185 },
                    employment: { employed: 148, unemployed: 37 }
                }
            },
            2015: {
                overall: {
                    totalEnrollment: 4400, suspendedStudents: 352,
                    dropouts: { fromMainPopulation: 154, fromSuspended: 53 },
                    graduates: { fromMainPopulation: 3894, fromSuspended: 299 },
                    employment: { employed: 3356, unemployed: 837 }
                }
            }
        }
    },
    wellbeing: {
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        childAbuseRate: [12.4, 11.8, 11.2, 10.6, 10.1, 9.7, 10.2, 9.4, 8.9, 8.3, 7.8],
        juvenileCases: [485, 467, 442, 428, 401, 389, 356, 334, 312, 289, 267],
        collaborativeCare: [145, 167, 189, 223, 267, 298, 334, 389, 445, 501, 567],
        povertyRate: [15.2, 14.8, 14.5, 13.9, 13.2, 12.8, 14.1, 13.4, 12.9, 12.1, 11.6],
        countyUnemploymentRate: [6.2, 5.4, 4.1, 3.6, 3.2, 2.9, 7.8, 5.1, 3.8, 3.2, 2.8],
        juvenileCaseTypes: {
            2022: { statusOffenses: 89, propertyOffenses: 67, personOffenses: 45, drugOffenses: 23, other: 88 },
            2023: { statusOffenses: 78, propertyOffenses: 62, personOffenses: 41, drugOffenses: 19, other: 89 }
        }
    },
    foodSecurity: {
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        childFoodInsecurityRate: [18.2, 17.8, 16.9, 16.3, 15.8, 15.2, 22.1, 19.4, 17.8, 16.9, 16.2],
        childFoodInsecurityCount: [7280, 7120, 6760, 6520, 6320, 6080, 8840, 7760, 7120, 6760, 6480],
        wicParticipants: [3420, 3380, 3290, 3180, 3090, 3010, 3650, 3480, 3290, 3150, 3080],
        freeReducedLunch: [8920, 8800, 8650, 8480, 8320, 8150, 9870, 9320, 8890, 8620, 8480],
        snapChildren: [5890, 6120, 5950, 6080, 6240, 6520, 8950, 7820, 7120, 6680, 6420]
    },
    childWelfare: {
        years: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        chinsActiveCases: [542, 521, 498, 476, 458, 441, 467, 434, 412, 489, 485],
        childrenRemoved: [156, 148, 142, 138, 134, 129, 145, 138, 131, 124, 127],
        fosterCare: [234, 226, 218, 212, 206, 198, 221, 210, 201, 195, 203]
    }
};

// Enhanced color palette for better visual hierarchy
const colors = {
    primary: '#2c5530',       // Enhanced forest green
    secondary: '#34495e',     // Enhanced navy
    accent1: '#16a085',       // Enhanced teal
    accent2: '#e67e22',       // Enhanced orange
    accent3: '#9b59b6',       // Enhanced purple
    success: '#27ae60',       // Enhanced success green
    warning: '#f39c12',       // Enhanced warning orange
    danger: '#e74c3c',        // Enhanced danger red
    light: '#ecf0f1',         // Enhanced light gray
    marker: '#8e44ad',        // Enhanced marker purple
    geographic: {
        low: '#d5f4e6',       // Light green
        medium: '#85e0a3',    // Medium green
        high: '#ffc107',      // Yellow
        veryHigh: '#fd7e14',  // Orange
        extreme: '#dc3545'    // Red
    },
    consequence: {
        gap: 'rgba(231, 76, 60, 0.2)',      // Semi-transparent red for gaps
        pressure: 'rgba(155, 89, 182, 0.3)', // Semi-transparent purple for pressure
        support: 'rgba(46, 204, 113, 0.6)'  // Semi-transparent green for support
    }
};

// Enhanced state management
const currentView = {
    economic: 'timeseries',
    education: { 
        demographic: 'overall', 
        cohort: 2020,
        drillDown: null
    },
    wellbeing: {
        synchronized: true
    }
};

/**
 * Enhanced Document Ready Function
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing MC3 Summit Enhanced Data Visualizations...');
    
    // Initialize all enhanced visualizations
    createEnhancedEconomicTimeSeries();
    createEnhancedEducationChart();
    createEnhancedWellbeingCharts();
    createEnhancedFoodSecurityChart();
    createChildWelfareChart();
    
    // Setup enhanced navigation and controls
    setupEnhancedNavigation();
    setupEconomicToggle();
    
    console.log('All enhanced visualizations initialized successfully!');
});

/**
 * Enhanced Navigation Setup
 */
function setupEnhancedNavigation() {
    // Enhanced sticky navigation with better visual hierarchy
    const navItems = document.querySelectorAll('.narrative-nav a');
    navItems.forEach(item => {
        item.style.fontSize = '1.1rem'; // Increased font size for better readability
        item.style.fontWeight = '500';  // Enhanced font weight
    });
    
    // Smooth scrolling enhancement
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest'
                });
            }
        });
    });
}

/**
 * Narrative 1: Enhanced Economic Analysis - From Correlation to Consequence
 */
function createEnhancedEconomicTimeSeries() {
    console.log('Creating enhanced economic time series with consequence visualization...');
    
    // Calculate "cost of living" proxy using childcare costs
    const costOfLiving = sampleData.economic.childcareCostDollar;
    
    // SNAP Recipients as background area (volume of need)
    const snapAreaTrace = {
        x: sampleData.economic.years,
        y: sampleData.economic.snapRecipients,
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'none',
        name: 'SNAP Recipients (Volume of Need)',
        fillcolor: colors.consequence.support,
        line: { width: 0 },
        yaxis: 'y3',
        hovertemplate: '<b>Community Support Volume</b><br>' +
                      'Year: %{x}<br>' +
                      'SNAP Recipients: %{y:,.0f}<br>' +
                      '<i>Background volume shows scale of need</i><extra></extra>'
    };
    
    // Primary income line
    const incomeTrace = {
        x: sampleData.economic.years,
        y: sampleData.economic.medianIncome,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Median Household Income',
        line: { color: colors.primary, width: 4 },
        marker: { size: 8, color: colors.primary },
        yaxis: 'y1',
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Income: $%{y:,.0f}<extra></extra>'
    };
    
    // Cost of living line
    const costTrace = {
        x: sampleData.economic.years,
        y: costOfLiving,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Childcare Costs',
        line: { color: colors.danger, width: 4 },
        marker: { size: 8, color: colors.danger },
        yaxis: 'y1',
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Cost: $%{y:,.0f}<extra></extra>'
    };
    
    // "Family Budget Squeeze" - shaded area between income and costs
    const budgetSqueezeTrace = {
        x: sampleData.economic.years.concat([...sampleData.economic.years].reverse()),
        y: sampleData.economic.medianIncome.concat([...costOfLiving].reverse()),
        fill: 'toself',
        type: 'scatter',
        mode: 'none',
        name: 'The Family Budget Squeeze',
        fillcolor: colors.consequence.pressure,
        line: { width: 0 },
        yaxis: 'y1',
        hoverinfo: 'skip',
        showlegend: true
    };

    const layout = {
        title: {
            text: 'The Economic Squeeze: Pressure, Consequence, and Community Response<br><sub>Income vs. Rising Costs with Volume of Community Need</sub>',
            font: { size: 20, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        xaxis: {
            title: { text: 'Year', font: { size: 14 } },
            gridcolor: colors.light,
            tickmode: 'linear',
            dtick: 1,
            range: [2013.5, 2024.5],
            tickfont: { size: 12 }
        },
        yaxis: {
            title: { text: 'Dollar Amount ($)', font: { size: 14 } },
            side: 'left',
            color: colors.primary,
            gridcolor: colors.light,
            tickformat: '$,.0f',
            position: 0.02,
            tickfont: { size: 12 }
        },
        yaxis3: {
            title: { text: 'SNAP Recipients', font: { size: 14 } },
            side: 'right',
            overlaying: 'y',
            color: colors.accent2,
            showgrid: false,
            position: 0.98,
            tickformat: ',',
            range: [0, Math.max(...sampleData.economic.snapRecipients) * 1.1],
            tickfont: { size: 12 }
        },
        hovermode: 'x unified',
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.95)',
            bordercolor: colors.light,
            borderwidth: 2,
            font: { size: 12 }
        },
        annotations: [
            {
                x: 2020,
                y: 0.85,
                yref: 'paper',
                text: '🔴 COVID-19 Impact:<br>Income drop, costs rise,<br>SNAP usage spikes',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.danger,
                font: { color: colors.danger, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.danger,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            },
            {
                x: 2024,
                y: 0.75,
                yref: 'paper',
                text: '📈 The Squeeze Widens:<br>Purple area shows growing<br>financial pressure on families',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.marker,
                font: { color: colors.marker, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.marker,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            }
        ],
        margin: { l: 100, r: 100, t: 100, b: 80 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('economic-chart', [snapAreaTrace, budgetSqueezeTrace, incomeTrace, costTrace], layout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

function createEconomicChoroplethMap() {
    const tractData = sampleData.economic.censusTractData;
    const tractIds = Object.keys(tractData);
    const stressValues = tractIds.map(id => tractData[id].stressIndex);
    const hoverTexts = tractIds.map(id => 
        `<b>${tractData[id].name}</b><br>` +
        `Poverty Rate: ${tractData[id].povertyRate}%<br>` +
        `Unemployment Rate: ${tractData[id].unemploymentRate}%<br>` +
        `Stress Index: ${(tractData[id].stressIndex * 100).toFixed(0)}/100`
    );

    const mapTrace = {
        type: 'choropleth',
        locationmode: 'geojson-id',
        z: stressValues,
        locations: tractIds,
        text: hoverTexts,
        hovertemplate: '%{text}<extra></extra>',
        colorscale: [
            [0, colors.geographic.low],
            [0.25, colors.geographic.medium],
            [0.5, colors.geographic.high],
            [0.75, colors.geographic.veryHigh],
            [1, colors.geographic.extreme]
        ],
        colorbar: {
            title: { text: 'Family Stress Index', font: { size: 14 } },
            tickvals: [0, 0.25, 0.5, 0.75, 1],
            ticktext: ['Low', 'Moderate', 'High', 'Very High', 'Extreme'],
            tickfont: { size: 12 }
        }
    };

    const mapLayout = {
        title: {
            text: 'Family Economic Stress by Census Tract<br><sub>Combined Poverty and Unemployment Index</sub>',
            font: { size: 20, color: colors.secondary }
        },
        geo: {
            scope: 'usa',
            projection: { type: 'mercator' },
            center: { lat: 39.1637, lon: -86.5264 },
            fitbounds: 'locations',
            bgcolor: 'white'
        },
        margin: { l: 100, r: 100, t: 100, b: 80 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('economic-chart', [mapTrace], mapLayout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

function setupEconomicToggle() {
    const toggleButton = document.getElementById('economic-toggle');
    if (toggleButton) {
        // Enhanced button styling
        toggleButton.style.fontSize = '1rem';
        toggleButton.style.fontWeight = '500';
        
        toggleButton.addEventListener('click', () => {
            if (currentView.economic === 'timeseries') {
                currentView.economic = 'geographic';
                toggleButton.textContent = 'View Time Series';
                createEconomicChoroplethMap();
            } else {
                currentView.economic = 'timeseries';
                toggleButton.textContent = 'Toggle Geographic Disparity View';
                createEnhancedEconomicTimeSeries();
            }
        });
    }
}

/**
 * Narrative 2: Enhanced Education Pathway with Drill-Down and Improved Filtering
 */
function createEnhancedEducationChart() {
    console.log('Creating enhanced education chart with drill-down capabilities...');
    setupEnhancedEducationControls();
    updateEnhancedEducationSankey();
}

function setupEnhancedEducationControls() {
    // Enhanced demographic dropdown with better styling
    const demographicSelect = document.getElementById('demographic-select');
    if (demographicSelect) {
        demographicSelect.style.fontSize = '1rem';
        demographicSelect.style.fontWeight = '500';
        
        // Clear existing options
        demographicSelect.innerHTML = '';
        
        Object.entries(sampleData.education.demographics).forEach(([key, demo]) => {
            if (demo.available) {
                const option = document.createElement('option');
                option.value = key;
                option.textContent = demo.label;
                demographicSelect.appendChild(option);
            }
        });

        demographicSelect.addEventListener('change', (e) => {
            currentView.education.demographic = e.target.value;
            currentView.education.drillDown = null; // Reset drill-down when changing demographics
            updateEnhancedEducationSankey();
        });
    }

    // Enhanced cohort buttons
    const cohortButtons = document.querySelectorAll('.cohort-btn');
    cohortButtons.forEach(btn => {
        btn.style.fontSize = '1rem';
        btn.style.fontWeight = '500';
    });

    document.getElementById('cohort-2015')?.addEventListener('click', () => {
        currentView.education.cohort = 2015;
        currentView.education.drillDown = null;
        updateEnhancedEducationSankey();
        updateCohortButtons();
    });

    document.getElementById('cohort-2020')?.addEventListener('click', () => {
        currentView.education.cohort = 2020;
        currentView.education.drillDown = null;
        updateEnhancedEducationSankey();
        updateCohortButtons();
    });
}

function updateCohortButtons() {
    document.querySelectorAll('.cohort-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`cohort-${currentView.education.cohort}`)?.classList.add('active');
}

function updateEnhancedEducationSankey() {
    const cohortData = sampleData.education.sankeyData[currentView.education.cohort];
    let demographicData = cohortData[currentView.education.demographic] || cohortData.overall;
    
    // Handle drill-down for suspended students
    if (currentView.education.drillDown === 'suspensions' && cohortData.suspendedOnly) {
        demographicData = cohortData.suspendedOnly;
    }
    
    const isDrillDown = currentView.education.drillDown === 'suspensions';
    const currentDemo = sampleData.education.demographics[currentView.education.demographic];
    
    let nodes, links;
    
    if (isDrillDown) {
        // Drill-down view: outcomes for suspended students only
        nodes = [
            { label: `Students with Suspensions<br>(${demographicData.totalEnrollment.toLocaleString()})` },
            { label: `Dropouts from Suspended<br>(${demographicData.dropouts.fromSuspended.toLocaleString()})` },
            { label: `Graduates Despite Suspension<br>(${demographicData.graduates.fromSuspended.toLocaleString()})` },
            { label: `Employed Despite Suspension<br>(${demographicData.employment.employed.toLocaleString()})` },
            { label: `Unemployed After Suspension<br>(${demographicData.employment.unemployed.toLocaleString()})` }
        ];

        links = [
            { source: 0, target: 1, value: demographicData.dropouts.fromSuspended, color: 'rgba(231, 76, 60, 0.8)' },
            { source: 0, target: 2, value: demographicData.graduates.fromSuspended, color: 'rgba(39, 174, 96, 0.6)' },
            { source: 2, target: 3, value: demographicData.employment.employed, color: 'rgba(22, 160, 133, 0.7)' },
            { source: 2, target: 4, value: demographicData.employment.unemployed, color: 'rgba(243, 156, 18, 0.7)' }
        ];
    } else {
        // Standard view: full student journey
        nodes = [
            { label: `9th Grade Enrollment<br>(${demographicData.totalEnrollment.toLocaleString()})` },
            { label: `Students with Suspensions<br>(${demographicData.suspendedStudents.toLocaleString()}) 🔍`, clickable: true },
            { label: `Dropouts<br>(${(demographicData.dropouts.fromMainPopulation + demographicData.dropouts.fromSuspended).toLocaleString()})` },
            { label: `Graduates<br>(${(demographicData.graduates.fromMainPopulation + demographicData.graduates.fromSuspended).toLocaleString()})` },
            { label: `Employed Youth<br>(${demographicData.employment.employed.toLocaleString()})` },
            { label: `Unemployed Youth<br>(${demographicData.employment.unemployed.toLocaleString()})` }
        ];

        links = [
            { source: 0, target: 1, value: demographicData.suspendedStudents, color: 'rgba(231, 76, 60, 0.5)' },
            { source: 0, target: 2, value: demographicData.dropouts.fromMainPopulation, color: 'rgba(231, 76, 60, 0.7)' },
            { source: 1, target: 2, value: demographicData.dropouts.fromSuspended, color: 'rgba(231, 76, 60, 0.9)' },
            { source: 0, target: 3, value: demographicData.graduates.fromMainPopulation, color: 'rgba(39, 174, 96, 0.7)' },
            { source: 1, target: 3, value: demographicData.graduates.fromSuspended, color: 'rgba(39, 174, 96, 0.5)' },
            { source: 3, target: 4, value: demographicData.employment.employed, color: 'rgba(22, 160, 133, 0.7)' },
            { source: 3, target: 5, value: demographicData.employment.unemployed, color: 'rgba(243, 156, 18, 0.7)' }
        ];
    }

    const sankeyTrace = {
        type: "sankey",
        orientation: "h",
        node: {
            pad: 20,
            thickness: 35,
            line: { color: colors.secondary, width: 2 },
            label: nodes.map(n => n.label),
            color: [colors.primary, colors.warning, colors.danger, colors.success, colors.accent1, colors.accent3],
            font: { size: 14 } // Increased font size for better readability
        },
        link: {
            source: links.map(l => l.source),
            target: links.map(l => l.target),
            value: links.map(l => l.value),
            color: links.map(l => l.color),
            hovertemplate: '<b>Student Flow</b><br>' +
                          'From: %{source.label}<br>' +
                          'To: %{target.label}<br>' +
                          'Students: %{value:,.0f}<extra></extra>'
        }
    };

    const titleText = isDrillDown ? 
        `Impact Analysis: Suspended Students Only (${currentView.education.cohort} Cohort - ${currentDemo.label})<br><sub>Click "Reset View" to return to full pathway</sub>` :
        `Student Journey (${currentView.education.cohort} Cohort - ${currentDemo.label})<br><sub>4-Year Pathway from 9th Grade to Post-Graduation Outcomes • Click 🔍 to drill down</sub>`;

    const sankeyLayout = {
        title: {
            text: titleText,
            font: { size: 18, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        font: { size: 14 }, // Increased base font size
        margin: { l: 50, r: 50, t: 100, b: 50 },
        paper_bgcolor: 'white',
        annotations: isDrillDown ? [
            {
                x: 0.02,
                y: 0.02,
                xref: 'paper',
                yref: 'paper',
                text: '<b>📊 Drill-Down Analysis:</b><br>This view shows outcomes specifically for students who experienced suspensions,<br>highlighting the significant impact of disciplinary actions on educational pathways.',
                showarrow: false,
                font: { color: colors.warning, size: 12 },
                align: 'left',
                bordercolor: colors.warning,
                borderwidth: 2,
                borderpad: 8,
                bgcolor: 'rgba(243, 156, 18, 0.1)'
            }
        ] : []
    };

    Plotly.newPlot('education-chart', [sankeyTrace], sankeyLayout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d', 'zoom2d', 'pan2d', 'autoScale2d']
    });

    // Setup click handler for drill-down functionality
    setupEducationClickHandler();
    
    // Show/hide reset button based on drill-down state
    const resetButton = document.getElementById('reset-education-view');
    if (resetButton) {
        resetButton.style.display = isDrillDown ? 'inline-block' : 'none';
        resetButton.style.fontSize = '1rem';
        resetButton.style.fontWeight = '500';
        
        resetButton.onclick = () => {
            currentView.education.drillDown = null;
            updateEnhancedEducationSankey();
        };
    }
}

function setupEducationClickHandler() {
    const educationChart = document.getElementById('education-chart');
    if (educationChart && !currentView.education.drillDown) {
        educationChart.on('plotly_click', function(data) {
            // Check if clicked on the "Students with Suspensions" node (index 1 in normal view)
            if (data.points[0].pointNumber === 1) {
                currentView.education.drillDown = 'suspensions';
                updateEnhancedEducationSankey();
            }
        });
    }
}

/**
 * Narrative 3: Enhanced Community Wellbeing with Stacked Areas
 */
function createEnhancedWellbeingCharts() {
    console.log('Creating enhanced wellbeing charts with stacked crisis indicators...');
    
    createEnhancedMainWellbeingChart();
    createUnderlyingStressorsChart();
    implementSynchronizedInteraction();
    setupJuvenileClickHandler();
    setupCollaborativeCareInfo();
}

function createEnhancedMainWellbeingChart() {
    // Transform individual crisis indicators into stacked areas
    const childAbuseValues = sampleData.wellbeing.childAbuseRate.map(val => val * 10); // Scale for visibility
    const juvenileValues = sampleData.wellbeing.juvenileCases.map(val => val / 10); // Scale for visibility
    
    // Create stacked areas for crisis indicators
    const childAbuseStackTrace = {
        x: sampleData.wellbeing.years,
        y: childAbuseValues,
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'none',
        name: 'Child Abuse & Neglect Cases',
        fillcolor: 'rgba(231, 76, 60, 0.6)',
        line: { width: 0 },
        stackgroup: 'crisis',
        hovertemplate: '<b>Child Abuse & Neglect</b><br>' +
                      'Year: %{x}<br>' +
                      'Rate: %{customdata:.1f} per 1,000<br>' +
                      '<i>Bottom layer of crisis index</i><extra></extra>',
        customdata: sampleData.wellbeing.childAbuseRate
    };

    const juvenileStackTrace = {
        x: sampleData.wellbeing.years,
        y: juvenileValues,
        fill: 'tonexty',
        type: 'scatter',
        mode: 'none',
        name: 'Juvenile Justice Cases',
        fillcolor: 'rgba(243, 156, 18, 0.6)',
        line: { width: 0 },
        stackgroup: 'crisis',
        hovertemplate: '<b>Juvenile Justice Cases</b><br>' +
                      'Year: %{x}<br>' +
                      'Cases: %{customdata:,.0f}<br>' +
                      '<i>Click for case breakdown</i><extra></extra>',
        customdata: sampleData.wellbeing.juvenileCases
    };

    // Collaborative care as overlay line
    const collaborativeTrace = {
        x: sampleData.wellbeing.years,
        y: sampleData.wellbeing.collaborativeCare,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Youth in Collaborative Care ⓘ',
        line: { color: colors.primary, width: 5 },
        marker: { size: 10, color: colors.primary },
        yaxis: 'y2',
        hovertemplate: '<b>Proactive Community Care</b><br>' +
                      'Year: %{x}<br>' +
                      'Youth Served: %{y:,.0f}<br>' +
                      '<i>Hover for program details</i><extra></extra>'
    };

    const wellbeingLayout = {
        title: {
            text: 'Community Well-being: Crisis Components and Proactive Response<br><sub>Stacked crisis indicators with overlaid collaborative care growth</sub>',
            font: { size: 20, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        xaxis: {
            title: { text: 'Year', font: { size: 14 } },
            gridcolor: colors.light,
            tickmode: 'linear',
            dtick: 1,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: { text: 'Crisis Index Components<br>(Scaled for Visibility)', font: { size: 14 } },
            side: 'left',
            color: colors.danger,
            gridcolor: colors.light,
            tickfont: { size: 12 }
        },
        yaxis2: {
            title: { text: 'Youth in Collaborative Care', font: { size: 14 } },
            side: 'right',
            overlaying: 'y',
            color: colors.primary,
            tickfont: { size: 12 }
        },
        hovermode: 'x unified',
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.95)',
            bordercolor: colors.light,
            borderwidth: 2,
            font: { size: 12 }
        },
        annotations: [
            {
                x: 2017,
                y: 0.85,
                yref: 'paper',
                text: '📈 Key Insight:<br>As collaborative care expands,<br>crisis indicators decline',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.primary,
                font: { color: colors.primary, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.primary,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            },
            {
                x: 2020,
                y: 0.75,
                yref: 'paper',
                text: '🎯 Total Crisis Index:<br>Top edge shows combined<br>community safety measure',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.secondary,
                font: { color: colors.secondary, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.secondary,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            }
        ],
        margin: { l: 100, r: 100, t: 100, b: 60 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('wellbeing-chart', [childAbuseStackTrace, juvenileStackTrace, collaborativeTrace], wellbeingLayout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

function createUnderlyingStressorsChart() {
    const povertyTrace = {
        x: sampleData.wellbeing.years,
        y: sampleData.wellbeing.povertyRate,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Child Poverty Rate',
        line: { color: colors.accent2, width: 4 },
        marker: { size: 8, color: colors.accent2 },
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Rate: %{y:.1f}%<extra></extra>'
    };

    const unemploymentTrace = {
        x: sampleData.wellbeing.years,
        y: sampleData.wellbeing.countyUnemploymentRate,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'County Unemployment Rate',
        line: { color: colors.accent3, width: 4 },
        marker: { size: 8, color: colors.accent3 },
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Rate: %{y:.1f}%<extra></extra>'
    };

    const stressorsLayout = {
        title: {
            text: 'Underlying Community Stressors<br><sub>Economic factors that drive crisis indicators above</sub>',
            font: { size: 18, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        xaxis: {
            title: { text: 'Year', font: { size: 14 } },
            gridcolor: colors.light,
            tickmode: 'linear',
            dtick: 1,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: { text: 'Percentage (%)', font: { size: 14 } },
            gridcolor: colors.light,
            ticksuffix: '%',
            tickfont: { size: 12 }
        },
        hovermode: 'x unified',
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.95)',
            bordercolor: colors.light,
            borderwidth: 2,
            font: { size: 12 }
        },
        margin: { l: 80, r: 80, t: 80, b: 50 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('stressors-chart', [povertyTrace, unemploymentTrace], stressorsLayout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

function implementSynchronizedInteraction() {
    const wellbeingChart = document.getElementById('wellbeing-chart');
    const stressorsChart = document.getElementById('stressors-chart');

    function syncHover(eventData) {
        if (eventData.points && eventData.points.length > 0) {
            const year = eventData.points[0].x;
            const yearIndex = sampleData.wellbeing.years.indexOf(year);
            
            // Highlight corresponding points on both charts
            if (yearIndex !== -1) {
                // Enhanced hover highlighting with better visual feedback
                const highlightUpdate = {
                    'marker.size': Array(sampleData.wellbeing.years.length).fill(8).map((size, idx) => 
                        idx === yearIndex ? 15 : size),
                    'marker.line.width': Array(sampleData.wellbeing.years.length).fill(0).map((width, idx) => 
                        idx === yearIndex ? 3 : width),
                    'marker.line.color': Array(sampleData.wellbeing.years.length).fill('').map((color, idx) => 
                        idx === yearIndex ? colors.secondary : color)
                };
                
                // Apply highlight to both charts
                [wellbeingChart, stressorsChart].forEach(chart => {
                    if (chart) {
                        Plotly.restyle(chart, highlightUpdate, Array.from({length: 3}, (_, i) => i));
                    }
                });
            }
        }
    }

    if (wellbeingChart && stressorsChart) {
        wellbeingChart.on('plotly_hover', syncHover);
        stressorsChart.on('plotly_hover', syncHover);
        
        // Reset highlighting on unhover
        const resetHover = () => {
            const resetUpdate = {
                'marker.size': Array(sampleData.wellbeing.years.length).fill(8),
                'marker.line.width': Array(sampleData.wellbeing.years.length).fill(0)
            };
            
            [wellbeingChart, stressorsChart].forEach(chart => {
                if (chart) {
                    Plotly.restyle(chart, resetUpdate, Array.from({length: 3}, (_, i) => i));
                }
            });
        };
        
        wellbeingChart.on('plotly_unhover', resetHover);
        stressorsChart.on('plotly_unhover', resetHover);
    }
}

function setupJuvenileClickHandler() {
    const wellbeingChart = document.getElementById('wellbeing-chart');
    if (wellbeingChart) {
        wellbeingChart.on('plotly_click', function(data) {
            // Check if clicked on juvenile justice trace
            if (data.points[0].curveNumber === 1) { // Juvenile stack trace
                const year = data.points[0].x;
                showJuvenileCaseModal(year);
            }
        });
    }
}

function showJuvenileCaseModal(year) {
    const caseData = sampleData.wellbeing.juvenileCaseTypes[year] || sampleData.wellbeing.juvenileCaseTypes[2023];
    const modal = document.getElementById('juvenile-modal');
    const modalContent = document.getElementById('modal-case-breakdown');
    
    if (modal && modalContent) {
        // Create enhanced donut chart
        const donutTrace = {
            values: Object.values(caseData),
            labels: ['Status Offenses', 'Property Offenses', 'Person Offenses', 'Drug Offenses', 'Other'],
            type: 'pie',
            hole: 0.4,
            textinfo: 'label+percent',
            textposition: 'outside',
            marker: {
                colors: [colors.accent2, colors.danger, colors.accent3, colors.warning, colors.secondary],
                line: { color: 'white', width: 3 }
            },
            hovertemplate: '<b>%{label}</b><br>' +
                          'Cases: %{value:,.0f}<br>' +
                          'Percentage: %{percent}<extra></extra>'
        };

        const donutLayout = {
            title: {
                text: `Juvenile Case Breakdown (${year})<br><sub>Total Cases: ${Object.values(caseData).reduce((a, b) => a + b, 0)}</sub>`,
                font: { size: 16, color: colors.secondary }
            },
            font: { size: 12 },
            showlegend: true,
            legend: { font: { size: 11 } },
            margin: { t: 80, b: 40, l: 40, r: 40 },
            paper_bgcolor: 'white'
        };

        Plotly.newPlot('modal-case-breakdown', [donutTrace], donutLayout, {
            responsive: true,
            displayModeBar: false
        });

        modal.style.display = 'block';
    }
}

function setupCollaborativeCareInfo() {
    const careIcon = document.querySelector('.care-info-icon');
    const tooltip = document.querySelector('.care-tooltip');
    
    if (careIcon && tooltip) {
        // Enhanced tooltip styling
        tooltip.style.fontSize = '0.9rem';
        tooltip.style.lineHeight = '1.4';
        
        careIcon.addEventListener('mouseenter', () => {
            tooltip.style.display = 'block';
        });
        
        careIcon.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    }
}

/**
 * Narrative 4: Enhanced Food Security with Nutrition Gap Visualization
 */
function createEnhancedFoodSecurityChart() {
    console.log('Creating enhanced food security chart with nutrition gap visualization...');
    
    // Support programs as stacked areas
    const wicTrace = {
        x: sampleData.foodSecurity.years,
        y: sampleData.foodSecurity.wicParticipants,
        fill: 'tozeroy',
        type: 'scatter',
        mode: 'none',
        name: 'WIC Participants',
        fillcolor: colors.consequence.support,
        line: { width: 0 },
        stackgroup: 'support',
        hovertemplate: '<b>WIC Support</b><br>' +
                      'Year: %{x}<br>' +
                      'Children: %{y:,.0f}<br>' +
                      '<i>Base layer of nutrition support</i><extra></extra>'
    };

    const lunchTrace = {
        x: sampleData.foodSecurity.years,
        y: sampleData.foodSecurity.freeReducedLunch.map((val, idx) => 
            val - sampleData.foodSecurity.wicParticipants[idx]),
        fill: 'tonexty',
        type: 'scatter',
        mode: 'none',
        name: 'Free/Reduced Lunch (Additional)',
        fillcolor: 'rgba(46, 204, 113, 0.5)',
        line: { width: 0 },
        stackgroup: 'support',
        hovertemplate: '<b>School Lunch Support</b><br>' +
                      'Year: %{x}<br>' +
                      'Additional Children: %{y:,.0f}<br>' +
                      '<i>Second layer of support</i><extra></extra>'
    };

    const snapTrace = {
        x: sampleData.foodSecurity.years,
        y: sampleData.foodSecurity.snapChildren.map((val, idx) => 
            val - sampleData.foodSecurity.freeReducedLunch[idx] + sampleData.foodSecurity.wicParticipants[idx]),
        fill: 'tonexty',
        type: 'scatter',
        mode: 'none',
        name: 'SNAP Children (Additional)',
        fillcolor: 'rgba(22, 160, 133, 0.5)',
        line: { width: 0 },
        stackgroup: 'support',
        hovertemplate: '<b>SNAP Support</b><br>' +
                      'Year: %{x}<br>' +
                      'Additional Children: %{y:,.0f}<br>' +
                      '<i>Top layer of support</i><extra></extra>'
    };

    // Total food insecurity line
    const insecurityTrace = {
        x: sampleData.foodSecurity.years,
        y: sampleData.foodSecurity.childFoodInsecurityCount,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Total Child Food Insecurity',
        line: { color: colors.danger, width: 5 },
        marker: { size: 10, color: colors.danger },
        hovertemplate: '<b>Food Insecurity Need</b><br>' +
                      'Year: %{x}<br>' +
                      'Children: %{y:,.0f}<br>' +
                      '<i>Red line shows total need</i><extra></extra>'
    };

    // Calculate nutrition gap for shaded area
    const totalSupport = sampleData.foodSecurity.years.map((year, idx) => {
        return Math.max(
            sampleData.foodSecurity.wicParticipants[idx],
            sampleData.foodSecurity.freeReducedLunch[idx],
            sampleData.foodSecurity.snapChildren[idx]
        );
    });

    const gapTop = sampleData.foodSecurity.childFoodInsecurityCount;
    const gapBottom = totalSupport;

    // Community Nutrition Gap visualization
    const nutritionGapTrace = {
        x: sampleData.foodSecurity.years.concat([...sampleData.foodSecurity.years].reverse()),
        y: gapTop.concat([...gapBottom].reverse()),
        fill: 'toself',
        type: 'scatter',
        mode: 'none',
        name: 'The Community Nutrition Gap',
        fillcolor: colors.consequence.gap,
        line: { width: 0 },
        hoverinfo: 'skip',
        showlegend: true
    };

    const layout = {
        title: {
            text: 'Community Food Security: Support Systems and the Nutrition Gap<br><sub>Stacked support programs with highlighted gap showing unmet need</sub>',
            font: { size: 20, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        xaxis: {
            title: { text: 'Year', font: { size: 14 } },
            gridcolor: colors.light,
            tickmode: 'linear',
            dtick: 1,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: { text: 'Number of Children', font: { size: 14 } },
            gridcolor: colors.light,
            tickformat: ',',
            tickfont: { size: 12 }
        },
        hovermode: 'x unified',
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.95)',
            bordercolor: colors.light,
            borderwidth: 2,
            font: { size: 12 }
        },
        annotations: [
            {
                x: 2020,
                y: 0.85,
                yref: 'paper',
                text: '🔴 COVID-19 Impact:<br>Food insecurity spikes,<br>gap widens dramatically',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.danger,
                font: { color: colors.danger, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.danger,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            },
            {
                x: 2024,
                y: 0.7,
                yref: 'paper',
                text: '📊 The Red Shaded Area:<br>6,480 children still face<br>food insecurity gaps',
                showarrow: true,
                arrowhead: 2,
                arrowcolor: colors.secondary,
                font: { color: colors.secondary, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.secondary,
                borderwidth: 2,
                borderpad: 6,
                bgcolor: 'rgba(255,255,255,0.9)'
            }
        ],
        margin: { l: 100, r: 100, t: 100, b: 80 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('food-security-chart', [wicTrace, lunchTrace, snapTrace, nutritionGapTrace, insecurityTrace], layout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

/**
 * Enhanced Child Welfare Chart
 */
function createChildWelfareChart() {
    console.log('Creating enhanced child welfare intervention flow chart...');
    
    const chinsTrace = {
        x: sampleData.childWelfare.years,
        y: sampleData.childWelfare.chinsActiveCases,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'CHINS Active Cases',
        line: { color: colors.warning, width: 4 },
        marker: { size: 10, color: colors.warning },
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Cases: %{y:,.0f}<extra></extra>'
    };

    const removedTrace = {
        x: sampleData.childWelfare.years,
        y: sampleData.childWelfare.childrenRemoved,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Children Removed',
        line: { color: colors.danger, width: 4 },
        marker: { size: 10, color: colors.danger },
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Children: %{y:,.0f}<extra></extra>'
    };

    const fosterTrace = {
        x: sampleData.childWelfare.years,
        y: sampleData.childWelfare.fosterCare,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Foster Care',
        line: { color: colors.accent3, width: 4 },
        marker: { size: 10, color: colors.accent3 },
        hovertemplate: '<b>%{fullData.name}</b><br>' +
                      'Year: %{x}<br>' +
                      'Children: %{y:,.0f}<extra></extra>'
    };

    const welfareLayout = {
        title: {
            text: 'Child Welfare System: Intervention Points and Trends<br><sub>A decade of system evolution and family support</sub>',
            font: { size: 20, color: colors.secondary, family: 'Arial, sans-serif' }
        },
        xaxis: {
            title: { text: 'Year', font: { size: 14 } },
            gridcolor: colors.light,
            tickmode: 'linear',
            dtick: 1,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: { text: 'Number of Cases/Children', font: { size: 14 } },
            gridcolor: colors.light,
            tickformat: ',',
            tickfont: { size: 12 }
        },
        hovermode: 'x unified',
        legend: {
            x: 0.02,
            y: 0.98,
            bgcolor: 'rgba(255,255,255,0.95)',
            bordercolor: colors.light,
            borderwidth: 2,
            font: { size: 12 }
        },
        annotations: [
            {
                x: 2020,
                y: 0.8,
                yref: 'paper',
                text: '📈 2024 Current State:<br>485 Active Cases<br>127 Children Removed<br>203 in Foster Care',
                showarrow: false,
                font: { color: colors.secondary, size: 12, family: 'Arial' },
                align: 'center',
                bordercolor: colors.secondary,
                borderwidth: 2,
                borderpad: 8,
                bgcolor: 'rgba(255,255,255,0.9)'
            }
        ],
        margin: { l: 100, r: 100, t: 100, b: 80 },
        plot_bgcolor: 'white',
        paper_bgcolor: 'white'
    };

    Plotly.newPlot('child-welfare-chart', [chinsTrace, removedTrace, fosterTrace], welfareLayout, {
        responsive: true,
        displayModeBar: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });
}

/**
 * Enhanced Modal and Interaction Handlers
 */

// Modal close functionality with enhanced UI
window.onclick = function(event) {
    const modal = document.getElementById('juvenile-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Close button functionality
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close');
    if (closeBtn) {
        closeBtn.style.fontSize = '2rem'; // Increased close button size
        closeBtn.addEventListener('click', function() {
            document.getElementById('juvenile-modal').style.display = 'none';
        });
    }
});

// Enhanced responsive behavior
window.addEventListener('resize', function() {
    // Redraw all charts on resize for better responsiveness
    const chartIds = ['economic-chart', 'education-chart', 'wellbeing-chart', 'stressors-chart', 'food-security-chart', 'child-welfare-chart'];
    chartIds.forEach(id => {
        const element = document.getElementById(id);
        if (element && element.layout) {
            Plotly.Plots.resize(element);
        }
    });
});

console.log('MC3 Summit Enhanced Visualizations Script Loaded Successfully - V4 Final'); 