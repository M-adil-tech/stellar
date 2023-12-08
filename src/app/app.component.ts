import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { event } from 'jquery';
import { filter, mergeMap, of } from 'rxjs';
import { RestService } from './rest.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  coords = { x: 0, y: 0 };
  circles: any;
  private cursorTimer: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
  //  console.log(e);
    this.coords.x = e.clientX;
    this.coords.y = e.clientY;

    this.animateCircles();
    clearTimeout(this.cursorTimer);
    this.cursorTimer = setTimeout(() => {
      this.el.nativeElement.querySelector('#cursor').style.display = 'none';
    }, 500);
  }
  constructor(private el: ElementRef,private titleService: Title,
    private meta: Meta, private route: Router,private rest:RestService) {

      
     
    }
 
  ngOnInit(): void {

  
    // this.route.events.pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     mergeMap((event: NavigationEnd) => {
    //         const url = event.url.split('/')[2];
    //         return url;
    //     })
    //   )
    //   .subscribe((url:any) => {
    //     if (url) {
    //      // console.log(user);
    //       this.titleService.setTitle(
    //         `Steller | `+ url
    //       );
    //     } else {
    //       console.log('not a user URL');
    //       this.titleService.setTitle('Home page');
    //     }
    //   });
    this.circles = this.el.nativeElement.querySelectorAll('.circle');
    this.el.nativeElement.querySelector('#cursor').style.display = 'none';
    this.circles.forEach((element) => {
      element.x = 0;
      element.y = 0;
    });
  }

  animateCircles() {
    let x = this.coords.x;
    let y = this.coords.y;
    this.circles.forEach((circle, index) => {
      circle.style.left = x - 0 + 'px';
      circle.style.top = y - 0 + 'px';
      this.el.nativeElement.querySelector('#cursor').style.display = 'block';
      circle.style.scale = (this.circles.length - index) / this.circles.length;
      circle.x = x;
      circle.y = y;
      const nextCircle = this.circles[index + 1] || this.circles[0];
      x += (nextCircle.x - x) * 0.8;
      y += (nextCircle.y - y) * 0.8;
    });
  }
}
