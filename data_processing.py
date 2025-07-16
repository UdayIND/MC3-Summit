#!/usr/bin/env python3
"""
MC3 Summit Data Processing Script
Processes all datasets for the 2025 Monroe County Childhood Conditions Summit
"A Decade of Growth: Empowering Youth, Strengthening Our Village"
"""

import pandas as pd
import numpy as np
import os
import glob
import re
from pathlib import Path
import warnings
warnings.filterwarnings('ignore')

class MC3DataProcessor:
    def __init__(self, data_dir="."):
        self.data_dir = Path(data_dir)
        self.output_dir = Path("processed_data")
        self.output_dir.mkdir(exist_ok=True)
        
    def clean_column_names(self, df):
        """Standardize column names to snake_case"""
        df.columns = df.columns.str.lower().str.replace(' ', '_').str.replace('-', '_')
        df.columns = df.columns.str.replace(r'[^\w]', '_', regex=True)
        df.columns = df.columns.str.replace(r'_+', '_', regex=True)
        df.columns = df.columns.str.strip('_')
        return df
    
    def extract_year_from_filename(self, filename):
        """Extract year from filename"""
        year_match = re.search(r'(\d{4})', str(filename))
        if year_match:
            return int(year_match.group(1))
        return None
    
    def process_census_income_data(self):
        """Process S1903 Median Income data from multiple years"""
        print("Processing median income data...")
        
        income_data = []
        income_dir = self.data_dir / "S1903Median Income in the Past 12 Months (in 2023 Inflation-Adjusted Dollars)"
        
        # Find all data files
        data_files = glob.glob(str(income_dir / "*Data.csv"))
        
        for file_path in data_files:
            year = self.extract_year_from_filename(file_path)
            if year:
                df = pd.read_csv(file_path)
                
                # Filter for Monroe County
                monroe_data = df[df['NAME'].str.contains('Monroe County', na=False)]
                
                if not monroe_data.empty:
                    # Extract household median income (column S1903_C03_001E)
                    median_income = monroe_data['S1903_C03_001E'].iloc[0]
                    
                    # Clean the income value
                    if pd.notna(median_income) and str(median_income) not in ['-', '**']:
                        income_data.append({
                            'year': year,
                            'median_household_income': int(median_income)
                        })
        
        # Create DataFrame
        income_df = pd.DataFrame(income_data).sort_values('year')
        return income_df
    
    def process_excel_file(self, file_path, expected_columns=None):
        """Process Excel files with error handling"""
        try:
            # Try reading with different engines
            for engine in ['openpyxl', 'xlrd']:
                try:
                    df = pd.read_excel(file_path, engine=engine)
                    break
                except:
                    continue
            else:
                print(f"Could not read {file_path}")
                return pd.DataFrame()
            
            # Clean column names
            df = self.clean_column_names(df)
            
            # Basic cleaning
            df = df.dropna(how='all')
            
            return df
            
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            return pd.DataFrame()
    
    def process_childcare_costs(self):
        """Process child care cost-to-income ratio data"""
        print("Processing childcare cost data...")
        
        file_path = self.data_dir / "Child care cost-to-income ratio.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        # Look for year and percentage columns
        year_col = None
        percent_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'percent' in col.lower() or 'ratio' in col.lower():
                percent_col = col
        
        if year_col and percent_col:
            result_df = df[[year_col, percent_col]].copy()
            result_df.columns = ['year', 'childcare_cost_ratio_percent']
            
            # Clean percentage values
            result_df['childcare_cost_ratio_percent'] = pd.to_numeric(
                result_df['childcare_cost_ratio_percent'].astype(str).str.replace('%', ''), 
                errors='coerce'
            )
            
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_homeless_students(self):
        """Process homeless or housing unstable students data"""
        print("Processing homeless students data...")
        
        file_path = self.data_dir / "Homeless or housing unstable students.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        # Look for year and count columns
        year_col = None
        count_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'student' in col.lower() or 'count' in col.lower() or 'number' in col.lower():
                count_col = col
        
        if year_col and count_col:
            result_df = df[[year_col, count_col]].copy()
            result_df.columns = ['year', 'homeless_students_count']
            result_df['homeless_students_count'] = pd.to_numeric(result_df['homeless_students_count'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_tanf_data(self):
        """Process TANF families data"""
        print("Processing TANF data...")
        
        file_path = self.data_dir / "Monthly average number of families receiving TANF.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        # Look for year and families columns
        year_col = None
        families_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'families' in col.lower() or 'average' in col.lower():
                families_col = col
        
        if year_col and families_col:
            result_df = df[[year_col, families_col]].copy()
            result_df.columns = ['year', 'tanf_families_avg']
            result_df['tanf_families_avg'] = pd.to_numeric(result_df['tanf_families_avg'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_snap_data(self):
        """Process SNAP participants data"""
        print("Processing SNAP data...")
        
        file_path = self.data_dir / "Monthly average number of persons issued food stamps (SNAP).xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        persons_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'persons' in col.lower() or 'average' in col.lower() or 'snap' in col.lower():
                persons_col = col
        
        if year_col and persons_col:
            result_df = df[[year_col, persons_col]].copy()
            result_df.columns = ['year', 'snap_participants_avg']
            result_df['snap_participants_avg'] = pd.to_numeric(result_df['snap_participants_avg'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_enrollment_data(self):
        """Process student enrollment data"""
        print("Processing student enrollment data...")
        
        file_path = self.data_dir / "Student enrollment.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        enrollment_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'enrollment' in col.lower() or 'student' in col.lower():
                enrollment_col = col
        
        if year_col and enrollment_col:
            result_df = df[[year_col, enrollment_col]].copy()
            result_df.columns = ['year', 'student_enrollment']
            result_df['student_enrollment'] = pd.to_numeric(result_df['student_enrollment'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_graduation_rate(self):
        """Process high school graduation rate data"""
        print("Processing graduation rate data...")
        
        file_path = self.data_dir / "High school graduation rate.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        rate_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'rate' in col.lower() or 'graduation' in col.lower():
                rate_col = col
        
        if year_col and rate_col:
            result_df = df[[year_col, rate_col]].copy()
            result_df.columns = ['year', 'graduation_rate_percent']
            
            # Clean percentage values
            result_df['graduation_rate_percent'] = pd.to_numeric(
                result_df['graduation_rate_percent'].astype(str).str.replace('%', ''), 
                errors='coerce'
            )
            
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_dropout_rate(self):
        """Process high school dropout rate data"""
        print("Processing dropout rate data...")
        
        file_path = self.data_dir / "High school dropout rate.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        rate_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'rate' in col.lower() or 'dropout' in col.lower():
                rate_col = col
        
        if year_col and rate_col:
            result_df = df[[year_col, rate_col]].copy()
            result_df.columns = ['year', 'dropout_rate_percent']
            
            # Clean percentage values
            result_df['dropout_rate_percent'] = pd.to_numeric(
                result_df['dropout_rate_percent'].astype(str).str.replace('%', ''), 
                errors='coerce'
            )
            
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_suspensions(self):
        """Process suspension data"""
        print("Processing suspension data...")
        
        file_path = self.data_dir / "Suspensions.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        suspension_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'suspension' in col.lower() or 'count' in col.lower():
                suspension_col = col
        
        if year_col and suspension_col:
            result_df = df[[year_col, suspension_col]].copy()
            result_df.columns = ['year', 'suspensions_count']
            result_df['suspensions_count'] = pd.to_numeric(result_df['suspensions_count'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_child_abuse_rate(self):
        """Process child abuse and neglect rate data"""
        print("Processing child abuse rate data...")
        
        file_path = self.data_dir / "Child abuse and neglect rate per 1,000 children under age 18.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        rate_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'rate' in col.lower() or 'abuse' in col.lower():
                rate_col = col
        
        if year_col and rate_col:
            result_df = df[[year_col, rate_col]].copy()
            result_df.columns = ['year', 'child_abuse_rate_per_1000']
            result_df['child_abuse_rate_per_1000'] = pd.to_numeric(result_df['child_abuse_rate_per_1000'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_juvenile_cases(self):
        """Process juvenile case filings data"""
        print("Processing juvenile case data...")
        
        file_path = self.data_dir / "Juvenile case filings by type.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        cases_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'case' in col.lower() or 'filing' in col.lower() or 'total' in col.lower():
                cases_col = col
        
        if year_col and cases_col:
            result_df = df[[year_col, cases_col]].copy()
            result_df.columns = ['year', 'juvenile_cases_total']
            result_df['juvenile_cases_total'] = pd.to_numeric(result_df['juvenile_cases_total'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_collaborative_care(self):
        """Process youth in collaborative care data"""
        print("Processing collaborative care data...")
        
        file_path = self.data_dir / "Youth in collaborative care.xlsx"
        df = self.process_excel_file(file_path)
        
        if df.empty:
            return pd.DataFrame()
        
        year_col = None
        youth_col = None
        
        for col in df.columns:
            if 'year' in col.lower():
                year_col = col
            elif 'youth' in col.lower() or 'care' in col.lower() or 'count' in col.lower():
                youth_col = col
        
        if year_col and youth_col:
            result_df = df[[year_col, youth_col]].copy()
            result_df.columns = ['year', 'collaborative_care_youth']
            result_df['collaborative_care_youth'] = pd.to_numeric(result_df['collaborative_care_youth'], errors='coerce')
            return result_df.dropna()
        
        return pd.DataFrame()
    
    def process_employment_data(self):
        """Process S2301 Employment Status data"""
        print("Processing employment data...")
        
        employment_data = []
        employment_dir = self.data_dir / "S2301Employment Status"
        
        # Find all data files
        data_files = glob.glob(str(employment_dir / "*Data.csv"))
        
        for file_path in data_files:
            year = self.extract_year_from_filename(file_path)
            if year:
                df = pd.read_csv(file_path)
                
                # Filter for Monroe County
                monroe_data = df[df['NAME'].str.contains('Monroe County', na=False)]
                
                if not monroe_data.empty:
                    # Extract unemployment rate (column S2301_C04_001E)
                    unemployment_rate = monroe_data['S2301_C04_001E'].iloc[0]
                    
                    if pd.notna(unemployment_rate) and str(unemployment_rate) not in ['-', '**']:
                        employment_data.append({
                            'year': year,
                            'unemployment_rate_percent': float(unemployment_rate)
                        })
        
        # Create DataFrame
        employment_df = pd.DataFrame(employment_data).sort_values('year')
        return employment_df
    
    def create_narrative_datasets(self):
        """Create the three narrative datasets"""
        print("Creating narrative datasets...")
        
        # Process all individual datasets
        income_df = self.process_census_income_data()
        childcare_df = self.process_childcare_costs()
        homeless_df = self.process_homeless_students()
        tanf_df = self.process_tanf_data()
        snap_df = self.process_snap_data()
        enrollment_df = self.process_enrollment_data()
        graduation_df = self.process_graduation_rate()
        dropout_df = self.process_dropout_rate()
        suspension_df = self.process_suspensions()
        abuse_df = self.process_child_abuse_rate()
        juvenile_df = self.process_juvenile_cases()
        collab_care_df = self.process_collaborative_care()
        employment_df = self.process_employment_data()
        
        # Narrative 1: Economic Squeeze
        economic_data = income_df.copy()
        if not childcare_df.empty:
            economic_data = economic_data.merge(childcare_df, on='year', how='outer')
        if not homeless_df.empty:
            economic_data = economic_data.merge(homeless_df, on='year', how='outer')
        if not tanf_df.empty:
            economic_data = economic_data.merge(tanf_df, on='year', how='outer')
        if not snap_df.empty:
            economic_data = economic_data.merge(snap_df, on='year', how='outer')
        
        economic_data = economic_data.sort_values('year')
        economic_data.to_csv(self.output_dir / 'economic_squeeze.csv', index=False)
        
        # Narrative 2: Education Pathway
        education_data = enrollment_df.copy()
        if not graduation_df.empty:
            education_data = education_data.merge(graduation_df, on='year', how='outer')
        if not dropout_df.empty:
            education_data = education_data.merge(dropout_df, on='year', how='outer')
        if not suspension_df.empty:
            education_data = education_data.merge(suspension_df, on='year', how='outer')
        if not employment_df.empty:
            education_data = education_data.merge(employment_df, on='year', how='outer')
        
        education_data = education_data.sort_values('year')
        education_data.to_csv(self.output_dir / 'education_pathway.csv', index=False)
        
        # Narrative 3: Community Wellbeing
        wellbeing_data = abuse_df.copy()
        if not juvenile_df.empty:
            wellbeing_data = wellbeing_data.merge(juvenile_df, on='year', how='outer')
        if not collab_care_df.empty:
            wellbeing_data = wellbeing_data.merge(collab_care_df, on='year', how='outer')
        
        wellbeing_data = wellbeing_data.sort_values('year')
        wellbeing_data.to_csv(self.output_dir / 'community_wellbeing.csv', index=False)
        
        # Also save individual processed datasets
        for name, df in [
            ('median_income', income_df),
            ('childcare_costs', childcare_df),
            ('homeless_students', homeless_df),
            ('tanf_families', tanf_df),
            ('snap_participants', snap_df),
            ('student_enrollment', enrollment_df),
            ('graduation_rate', graduation_df),
            ('dropout_rate', dropout_df),
            ('suspensions', suspension_df),
            ('child_abuse_rate', abuse_df),
            ('juvenile_cases', juvenile_df),
            ('collaborative_care', collab_care_df),
            ('employment_status', employment_df)
        ]:
            if not df.empty:
                df.to_csv(self.output_dir / f'{name}.csv', index=False)
        
        print(f"Processing complete! Files saved to {self.output_dir}")
        return economic_data, education_data, wellbeing_data

def main():
    """Main execution function"""
    print("MC3 Summit Data Processing")
    print("=" * 50)
    
    processor = MC3DataProcessor()
    
    try:
        economic_data, education_data, wellbeing_data = processor.create_narrative_datasets()
        
        print("\nData processing summary:")
        print(f"Economic Squeeze data: {len(economic_data)} years")
        print(f"Education Pathway data: {len(education_data)} years")
        print(f"Community Wellbeing data: {len(wellbeing_data)} years")
        
        print("\nProcessed files created in 'processed_data/' directory:")
        for file in processor.output_dir.glob("*.csv"):
            print(f"  - {file.name}")
            
    except Exception as e:
        print(f"Error during processing: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main() 