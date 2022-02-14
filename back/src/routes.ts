import { Application } from "express";
import { addBook, getBooks } from './controllers/book';

import ping from './controllers';

export const routes = (app: Application) => {

    // Default
    app.get('/ping', ping);

    // Book
    app.route('/book')
        .post(addBook)
        .get(getBooks);
};