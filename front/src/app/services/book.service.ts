import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private urlApi: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  add(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(`${this.urlApi}/book`, book);
  }

  all(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${this.urlApi}/book`);
  }
}
