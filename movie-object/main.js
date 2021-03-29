const Movie = class movie {
    constructor(title, director, genre, releaseYear, rating) {
        this.title = title;
        this.director = director;
        this.genre = genre;
        this.releaseYear = releaseYear;
        this.rating = rating;
    }
    get overview() {
        return this.getOverview
    }
    getOverview() {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`
    }
}

const tusk = new Movie("Tusk", "Kevin Smith", "Horror", 2014, "5.3/10");
const willys = new Movie("Willy's Wonderland", "Kevin Lewis", "Horror", 2021, "5.5/10");

console.log(tusk.overview());
console.log(willys.overview());
