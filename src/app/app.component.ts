import { Component } from '@angular/core';
import { CarouselServiceService } from '../app/servicios/carousel-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mountainsla';

  constructor(private carouselService: CarouselServiceService) {}

  getCarouselClass(): string {
    return this.carouselService.getCarouselClass();
  }
}
