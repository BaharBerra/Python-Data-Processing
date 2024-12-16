# Laboratory Work 6

**Course:** Python Data Processing  
**Student:** Bahar Berra Uyar / KH-222ia.e  
**Instructor:** Svitlana Mykolaivna Kovalenko  
**Date:** 03/11/2024

## Topic and Goal of the Lab
The purpose of this laboratory work is to explore image processing techniques using the OpenCV and PIL libraries. The specific objectives include:

1. **Calculating the Variant Number:** Determining a specific variant number using a formula based on the first capital letter of the student's name.
2. **Data Handling:** Loading data from an Excel file into a DataFrame and accessing personal data using indexing.
3. **Image Processing:** Developing a function to detect faces and eyes in images, adding "round glasses" to the detected face, and saving the modified image.

## Progress of the Work

### Step 1: Calculate the Variant Number
The variant number was calculated using the formula:

```python
variant_number = ord('B') % 5 + 1
```

### Step 2: Load Data from Excel File
Using the pandas library, data from the file `lab6.xlsx` was successfully loaded into a DataFrame:

```python
import pandas as pd

df = pd.read_excel("lab6.xlsx")
```

### Step 3: Access Variant Data
Data corresponding to the calculated variant number was accessed using pandas indexing tools:

```python
personal_data = df.iloc[variant_number - 1]  # Adjusted for 0-based indexing
print(personal_data)
```

### Step 4: Adding Glasses to the Image
A function was created to detect faces and eyes in an image, then add round glasses to the detected eyes using OpenCV and PIL.

**Function Implementation:**
```python
import cv2
import numpy as np
from PIL import Image, ImageDraw

def add_glasses(image_path, output_path, glasses_color=(0, 0, 0), thickness=2):
    # Load the image
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Load Haar Cascade for face and eye detection
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    eye_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_eye.xml')

    # Detect faces
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

    for (x, y, w, h) in faces:
        face_region = gray[y:y + h, x:x + w]
        eyes = eye_cascade.detectMultiScale(face_region, scaleFactor=1.1, minNeighbors=5)

        if len(eyes) >= 2:
            (ex1, ey1, ew1, eh1), (ex2, ey2, ew2, eh2) = eyes[:2]

            eye_center_1 = (x + ex1 + ew1 // 2, y + ey1 + eh1 // 2)
            eye_center_2 = (x + ex2 + ew2 // 2, y + ey2 + eh2 // 2)

            pil_image = Image.fromarray(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
            draw = ImageDraw.Draw(pil_image)

            eye_distance = int(np.linalg.norm(np.array(eye_center_1) - np.array(eye_center_2)))
            radius = eye_distance // 4 

            draw.ellipse([eye_center_1[0] - radius, eye_center_1[1] - radius,
                           eye_center_1[0] + radius, eye_center_1[1] + radius],
                          outline=glasses_color, width=thickness)
            draw.ellipse([eye_center_2[0] - radius, eye_center_2[1] - radius,
                           eye_center_2[0] + radius, eye_center_2[1] + radius],
                          outline=glasses_color, width=thickness)

            bridge_height = int(radius * 0.5)
            draw.line([eye_center_1[0] + radius, eye_center_1[1],
                        eye_center_2[0] - radius, eye_center_2[1]],
                       fill=glasses_color, width=thickness)

            temple_length = int(radius * 1.5)
            draw.line([eye_center_1[0] - radius, eye_center_1[1],
                        eye_center_1[0] - radius - temple_length, eye_center_1[1]],
                       fill=glasses_color, width=thickness)
            draw.line([eye_center_2[0] + radius, eye_center_2[1],
                        eye_center_2[0] + radius + temple_length, eye_center_2[1]],
                       fill=glasses_color, width=thickness)

            final_image = cv2.cvtColor(np.array(pil_image), cv2.COLOR_RGB2BGR)
            cv2.imwrite(output_path, final_image)
            print("Glasses added and image saved.")
        else:
            print("Not enough eyes detected.")

add_glasses('ron_wesley.jpg', 'ron_wesley1.jpg', glasses_color=(0, 255, 0), thickness=5)
```

### Step 5: Test and Results
The function was tested on the image `ron_wesley.jpg`, successfully modifying it to add round glasses:

- **Input Image:** `ron_wesley.jpg`
- **Output Image:** `ron_wesley1.jpg`

## Example Output
The images were displayed side by side using matplotlib, showing the original and the modified image with glasses.

## Conclusions
In this laboratory work, I successfully combined data handling and image processing techniques. I learned:

1. How to calculate a specific variant number using Python.
2. Manipulating data from Excel files with pandas.
3. Utilizing OpenCV and PIL for face and eye detection and applying graphical modifications.

This experience enhanced my understanding of Python libraries for data processing and image manipulation, equipping me with practical skills for real-world applications.

