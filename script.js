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