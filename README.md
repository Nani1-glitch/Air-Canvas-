# 🖌️ Air Canvas 🎨

## Introduction

**Air Canvas** is a dynamic web application that allows users to draw in the air using their hands. The project leverages OpenCV, Mediapipe, and Flask to provide a seamless experience. Users can select different colors to draw with and clear the canvas as needed. The drawing is displayed directly on the main video feed, making it intuitive and interactive.

## Features

- 🖐️ **Hand Tracking:** Utilizes Mediapipe for accurate hand and finger tracking.
- 🎨 **Dynamic Color Palette:** Users can select their preferred drawing color using a color picker.
- 🧼 **Clear Canvas:** A clear button to reset the canvas and start new drawings.
- 📱 **Responsive Design:** The UI is designed to be user-friendly and responsive.

## Setup and Installation

### Prerequisites

- 🐍 Python 3.x
- 🌐 Flask
- 📷 OpenCV
- ✋ Mediapipe
- 🔢 Numpy

### Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/Nani1-glitch/Air-Canvas-.git
    cd Air-Canvas-
    ```

2. **Create a Virtual Environment:**

    ```bash
    python -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    ```

3. **Install the Required Packages:**

    ```bash
    pip install flask opencv-python-headless numpy mediapipe
    ```

4. **Run the Flask Application:**

    ```bash
    python app.py
    ```

5. **Open your Browser and Visit:**

    ```
    http://127.0.0.1:5000
    ```

## Project Structure

air_canvas/
│
├── app.py
├── templates/
│ └── index.html
├── static/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── script.js
├── Color Selection UI.py
├── Draw On Screen.py
└── Hand Tracking.py


## Usage

- 🎨 **Select Color:** Use the color picker to choose your desired drawing color.
- 🧼 **Clear Canvas:** Click the "Clear" button to reset the canvas.
- ✍️ **Start Drawing:** Move your hand in front of the camera to start drawing in the air. The drawing will be displayed directly on the video feed.

## Contact

For any questions or suggestions, feel free to reach out:

- **Name:** Nithin Rajulapati
- **Email:** [nithinrajulapati9999@gmail.com](mailto:nithinrajulapati9999@gmail.com)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

