import fetch from 'node-fetch'

async function getToDo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const toDo = await response.json()
    return toDo
}
async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const user = await response.json()
    return user
}
getToDo().then(value => console.log('Todo:', value))
getUser().then(value => console.log('User:', value))