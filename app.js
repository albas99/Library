let myLibrary = [];

let bookShelf = document.querySelector(".book-shelf");

const modal = document.querySelector(".modal");
const addButton = document.querySelector(".addButton");
const closeModalButton = document.querySelector(".close-modal");
addButton.addEventListener("click", displayModal);
closeModalButton.addEventListener("click", closeModal);

const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", createNewBook);
let submitBook = document.querySelector(".submit-book");

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
// let pagesRead = document.querySelector("#pages-read");
// let pagesWarning = document.querySelector(".pages-warning")

// TO DO: REFACTOR THIS INTO A BOOK PROTOTYPE LATER
generateRandomId = () => {
  return Math.floor(Math.random() * 10000);
};
function Book(title, author, pages, id) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  // this.pagesRead = pagesRead.value;
  this.id = generateRandomId();
}

function createNewBook(e) {
  e.preventDefault();
  let book = new Book(title, author, pages);
  myLibrary.push(book);
  createBookCard(book);
  saveToStorage();
  closeModal();
  modalForm.reset();
}

function addBookToShelf() {
  myLibrary.forEach(card => {
    createBookCard(card);
  })
}

function createBookCard(book) {
  let card = document.createElement("div");
  let bookTitle = document.createElement("h2");
  let bookAuthor = document.createElement("h3");
  let numberOfPages = document.createElement("p");
  let readingStatus = document.createElement("select");
  let notRead = document.createElement("option");
  notRead.textContent = "Not Read";
  let currentlyReading = document.createElement("option");
  currentlyReading.textContent = "Currently Reading";
  let read = document.createElement("option");
  read.textContent = "Read";
  readingStatus.append(notRead);
  readingStatus.append(currentlyReading);
  readingStatus.append(read);
  let removeBookButton = document.createElement("button");
  removeBookButton.append("Remove");
  removeBookButton.setAttribute("class", "remove-book");
  removeBookButton.addEventListener("click", removeBookFromLibrary);
    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `${book.author}`;
  numberOfPages.textContent = `${book.pages} pages`;
    card.setAttribute("class", "card");
    card.setAttribute("data-book-id", book.id);
    card.append(bookTitle);
    card.append(bookAuthor);
    card.append(numberOfPages);
  card.append(readingStatus);
  card.append(removeBookButton);
  bookShelf.append(card);
}

function removeBookFromLibrary() {
  let card = document.querySelector(".card");
  card.remove();
  myLibrary = myLibrary.filter(
    (book) => Number(card.dataset.bookId) !== book.id
  );
}

function saveToStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function getFromStorage() {
  if (!localStorage.myLibrary) {
    addBookToShelf();
  }
  else {
    let mySavedLibrary = localStorage.getItem('myLibrary');
    mySavedLibrary = JSON.parse(mySavedLibrary);
    myLibrary = mySavedLibrary;
    addBookToShelf();
  }
}

getFromStorage();

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

    // If not read {progress = 0%}
    // If read {progrees = 100%}
    // If currently reading{progress = %of total number of pages}
    // pages read should not be more than total number of pages
    
    // Book.prototype = {
    //   warning() {
    //     if (this.pagesRead > this.pages) {
    //       pagesWarning.style.display = "block";
    //       modalForm.removeEventListener("submit", addBookToLibrary);
    //     }
    //   },
    //   // info() {
    //   //   console.log(`${this.title} by ${this.author}, ${this.pages} ${this.status}`);
    //   // }
    // }