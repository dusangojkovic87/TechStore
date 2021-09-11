import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/Models/Banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input("bannerItem") bannerItem?:Banner;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirectToCategory(category:any){
    if(category)
       this.router.navigateByUrl(category.toLowerCase());


  }

}
