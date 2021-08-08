import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/Models/Banner';
import { BannerService } from 'src/app/Services/banner.service';

@Component({
  selector: 'app-banner-list-bottom',
  templateUrl: './banner-list-bottom.component.html',
  styleUrls: ['./banner-list-bottom.component.css']
})
export class BannerListBottomComponent implements OnInit {
  bannerData?:any;

  constructor(private bannerService:BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBannerBottomData().subscribe((data:any) =>{
      if(data)
        this.bannerData = data;
    })

  }

}
