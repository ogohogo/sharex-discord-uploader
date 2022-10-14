
# Discord ShareX Uploader

Upload files to Discord using ShareX!

## How to use it?

1. Get [node.js](https://nodejs.org/en/) (v16 or higher)
2. Clone this repo
3. Install required modules with `npm i`
4. Rename `config.env.example` to `config.env`
5. Get following things:
- Your Discord Token (NOT Bot Token) - [How to get my Discord token?](https://www.youtube.com/watch?v=YEgFvgg7ZPI)
- Channel's ID you'd like to upload files to
6. Put these into config.env files
7. Run the script with `npm start`
8. Profit?


## ShareX config
```
{
  "Version": "14.1.0",
  "Name": "Discord ShareX Uploader",
  "DestinationType": "ImageUploader, FileUploader",
  "RequestMethod": "POST",
  "RequestURL": "{domain}/upload",
  "Body": "MultipartFormData",
  "FileFormName": "file"
}
```

## Disclaimer
Using this tool with your main account IS NOT recommended. I'm not responsible for anything that happens with your account. This tool has been created for educational purposes only.