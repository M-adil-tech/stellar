import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techsupport',
  templateUrl: './techsupport.component.html',
  styleUrls: ['./techsupport.component.scss']
})
export class TechsupportComponent implements OnInit {


  item: any = [
    {
      name: "Contact Us"
    }, {
      name: "FAQs"
    }, {
      name: "Knowledge Base"
    }, {
      name: "Community Forum"
    }, {
      name: "Video Tutorials"
    }, {
      name: "Submit a Ticket"
    }, {
      name: "Additional Resources"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
