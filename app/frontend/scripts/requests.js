const request = new LocalRequest()
const render = new Render()

document.getElementById('getUser').addEventListener('submit', (e) => {
    e.preventDefault()

    let user = document.getElementById('userName').value //'MaksymTatarchuk'
    console.log(user)
    request.post('/get-chat-by-user', {username: user}).then(res => {
        render.messagesField(body, res)
    })
})
