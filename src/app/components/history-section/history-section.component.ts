import { Component } from '@angular/core';
import { CarouselServiceService } from '../../servicios/carousel-service.service';


@Component({
  selector: 'app-history-section',
  templateUrl: './history-section.component.html',
  styleUrls: ['./history-section.component.css']
})
export class HistorySectionComponent {
  logoImage = '../../../assets/Logo.png'
  logo2 = '../../../assets/Logo2.png'
  historyImage = '../../../assets/history.png'
  currentClass = 'image_container'

    constructor(private carouselService: CarouselServiceService ) {}

    setCurrentClass(className: string){
      this.currentClass = className
    }

    getCurrentImage(): string {
      return this.currentClass
    }

    onClickChangeCarouselClass(className: string ): void {
    this.carouselService.setCarouselClass(className);
  }
}
