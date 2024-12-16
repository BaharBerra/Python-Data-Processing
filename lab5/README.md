# Laboratory Work 5: Image Processing with OpenCV

## Course Information
- **Course:** Python Data Processing
- **Student:** Bahar Berra Uyar / KH-222ia.e
- **Instructor:** Svitlana Mykolaivna Kovalenko
- **Date:** 05/11/2024

## Topic and Goal of the Lab
- **Topic:** Image Processing with OpenCV  
- **Goal:** Acquire knowledge and skills in digital image processing using the OpenCV library, focusing on processing a batch of digital images.

## Tasks and Implementation

### Task 1: Work with a Bunch of Files

#### Function Implementation
- A function named `process_images` was created to:
  - Take the path to a folder as an argument.
  - Return a DataFrame containing information about the images in the folder, including:
    1. File Name
    2. Color Model
    3. Format
    4. Number of Channels
    5. File Size in Megabytes
    6. Image Width
    7. Image Height
    8. Full Path
    9. Image Thumbnail

#### Outputs
- Successfully generated a DataFrame containing metadata of images.
- Displayed image thumbnails using Matplotlib.

### Task 2: Create a Poster from Images

#### Poster Creation Function
- A function named `create_poster` was developed to:
  - Generate a poster image from the images in the folder.
  - Accept arguments for the folder path, output file name, number of images in a row, and number of images in a column.

#### Image Conversion Function
- A function named `convert_to_square` was implemented to convert images into a square format.

#### Randomized Color Filters (Optional)
- Added an optional feature to apply randomized color filters (e.g., red, green, blue, yellow, etc.) to images on the poster.

#### Outputs
- Successfully generated posters with specified rows and columns.
- Randomized images and applied color filters to enhance poster creativity.

## Key Features of the Implementation

### Libraries Used
- **OpenCV**: For image processing tasks.
- **Matplotlib**: For visualizing image thumbnails and posters.
- **Pandas**: For organizing image metadata.
- **NumPy**: For numerical operations.
- **os and glob**: For file management.

### Functionalities
1. **Image Metadata Collection**
   - Efficiently collected metadata from a folder of images.
   - Displayed thumbnails for easy visualization.
2. **Poster Generation**
   - Created posters with customizable grid dimensions.
   - Enhanced visual aesthetics with randomized color filters.

## Results and Outputs

1. **Generated DataFrame (Image Metadata)**
   - Displays file name, color model, format, dimensions, size, and thumbnails of images.
2. **Posters**
   - Created multiple posters with randomized image placements and optional filters.
3. **Visualization**
   - Output images displayed using Matplotlib.

## Link to the Created Jupyter Notebook
[GitHub Repository](https://github.com/BaharBerra/PythonLabs.git)

## Conclusion
Through this laboratory work, I:
- Gained practical experience with image processing techniques using OpenCV.
- Developed functions for batch processing images, extracting metadata, and generating creative posters.
- Enhanced understanding of digital image processing concepts, including resizing, filtering, and visualizing images.
- Strengthened programming and problem-solving skills in Python.

---

