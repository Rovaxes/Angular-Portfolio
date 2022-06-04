import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  educationCardSize: string = 'full';
  workCardSize: string = '80';
  imageCardSize: string = 'image';

  // Mock Data
  educationInfo = {
    header: "Honours Bachelor of Science - Computer Science",
    secondary: "Lassonde School of Engineering, York University",
    tertiary: "Toronto",
    date: "April 2022",
    image: "../../assets/images/yorku.png"
  }

  expierenceInfo = [
    {    
      header: "NGT Technology",
      secondary: "Canadian Tire Corp - Digital Development ",
      tertiary: "Toronto",
      date: "Now",
      image: ""
    },
    {    
      header: "Backend Developer",
      secondary: "XTM Inc - Engineering",
      tertiary: "Toronto",
      date: "Jan 2021 - Aug 2021",
      image: ""
    },
    {    
      header: "Programmer Analyst Intern",
      secondary: "Ontario Teacher’s Pension Plan - Enterprise Data",
      tertiary: "North York",
      date: "Sept 2019 - Jan 2020",
      image: ""
    }
  ]

  skillsInfo = [
    {    
      header: "Python",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/python.png"
    },
    {    
      header: "Java",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/java.png"
    },
    {    
      header: "C#",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/csharp.png"
    },
    {    
      header: "React",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/react.png"
    },
    {    
      header: "Github",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/github.png"
    },
    {    
      header: "SQL",
      secondary: "",
      tertiary: "",
      date: "",
      image: "../../assets/images/sql.png"
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
