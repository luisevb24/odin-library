const myLibrary = [];
const booksList = document.querySelector('.books');
const newBookBtn = document.querySelector('.newBook');
const newBookDialog = document.querySelector('.newBookModal');
const closeDialogBtn = document.querySelector('.closeDialog');
const newBookForm = document.querySelector('.newBookForm');
const removeBtn = document.querySelector('.removeBtn');

newBookForm.addEventListener('submit', () => {
    let bookData = new FormData(newBookForm);
    let title = bookData.get('book-title');
    let author = bookData.get('book-author');
    let pages = bookData.get('book-pages');
    let isRead = bookData.get('book-read-state');

    addBookToMyLibrary(title, author, pages, isRead);
}
)

function Book(title, author, numOfPages, isRead, id) {
    if (!new.target) throw Error;
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
    this.id = id;
}

Book.prototype.toggleIsRead = function () {
    this.isRead = !this.isRead;
}

function renderBookCard(book) {
    const bookCard = document.createElement('li');
    bookCard.classList.add('bookCard');

    const bookTitle = document.createElement('div');
    bookTitle.classList.add('bookTitle');
    bookTitle.textContent = `${book.title}`;

    const bookAuthor = document.createElement('div');
    bookAuthor.classList.add('bookAuthor');
    bookAuthor.textContent = `by ${book.author}`;

    const bookInfo = document.createElement('div');
    bookInfo.classList.add('bookPages');
    bookInfo.textContent = `${book.numOfPages} pages`;

    const bookState = document.createElement('button');
    bookState.classList.add('bookState');
    bookState.textContent = '';
    if (book.isRead) {
        bookState.classList.add('bookRead');
    } else {
        bookState.classList.add('bookNotRead');
    }

    const removeBtn = document.createElement('button');
    removeBtn.classList.add('removeBtn');
    removeBtn.textContent = '';


    bookCard.setAttribute('data-id', book.id);
    booksList.appendChild(bookCard);
    bookCard.append(bookTitle, bookAuthor, bookInfo, bookState, removeBtn);

    bookState.addEventListener('click', (event) => {
        const btn = event.target;
        const bookCard = btn.parentElement;
        const bookId = bookCard.dataset.id;
        const newState = toggleState(bookId);

        if (newState) {
            bookState.classList.remove('bookNotRead');
            bookState.classList.add('bookRead');
        } else if (!newState){
            bookState.classList.remove('bookRead');
            bookState.classList.add('bookNotRead');
        }
    });

    removeBtn.addEventListener('click', (event) => {
        const btn = event.target;
        const bookCard = btn.parentElement;
        const bookId = bookCard.dataset.id;
        removeBook(bookId);
        bookCard.remove();
    });
}

function addBookToMyLibrary(title, author, numOfPages, isRead) {
    let id = self.crypto.randomUUID();
    let newBook = new Book(title, author, numOfPages, isRead, id);
    myLibrary.push(newBook);
    renderBookCard(newBook);
}

myLibrary.forEach((book) => {
    renderBookCard(book);
});


newBookBtn.addEventListener('click', () => {
    newBookDialog.showModal();
})

closeDialogBtn.addEventListener('click', () => {
    newBookDialog.close();
})



addBookToMyLibrary('The Dragon Reborn', 'Robert Jordan', 650, true);
addBookToMyLibrary('Siddharta', 'Hermann Hesse', 200, false);

function removeBook(bookId) {
    const bookIndex = myLibrary.findIndex((book) => book.id == bookId);
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
    }
}

function toggleState(bookId) {
    const bookIndex = myLibrary.findIndex((book) => book.id == bookId);
    myLibrary[bookIndex].toggleIsRead();
    return myLibrary[bookIndex].isRead;
}