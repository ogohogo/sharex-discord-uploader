require('dotenv').config({ path: './config.env' })

module.exports = {
    discord: {
        /* Edit these in config.env! */
        token: process.env.DISCORD_TOKEN,
        channelId: process.env.DISCORD_CHANNEL_ID,
    },
    express: {
        port: 80 //Port you'd like your server to run on
    },
    uploadTimeout: 0, //0 = no limit, otherwise set your limit, in seconds.
    discordRequestTimeout: 3000, //How many seconds till discord request times out, usually you want it to be high (if you expect to upload big files)
}