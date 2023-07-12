import { Component } from '@angular/core';
import { CarouselServiceService } from '../../servicios/carousel-service.service';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css'],
})
export class TeamSectionComponent {
  logo = '../../../assets/Logo.png';
  logo2 = '../../../assets/Logo2.png';

  constructor(private carouselService: CarouselServiceService) {}

  onClickChangeCarouselClass(className: string): void {
    this.carouselService.setCarouselClass(className);
  }
}
