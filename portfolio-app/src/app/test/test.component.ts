import { Component, OnInit } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine, Container, OptionsColor, tsParticles } from "tsparticles-engine";
import { loadFull, } from "tsparticles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "https://particles.js.org/samples/presets/fireworks.html";
  
  particlesOptions = {
    background: {
      opacity: 0
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: ["#BD10E0", "#B8E986", "#50E3C2", "#FFD300", "#E86363"]
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: true,
        speed: 2,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 1000
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };
  
  constructor() { }

  ngOnInit(): void {
  }
  
  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}