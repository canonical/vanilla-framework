#!/usr/bin/python3

import os
import requests
import base64
api_token = os.getenv('UPLOAD_ASSETS_API_TOKEN')
file_path = os.getenv('ASSET_FILE_PATH')
url_path = os.getenv('ASSET_URL_PATH')
tags = os.getenv('ASSET_TAGS')
print(file_path)
filename = os.path.basename(file_path)
api_url = "https://assets.ubuntu.com/v1"
content = open(file_path, 'rb').read()
response = requests.post(
    api_url,
    data={
        'asset': base64.b64encode(content),
        'friendly-name': filename.replace(' ', '+'),
        'url-path': url_path,
        'tags': tags,
        'type': 'base64',
        'token': api_token
    }
)
print(response.text)