const express = require('express')
const frontendPath = __dirname + '/frontend'
const bodyParser = require('body-parser')
const DatabaseActions = require('./modules/DatabaseActions')
const dbActions = new DatabaseActions()

class Web {
    constructor(port) {
        this.port = port
        this.app = express()
    }

    launch() {
        this.app.use(express.static(frontendPath))
        this.app.use(bodyParser.urlencoded({extended: false}))
        this.app.use(bodyParser.json())

        this.app.get('/', function (req, res) {
            res.sendFile(frontendPath + '/html/index.html')
        })

        this.app.post('/get-chat-by-user', async function(req, res) {
            console.log('Web request: ', req.body)
            let db = await dbActions.read(req.body)
            res.send(db)
            res.end()
        })

        this.app.listen(this.port, () => console.log('Server on: http://localhost:' + this.port))
    }
}

module.exports = Web