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
function addPlaceholderBooks(){
  let lordOfTheFlies = new book("Lord of the flies", "William Golding", 345, false)
  let theHungerGames = new book("The hunger games", "Suzanne Collins", 400, false)
  library.push(lordOfTheFlies, theHungerGames)
}

// process data from the form 
function processForm() {
    $addBookButton.addEventListener("click", function(e){
    // prevent the button default
    e.preventDefault()
    // query for book list, form 
   
    const addBookForm = document.forms['add-book']
    
    const titleValue = addBookForm.querySelector("input#title").value
    const authorValue = addBookForm.querySelector("input#author").value
    const pagesValue = addBookForm.querySelector("input#pages").value
    let readValue = addBookForm.querySelector("input#read").checked

    addBookToLibrary(titleValue, authorValue, pagesValue, readValue)
    // creating new elements
    
    switchBack()
    })
}

// add book to library
function addBookToLibrary(title, author, pages, read) {
    let newBook = new book(title, author, pages, read)
    library.push(newBook)
    showBook(title, author, pages, read)
}


// show book
function showBook(title, author, pages, read){
    const li = document.createElement("li")
    const bookName = document.createElement("span")
    const titleLabel = document.createElement("span")
    const bookAuthor = document.createElement("span")
    const authorLabel = document.createElement("span")
    const bookPages = document.createElement("span")
    const pagesLabel = document.createElement("span")
    const bookRead = document.createElement("span")
    const readLabel = document.createElement("span")
    const deleteBtn = document.createElement("span")

    // changing the style and content of the elements
    bookName.textContent =  title
    bookName.classList.add("name")
    titleLabel.classList.add("label", "title-label")
    titleLabel.textContent = "Title:"
    bookAuthor.textContent = author
    bookAuthor.classList.add("author")
    authorLabel.classList.add("label", "author-label")
    authorLabel.textContent = "Author:"
    bookPages.textContent =  pages
    bookPages.classList.add("pages")
    pagesLabel.classList.add("label", "pages-label")
    pagesLabel.textContent = "Number of Pages:"
    bookRead.textContent = read
    bookRead.classList.add("read")
    readLabel.classList.add("label", "read-label")
    readLabel.textContent = "Read?:"
    deleteBtn.textContent = "delete"
    deleteBtn.classList.add("delete")

    li.appendChild(titleLabel)
    li.appendChild(bookName)
    li.appendChild(authorLabel)
    li.appendChild(bookAuthor)
    li.appendChild(pagesLabel)
    li.appendChild(bookPages)
    li.appendChild(readLabel)
    li.appendChild(bookRead)
    li.appendChild(deleteBtn)
    $bookList.appendChild(li)
}

// render all books from library
function renderLibrary(){
    $bookList.innerHTML = ""
    library.forEach((el) => {
        showBook(el.title, el.author, el.pages, el.read)
  });
}


$bookList.addEventListener("click", function(el){
    
    if (el.target.classList.contains("read")){
        let li = el.target.parentElement 
        let title = li.querySelector(".name").textContent
        let author = li.querySelector(".author").textContent
        let pages = li.querySelector(".pages").textContent
        let read = li.querySelector(".read").textContent
        library.forEach((el, index) => {
            if (el.title == title && el.author == author && String(el.pages) === pages && String(el.read) === read){
                if (el.read == true){
                    el.read = false
                }
                else{
                    el.read = true
                }
            }
        })
       
        if (el.target.textContent == "true"){
            el.target.textContent = "false"
        }
        else{
            el.target.textContent = "true"
        }
    }
})
function changeReadStatus(el){

}
// remove book from the library and the page
function removeBookFromLibrary() {
    $bookList.addEventListener("click",function(e){
    if (e.target.classList.contains("delete")){
        let li = e.target.parentElement 
        let title = li.querySelector(".name").textContent
        let author = li.querySelector(".author").textContent
        let pages = li.querySelector(".pages").textContent
        let read = li.querySelector(".read").textContent
        library.forEach((el, index) => {
            if (el.title == title && el.author == author && String(el.pages) === pages && String(el.read) === read){
                library.splice(index, 1)
            }
        })
        li.parentNode.removeChild(li)
    }
    })
}

const newBookButton = document.querySelector('.new-book button')
newBookButton.addEventListener("click", function (e) {
    const hidden = document.querySelector('.hidden')
    hidden.classList.remove('hidden')
    const wrapper = document.querySelector('#wrapper')
    wrapper.classList.add('hidden')
})
const backButton = document.querySelector('.back-button')
backButton.addEventListener("click", function(e){
    e.preventDefault()
    switchBack()
})
function switchBack() {
    const hidden = document.querySelector('.hidden-form')
    hidden.classList.add('hidden')
    const wrapper = document.querySelector('#wrapper')
    wrapper.classList.remove('hidden')
}

addPlaceholderBooks()
renderLibrary()
removeBookFromLibrary()
processForm()