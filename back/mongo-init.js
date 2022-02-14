db = db.getSiblingDB('store');

db.book.insert([{
        title: "Title of Book 1",
        author: "John Doe 1",
        isbn: "abc123"
    },
    {
        title: "Title of Book 2",
        author: "John Doe 2",
        isbn: "123abcd"
    },
]);