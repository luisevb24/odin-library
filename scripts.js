const myLibrary = [];
const booksList = document.querySelector('.books');


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

console.log(myLibrary);