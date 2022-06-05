import { Component, OnInit } from '@angular/core';
import { expandOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    expandOnEnterAnimation()
  ]
})
export class NavbarComponent implements OnInit {
  active = 1;
  constructor() { }

  ngOnInit(): void {
  }

  scrollToElement(element: any): void {
    console.log(element);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}
