/**
 * MC3 Summit 2025 - Professional Visualization Controller
 * Optimized for performance and professional appearance
 */

class VisualizationController {
    constructor() {
        this.charts = new Map();
        this.dataCache = new Map();
        this.dataQuality = new Map();
        this.observers = new Map();
        this.animationFrame = null;
        
        // Professional color palette
        this.colors = {
            primary: '#1f4e79',
            secondary: '#2563eb', 
            success: '#10b981',
            warning: '#f59e0b',
            danger: '#ef4444',
            info: '#3b82f6',
            light: '#f8fafc',
            dark: '#2d3748'
        };
        
        // Chart color schemes
        this.chartColors = [
            '#1f4e79', '#2563eb', '#10b981', '#f59e0b', 
            '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
        ];
        
        this.init();
    }

    init() {
        this.setupPerformanceOptimizations();
        this.setupIntersectionObserver();
        this.setupResizeHandler();
        this.loadDefaultCharts();
    }

    setupPerformanceOptimizations() {
        // Set Chart.js defaults for performance
        Chart.defaults.responsive = true;
        Chart.defaults.maintainAspectRatio = false;
        Chart.defaults.animation.duration = 750;
        Chart.defaults.elements.point.radius = 4;
        Chart.defaults.elements.point.hoverRadius = 6;
        Chart.defaults.elements.line.borderWidth = 2;
        Chart.defaults.elements.bar.borderWidth = 0;
        
        // Performance optimizations
        Chart.defaults.interaction.intersect = false;
        Chart.defaults.interaction.mode = 'index';
        Chart.defaults.hover.animationDuration = 200;
        Chart.defaults.responsiveAnimationDuration = 300;
    }

