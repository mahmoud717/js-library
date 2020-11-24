// create library and constructor
let library = []
const $bookList = document.querySelector("ul")
const $addBookButton = document.querySelector(".add-book-button")
function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add placeholder books
function addPlaceholderBooks() {
    let lordOfTheFlies = new book("Lord of the flies", "William Golding", 345, false)
    let theHungerGames = new book("The hunger games", "Suzanne Collins", 400, false)
    library.push(lordOfTheFlies, theHungerGames)
}