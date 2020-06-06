import { Component, OnInit } from '@angular/core';
import {Book} from '../common/book';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  // tslint:disable-next-line:variable-name
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.listBooks();
  }
  listBooks(){
    this.bookService.getBooks().subscribe(
      data => {
        this.books = data;
        // console.log(data);
      }
    );
  }
}

