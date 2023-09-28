const { Book } = require('./Book')
const { EBook } = require('./EBook')


const book1 = new Book('Alice`s Adventures in Wonderland', 'Lewis Carroll', 1865)
const book2 = new Book('Moby Dick', 'Herman Melville', 1851)
const ebook1 = new EBook('Pride and Prejudice', 'Jane Austen', 1813, 'PDF')
//task 1
book1.printInfo()
//task 2
console.log('----------------')
book2.printInfo()
//task 4
console.log('-----------', Book.getOldestBook([book1, book2, ebook1]))
//task 5
console.log('------------', EBook.createFromBook(book1, book2))