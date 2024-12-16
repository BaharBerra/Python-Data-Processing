# Laboratory Work 2: Data Exploration and Visualization with Python  

## Course  
**Python Data Processing**  

## Student  
**Bahar Berra Uyar** (Group: KH-222ia.e)  

## Instructor  
**Svitlana Mykolaivna Kovalenko**  

## Date  
03/10/2024  

## Objective  
The goal of this laboratory work is to develop fundamental skills in Python for data exploration and visualization. Specifically, the analysis focuses on aircraft losses during the 2022 Ukraine-Russia war. The project utilizes Python libraries like:  
- **Pandas** for data manipulation,  
- **NumPy** for numerical computations, and  
- **Matplotlib** for creating visualizations.  

---

## Tasks and Implementation  

### Task 1: Read CSV and Extract Column Values  
- Read a dataset containing cumulative loss counts of various military equipment types using Pandas.  
- Extract the "aircraft" column and convert it into a NumPy array.  

### Task 2: Create NumPy Array from Aircraft Column  
- Use the extracted column data to generate a NumPy array, enabling efficient computations for subsequent tasks.  

### Task 3: Find Daily Aircraft Losses  
- Calculate the daily losses of aircraft by taking the difference between successive values using `np.diff()`.  

### Task 4: Find Top 3 Greatest Daily Losses  
- Identify the top three largest daily aircraft losses during the war using NumPy's sorting and slicing functions.  

### Task 5: Calculate Aircraft Losses in Summer 2024  
- Filter the dataset to identify the cumulative aircraft losses between June 1st and August 31st, 2024, and calculate the total losses in this period.  

### Task 6: Mean Aircraft Losses in the Last 300 Days  
- Compute the average daily losses for the last 300 days in the dataset using `np.mean()`.  

### Task 7: Plot Aircraft Losses in the First Year of War  
- Visualize the daily aircraft losses during the first year of the war using Matplotlib.  
- Apply gridlines, legends, and other customizations to improve the plot's readability.  

---

## Tools and Libraries  
The project uses the following Python libraries:  
- **NumPy**: Efficient array manipulation and numerical computations.  
- **Pandas**: Data extraction and preprocessing.  
- **Matplotlib**: Creating detailed visualizations.  

---

## Results  
The analysis provides insights into:  
- The trend of aircraft losses over time.  
- The largest losses on specific days.  
- Seasonal and temporal patterns in the data.  
- Visualized data for easy interpretation.  

---

## How to Run the Project  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/BaharBerra/Python_lab2.git  
