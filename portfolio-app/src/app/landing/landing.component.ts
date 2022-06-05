import { Component, OnInit } from '@angular/core';
import { bounceAnimation, bounceInDownOnEnterAnimation, bounceInUpOnEnterAnimation, expandOnEnterAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, slideInUpOnEnterAnimation, slideOutUpAnimation, slideOutUpOnLeaveAnimation } from 'angular-animations';
import { loadFull } from 'tsparticles';
import { Container, Engine } from 'tsparticles-engine';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    fadeInOnEnterAnimation(),
    slideInUpOnEnterAnimation({ anchor: 'slideInUpOnEnter', duration: 500, delay: 100, translate: '100px' }),
    slideInUpOnEnterAnimation({ anchor: 'slideInUpOnEnterSlow', duration: 1000, delay: 100, translate: '100px' }),
    fadeOutOnLeaveAnimation(),
    bounceAnimation({duration: 2000})
  ]
})

export class LandingComponent implements OnInit {
  path: string = "../../assets/images/selfie.png";
  logo: string = "../../assets/images/logo.png";
  arrow: string = "../../assets/images/icons/arrow2.png";

  visible = false;
  animState = false;

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "https://particles.js.org/samples/presets/fireworks.html";
  
  particlesOptions = {
    particles: {
      color: {
        value: [ '#ff0000', '#0000ff' ]
      },
      lineLinked: {
        enable: true,
        color: 'random'
      },
      move: {
        enable: true,
        speed: 5
      },
      fullScreen: {
        zIndex: -100
      },
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.visible = true;
  }

  _visibilityChangeHandler(_event: any) {
    console.log(_event);
    this.visible = true ? _event === "VISIBLE" : false;
  }

  animDone() {
    this.animState = !this.animState
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
  
}
