const users = [
    { name: 'Sam', email: 'sam@example.com', age: 34 },
    { name: 'Ann', email: 'ann@example.com', age: 23 },
    { name: 'Tom', email: 'tom@example.com', age: 18 },
    { name: 'Nataly', email: 'nataly@example.com', age: 28 }
  ]
  
  for (const { name, email, age } of users) {
    console.log(`User Name: ${name}, User Email: ${email}, User Age: ${age}`)
  }