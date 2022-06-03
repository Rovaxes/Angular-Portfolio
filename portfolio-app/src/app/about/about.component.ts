import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  educationCardSize: string = 'full';
  workCardSize: string = '80';

  // Mock Data
  educationInfo = {
    header: "Honours Bachelor of Science - Computer Science",
    secondary: "Lassonde School of Engineering, York University",
    tertiary: "Toronto"
  }

  expierenceInfo = [
    {    
      header: "NGT Technology",
      secondary: "Canadian Tire Corp - Digital Development ",
      tertiary: "Toronto"
    },
    {    
      header: "Backend Developer",
      secondary: "XTM Inc - Engineering",
      tertiary: "Toronto"
    },
    {    
      header: "Programmer Analyst Intern",
      secondary: "Ontario Teacher’s Pension Plan - Enterprise Data",
      tertiary: "North York"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
