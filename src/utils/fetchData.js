let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
    
        // HACER UN LLAMADO A UN URL
        xhttp.open('GET', url_api, true) // ('tipo de peticion', 'url de la data', 'activar el asincronismo')
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                (xhttp.status === 200) 
                    ? resolve(JSON.parse(xhttp.responseText)) 
                    : reject(new Error('Error', url_api))
            }
        })
    
        // SE ENVIA LA SOLICITUD
        xhttp.send()
    })
}

module.exports = fetchData
