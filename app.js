let myLibrary = [];

let mainLibrary = document.querySelector(".main-library");

const modal = document.querySelector(".modal");
const addButton = document.querySelector(".addButton");
const closeModalButton = document.querySelector(".close-modal");
addButton.addEventListener("click", displayModal);
closeModalButton.addEventListener("click", closeModal);

const modalForm = document.querySelector(".modal-form");
const submitBook = document.querySelector(".submit-book");
submitBook.addEventListener("click", addBookToLibrary);

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");

function Book(title, author, pages, status) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.status = status.value;
  // this.info = function () {
  //     return(`${this.title} by ${this.author}, ${this.pages}, ${this.read}`)
  // }
}

// let theHobbit = new Book("The Hobbit", "J.R. Tolkien", "295 pages", "not read");

// console.log(theHobbit.info());

// function createNewBook(e) {
//     e.preventDefault();
//     const book = new Book(title, author, pages, status);
//     console.log(title.value);
//     console.log(author.value);
//     console.log(pages.value);
//     // console.log(status.value);
//     myLibrary.push(book);
//     addBookToLibrary();
//     closeModal();
// }

// CREATE AND ADD BOOK TO LIBRARY
function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(title, author, pages, status);
  let card = document.createElement("div");
  let bookTitle = document.createElement("h2");
  let bookAuthor = document.createElement("h3");
  let numberOfPages = document.createElement("p");
  let readingStatus = document.createElement("p");
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
    numberOfPages.textContent = `${book.pages} pages`;
    readingStatus.textContent = `Status: ${book.status}`
  myLibrary.push(book);
  card.setAttribute("class", "card");
  card.append(bookTitle);
  card.append(bookAuthor);
    card.append(numberOfPages);
    card.append(readingStatus);
  mainLibrary.appendChild(card);
  closeModal();
    modalForm.reset();
}
// addBookToLibrary();
// The books will be displayed depending on how many of them are in the array, so when a user fills in the form, a new Book() will be created which will be added to the array and then the addBookToLibrary function will be called and the book will be displayed.

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

//CLOSE MODAL WHEN ANYWHERE ON THE WINDOW IS CLICKED
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
