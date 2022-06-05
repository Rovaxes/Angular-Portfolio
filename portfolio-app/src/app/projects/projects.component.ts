import { Component, OnInit } from '@angular/core';
import { pulseAnimation } from 'angular-animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    pulseAnimation({duration: 5000})
  ]
})
export class ProjectsComponent implements OnInit {

  animState = false;

  projects = [
    {
      name: "Slums",
      image: "../../assets/images/slumsSnap.png"
    },
    {
      name: "PushOver",
      image: "../../assets/images/pushOverSnap.png"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  animDone() {
    this.animState = !this.animState
  }
}
