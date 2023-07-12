import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { HistorySectionComponent } from './components/history-section/history-section.component';
import { TeamSectionComponent } from './components/team-section/team-section.component';
import { CarouselServiceService } from './servicios/carousel-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HistorySectionComponent,
    TeamSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CarouselServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
