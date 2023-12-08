import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  private scrollToPositionSubject = new Subject<void>();

  scrollToPosition() {
    this.scrollToPositionSubject.next();
  }

  getScrollToPositionSubject() {
    return this.scrollToPositionSubject.asObservable();
  }
}
