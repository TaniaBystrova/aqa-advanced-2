class Book {
    constructor(title, author, year) {
        this._title = title
        this._author = author
        this._year = year
    }
    printInfo() {
        console.log(`“${this._title}” by ${this._author} was published in ${this._year}`)
    }
    static getOldestBook(value) {
        if (value instanceof Array) {
          return [...value].sort((a, b) => a.year - b.year)[0] || null
        }
        return null
      }
   //title
      get title() {
       return this._title
    }
    set title(value) {
       if (value && typeof value === 'string') {
         this._title = value
       }
   }
   //author
   get author() {
    return this._author
 }
 set author(value) {
    if (value && typeof value === 'string') {
      this._author = value
    }
}
//year
 get year() {
    return this._year
 }
 set year(value) {
    if (value > 1000 && typeof value === num) {
      this._author = value
    }
}
}
module.exports = {
    Book,
  }


