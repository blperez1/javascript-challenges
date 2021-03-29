const Book = class book {
    constructor(title, author, ISBN, numCopies) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.numCopies = numCopies;
    } 

    get avalability() {
        return this.getAvalability;
    }

    getAvalability() {
        if(this.numCopies === 0) {
            return "Out of Stock";
        }else if(this.numCopies < 10) {
            return "Low Stock";
        }

        return "In Stock";
    }

    sell(numCopiesSold = 1) {
        this.numCopies -= numCopiesSold;
    }

    restock(numCopyStocked = 5) {
        return this.numCopies += numCopyStocked;
    }
}

const howelsMovingCastle= new Book("Howel's Moving Castle", "Diana Wynne Jones", 0061478789, 16);

console.log(howelsMovingCastle.avalability());
howelsMovingCastle.sell(10);
console.log(howelsMovingCastle.avalability());
howelsMovingCastle.sell(6);
console.log(howelsMovingCastle.avalability());
howelsMovingCastle.restock(20);
console.log(howelsMovingCastle.avalability())
