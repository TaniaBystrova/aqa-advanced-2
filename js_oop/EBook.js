const { Book } = require('./Book')


class EBook extends Book {
    constructor(title, author, year, fileFormat){
        super(title, author, year)
        this._fileFormat = fileFormat
    }
    get fileFormat() {
        return this._fileFormat
     }
     set fileFormat(value) {
        if (value && typeof value === 'string') {
          this._fileFormat = value
        }
    }

    printInfo() {
        console.log(`"${this._title}" by ${this._author} was published in ${this._year}, available in ${this._fileFormat}`)
    }
    static createFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat);
    }
}

module.exports = {
    EBook,
  }