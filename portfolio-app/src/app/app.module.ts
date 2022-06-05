import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { CardComponent } from './card/card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnterTheViewportNotifierDirective } from './enter-the-viewport-notifier.directive';
import { ScrollAnchorDirective } from './scroll-anchor.directive';
import { ScrollSectionDirective } from './scroll-section.directive';
import { ScrollManagerDirective } from './scroll-manager.directive';

import { NgParticlesModule } from "ng-particles";
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    AboutComponent,
    CardComponent,
    ProjectsComponent,
    ContactComponent,
    EnterTheViewportNotifierDirective,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    NgParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
