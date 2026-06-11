from PIL import Image, ImageDraw
from pathlib import Path

img = Image.new('RGBA', (320, 96), (255, 248, 236, 255))
d = ImageDraw.Draw(img)

d.ellipse((12, 12, 76, 76), fill=(166, 106, 41, 255))
d.ellipse((18, 18, 70, 70), fill=(125, 75, 31, 255))
d.polygon([(28, 30), (46, 26), (52, 44), (34, 62), (24, 50)], fill=(255, 244, 216, 255))

for x, y, w, h in [(82, 26, 124, 14), (82, 46, 92, 10), (82, 62, 80, 8)]:
    d.rounded_rectangle((x, y, x + w, y + h), radius=7, fill=(61, 36, 24, 255))

d.rounded_rectangle((220, 24, 292, 72), radius=14, fill=(139, 74, 30, 255))
for y in [36, 50, 64]:
    d.line([(236, y), (278, y)], fill=(255, 248, 236, 255), width=6)

out = Path('public/logo.png')
img.save(out)
print(out.resolve())
