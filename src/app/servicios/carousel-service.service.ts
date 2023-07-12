import { Injectable } from '@angular/core';
import { Class } from '../interfaces/Class';

@Injectable({
  providedIn: 'any'
})
export class CarouselServiceService {
  // carouselClasses = {
  //   main: {
  //     width: '300%',
  //     display: 'flex',
  //     'justify-content': 'center',
  //     transition: 'all .5s ease',
  //     transform: 'translateX(0%)'
  //   },
  //   history: {
  //     width: '300%',
  //     display: 'flex',
  //     'justify-content': 'center',
  //     transition: 'all .5s ease',
  //     transform: 'translateX(-33%)'
  //   },
  //   team: {
  //     width: '300%',
  //     display: 'flex',
  //     'justify-content': 'center',
  //     transition: 'all .5s ease',
  //     transform: 'translateX(-33%)'
  //   }
  // }

  private carouselClass = 'main'

  getCarouselClass(): string {
    return this.carouselClass;
  }

  setCarouselClass(className: string): void {
    this.carouselClass = className
  }
 constructor() { } 
}
