import { Component, OnInit } from '@angular/core';

declare function nextHandler(): any;


@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss']
})
export class WheelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  next(){
    nextHandler()
  }


}
