require('dotenv').config()
const TOKEN = process.env.BOT_TOKEN
const PORT = process.env.PORT
const Bot = require('./Bot')
const Web = require('./Web')

let bot = new Bot(TOKEN)
let web = new Web(PORT)

web.launch()
bot.start()

bot.stop()