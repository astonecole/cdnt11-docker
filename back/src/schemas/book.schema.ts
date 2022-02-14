import { Document, model, Model, Schema } from "mongoose";
import { Book } from "../models/book.model";

export interface BookModel extends Book, Document {
    getTitle(): string;
}

export const BookSchema = new Schema<Book, BookModel>({
    title: { type: String, required: true },
    author: { type: String, required: true },
    created: { type: Date, default: Date.now },
    isbn: String
}, { collection: 'book' });

BookSchema.pre('save', function (next) {
    if (!this.created) {
        this.created = Date.now();
    }
    next();
});

BookSchema.methods.getTitle = function (): string {
    return this.title;
};

export default model<BookModel>('Book', BookSchema);