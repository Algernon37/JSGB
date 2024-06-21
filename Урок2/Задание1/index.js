//Задание 1
class Library {
    #books = [];
    constructor(initialBooks = []) {
        if (new Set(initialBooks).size !== initialBooks.length) {
            throw new Error("Начальный список книг содержит дубликаты.");
        }
        this.#books = [...initialBooks];
    }
    get allBooks() {
        return [...this.#books];
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error(`Книга "${title}" уже есть в библиотеке.`);
        }
        this.#books.push(title);
    }
    removeBook(title) {
        const index = this.#books.indexOf(title);
        if (index === -1) {
            throw new Error(`Книга "${title}" не найдена в библиотеке.`);
        }
        this.#books.splice(index, 1);
    }
    hasBook(title) {
        return this.#books.includes(title);
    }
}
try {
    const myLibrary = new Library(["Гарри Поттер", "Властелин колец"]);
    myLibrary.addBook("Игра престолов");
    console.log(myLibrary.allBooks); 
    console.log(myLibrary.hasBook("Властелин колец")); 
    console.log(myLibrary.hasBook("Часодеи"));
    myLibrary.removeBook("Гарри Поттер");
    console.log(myLibrary.allBooks);
    myLibrary.addBook("Игра престолов"); 
} catch (error) {
    console.error(error.message);
}
try {
    const anotherLibrary = new Library(["Книга 1", "Книга 1"]); 
} catch (error) {
    console.error(error.message);
}

//Задание 2
