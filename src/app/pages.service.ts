import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagesService {
  pages = new BehaviorSubject(0);
  pageObserv = this.pages.asObservable();
  constructor() {}

  setPages(pageNum: number) {
    this.pages.next(pageNum);
  }
}
