const DatabaseActions = require('./DatabaseActions')
const dbAction = new DatabaseActions()

class BotActions {
    constructor(bot) {
        this.bot = bot
    }

    textListener() {
        this.bot.on('text', (ctx) => {
            let data = ctx.message
            data.sender = 'bot'
            dbAction.write(data)
        })
    }

    help(answer) {
        this.bot.help((ctx) => ctx.reply(answer))
    }
}

module.exports = BotActions