    setupIntersectionObserver() {
        const observerOptions = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadChartForElement(entry.target);
                }
            });
        }, observerOptions);
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 150);
        });
    }

    handleResize() {
        this.charts.forEach(chart => {
            if (chart && typeof chart.resize === 'function') {
                requestAnimationFrame(() => {
                    chart.resize();
                });
            }
        });
    }

    loadDefaultCharts() {
        requestAnimationFrame(() => {
            this.observeChartElements();
            this.initializeVisibleCharts();
        });
    }

    observeChartElements() {
        const chartElements = document.querySelectorAll('canvas[id*="Chart"]');
        chartElements.forEach(element => {
            this.intersectionObserver.observe(element);
        });
    }

    initializeVisibleCharts() {
        const visibleCharts = document.querySelectorAll('canvas[id*="Chart"]');
        visibleCharts.forEach(element => {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            if (isVisible) {
                this.loadChartForElement(element);
            }
        });
    }

    loadChartForElement(element) {
        if (this.charts.has(element.id)) return;

        const chartType = this.getChartTypeFromId(element.id);
        const loadMethod = `create${chartType}`;
        
        if (typeof this[loadMethod] === 'function') {
            this.showLoadingState(element);
            requestAnimationFrame(() => {
                this[loadMethod]().then(() => {
                    this.hideLoadingState(element);
                }).catch(error => {
                    this.showErrorState(element, error);
                });
            });
        }
    }

    getChartTypeFromId(id) {
        const idMap = {
            'povertyEducationChart': 'PovertyEducationChart',
            'familyStabilityChart': 'FamilyStabilityChart',
            'populationChart': 'PopulationChart',
            'incomeChart': 'IncomeChart',
            'employmentChart': 'EmploymentChart',
            'graduationChart': 'GraduationChart',
            'achievementChart': 'AchievementChart',
            'enrollmentChart': 'EnrollmentChart',
            'foodAssistanceChart': 'FoodAssistanceChart',
            'housingAssistanceChart': 'HousingAssistanceChart',
            'childcareChart': 'ChildcareChart',
            'educationEconomicsChart': 'EducationEconomicsChart',
            'healthServicesChart': 'HealthServicesChart',
            'multiFactorChart': 'MultiFactorChart'
        };
        return idMap[id] || 'DefaultChart';
    }

    getBaseChartConfig() {
        return {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 750,
                easing: 'easeInOutQuart'
            },
            layout: {
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'start',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: {
                            size: 12,
                            weight: '500'
                        },
                        color: '#2d3748'
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1f4e79',
                    bodyColor: '#4a5568',
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true,
                    titleFont: {
                        size: 13,
                        weight: '600'
                    },
                    bodyFont: {
                        size: 12
                    },
                    padding: 12
                }
            },
            scales: {
                x: {
                    grid: {
                        color: '#f1f5f9',
                        lineWidth: 1
                    },
                    ticks: {
                        color: '#64748b',
                        font: {
                            size: 11
                        }
                    }
                },
                y: {
                    grid: {
                        color: '#f1f5f9',
                        lineWidth: 1
                    },
                    ticks: {
                        color: '#64748b',
                        font: {
                            size: 11
                        }
                    }
                }
            }
        };
    }

    showLoadingState(element) {
        const container = element.closest('.visualization-container');
        if (container) {
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'chart-loading';
            loadingDiv.innerHTML = `
                <div class="loading-spinner"></div>
                Loading visualization...
            `;
            container.appendChild(loadingDiv);
        }
    }

    hideLoadingState(element) {
        const container = element.closest('.visualization-container');
        if (container) {
            const loading = container.querySelector('.chart-loading');
            if (loading) {
                loading.remove();
            }
        }
    }

    showErrorState(element, error) {
        const container = element.closest('.visualization-container');
        if (container) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'chart-error';
            errorDiv.textContent = 'Unable to load visualization. Please try again.';
            container.appendChild(errorDiv);
        }
        console.error('Chart loading error:', error);
    }

    async createPovertyEducationChart() {
        const canvas = document.getElementById('povertyEducationChart');
        if (!canvas || this.charts.has('povertyEducationChart')) return;

        const data = await this.loadDataset('demographics');
        
        const config = {
            ...this.getBaseChartConfig(),
            type: 'scatter',
            data: {
                datasets: [{
                    label: 'Education vs Poverty Rate',
                    data: [
                        {x: 87.3, y: 18.4}, {x: 89.2, y: 15.2}, {x: 81.4, y: 24.8},
                        {x: 83.7, y: 21.5}, {x: 79.8, y: 28.9}, {x: 91.5, y: 12.3}
                    ],
                    backgroundColor: this.chartColors[0],
                    borderColor: this.chartColors[0],
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                ...this.getBaseChartConfig().options,
                scales: {
                    x: {
                        ...this.getBaseChartConfig().scales.x,
                        title: {
                            display: true,
                            text: 'High School Graduation Rate (%)',
                            color: '#2d3748',
                            font: { size: 12, weight: '600' }
                        }
                    },
                    y: {
                        ...this.getBaseChartConfig().scales.y,
                        title: {
                            display: true,
                            text: 'Child Poverty Rate (%)',
                            color: '#2d3748',
                            font: { size: 12, weight: '600' }
                        }
                    }
                }
            }
        };

        const chart = new Chart(canvas, config);
        this.charts.set('povertyEducationChart', chart);
        this.addExportControls(canvas, 'poverty-education-correlation');
    }

    async createPopulationChart() {
        const canvas = document.getElementById('populationChart');
        if (!canvas || this.charts.has('populationChart')) return;

        const data = await this.loadDataset('demographics');
        
        const config = {
            ...this.getBaseChartConfig(),
            type: 'doughnut',
            data: {
                labels: ['0-4 years', '5-9 years', '10-14 years', '15-17 years'],
                datasets: [{
                    data: [8234, 8156, 7899, 4158],
                    backgroundColor: this.chartColors.slice(0, 4),
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                ...this.getBaseChartConfig().options,
                cutout: '50%',
                plugins: {
                    ...this.getBaseChartConfig().plugins,
                    legend: {
                        position: 'right'
                    }
                }
            }
        };

        const chart = new Chart(canvas, config);
        this.charts.set('populationChart', chart);
        this.addExportControls(canvas, 'child-population-distribution');
    }

    async createEmploymentChart() {
        const canvas = document.getElementById('employmentChart');
        if (!canvas || this.charts.has('employmentChart')) return;

        const data = await this.loadDataset('economy');
        
        const config = {
            ...this.getBaseChartConfig(),
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
                datasets: [{
                    label: 'Unemployment Rate (%)',
                    data: [3.8, 7.2, 5.1, 3.9, 3.2, 2.8],
                    borderColor: this.chartColors[0],
                    backgroundColor: this.chartColors[0] + '20',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Labor Force Participation (%)',
                    data: [69.2, 66.8, 67.5, 68.1, 67.8, 68.3],
                    borderColor: this.chartColors[1],
                    backgroundColor: this.chartColors[1] + '20',
                    tension: 0.4,
                    fill: false,
                    yAxisID: 'y1'
                }]
            },
            options: {
                ...this.getBaseChartConfig().options,
                scales: {
                    ...this.getBaseChartConfig().scales,
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                            color: '#f1f5f9'
                        },
                        ticks: {
                            color: '#64748b',
                            font: { size: 11 }
                        }
                    }
                }
            }
        };

        const chart = new Chart(canvas, config);
        this.charts.set('employmentChart', chart);
        this.addExportControls(canvas, 'employment-trends');
    }

    addExportControls(canvas, filename) {
        const container = canvas.closest('.visualization-container');
        if (!container || container.querySelector('.chart-controls')) return;

        const controlsDiv = document.createElement('div');
        controlsDiv.className = 'chart-controls';
        controlsDiv.innerHTML = `
            <button class="export-btn" onclick="window.vizController.exportChart('${canvas.id}', 'png', '${filename}')">
                Export PNG
            </button>
            <button class="export-btn" onclick="window.vizController.exportChart('${canvas.id}', 'pdf', '${filename}')">
                Export PDF
            </button>
        `;
        container.appendChild(controlsDiv);
    }

    exportChart(chartId, format, filename) {
        const chart = this.charts.get(chartId);
        if (!chart) return;

        try {
            if (format === 'png') {
                const url = chart.toBase64Image('image/png', 1.0);
                this.downloadImage(url, `${filename}.png`);
            } else if (format === 'pdf') {
                this.exportToPDF(chart, filename);
            }
        } catch (error) {
            console.error('Export error:', error);
        }
    }

    downloadImage(url, filename) {
        const link = document.createElement('a');
        link.download = filename;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    async loadDataset(name) {
        if (this.dataCache.has(name)) {
            return this.dataCache.get(name);
        }

        try {
            const response = await fetch(`data/processed/${name}.json`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            
            const data = await response.json();
            this.dataCache.set(name, data);
            this.dataQuality.set(name, data.metadata?.qualityScore || 0.95);
            return data;
        } catch (error) {
            console.warn(`Loading sample data for ${name}:`, error);
            return this.generateSampleData(name);
        }
    }

    generateSampleData(type) {
        const sampleData = {
            demographics: {
                metadata: { qualityScore: 0.98 },
                totalPopulation: 139718,
                children: { total: 28447 }
            },
            economy: {
                metadata: { qualityScore: 0.97 },
                employment: { unemploymentRate: 3.2 }
            },
            education: {
                metadata: { qualityScore: 0.99 },
                graduation: { rate: 87.3 }
            }
        };
        return sampleData[type] || { metadata: { qualityScore: 0.95 } };
    }

    destroy() {
        if (this.intersectionObserver) {
            this.intersectionObserver.disconnect();
        }
        
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        
        this.charts.forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        
        this.charts.clear();
        this.dataCache.clear();
        this.dataQuality.clear();
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.vizController = new VisualizationController();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VisualizationController;
} 