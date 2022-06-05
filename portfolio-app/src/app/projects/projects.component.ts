import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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

}
