let myLibrary = ["book1", "book2", "book3", "book4"];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
    }
}

let theHobbit = new Book("The Hobbit", "J.R. Tolkien", "295 pages", "not read");

console.log(theHobbit.info());

function addBookToLibrary() {
    let mainLibrary = document.querySelector('.main-library');
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.setAttribute("class", "card");
        mainLibrary.appendChild(card);
    }
}
addBookToLibrary();
// The books will be displayed depending on how many of them are in the array, so when a user fills in the form, a new Book() will be created which will be added to the array and then the addBookToLibrary function will be called and the book will be displayed.