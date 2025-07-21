# Monroe County Data Organization Structure

## Overview
The Monroe County Government datasets have been reorganized into 6 main categories for easier navigation and analysis. This structure follows the data analysis rules outlined in `rules.md`.

## Folder Structure

### 01_Demographics_ACS/
**American Community Survey (ACS) Data - 2010-2023**
- `B07009_Geographical_Mobility/` - Geographical Mobility by Educational Attainment
- `S1401_School_Enrollment/` - School Enrollment data
- `S1501_Educational_Attainment/` - Educational Attainment levels
- `S1701_Poverty_Status/` - Poverty Status in Past 12 Months
- `S1702_Family_Poverty_Status/` - Family Poverty Status
- `S1901_Income/` - Income in Past 12 Months (inflation-adjusted)
- `S1902_Mean_Income/` - Mean Income (inflation-adjusted)
- `S1903_Median_Income/` - Median Income (inflation-adjusted)
- `S2201_SNAP_Food_Stamps/` - SNAP/Food Stamps participation
- `S2301_Employment_Status/` - Employment Status data

### 02_Economic_Data/
**Economic and Employment Indicators**
- `Unemployment_Estimates/` - Annual Census Tract Unemployment Estimates (2016-2025)

### 03_Education_Data/
**Education System Metrics**
- `High school dropout rate.xlsx`
- `High school graduation rate.xlsx`
- `Student enrollment.xlsx`
- `Suspensions.xlsx`
- `Public school students receiving free or reduced price lunches.xlsx`
- `Homeless or housing unstable students.xlsx`

### 04_Social_Services/
**Child Welfare and Social Services**
- `Child abuse and neglect rate per 1,000 children under age 18.xlsx`
- `Child care cost-to-income ratio.xlsx`
- `Child food insecurity.xlsx`
- `Child population by age group.xlsx`
- `Children in foster care at some point.xlsx`
- `Total children removed from household.xlsx`
- `Juvenile case filings by type.xlsx`
- `Juvenile releases.xlsx`
- `Monthly average number of families receiving TANF.xlsx`
- `Monthly average number of persons issued food stamps (SNAP).xlsx`
- `Women, infants, and children (WIC) participants.xlsx`
- `Youth in collaborative care.xlsx`

### 05_Geographic_Data/
**Spatial Data and Geographic Boundaries**
- `Census_Tracts_2010/` - 2010 Census Tract Shapefiles
- `Census_Tracts_2024/` - 2024 Census Tract Shapefiles

### 06_Edited_Datasets/
**Converted and Processed Data**
- *This folder is designated for any data converted to readable formats (CSV, JSON, etc.)*
- *All original data must remain unchanged per rules.md*
- *Document any conversion processes used*

## Data Analysis Guidelines

### Key Principles:
1. **NEVER modify original data** - All source files remain unchanged
2. **Use only datasets in this directory** - No external data sources
3. **Follow Monroe County standards** - Reference https://www.co.monroe.in.us/
4. **Document all processes** - See `rules.md` for complete guidelines

### Geographic Considerations:
- Two sets of census tract boundaries available (2010 and 2024)
- Account for boundary changes when analyzing temporal trends
- Use appropriate spatial references for Monroe County, Indiana

### Temporal Coverage:
- **ACS Data:** 2010-2023 (5-year estimates)
- **Unemployment Data:** 2016-2025
- **Individual metrics:** Various years, check each file

### File Formats:
- **ACS Data:** CSV files with metadata and table notes
- **Individual Metrics:** Excel (.xlsx) files
- **Geographic Data:** Shapefiles (.shp, .dbf, .prj, etc.)

## Usage Notes

### For Analysis:
1. Refer to `rules.md` for complete analysis protocols
2. Use appropriate statistical methods for ACS margin of error
3. Document all analysis steps and assumptions
4. Maintain data provenance and attribution

### For Visualization:
1. Follow Monroe County branding guidelines
2. Include proper data source attribution
3. Use accessible color schemes
4. Provide geographic context for maps

### Data Conversion:
- Convert to readable formats only when necessary
- Save converted files to `06_Edited_Datasets/`
- Document conversion process and tools used
- Preserve original file structure and values

## Contact
For questions about Monroe County data policies and standards:
- Official Website: https://www.co.monroe.in.us/
- GIS Division: For geographic data questions
- Follow official Monroe County communication channels

---
**Last Updated:** [Current Date]  
**Organization Version:** 1.0  
**Compliance:** Monroe County Data Analysis Rules 