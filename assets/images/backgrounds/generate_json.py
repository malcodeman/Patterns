"""
The OS module in Python provides a way of using operating system dependent
functionality.

The json library can parse JSON from strings or files.
"""
import os
import json
def main():
    """
    triple double quotes
    """
    data = []
    extensions = [".jpg", ".png", ".JPG", ".gif"]
    files = [f for f in os.listdir(".") if os.path.isfile(f) if f.endswith(tuple(extensions))]
    for backgroud in files:
        print(backgroud)
        data.append({"url":"url(assets/images/backgrounds/"+ backgroud})
    json_str = json.dumps(data)
    with open("data.json", "w") as file:
        file.write(json_str)
    print(json_str)
if __name__ == "__main__":
    main()
