# Laboratory Work 4: DataFrames Merging, Data Aggregation, and Data Visualization

## Course
Python Data Processing

## Student
Bahar Berra Uyar / KH-222ia.e

## Instructor
Assoc. Prof. Svitlana Mykolaivna Kovalenko

## Date
03/11/2024

---

## Overview
This laboratory work focuses on mastering data manipulation techniques using Pandas, with a specific application to datasets related to energy supply, GDP, and journal contributions in Energy Engineering and Power Technology. The lab exercises include data cleaning, merging, aggregation, and visualization to derive meaningful insights.

## Objectives
- Learn and apply Pandas methods for data merging and aggregation.
- Handle real-world datasets with varying structures and missing values.
- Combine datasets to analyze energy supply, economic data, and scientific contributions.
- Visualize results effectively for enhanced comprehension.

## Tools and Libraries
- **Pandas**: Data manipulation and analysis.
- **NumPy**: Numerical operations.
- **Matplotlib / Seaborn**: (Optional for visualization tasks).
- **Excel and CSV files**: Input datasets.
- **Python (3.x)**: Programming language.

---

## Assignments

### 1. Load and Clean Energy Supply Data
- Extract relevant columns (`Country`, `Energy Supply`, `Energy Supply per Capita`, `% Renewable`).
- Replace invalid values (e.g., `...`) with `NaN`.
- Standardize units (e.g., convert `Energy Supply` to gigajoules).

### 2. Handle Missing and Inconsistent Data
- Convert columns to appropriate data types.
- Clean up country names (e.g., remove parentheses and digits).
- Replace specific country names with standardized ones (e.g., `Republic of Korea` to `South Korea`).

### 3. GDP Data Processing
- Load GDP data from a CSV file.
- Retain only the last 10 years (2006-2015).
- Rename and clean up inconsistent country names.

### 4. Scientific Contributions Data
- Load Scimago Journal Rank (SJR) data.
- Filter data to include the top 15 countries by `Rank`.

### 5. Merge Datasets
- Combine energy, GDP, and SJR datasets using common country names.
- Ensure consistent data alignment and handle missing values.

### 6. Final Dataset
- Create a comprehensive dataset including energy statistics, GDP data (2006-2015), and journal contributions.
- Set `Country` as the index.
- Ensure all numerical columns are ready for further analysis.

---

## Results
The resulting dataset combines:
- Top 15 countries by scientific contributions.
- Key energy metrics: `Energy Supply`, `Energy Supply per Capita`, `% Renewable`.
- Economic data: GDP (2006-2015).

This dataset provides insights into the correlation between energy supply, renewable energy adoption, economic growth, and scientific productivity.

---

## Key Takeaways
- Pandas is a powerful tool for data cleaning and merging.
- Handling real-world data requires addressing inconsistencies, missing values, and formatting issues.
- Combining diverse datasets enables multi-dimensional analysis.
- Aggregating and visualizing data can uncover hidden trends and relationships.

---

## How to Run
1. Install dependencies: `pip install pandas numpy openpyxl xlrd`.
2. Place the following datasets in the working directory:
   - `En_In.xls`: Energy supply data.
   - `gpd.csv`: GDP data.
   - `scimagojr.xlsx`: Scientific contributions data.
3. Execute the provided Python script step-by-step or as a complete program.
4. Review the output dataset and visualize results as needed.

---

## Future Work
- Enhance visualizations for the resulting dataset.
- Explore additional metrics (e.g., CO2 emissions, population).
- Integrate data from other disciplines for broader insights.

