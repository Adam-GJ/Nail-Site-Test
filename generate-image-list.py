import os
import json

image_directory = "images"

extensions = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif")

filenames = [
    filename
    for filename in os.listdir(image_directory)
    if filename.lower().endswith(extensions)
]

filenames.sort()

with open("image-list.json", "w") as file:
    json.dump(filenames, file, indent=4)