import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';

import { BookService } from './../../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  columns: string[] = ['title', 'author', 'isbn', 'created'];
  books: BookModel[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.all()
      .subscribe(books => this.books = books);
  }

}
