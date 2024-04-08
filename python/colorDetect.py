from PIL import ImageGrab
import pyautogui
import mouse
import threading
import keyboard
from PIL import ImageGrab

def play():
    while True:
# Define the four indexes on the screen as (x, y) tuples

        indexes = [(1330, 650), (1460, 650), (1610, 650), (1750, 650)]

        # Take a screenshot
        image = ImageGrab.grab()

        # Load the image pixels
        pixels = image.load()

        # Initialize the darkest color value and its coordinates
        darkest_value = 255
        darkest_coords = None

        # Loop through the defined indexes
        for coord in indexes:
            # Get the RGB values of the pixel at the current index
            r, g, b = pixels[coord]
            # Calculate the grayscale value to determine darkness
            grayscale_value = (r * 0.299) + (g * 0.587) + (b * 0.114)
            # Update the darkest color value and coordinates if a darker pixel is found
            if grayscale_value < darkest_value:
                darkest_value = grayscale_value
                darkest_coords = coord

# Move the mouse to the darkest pixel and click
        if darkest_coords:
            pyautogui.click(darkest_coords)






t = threading.Thread(target=play)
t.daemon = True
t.start()

while True:
    if keyboard. is_pressed('b'):
        break