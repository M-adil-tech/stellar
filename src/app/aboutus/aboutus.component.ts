import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  item: any = [
    {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    }, {
      name: "Innovation",
      desc: "We are committed to staying at the forefront of technology and embracing innovative solutions to enhance testing processes."
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
