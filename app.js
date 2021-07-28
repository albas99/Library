let myLibrary = [];

let mainLibrary = document.querySelector(".main-library");

const modal = document.querySelector(".modal");
const addButton = document.querySelector(".addButton");
const closeModalButton = document.querySelector(".close-modal");
addButton.addEventListener("click", displayModal);
closeModalButton.addEventListener("click", closeModal);

const modalForm = document.querySelector(".modal-form");
modalForm.addEventListener("submit", addBookToLibrary);

let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let status = document.querySelector("#status");

function Book(title, author, pages, status, id) {
  this.title = title.value;
  this.author = author.value;
  this.pages = pages.value;
  this.status = status.value;
  this.id = myLibrary.length;
}

// CREATE AND ADD BOOK TO LIBRARY
function addBookToLibrary(e) {
  e.preventDefault();
  let book = new Book(title, author, pages, status);
  book.id += 1;
  let card = document.createElement("div");
  let bookTitle = document.createElement("h2");
  let bookAuthor = document.createElement("h3");
  let numberOfPages = document.createElement("p");
  let readingStatus = document.createElement("p");
  let removeBookButton = document.createElement("button");
  removeBookButton.append("Remove");
  removeBookButton.setAttribute("class", "remove-book");
  removeBookButton.addEventListener("click", removeBookFromLibrary);
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  numberOfPages.textContent = `${book.pages} pages`;
  readingStatus.textContent = `Status: ${book.status}`;
  myLibrary.push(book);
  card.setAttribute("class", "card");
  card.setAttribute("data-book-id", book.id);
  card.append(bookTitle);
  card.append(bookAuthor);
  card.append(numberOfPages);
  card.append(readingStatus);
  card.append(removeBookButton);
  mainLibrary.appendChild(card);
  closeModal();
  modalForm.reset();
  console.log(book.id);
}

function removeBookFromLibrary() {
  
}

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
