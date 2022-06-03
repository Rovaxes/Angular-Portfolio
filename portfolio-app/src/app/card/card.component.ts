import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardType: string = "full";
  @Input() cardInfo = {
    header: "Honours Bachelor of Science - Computer Science",
    secondary: "Lassonde School of Engineering, York University",
    tertiary: "Toronto"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
