class LocalRequest {
    constructor(url) {
        this.url = url || 'http://localhost:3000'
    }

    async #customFetch(api, method, data) {
        let url = this.url + api
        let reqObj = {
            'method': method,
            'headers': {
                'Content-Type': 'application/json'
            }
        }

        if (method === 'POST') {
            console.log(data)
            reqObj.body = JSON.stringify(data)
        }

        const response = await fetch(url, reqObj)

        return response.json()
    }

    get(api) {
        return this.#customFetch(api, 'GET')
    }

    post(api, data) {
        data.sender = 'user'

        return this.#customFetch(api, 'POST', data)
    }
}