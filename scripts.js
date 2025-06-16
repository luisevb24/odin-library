const myLibrary = [];
const booksList = document.querySelector('.books');
const newBookBtn = document.querySelector('.newBook');
const newBookDialog = document.querySelector('.newBookModal');
const closeDialogBtn = document.querySelector('.closeDialog');

function Book(title, author, numOfPages, isRead, id){
    if(!new.target) throw Error;
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.id = id;
}

function addBookToMyLibrary(title, author, numOfPages, isRead){
    let id = self.crypto.randomUUID();
    let newBook = new Book(title, author, numOfPages, isRead, id);
    myLibrary.push(newBook);
}

addBookToMyLibrary('Lord of Chaos', 'Robert Jordan', 800, true);
addBookToMyLibrary('Siddharta', 'Hermann Hesse', 200, false);

myLibrary.forEach((book) => {
    let bookCard = document.createElement('li');
    bookCard.classList.add('bookCard');


    let bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = `${book.title}`;

    let bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.textContent = `by ${book.author}`;

    let bookInfo = document.createElement('div');
    bookInfo.classList.add('bookPages');
    bookInfo.textContent = `Number of Pages: ${book.numOfPages}`

    let bookRead = document.createElement('div');
    if (book.isRead) {
        bookRead.classList.add('bookRead');
    } else {
        bookRead.classList.add('bookNotRead');
    }

    booksList.appendChild(bookCard);
    bookCard.append(bookTitle, bookAuthor, bookInfo, bookRead);
});

newBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})

closeDialogBtn.addEventListener('click', () => {
    newBookDialog.close();
})