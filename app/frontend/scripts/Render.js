class Render {
    constructor() {

    }

    messagesField(parentElement, data) {
        let oldElement = document.getElementsByClassName('messages-field').item(0)
        let isError = data.hasOwnProperty('error')
        let messagesFieldElement = document.createElement('div')

        messagesFieldElement.setAttribute('class', 'messages-field')
        messagesFieldElement.innerHTML =  `<h4>${isError ? data.error : data.username}</h4>`

        if (!isError) {
            data.messages.forEach(msg => {
                let msgEl = document.createElement('div')

                msgEl.setAttribute('class', 'message')
                msgEl.setAttribute('id', data.user_id + msg.date)
                msgEl.innerHTML = new Date(msg.date) + ' :  ' + msg.text

                messagesFieldElement.append(msgEl)
            })
        }

        if (oldElement) { oldElement.remove() }

        parentElement.append(messagesFieldElement)
    }
}