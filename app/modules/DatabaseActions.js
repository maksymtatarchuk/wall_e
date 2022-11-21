const fs = require('fs')
const path = require('path')
const dbDir = path.join(__dirname.split('/modules')[0], 'data')


class dbActions {
    constructor() {
    }

    #createDataBase(data) {
        let newDB = {
            user_id: data.from.id,
            username: data.from.username,
            is_bot: data.from.is_bot,
            creation_date: data.date,
            messages: []
        }

        return newDB
    }

    read(data) {
        let isBot = data.sender === 'bot'
        let user = isBot ? data.from.username : data.username

        try {
            let readData = fs.readFileSync(path.join(dbDir, user + '.json'), 'utf8', (err) => console.log(err))
            return JSON.parse(readData)
        } catch (err) {
            if (isBot) {
                return this.#createDataBase(data)
            }

            return JSON.stringify({ "error": "Database not found!" })
        }
    }

    async write(data) {
        console.log('write(data) ', data)
        let sourceDB = await this.read(data)
        sourceDB.messages.push({
            date: data.date,
            chat_type: data.chat.type,
            text: data.text,
            language: data.language_code
        })

        fs.writeFileSync(path.join(dbDir, data.from.username + '.json'), JSON.stringify(sourceDB))
    }
}
module.exports = dbActions