const body = document.getElementsByTagName('body').item(0)
const scripts = [
    'LocalRequest',
    'Render',
    'requests'
]

scripts.forEach(script => {
    let newScript = document.createElement('script')
    newScript.setAttribute('src', `../scripts/${script}.js`)
    body.prepend(newScript)
})