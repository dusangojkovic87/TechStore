import { Component, OnInit } from '@angular/core';
import { AsideBanner } from 'src/app/Models/AsideBanner';
import { BannerService } from 'src/app/Services/banner.service';

@Component({
  selector: 'app-aside-banner',
  templateUrl: './aside-banner.component.html',
  styleUrls: ['./aside-banner.component.css']
})
export class AsideBannerComponent implements OnInit {
  asideBannerData?:any;

  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
    this.bannerService.getAsideBannerData().subscribe(data =>{
      if(data){
        this.asideBannerData = data;
      }
    })
  }

}
