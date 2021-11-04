let myLibrary = [
    {
        title: "Python for Everybody",
        author: "Bodi",
        pages: 2300,
        readingStatus: "not read"
    },
    {
        title: "The Endurance Diet",
        author: "Matt Fitzgerald",
        pages: 320,
        readingStatus: "read"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 295,
        readingStatus: "read"
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read === 'read') {
            return title + " by " + author + ', ' + pages + " pages, " + read;
        } else if (read === 'not read') {
            return title + " by " + author + ', ' + pages + " pages, " + read + " yet";
        } else {
            return title + " by " + author + ', ' + pages + " pages, " + "reading status unknown";
        }
    }
}



function addBookToLibrary() {
    // Add book Input to Array on top
}






// const book1 = new Book("Python", "Bodi", 2313, "gunselberger");
// const book2 = new Book("The Endurance Diet", "Matt Fitzgerald", 320, "not read");
// const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "read");