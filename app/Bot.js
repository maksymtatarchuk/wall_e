const { Telegraf } = require('telegraf');
const BotActions = require('./modules/BotActions')

class Bot {
    constructor(token) {
        this.token = token,
        this.bot = new Telegraf(this.token)
        this.action = new BotActions(this.bot)
    }

    start() {
        let action = this.action
        this.bot.start((ctx) => ctx.reply('Hello!'))

        action.textListener()

        this.bot.launch();
    }

    stop() {
        // Enable graceful stop
        process.once('SIGINT', () => this.bot.stop('SIGINT'));
        process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
    }
}


module.exports = Bot