import { Component, OnInit } from '@angular/core';
import { bounceInUpAnimation, slideInRightAnimation, slideOutRightAnimation } from 'angular-animations';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    bounceInUpAnimation(),
    slideInRightAnimation(),
    slideOutRightAnimation()
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  textVisibility: boolean = false;
  formVisibility: boolean = false;

  ngOnInit(): void {
  }

  textVisibilityHandler(_event: any) {
    this.textVisibility = true ? _event === "VISIBLE" : false;
  }

  formVisibilityHandler(_event: any) {
    this.formVisibility = true ? _event === "VISIBLE" : false;
  }

  animStart(event: AnimationEvent) {
    event.element.style.visibility = 'visible';
  }

  animDone(event: AnimationEvent) {
    event.element.style.visibility = 'hidden';
  }

}
