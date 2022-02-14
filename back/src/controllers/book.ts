import { Book } from './../models/book.model';
import { Request, Response } from "express";
import { badRequest, internalServerError, ok, notFound } from './../models/response.model';
import BookModel from './../schemas/book.schema';

export const addBook = async (req: Request, res: Response) => {
    if (!req.body) {
        res.status(badRequest.code).json(badRequest);
    }
    const book: Book = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn
    };
    try {
        const store = new BookModel(book);
        const result = await store.save();
        res.status(ok.code).json(result);
        return;
    } catch (err) {
        res.status(ok.code).json({ err: err.errors });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    const books = await BookModel.find();
    if (!books) {
        res.status(notFound.code).json(notFound);
    }
    res.status(ok.code).json(books);
};
