import { Component } from '@angular/core';
import { CarouselServiceService } from '../../servicios/carousel-service.service';
import { Schedule } from 'src/app/interfaces/Schedule';
import { mountain1, mountain2 } from '../../utils/data';

@Component({
  selector: 'app-team-section',
  templateUrl: './team-section.component.html',
  styleUrls: ['./team-section.component.css'],
})
export class TeamSectionComponent {
  scheduleInfo: Schedule[] = mountain1
  logo = '../../../assets/Logo.png';
  logo2 = '../../../assets/Logo2.png';

  constructor(private carouselService: CarouselServiceService) {}

  onClickSetScheduleInfo(mountain: string){
    if(mountain === 'mountain1'){
      this.scheduleInfo = mountain1
    }
    if(mountain === 'mountain2'){
      this.scheduleInfo = mountain2
    }
  }

  onClickChangeCarouselClass(className: string): void {
    this.carouselService.setCarouselClass(className);
  }
}
