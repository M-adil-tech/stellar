import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollService } from 'app/scroll.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  navbarCollapsed = true;

  toggleNavbarCollapsing() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }
  constructor(public router: Router,
    public scrollService: ScrollService) { }

  ngOnInit(): void { }

  navigateToSecondComponent() {
    // Navigate to the 'second' route with a fragment
    console.log('navigate')
    this.router.navigate(['home']);
    this.scrollService.scrollToPosition();
  }


}
