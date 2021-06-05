// UTILIZANDO ECMAScript 6
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('Hey!') : reject('Whooops!')
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            setTimeout(() => { resolve('true')}, 2000)
        } else {
            // MOSTRARA MAS INFORMACION SOBRE EL ERROR
            const error = new Error('Whooop!')
            reject(error)
        }
    })
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

// ENCADENAR O EJECUTAR VARIAS PROMESAS
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => console.log('Array of results', response))
    .catch(err => console.log(err))
