import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  path: string = "../../assets/images/selfie.png";
  logo: string = "../../assets/images/logo.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}