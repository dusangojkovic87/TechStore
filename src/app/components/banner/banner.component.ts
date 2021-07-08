import { Component, Input, OnInit } from '@angular/core';
import { Banner } from 'src/app/Models/Banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input("bannerItem") bannerItem?:Banner;

  constructor() { }

  ngOnInit(): void {
  }

}
