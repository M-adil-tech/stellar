import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  items = [{ name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" }, { name: 'Item 1', class: "123" },];




  // getRows(): number[] {
  //   return Array.from({ length: Math.ceil(this.items.length / 3) }, (_, index) => index);
  // }

  // getRowItems(row: number): { name: string, class: string }[] {
  //   const start = row * 3;
  //   const end = Math.min((row + 1) * 3, this.items.length);
  //   return this.items.slice(start, end);
  // }

}
