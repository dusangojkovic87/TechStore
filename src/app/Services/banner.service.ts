import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../Models/Banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }

  getBannerData():Observable<Banner>{
    return this.http.get<Banner>("/assets/fakeBackendApi/banner.json");
  }
}
