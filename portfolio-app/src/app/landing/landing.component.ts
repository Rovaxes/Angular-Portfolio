import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation()
  ]
})

export class LandingComponent implements OnInit {
  path: string = "../../assets/images/selfie.png";
  logo: string = "../../assets/images/logo.png";
  arrow: string = "../../assets/images/icons/arrow2.png";

  state = true;

  constructor() { }

  ngOnInit(): void {
    
  }


}
