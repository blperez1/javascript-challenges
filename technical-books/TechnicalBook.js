import Book from '../available-books/Book.js';

const TechnicalBook = class extends Book {
    constructor(title, author, ISBN, numCopies, edition) {
        super(title, author, ISBN, numCopies)
        this.edition = edition;
    }

    getEdition() {
        return `The current version of ${this.title} is the ${this.edition} edition. `
    }
}

const graysAnatomy = new TechnicalBook("Gray's Anatomy of the Human Body", "",  9780812106442, 35, "30th");

console.log(graysAnatomy.getEdition());