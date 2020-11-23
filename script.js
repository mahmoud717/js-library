// create library and constructor
let library = []
const $bookList = document.querySelector("ul")
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
    const addBookButton = document.querySelector("#add-book button")
    addBookButton.addEventListener("click", function(e){
    
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
    const bookAuthor = document.createElement("span")
    const bookPages = document.createElement("span")
    const bookRead = document.createElement("span")
    const deleteBtn = document.createElement("span")

    // changing the style and content of the elements
    bookName.textContent = title
    bookName.classList.add("name")
    bookAuthor.textContent = author
    bookAuthor.classList.add("author")
    bookPages.textContent = pages
    bookPages.classList.add("pages")
    bookRead.textContent = read
    bookRead.classList.add("read")
    deleteBtn.textContent = "delete"
    deleteBtn.classList.add("delete")

    li.appendChild(bookName)
    li.appendChild(bookAuthor)
    li.appendChild(bookPages)
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


addPlaceholderBooks()
renderLibrary()
removeBookFromLibrary()
processForm()