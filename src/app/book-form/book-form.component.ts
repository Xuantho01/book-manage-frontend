import { Component, OnInit } from '@angular/core';
import {Book} from '../common/book';
import {ActivatedRoute, Route} from '@angular/router';
import {BookService} from '../service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
  // book: Book;
  // constructor(
  //   private route: ActivatedRoute,
  //   private route: Route,
  //   private bookService: BookService
  // ) {
  //   this.book = new Book();
  // }
  // gotoBookList(){
  //   this.route.navigate(['api/v1/book']);
  // }
  ngOnInit(): void {
  }

}
