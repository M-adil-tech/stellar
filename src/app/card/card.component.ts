import {
  state,
  trigger,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardTrigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%)',
        }),
        animate(500),
      ]),
      transition(':leave', [
        animate(
          500,
          style({
            opacity: 0,
            transform: 'translateY(-100%)',
          })
        ),
      ]),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() index: number;
  @Output() cardClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.cardClicked.emit();
  }
  isTilted: boolean = false;
  onClick1() {
 
    this.isTilted = !this.isTilted;
  }
}
