import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsideBanner } from '../Models/AsideBanner';
import { Banner } from '../Models/Banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(private http:HttpClient) { }

  getBannerData():Observable<Banner>{
    return this.http.get<Banner>("/assets/fakeBackendApi/banner.json");
  }

  getAsideBannerData():Observable<AsideBanner>{
    return this.http.get<AsideBanner>("/assets/fakeBackendApi/aside-banner.json");
  }

  getBannerBottomData():Observable<Banner>{
    return this.http.get<Banner>("/assets/fakeBackendApi/bannerBottom.json");

  }
}
