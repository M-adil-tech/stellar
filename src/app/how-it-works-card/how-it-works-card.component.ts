import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-how-it-works-card',
  templateUrl: './how-it-works-card.component.html',
  styleUrls: ['./how-it-works-card.component.scss'],
  animations: [
    trigger('card12Trigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(100%)',
        }),
        animate(500),
      ]),
    ]),
    trigger('card3Trigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)',
        }),
        animate(500),
      ]),
    ]),
    trigger('card4Trigger', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(-100%)',
        }),
        animate(500),
      ]),
    ]),
  ],
})
export class HowItWorksCardComponent implements OnInit {
  @Input() index: number;
  @Output() cardClicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit() {}

  onClick() {
    this.cardClicked.emit();
  }
}
