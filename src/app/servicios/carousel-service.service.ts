import { Injectable } from '@angular/core';
import { Class } from '../interfaces/Class';

@Injectable({
  providedIn: 'any'
})
export class CarouselServiceService {

  private carouselClass = 'main'

  getCarouselClass(): string {
    return this.carouselClass;
  }

  setCarouselClass(className: string): void {
    this.carouselClass = className
  }
 constructor() { } 
}
