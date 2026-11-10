from PIL import Image
import os

img = Image.open('assets/img/logo.webp')

# 1. Root favicon.ico (multi-resolution standard for browsers)
img.save('favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
img.save('assets/img/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print('Generated favicon.ico')

# 2. assets/img/favicon.png (standard high quality 64x64)
fav64 = img.resize((64, 64), Image.Resampling.LANCZOS)
fav64.save('assets/img/favicon.png', format='PNG')
print('Generated assets/img/favicon.png (64x64)')

# 3. assets/img/favicon-32x32.png & 16x16
fav32 = img.resize((32, 32), Image.Resampling.LANCZOS)
fav32.save('assets/img/favicon-32x32.png', format='PNG')
fav16 = img.resize((16, 16), Image.Resampling.LANCZOS)
fav16.save('assets/img/favicon-16x16.png', format='PNG')
print('Generated assets/img/favicon-32x32.png and 16x16')

# 4. Apple touch icon 180x180
apple_touch = img.resize((180, 180), Image.Resampling.LANCZOS)
apple_touch.save('assets/img/apple-touch-icon.png', format='PNG')
print('Generated assets/img/apple-touch-icon.png (180x180)')

# 5. Android Chrome / PWA 192x192 & 512x512
fav192 = img.resize((192, 192), Image.Resampling.LANCZOS)
fav192.save('assets/img/android-chrome-192x192.png', format='PNG')
fav512 = img.resize((512, 512), Image.Resampling.LANCZOS)
fav512.save('assets/img/android-chrome-512x512.png', format='PNG')
print('Generated assets/img/android-chrome-192x192.png and 512x512')

# 6. Also update assets/img/logo.png to be a real PNG copy of this logo
img.save('assets/img/logo.png', format='PNG')
print('Updated assets/img/logo.png')

