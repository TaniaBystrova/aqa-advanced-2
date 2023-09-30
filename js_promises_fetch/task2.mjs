import fetch from 'node-fetch'

function getToDo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(todo => todo)
  }
  
  function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json()) 
      .then(user => user)
  }
  
  getToDo()
  getUser()

  
  Promise.all([getToDo(), getUser()])
    .then(values => {
      const [todo, user] = values
      console.log('Todo:', todo)
      console.log('User:', user)
    })
  
  
  Promise.race([getToDo(), getUser()])
    .then(value => {
      console.log('First object:', value)
    })
  

  