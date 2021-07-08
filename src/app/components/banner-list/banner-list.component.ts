import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/Models/Banner';
import { BannerService } from 'src/app/Services/banner.service';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.css']
})
export class BannerListComponent implements OnInit {
  banners?:any;

  constructor(private bannerServise:BannerService) { }

  ngOnInit(): void {
    this.bannerServise.getBannerData().subscribe(data =>{
      this.banners = data;
    })
  }

}
