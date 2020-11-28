const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

const isBookRead = (books, titleToSearch) => 
                            books.some(book => 
                                book.title === titleToSearch && book.isRead
);

console.log(`


EJERICIO 4
Colección de libros:`);
console.table(books);
console.log(`isBookRead(books, "Devastación") resultado ${isBookRead(books, "Devastación")}`);
console.log(`isBookRead(books, "Canción de hielo y fuego") resultado ${isBookRead(books, "Canción de hielo y fuego")}`);
console.log(`isBookRead(books, "Los Pilares de la Tierra") resultado ${isBookRead(books, "Los Pilares de la Tierra")}`);
console.log(`isBookRead(books, "Harry Potter y la piedra filosofal") resultado ${isBookRead(books, "Harry Potter y la piedra filosofal")}`);