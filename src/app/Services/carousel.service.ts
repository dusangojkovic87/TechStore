import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from '../Models/Carousel';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private http:HttpClient) { }

  getImages():Observable<Carousel>{
    return this.http.get<Carousel>("/assets/fakeBackendApi/carousel.json");
  }



}
