const express = require("express");
const fileUpload = require('express-fileupload');
const fs = require("fs")
const { Client } = require('discord.js-selfbot-v13');

const config = require("./config");

const app = express();
const client = new Client({
    restRequestTimeout: config.discordRequestTimeout * 1000,
    checkUpdate: false
});

app.use(fileUpload({
    preserveExtension: true,
    uploadTimeout: config.uploadTimeout,
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


client.on('ready', async () => {
  console.log(`[DISORD] ${client.user.username} is ready!`);
})

app.post("/upload", async (req, res) => {
    req.setTimeout(config.uploadTimeout * 1000)
    try {
        if (!req.files) return;

        const path = __dirname + "/tmp/" + req.files.file.name;
        req.files.file.mv(path)

        const data = await client.channels.cache.get(config.discord.channelId).send({files: [{
                attachment: path,
                name: req.files.file.name
            }],
        })

        res.send(data.attachments.first().url);

        return fs.rmSync(path)
    } catch (e) {
        console.log(e)
        return res.send("FAIL")
    }
})


app.listen(config.express.port, () => {
    console.log(`[EXPRESS] Running upload server on port ${config.express.port}`)
})
client.login(config.discord.token)