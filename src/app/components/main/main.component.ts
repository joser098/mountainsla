import { Component } from '@angular/core';
import { CarouselServiceService } from '../../servicios/carousel-service.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})

export class MainComponent {
  logoImage = '../../../assets/Logo.png'
  mainImage = '../../../assets/mainImage.png'

  constructor(private carouselService: CarouselServiceService ) {}

    onClickChangeCarouselClass(className: string ): void {
    this.carouselService.setCarouselClass(className);
  }
}
