// UTILIZANDO ECMAScript 6
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        true ? resolve('Hey!') : reject('Whooops!')
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))
