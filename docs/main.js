(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dule\Desktop\TechStore\techstore\src\main.ts */"zUnb");


/***/ }),

/***/ "0B/p":
/*!********************************************************************!*\
  !*** ./src/app/pages/product-details/product-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_product_details_view_product_details_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/product-details-view/product-details-view.component */ "qUBY");









function ProductDetailsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-details-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx_r0.product);
} }
class ProductDetailsComponent {
    constructor(route, productServise) {
        this.route = route;
        this.productServise = productServise;
        this.product = [];
        this.isLoaded = false;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.id = +params.id;
        });
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((products) => {
            return products.filter((product) => product.id == this.id);
        }))
            .subscribe((product) => {
            this.product = product;
            this.isLoaded = true;
        });
    }
    ngOnDestroy() {
        this.isLoaded = false;
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 6, vars: 1, consts: [[1, "product-details-container"], [1, "aside-container"], [1, "main-details-page-container"], [4, "ngIf"], [3, "product"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailsComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoaded);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_4__["AsideCategoryNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_product_details_view_product_details_view_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsViewComponent"]], styles: [".product-details-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  height: auto;\r\n}\r\n.aside-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 300px;\r\n}\r\n.main-details-page-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n@media only screen and (max-width:970px){\r\n  .aside-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLmFzaWRlLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubWFpbi1kZXRhaWxzLXBhZ2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLmFzaWRlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "0aj9":
/*!*******************************************************************!*\
  !*** ./src/app/components/aside-banner/aside-banner.component.ts ***!
  \*******************************************************************/
/*! exports provided: AsideBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideBannerComponent", function() { return AsideBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/banner.service */ "daAj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AsideBannerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", b_r1 == null ? null : b_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", b_r1 == null ? null : b_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Get up to ", b_r1 == null ? null : b_r1.salePercent, " % off");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r1 == null ? null : b_r1.productCategory);
} }
class AsideBannerComponent {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    ngOnInit() {
        this.bannerService.getAsideBannerData().subscribe(data => {
            if (data) {
                this.asideBannerData = data;
            }
        });
    }
}
AsideBannerComponent.ɵfac = function AsideBannerComponent_Factory(t) { return new (t || AsideBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"])); };
AsideBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideBannerComponent, selectors: [["app-aside-banner"]], decls: 1, vars: 1, consts: [["class", "aside-banner-container", 4, "ngFor", "ngForOf"], [1, "aside-banner-container"], [3, "src", "alt"], [1, "aside-banner-text-wrrapper"], [1, "aside__banner__text"], [1, "aside__banner__category"]], template: function AsideBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsideBannerComponent_div_0_Template, 7, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asideBannerData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".aside-banner-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 300px;\r\n  background-color: white;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.aside-banner-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  font-family: \"Popins\";\r\n  color: white;\r\n  text-shadow: 1px 1px black;\r\n}\r\n\r\n.aside__banner__text[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-size: 1rem;\r\n}\r\n\r\n.aside__banner__category[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-family: \"Popins\";\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.aside-banner-text-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:70px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFNBQVM7RUFDVCxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJhc2lkZS1iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hc2lkZS1iYW5uZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hc2lkZS1iYW5uZXItY29udGFpbmVyIGltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5we1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5hc2lkZV9fYmFubmVyX190ZXh0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5hc2lkZV9fYmFubmVyX19jYXRlZ29yeXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuXHJcbi5hc2lkZS1iYW5uZXItdGV4dC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside-banner',
                templateUrl: './aside-banner.component.html',
                styleUrls: ['./aside-banner.component.css']
            }]
    }], function () { return [{ type: src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"] }]; }, null); })();


/***/ }),

/***/ "0iU7":
/*!*******************************************************************************!*\
  !*** ./src/app/components/aside-category-nav/aside-category-nav.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AsideCategoryNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideCategoryNavComponent", function() { return AsideCategoryNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AsideCategoryNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsideCategoryNavComponent.ɵfac = function AsideCategoryNavComponent_Factory(t) { return new (t || AsideCategoryNavComponent)(); };
AsideCategoryNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideCategoryNavComponent, selectors: [["app-aside-category-nav"]], decls: 23, vars: 0, consts: [[1, "aside-category-container"], ["routerLink", "/desktops", 1, "cat__list__desktops"], [1, "icon-desktop"], ["routerLink", "/laptops", 1, "cat__list__laptops"], [1, "icon-laptop"], ["routerLink", "/cameras", 1, "cat__list__cameras"], [1, "icon-camera"], ["routerLink", "/phones", 1, "cat__list__phones"], [1, "icon-phone"], ["routerLink", "/scanners", 1, "cat__list__scanners"], [1, "icon-scanner"], ["routerLink", "/watches", 1, "cat__list__watches"], [1, "icon-watch"], ["routerLink", "/peripherals", 1, "cat__list__peripherals"], [1, "icon-mouse"]], template: function AsideCategoryNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Desktops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Laptops ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cameras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Phones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Scanners ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Watches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Peripherals ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["ul[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  padding-top: 20px;\r\n  border:2px solid var(--main-orange);\r\n  height: 450px;\r\n  width: 220px;\r\n  margin-left:20px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  display: flex;\r\n  font-family: \"Popins\";\r\n  font-weight: bold;\r\n  font-size: 0.8rem;\r\n  align-items: center;\r\n  padding: 0.5rem;\r\n  color: var(--light-grey);\r\n  cursor: pointer;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n}\r\n\r\n\r\n\r\n.icon-desktop[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/desktop.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-laptop[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/laptop.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-camera[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/camera.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-phone[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/phone.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-printer[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/printer.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-scanner[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/scanner.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-watch[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/watch.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.icon-mouse[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/aside-nav/mouse.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  padding-right: 4px;\r\n}\r\n\r\n.cat__list__desktops[_ngcontent-%COMP%]:hover   .icon-desktop[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/desktop-orange.svg\");\r\n}\r\n\r\n.cat__list__laptops[_ngcontent-%COMP%]:hover   .icon-laptop[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/laptop-orange.svg\");\r\n}\r\n\r\n.cat__list__cameras[_ngcontent-%COMP%]:hover   .icon-camera[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/camera-orange.svg\");\r\n}\r\n\r\n.cat__list__phones[_ngcontent-%COMP%]:hover   .icon-phone[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/phone-orange.svg\");\r\n}\r\n\r\n.cat__list__scanners[_ngcontent-%COMP%]:hover   .icon-scanner[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/scanner-orange.svg\");\r\n}\r\n\r\n.cat__list__watches[_ngcontent-%COMP%]:hover   .icon-watch[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/watch-orange.svg\");\r\n}\r\n\r\n.cat__list__peripherals[_ngcontent-%COMP%]:hover   .icon-mouse[_ngcontent-%COMP%]{\r\n  content: url(\"/assets/icons/aside-nav/mouse-orange.svg\");\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .aside-category-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLWNhdGVnb3J5LW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsUUFBUTs7QUFFUjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLHlEQUF5RDtBQUMzRDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQztFQUNDO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiYXNpZGUtY2F0ZWdvcnktbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjoycHggc29saWQgdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCBsaTpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG4vKklDT05TKi9cclxuXHJcbi5pY29uLWRlc2t0b3B7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9kZXNrdG9wLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmljb24tbGFwdG9we1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9hc2lkZS1uYXYvbGFwdG9wLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmljb24tY2FtZXJhe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9hc2lkZS1uYXYvY2FtZXJhLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmljb24tcGhvbmV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9waG9uZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5pY29uLXByaW50ZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9wcmludGVyLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmljb24tc2Nhbm5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvYXNpZGUtbmF2L3NjYW5uZXIuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogNHB4O1xyXG59XHJcblxyXG4uaWNvbi13YXRjaHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvYXNpZGUtbmF2L3dhdGNoLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmljb24tbW91c2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9tb3VzZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XHJcbn1cclxuXHJcbi5jYXRfX2xpc3RfX2Rlc2t0b3BzOmhvdmVyIC5pY29uLWRlc2t0b3B7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy9hc2lkZS1uYXYvZGVza3RvcC1vcmFuZ2Uuc3ZnXCIpO1xyXG59XHJcblxyXG4uY2F0X19saXN0X19sYXB0b3BzOmhvdmVyIC5pY29uLWxhcHRvcHtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9sYXB0b3Atb3JhbmdlLnN2Z1wiKTtcclxufVxyXG5cclxuLmNhdF9fbGlzdF9fY2FtZXJhczpob3ZlciAuaWNvbi1jYW1lcmF7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy9hc2lkZS1uYXYvY2FtZXJhLW9yYW5nZS5zdmdcIik7XHJcbn1cclxuXHJcbi5jYXRfX2xpc3RfX3Bob25lczpob3ZlciAuaWNvbi1waG9uZXtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9waG9uZS1vcmFuZ2Uuc3ZnXCIpO1xyXG59XHJcblxyXG4uY2F0X19saXN0X19zY2FubmVyczpob3ZlciAuaWNvbi1zY2FubmVye1xyXG4gIGNvbnRlbnQ6IHVybChcIi9hc3NldHMvaWNvbnMvYXNpZGUtbmF2L3NjYW5uZXItb3JhbmdlLnN2Z1wiKTtcclxufVxyXG5cclxuLmNhdF9fbGlzdF9fd2F0Y2hlczpob3ZlciAuaWNvbi13YXRjaHtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi93YXRjaC1vcmFuZ2Uuc3ZnXCIpO1xyXG59XHJcblxyXG4uY2F0X19saXN0X19wZXJpcGhlcmFsczpob3ZlciAuaWNvbi1tb3VzZXtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2FzaWRlLW5hdi9tb3VzZS1vcmFuZ2Uuc3ZnXCIpO1xyXG59XHJcblxyXG4gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAuYXNpZGUtY2F0ZWdvcnktY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideCategoryNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside-category-nav',
                templateUrl: './aside-category-nav.component.html',
                styleUrls: ['./aside-category-nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_aside_special_products_aside_special_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/aside-special-products/aside-special-products.component */ "BmD+");
/* harmony import */ var _components_aside_banner_aside_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/aside-banner/aside-banner.component */ "0aj9");
/* harmony import */ var _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/client-aside-review-list/client-aside-review-list.component */ "SA4t");
/* harmony import */ var _components_carousel_img_slider_carousel_img_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/carousel-img-slider/carousel-img-slider.component */ "j3CW");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/info-card/info-card.component */ "kya/");
/* harmony import */ var _components_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/banner-list/banner-list.component */ "DH2L");
/* harmony import */ var _components_featured_product_list_featured_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/featured-product-list/featured-product-list.component */ "klYG");
/* harmony import */ var _components_banner_list_bottom_banner_list_bottom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/banner-list-bottom/banner-list-bottom.component */ "EDem");
/* harmony import */ var _components_special_product_list_special_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/special-product-list/special-product-list.component */ "x6sJ");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");













class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 16, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "client__review__heading"], [1, "main-page-inner-container"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-aside-special-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-aside-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clients Say?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-client-aside-review-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-carousel-img-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-info-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-banner-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-featured-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-banner-list-bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-special-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _components_aside_special_products_aside_special_products_component__WEBPACK_IMPORTED_MODULE_2__["AsideSpecialProductsComponent"], _components_aside_banner_aside_banner_component__WEBPACK_IMPORTED_MODULE_3__["AsideBannerComponent"], _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientAsideReviewListComponent"], _components_carousel_img_slider_carousel_img_slider_component__WEBPACK_IMPORTED_MODULE_5__["CarouselImgSliderComponent"], _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_6__["InfoCardComponent"], _components_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_7__["BannerListComponent"], _components_featured_product_list_featured_product_list_component__WEBPACK_IMPORTED_MODULE_8__["FeaturedProductListComponent"], _components_banner_list_bottom_banner_list_bottom_component__WEBPACK_IMPORTED_MODULE_9__["BannerListBottomComponent"], _components_special_product_list_special_product_list_component__WEBPACK_IMPORTED_MODULE_10__["SpecialProductListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"]], styles: ["app-featured-product-list[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-top: 40px;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7OztFQUdBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFwcC1mZWF0dXJlZC1wcm9kdWN0LWxpc3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLnBhZ2UtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmFzaWRlLXBhZ2UtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_phone_number_header_phone_number_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header-phone-number/header-phone-number.component */ "Oria");
/* harmony import */ var _main_filter_search_main_filter_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-filter-search/main-filter-search.component */ "yX/U");
/* harmony import */ var _page_navigation_links_page_navigation_links_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-navigation-links/page-navigation-links.component */ "cDmj");
/* harmony import */ var _dropdown_category_navigation_dropdown_category_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dropdown-category-navigation/dropdown-category-navigation.component */ "ppyR");
/* harmony import */ var _tablet_dropdown_search_tablet_dropdown_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tablet-dropdown-search/tablet-dropdown-search.component */ "ogJo");
/* harmony import */ var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../my-cart/my-cart.component */ "cDWQ");








class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [[1, "header-container"], [1, "page-navigation-links-container"], [1, "header-bottom-wrrapper"], [1, "my-cart-cs-support-wrrapper"], [1, "cs-sup-wrrapper"], [1, "icon-headphones"], [1, "cs__text"], [1, "my-cart-wrrapper"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-phone-number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-main-filter-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-page-navigation-links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-dropdown-category-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Support 123456789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-tablet-dropdown-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-my-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_phone_number_header_phone_number_component__WEBPACK_IMPORTED_MODULE_1__["HeaderPhoneNumberComponent"], _main_filter_search_main_filter_search_component__WEBPACK_IMPORTED_MODULE_2__["MainFilterSearchComponent"], _page_navigation_links_page_navigation_links_component__WEBPACK_IMPORTED_MODULE_3__["PageNavigationLinksComponent"], _dropdown_category_navigation_dropdown_category_navigation_component__WEBPACK_IMPORTED_MODULE_4__["DropdownCategoryNavigationComponent"], _tablet_dropdown_search_tablet_dropdown_search_component__WEBPACK_IMPORTED_MODULE_5__["TabletDropdownSearchComponent"], _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_6__["MyCartComponent"]], styles: [".header-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:250px;\r\n  background-color: var(--main--dark);\r\n  top:0;\r\n  left: 0;\r\n\r\n}\r\n\r\n.page-navigation-links-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding-top: 20px;\r\n}\r\n\r\n.header-bottom-wrrapper[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height:60px;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: flex-end;\r\n  justify-content: space-between;\r\n\r\n}\r\n\r\n.icon-headphones[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: url(\"/assets/icons/headphones.svg\");\r\n  z-index: 2;\r\n  display: block;\r\n  padding-right:20px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.my-cart-cs-support-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 400px;\r\n  height:60px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.cs-sup-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:150px;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.cs__text[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.my-cart-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 200px;\r\n  height: 60px;\r\n}\r\n\r\n@media only screen and (max-width:840px){\r\n  .icon-headphones[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .cs__text[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n.cs-sup-wrrapper[_ngcontent-%COMP%]{\r\n  width: 70px;\r\n  justify-content: flex-end;\r\n}\r\n\r\n  .my-cart-cs-support-wrrapper[_ngcontent-%COMP%]{\r\n    width:400px;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width:540px){\r\n  .my-cart-cs-support-wrrapper[_ngcontent-%COMP%]{\r\n    width: 220px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLEtBQUs7RUFDTCxPQUFPOztBQUVUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw4QkFBOEI7O0FBRWhDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0NBQStDO0VBQy9DLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVGO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7RUFFRTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDs7QUFFRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MjUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi0tZGFyayk7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDogMDtcclxuXHJcbn1cclxuXHJcbi5wYWdlLW5hdmlnYXRpb24tbGlua3MtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmhlYWRlci1ib3R0b20td3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG59XHJcblxyXG4uaWNvbi1oZWFkcGhvbmVze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9oZWFkcGhvbmVzLnN2Z1wiKTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ubXktY2FydC1jcy1zdXBwb3J0LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3Mtc3VwLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY3NfX3RleHR7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG59XHJcblxyXG4ubXktY2FydC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ODQwcHgpe1xyXG4gIC5pY29uLWhlYWRwaG9uZXN7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmNzX190ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4uY3Mtc3VwLXdycmFwcGVye1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiAgLm15LWNhcnQtY3Mtc3VwcG9ydC13cnJhcHBlcntcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTQwcHgpe1xyXG4gIC5teS1jYXJ0LWNzLXN1cHBvcnQtd3JyYXBwZXJ7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2SFI":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-menu/product-menu.component */ "TyMA");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rating/rating.component */ "iHZU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], inputs: { product: "product" }, decls: 12, vars: 9, consts: [[1, "product-container"], [1, "product-img-wrrapper"], [3, "src", "alt"], [1, "product-details-wrraper"], [3, "product"], [3, "rating"], [1, "product-details-text-wrrapper"], [1, "product__details__text", "product__heading"], [1, "product__details__text"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-product-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-rating", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product == null ? null : ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product == null ? null : ctx.product.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx.product == null ? null : ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 6, ctx.product == null ? null : ctx.product.price, "EUR"));
    } }, directives: [_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_1__["ProductMenuComponent"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".product-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:250px;\r\n  height:400px;\r\n  border: 2px solid var(--light-border-grey);\r\n  border-radius: 4px;\r\n  margin: 1rem;\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n.product-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 60%;\r\n}\r\n\r\n.product-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  overflow: hidden;\r\n}\r\n\r\n.product-img-wrrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  animation-name:RotateY;\r\n  animation-duration: 2s;\r\n  animation-delay:50ms ease-in-out;\r\n}\r\n\r\n.product-details-wrraper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  height: 30%;\r\n}\r\n\r\n.product__details__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  margin: 0;\r\n  padding-left: 10px;\r\n}\r\n\r\n.product__heading[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n\r\n.product-details-text-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:50px;\r\n}\r\n\r\napp-rating[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  left: -30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjI1MHB4O1xyXG4gIGhlaWdodDo0MDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4ucHJvZHVjdC1pbWctd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjAlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWctd3JyYXBwZXIgaW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWctd3JyYXBwZXI6aG92ZXIgaW1ne1xyXG4gIGFuaW1hdGlvbi1uYW1lOlJvdGF0ZVk7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICBhbmltYXRpb24tZGVsYXk6NTBtcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlscy13cnJhcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBoZWlnaHQ6IDMwJTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2RldGFpbHNfX3RleHR7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19oZWFkaW5ne1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzLXRleHQtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDo1MHB4O1xyXG59XHJcblxyXG5hcHAtcmF0aW5ne1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAtMzBweDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product',
                templateUrl: './product.component.html',
                styleUrls: ['./product.component.css']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "40N2":
/*!***********************************************************************!*\
  !*** ./src/app/pages/scanners/scanner-list/scanner-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerListComponent", function() { return ScannerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function ScannerListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function ScannerListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScannerListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.scanners, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function ScannerListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ScannerListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function ScannerListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ScannerListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Scanner');
            return filtered;
        }))
            .subscribe((data) => {
            this.scanners = data;
        });
    }
}
ScannerListComponent.ɵfac = function ScannerListComponent_Factory(t) { return new (t || ScannerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
ScannerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScannerListComponent, selectors: [["app-scanner-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function ScannerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScannerListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScannerListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScannerListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scanners)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scanners);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW5uZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEIiLCJmaWxlIjoic2Nhbm5lci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gbGkge1xyXG4gZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiBmb250LXNpemU6IDFyZW07XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scanner-list',
                templateUrl: './scanner-list.component.html',
                styleUrls: ['./scanner-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "5jtN":
/*!******************************************************!*\
  !*** ./src/app/pages/scanners/scanners.component.ts ***!
  \******************************************************/
/*! exports provided: ScannersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannersComponent", function() { return ScannersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _scanner_list_scanner_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scanner-list/scanner-list.component */ "40N2");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class ScannersComponent {
    constructor() { }
    ngOnInit() {
    }
}
ScannersComponent.ɵfac = function ScannersComponent_Factory(t) { return new (t || ScannersComponent)(); };
ScannersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScannersComponent, selectors: [["app-scanners"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function ScannersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-scanner-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _scanner_list_scanner_list_component__WEBPACK_IMPORTED_MODULE_2__["ScannerListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYW5uZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoic2Nhbm5lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLnBhZ2UtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hc2lkZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScannersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-scanners',
                templateUrl: './scanners.component.html',
                styleUrls: ['./scanners.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5tuB":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/blog.service */ "GfCC");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/blog-post/blog-post.component */ "Y8sq");








function BlogComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-blog-post", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", blog_r1);
} }
const _c0 = function (a1) { return { itemsPerPage: 2, currentPage: a1 }; };
class BlogComponent {
    constructor(blogServise) {
        this.blogServise = blogServise;
        this.p = 1;
    }
    ngOnInit() {
        this.blogServise.getBlogs().subscribe((data) => {
            if (data)
                this.blogs = data;
        });
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"])); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 9, vars: 7, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "blog-container"], ["class", "blog-wrrapper", 4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "blog-wrrapper"], [3, "blog"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BlogComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pagination-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function BlogComponent_Template_pagination_controls_pageChange_7_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.blogs, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideCategoryNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_6__["BlogPostComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\r\n\r\n.blog-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:650px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:450px){\r\n  .blog-container[_ngcontent-%COMP%]{\r\n    height: auto;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7O0VBR0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6ImJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5cclxuLmJsb2ctY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAucGFnZS1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAuYmxvZy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.css']
            }]
    }], function () { return [{ type: src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "6+vc":
/*!**********************************************!*\
  !*** ./src/app/Services/carousel.service.ts ***!
  \**********************************************/
/*! exports provided: CarouselService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselService", function() { return CarouselService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class CarouselService {
    constructor(http) {
        this.http = http;
    }
    getImages() {
        return this.http.get("/assets/fakeBackendApi/carousel.json");
    }
}
CarouselService.ɵfac = function CarouselService_Factory(t) { return new (t || CarouselService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CarouselService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CarouselService, factory: CarouselService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "92jb":
/*!***********************************************************************!*\
  !*** ./src/app/components/product-review/product-review.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductReviewComponent", function() { return ProductReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-review/add-review.component */ "WEen");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review/review.component */ "i/L9");






function ProductReviewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-review", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r1);
} }
const _c0 = function (a1) { return { itemsPerPage: 2, currentPage: a1 }; };
class ProductReviewComponent {
    constructor() {
        this.p = 1;
    }
    ngOnInit() {
    }
}
ProductReviewComponent.ɵfac = function ProductReviewComponent_Factory(t) { return new (t || ProductReviewComponent)(); };
ProductReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductReviewComponent, selectors: [["app-product-review"]], inputs: { reviews: "reviews" }, decls: 4, vars: 6, consts: [["class", "reviews-container", 4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "pageChange"], [1, "reviews-container"], [3, "review"]], template: function ProductReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductReviewComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ProductReviewComponent_Template_pagination_controls_pageChange_2_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-add-review");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx.reviews, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginationControlsComponent"], _add_review_add_review_component__WEBPACK_IMPORTED_MODULE_3__["AddReviewComponent"], _review_review_component__WEBPACK_IMPORTED_MODULE_4__["ReviewComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtcmV2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJwcm9kdWN0LXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gZm9udC1zaXplOiAxcmVtO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-review',
                templateUrl: './product-review.component.html',
                styleUrls: ['./product-review.component.css']
            }]
    }], function () { return []; }, { reviews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['reviews']
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B3J2":
/*!****************************************************!*\
  !*** ./src/app/pages/watches/watches.component.ts ***!
  \****************************************************/
/*! exports provided: WatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchesComponent", function() { return WatchesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watch-list/watch-list.component */ "SsN4");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class WatchesComponent {
    constructor() { }
    ngOnInit() {
    }
}
WatchesComponent.ɵfac = function WatchesComponent_Factory(t) { return new (t || WatchesComponent)(); };
WatchesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchesComponent, selectors: [["app-watches"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function WatchesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-watch-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_2__["WatchListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNoZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJ3YXRjaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watches',
                templateUrl: './watches.component.html',
                styleUrls: ['./watches.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BDmo":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-details/blog-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BlogDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function() { return BlogDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/blog.service */ "GfCC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/footer/footer.component */ "LmEr");







function BlogDetailsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const blogDetails_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blogDetails_r1 == null ? null : blogDetails_r1.blogHeading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", blogDetails_r1 == null ? null : blogDetails_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", blogDetails_r1 == null ? null : blogDetails_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blogDetails_r1 == null ? null : blogDetails_r1.blogText, "");
} }
class BlogDetailsComponent {
    constructor(route, blogServise) {
        this.route = route;
        this.blogServise = blogServise;
        this.blogDetails = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            if (params.id) {
                this.blogServise
                    .getBlogs()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    let filteredBlog = data.filter((blog) => blog.id === +params.id);
                    return filteredBlog;
                }))
                    .subscribe((blog) => {
                    if (blog)
                        this.blogDetails.push(blog[0]);
                });
            }
        });
    }
}
BlogDetailsComponent.ɵfac = function BlogDetailsComponent_Factory(t) { return new (t || BlogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"])); };
BlogDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogDetailsComponent, selectors: [["app-blog-details"]], decls: 3, vars: 1, consts: [[1, "blog-details-container"], [4, "ngFor", "ngForOf"], [1, "blog-img-wrrapper"], [1, "blog__heading"], [3, "src", "alt"], [1, "blog-text-wrrapper"], [1, "blog__text"]], template: function BlogDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogDetailsComponent_ng_container_1_Template, 8, 4, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".blog-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n\r\n.blog-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.blog__heading[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n  color: var(--main-orange);\r\n}\r\n\r\n.blog-text-wrrapper[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: 30px;\r\n}\r\n\r\n.blog__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  color: var(--light-grey-bg-3);\r\n  padding: 1rem;\r\n  margin-left: 1rem;\r\n  margin-right: 1rem;\r\n  text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJibG9nLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9nLWltZy13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxufVxyXG5cclxuLmJsb2ctaW1nLXdycmFwcGVyIGltZ3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5ibG9nX19oZWFkaW5ne1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG4uYmxvZy10ZXh0LXdycmFwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uYmxvZ19fdGV4dHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXktYmctMyk7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-details',
                templateUrl: './blog-details.component.html',
                styleUrls: ['./blog-details.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }]; }, null); })();


/***/ }),

/***/ "BYwi":
/*!*****************************************************************!*\
  !*** ./src/app/pages/phones/phone-list/phone-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhoneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneListComponent", function() { return PhoneListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function PhoneListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function PhoneListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.phones, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function PhoneListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PhoneListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function PhoneListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PhoneListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Phones');
            return filtered;
        }))
            .subscribe((data) => {
            this.phones = data;
        });
    }
}
PhoneListComponent.ɵfac = function PhoneListComponent_Factory(t) { return new (t || PhoneListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
PhoneListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhoneListComponent, selectors: [["app-phone-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function PhoneListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PhoneListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PhoneListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PhoneListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phones)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.phones);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InBob25lLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhoneListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phone-list',
                templateUrl: './phone-list.component.html',
                styleUrls: ['./phone-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "BmD+":
/*!***************************************************************************************!*\
  !*** ./src/app/components/aside-special-products/aside-special-products.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AsideSpecialProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideSpecialProductsComponent", function() { return AsideSpecialProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rating/rating.component */ "iHZU");







function AsideSpecialProductsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AsideSpecialProductsComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.redirectToDetails(p_r1 == null ? null : p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r1 == null ? null : p_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r1 == null ? null : p_r1.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1 == null ? null : p_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 5, p_r1 == null ? null : p_r1.price, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", p_r1 == null ? null : p_r1.rating);
} }
class AsideSpecialProductsComponent {
    constructor(AsideSpecialProductServise, router) {
        this.AsideSpecialProductServise = AsideSpecialProductServise;
        this.router = router;
    }
    ngOnInit() {
        this.AsideSpecialProductServise.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            return data.filter((data) => data.specialProduct === true);
        }))
            .subscribe((data) => {
            let specProdLimit = data.splice(0, 5);
            this.specialProducts = specProdLimit;
        });
    }
    redirectToDetails(id) {
        console.log(id);
        if (id != undefined || null) {
            this.router.navigate(['product-details', id]);
        }
    }
}
AsideSpecialProductsComponent.ɵfac = function AsideSpecialProductsComponent_Factory(t) { return new (t || AsideSpecialProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AsideSpecialProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideSpecialProductsComponent, selectors: [["app-aside-special-products"]], decls: 4, vars: 1, consts: [[1, "aside-special-products-container"], [4, "ngFor", "ngForOf"], [1, "special-product-wrrapper", 3, "click"], [1, "special-product-img-wrrapper"], [3, "src", "alt"], [1, "special-product-details-wrrapper"], [1, "special__product__name"], [1, "special__product__price"], [3, "rating"]], template: function AsideSpecialProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AsideSpecialProductsComponent_div_3_Template, 11, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specialProducts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_5__["RatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".aside-special-products-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 300px;\r\n  height: 600px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  margin-left: 1.1rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.special-product-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 260px;\r\n  height: 100px;\r\n  display: flex;\r\n  border: 1px solid var(--light-border-grey);\r\n  align-items: center;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin:0.4rem;\r\n}\r\n\r\n.special-product-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 30%;\r\n  height: 100%;\r\n}\r\n\r\n.special-product-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0.4rem;\r\n  object-fit: contain;\r\n}\r\n\r\n.special-product-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 70%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  text-align: center;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.special__product__name[_ngcontent-%COMP%]{\r\n  color: var(--light-grey);\r\n}\r\n\r\n.special__product__price[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  margin-top: 0.3rem;\r\n  color: var(--main-light-dark);\r\n}\r\n\r\napp-rating[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaWRlLXNwZWNpYWwtcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJhc2lkZS1zcGVjaWFsLXByb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNpZGUtc3BlY2lhbC1wcm9kdWN0cy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oNntcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEuMXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uc3BlY2lhbC1wcm9kdWN0LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJvcmRlci1ncmV5KTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOjAuNHJlbTtcclxufVxyXG5cclxuLnNwZWNpYWwtcHJvZHVjdC1pbWctd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3BlY2lhbC1wcm9kdWN0LWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnNwZWNpYWwtcHJvZHVjdC1kZXRhaWxzLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxucHtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4uc3BlY2lhbF9fcHJvZHVjdF9fbmFtZXtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbi5zcGVjaWFsX19wcm9kdWN0X19wcmljZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwLjNyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tbGlnaHQtZGFyayk7XHJcbn1cclxuXHJcbmFwcC1yYXRpbmd7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideSpecialProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside-special-products',
                templateUrl: './aside-special-products.component.html',
                styleUrls: ['./aside-special-products.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");








function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Fields cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border-alert": a0 }; };
class LoginComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    login(formData) {
        if (formData.valid) {
            this.router.navigate(['home']);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 6, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "login-container"], [3, "formGroup", "ngSubmit"], ["class", "error-wrrapper", 4, "ngIf"], ["formControlName", "Email", "type", "text", "name", "Email", "placeholder", "Email..", 3, "ngClass"], ["formControlName", "Password", "type", "password", "name", "Password", "placeholder", "Password..", "autocomplete", "on"], ["type", "submit", 1, "login__btn"], ["routerLink", "/register", 1, "register__link"], [1, "error-wrrapper"], [1, "validation__message"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.login(ctx.loginForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not registered?Register first");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("Email").touched && ctx.loginForm.get("Email").hasError("required") || ctx.loginForm.get("Password").touched && ctx.loginForm.get("Password").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.loginForm.get("Email").touched && ctx.loginForm.get("Email").hasError("email")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("Email").touched && ctx.loginForm.get("Email").hasError("email"));
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideCategoryNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".login-container[_ngcontent-%COMP%]{\r\n  position:relative;\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  width:400px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top:40px;\r\n  margin-bottom:3rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 30px;\r\n  margin:0.5rem;\r\n  border:3px solid var(--light-border-grey);\r\n  border-radius:5px;\r\n  outline: none;\r\n}\r\n\r\n.login__btn[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 30px;\r\n  margin-top: 20px;\r\n  background-color: var(--main-orange);\r\n  border: none;\r\n  color: white;\r\n  font-size: 1rem;\r\n  font-family: \"Popins\";\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.register__link[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: var(--light-grey);\r\n  text-decoration: none;\r\n  margin-top: 40px;\r\n}\r\n\r\n.register__link[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  padding-left: 1rem;\r\n  color: var(--light-grey);\r\n}\r\n\r\n.border-alert[_ngcontent-%COMP%]{\r\n  border: 2px solid var(--danger);\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:470px){\r\n  input[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n\r\n  .login__btn[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuZm9ybXtcclxuICB3aWR0aDo0MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206M3JlbTtcclxufVxyXG5cclxuaW5wdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjowLjVyZW07XHJcbiAgYm9yZGVyOjNweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmxvZ2luX19idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZWdpc3Rlcl9fbGlua3tcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlcl9fbGluazpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4uYm9yZGVyLWFsZXJ0e1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWRhbmdlcik7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLnBhZ2UtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hc2lkZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDcwcHgpe1xyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5sb2dpbl9fYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "DH2L":
/*!*****************************************************************!*\
  !*** ./src/app/components/banner-list/banner-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/banner.service */ "daAj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner/banner.component */ "XRsc");





function BannerListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r2 % 2 == 0 ? "green-banner" : "blue-banner")("bannerItem", b_r1);
} }
class BannerListComponent {
    constructor(bannerServise) {
        this.bannerServise = bannerServise;
    }
    ngOnInit() {
        this.bannerServise.getBannerData().subscribe(data => {
            this.banners = data;
        });
    }
}
BannerListComponent.ɵfac = function BannerListComponent_Factory(t) { return new (t || BannerListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"])); };
BannerListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerListComponent, selectors: [["app-banner-list"]], decls: 2, vars: 1, consts: [[1, "banner-list-container"], [4, "ngFor", "ngForOf"], [3, "ngClass", "bannerItem"]], template: function BannerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerListComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.banners);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".banner-list-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  height: 200px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-top: 30px;\r\n}\r\n\r\n.green-banner[_ngcontent-%COMP%]{\r\n  background-color: var(--light-green);\r\n  border-radius: 20px;\r\n  width:45%;\r\n}\r\n\r\n.blue-banner[_ngcontent-%COMP%]{\r\n  background-color: var(--light-blue);\r\n  border-radius:20px;\r\n  width:45%;\r\n}\r\n\r\n@media only screen and (max-width:630px){\r\n .banner-list-container[_ngcontent-%COMP%]{\r\n   flex-direction: column;\r\n   height:500px;\r\n   align-items: center;\r\n }\r\n\r\n .green-banner[_ngcontent-%COMP%]{\r\n   width: 90%;\r\n }\r\n\r\n .blue-banner[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0NBQ0M7R0FDRSxzQkFBc0I7R0FDdEIsWUFBWTtHQUNaLG1CQUFtQjtDQUNyQjs7Q0FFQTtHQUNFLFVBQVU7Q0FDWjs7Q0FFQTtFQUNDLFVBQVU7QUFDWjtBQUNBIiwiZmlsZSI6ImJhbm5lci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWxpc3QtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZ3JlZW4tYmFubmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZWVuKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIHdpZHRoOjQ1JTtcclxufVxyXG5cclxuLmJsdWUtYmFubmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICB3aWR0aDo0NSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MzBweCl7XHJcbiAuYmFubmVyLWxpc3QtY29udGFpbmVye1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBoZWlnaHQ6NTAwcHg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gLmdyZWVuLWJhbm5lcntcclxuICAgd2lkdGg6IDkwJTtcclxuIH1cclxuXHJcbiAuYmx1ZS1iYW5uZXJ7XHJcbiAgd2lkdGg6IDkwJTtcclxufVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-list',
                templateUrl: './banner-list.component.html',
                styleUrls: ['./banner-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"] }]; }, null); })();


/***/ }),

/***/ "EDem":
/*!*******************************************************************************!*\
  !*** ./src/app/components/banner-list-bottom/banner-list-bottom.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BannerListBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListBottomComponent", function() { return BannerListBottomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/banner.service */ "daAj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../banner/banner.component */ "XRsc");





function BannerListBottomComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const b_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r2 % 2 == 0 ? "red-banner" : "blue-banner")("bannerItem", b_r1);
} }
class BannerListBottomComponent {
    constructor(bannerService) {
        this.bannerService = bannerService;
    }
    ngOnInit() {
        this.bannerService.getBannerBottomData().subscribe((data) => {
            if (data)
                this.bannerData = data;
        });
    }
}
BannerListBottomComponent.ɵfac = function BannerListBottomComponent_Factory(t) { return new (t || BannerListBottomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"])); };
BannerListBottomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerListBottomComponent, selectors: [["app-banner-list-bottom"]], decls: 2, vars: 1, consts: [[1, "banner-list-bottom-container"], [4, "ngFor", "ngForOf"], [3, "ngClass", "bannerItem"]], template: function BannerListBottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerListBottomComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bannerData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".banner-list-bottom-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  height: 200px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-top: 30px;\r\n\r\n}\r\n\r\n.red-banner[_ngcontent-%COMP%]{\r\n  background-color: var(--light-red);\r\n  border-radius: 20px;\r\n  width:45%;\r\n}\r\n\r\n.blue-banner[_ngcontent-%COMP%]{\r\n  background-color: var(--dark-blue);\r\n  border-radius:20px;\r\n  width:45%;\r\n}\r\n\r\n@media only screen and (max-width:630px){\r\n  .banner-list-bottom-container[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    height:500px;\r\n    align-items: center;\r\n  }\r\n\r\n  .red-banner[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n\r\n  .blue-banner[_ngcontent-%COMP%]{\r\n   width: 90%;\r\n }\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1saXN0LWJvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0dBQ0MsVUFBVTtDQUNaO0NBQ0EiLCJmaWxlIjoiYmFubmVyLWxpc3QtYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWxpc3QtYm90dG9tLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5yZWQtYmFubmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXJlZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB3aWR0aDo0NSU7XHJcbn1cclxuXHJcbi5ibHVlLWJhbm5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsdWUpO1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICB3aWR0aDo0NSU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MzBweCl7XHJcbiAgLmJhbm5lci1saXN0LWJvdHRvbS1jb250YWluZXJ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OjUwMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5yZWQtYmFubmVye1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC5ibHVlLWJhbm5lcntcclxuICAgd2lkdGg6IDkwJTtcclxuIH1cclxuIH1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerListBottomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-list-bottom',
                templateUrl: './banner-list-bottom.component.html',
                styleUrls: ['./banner-list-bottom.component.css']
            }]
    }], function () { return [{ type: src_app_Services_banner_service__WEBPACK_IMPORTED_MODULE_1__["BannerService"] }]; }, null); })();


/***/ }),

/***/ "GfCC":
/*!******************************************!*\
  !*** ./src/app/Services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class BlogService {
    constructor(http) {
        this.http = http;
    }
    getBlogs() {
        return this.http.get("/assets/fakeBackendApi/blogs.json");
    }
}
BlogService.ɵfac = function BlogService_Factory(t) { return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BlogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BlogService, factory: BlogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/blog.service */ "GfCC");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_blog_footer_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer-blog/footer-blog.component */ "b3fl");









function FooterComponent_61_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer-blog", 29);
} if (rf & 2) {
    const b_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blog", b_r4);
} }
function FooterComponent_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_61_ng_template_0_Template, 1, 1, "ng-template", 28);
} }
class FooterComponent {
    constructor(blogSevise, fb) {
        this.blogSevise = blogSevise;
        this.fb = fb;
    }
    ngOnInit() {
        this.blogSevise.getBlogs().subscribe((data) => {
            if (data)
                this.blogs = data;
        });
        this.subscribeForm = this.fb.group({
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    toggleFooterInfo(element) {
        element.classList.toggle('info');
    }
    subscribe(formData) {
        var _a, _b;
        if ((_a = formData.controls.Email.errors) === null || _a === void 0 ? void 0 : _a.required) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Field cannot be empty!");
            return;
        }
        if ((_b = formData.controls.Email.errors) === null || _b === void 0 ? void 0 : _b.email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Email is not valid!");
            return;
        }
        if (formData.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Subsribed succesfully!");
            formData.reset();
        }
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 73, vars: 3, consts: [[1, "footer-container"], [1, "footer-subscribe-container"], [1, "footer-sub-heading-wrrapper"], [1, "icon-letter"], [1, "sub__heading"], [1, "subscribe__form", 3, "formGroup", "ngSubmit"], ["formControlName", "Email", "type", "text", "name", "Email", "placeholder", "Enter email here..", 1, "sub__input"], ["type", "submit", 1, "sub__btn"], [1, "footer-info-container"], [1, "info-item"], [1, "heading-info-wrrapper"], [1, "info__heading"], [1, "icon-arrow-down", "show--arrow", 3, "click"], [1, "info"], ["info1", ""], ["info2", ""], [1, "icon-right-arrow"], ["info3", ""], [1, "info-item", "blog-item"], [1, "blog-wrrapper"], [3, "slidesPerView"], [4, "ngFor", "ngForOf"], [1, "footer-bottom-info"], [1, "bottom-info-item"], [1, "footer__copyright"], ["src", "/assets/images/footer/paypal.png", "alt", "paypal.png"], ["src", "/assets/images/footer/maestro.png", "alt", "maestro.png"], ["src", "/assets/images/footer/visa.png", "alt", "visa.png"], ["swiperSlide", ""], [3, "blog"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subscribe to newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FooterComponent_Template_form_ngSubmit_6_listener() { return ctx.subscribe(ctx.subscribeForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Quick information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.toggleFooterInfo(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Adress: TechStore,St.Peter.England");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Phone: +01 2222 365 /(+91) 01 2345 6789");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Mail: someemail@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_span_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30); return ctx.toggleFooterInfo(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 13, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Delivery Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Terms and conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_span_click_50_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52); return ctx.toggleFooterInfo(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ul", 13, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Policy information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "From the Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "swiper", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, FooterComponent_61_Template, 1, 0, undefined, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Copyright @DusanGojkovic 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "TechStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.subscribeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slidesPerView", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogs);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperSlideDirective"], _footer_blog_footer_blog_component__WEBPACK_IMPORTED_MODULE_6__["FooterBlogComponent"]], styles: [".footer-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:500px;\r\n  display: flex;\r\n  flex-direction: column;\r\n \r\n}\r\n\r\n.footer-sub-heading-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 40%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.footer-subscribe-container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  left: 0;\r\n  height: 100px;\r\n  background-color: var(--light-black);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.subscribe__form[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 40%;\r\n  height: 100%;\r\n}\r\n\r\n.sub__heading[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  color: white;\r\n  font-size: 1.4rem;\r\n  margin-left: 10px;\r\n}\r\n\r\n.sub__input[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:40px;\r\n  border-top-left-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  box-sizing: border-box;\r\n  border-right: none;\r\n  border: 2px solid white;\r\n  outline: none;\r\n\r\n}\r\n\r\n.sub__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100px;\r\n  height: 40px;\r\n  background-color: var(--main-orange);\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  box-sizing: border-box;\r\n  border: 2px solid var(--main-orange);\r\n  cursor: pointer;\r\n\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  padding-left: 10px;\r\n}\r\n\r\n.icon-letter[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  background: url(\"/assets/icons/footer/letter.svg\");\r\n  width: 40px;\r\n  height: 40px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.footer-info-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top: 100px;\r\n  width: 100%;\r\n  height: 300px;\r\n  background-color: var(--dark-grey);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.info-item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 23%;\r\n  height:200px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.heading-info-wrrapper[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.info__heading[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 0.9rem;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: grey;\r\n  padding: 0.3rem;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .icon-right-arrow[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  width: 15px;\r\n  height: 15px;\r\n  content: url(\"/assets/icons/footer/right-arrow-orange.svg\");\r\n}\r\n\r\n.icon-right-arrow[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: url(\"/assets/icons/footer/right-arrow.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n}\r\n\r\n.icon-arrow-down[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 15px;\r\n  height: 15px;\r\n  background: url(\"/assets/icons/footer/arrow-down.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.footer-bottom-info[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100px;\r\n  border-top: 1px solid white;\r\n  background-color:var(--dark-grey);\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex: 1;\r\n  margin-top: 100px;\r\n}\r\n\r\n.bottom-info-item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:25%;\r\n  height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.5rem;\r\n  color: white;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]::first-letter{\r\n  color: var(--main-orange);\r\n  font-style: italic;\r\n}\r\n\r\n.footer__copyright[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  color:grey;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.show--arrow[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.blog-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100px;\r\n  height: 100px;\r\n}\r\n\r\n.blog-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.swiper-container[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 170px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.blog-item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 200px;\r\n  height: 220px !important;\r\n}\r\n\r\n@media only screen and (max-width:800px){\r\n  .footer-info-container[_ngcontent-%COMP%]{\r\n    top: 150px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n    height: auto;\r\n    flex: 1;\r\n  }\r\n\r\n  .info-item[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    height: auto;\r\n    align-items: flex-start;\r\n    padding-left: 50px;\r\n  }\r\n\r\n  .heading-info-wrrapper[_ngcontent-%COMP%]{\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .footer-subscribe-container[_ngcontent-%COMP%]{\r\n    height:150px;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  \r\n\r\n  .info[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .footer-sub-heading-wrrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .subscribe__form[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    justify-content: flex-start;\r\n  }\r\n\r\n  .sub__heading[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .sub__input[_ngcontent-%COMP%]{\r\n    width:60%;\r\n    margin-left: 20px;\r\n  }\r\n\r\n  .footer-bottom-info[_ngcontent-%COMP%]{\r\n    margin-top:150px;\r\n  }\r\n\r\n  .show--arrow[_ngcontent-%COMP%]{\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:400px){\r\n  .footer-bottom-info[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    height:200px;\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n  }\r\n\r\n  h6[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n\r\n  .bottom-info-item[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width:340px){\r\n  .subscribe__form[_ngcontent-%COMP%]{\r\n    padding-bottom: 40px;\r\n    justify-content: center;\r\n  }\r\n\r\n  .subscribe__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qix5Q0FBeUM7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLE9BQU87RUFDUCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7O0FBRWY7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsb0NBQW9DO0VBQ3BDLGVBQWU7O0FBRWpCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtEQUFrRDtFQUNsRCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVEQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLE9BQU87RUFDUCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osT0FBTztFQUNUOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUEscUNBQXFDOztFQUVyQztJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztJQUNULGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVGOztBQUdBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuIC8qICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWdyZXkpOyAqL1xyXG59XHJcblxyXG4uZm9vdGVyLXN1Yi1oZWFkaW5nLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZvb3Rlci1zdWJzY3JpYmUtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmVfX2Zvcm17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN1Yl9faGVhZGluZ3tcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWJfX2lucHV0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6NDBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuLnN1Yl9fYnRue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVye1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmljb24tbGV0dGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Zvb3Rlci9sZXR0ZXIuc3ZnXCIpO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZm9vdGVyLWluZm8tY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ncmV5KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMyU7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlYWRpbmctaW5mby13cnJhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbmZvX19oZWFkaW5ne1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG51bHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gIHBhZGRpbmc6IDAuM3JlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG51bCBsaTpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG51bCBsaTpob3ZlciAuaWNvbi1yaWdodC1hcnJvdzo6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy9mb290ZXIvcmlnaHQtYXJyb3ctb3JhbmdlLnN2Z1wiKTtcclxufVxyXG5cclxuLmljb24tcmlnaHQtYXJyb3d7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Zvb3Rlci9yaWdodC1hcnJvdy5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmljb24tYXJyb3ctZG93bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvZm9vdGVyL2Fycm93LWRvd24uc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWJvdHRvbS1pbmZve1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWRhcmstZ3JleSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5ib3R0b20taW5mby1pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoyNSU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmg2e1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaDY6OmZpcnN0LWxldHRlcntcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmZvb3Rlcl9fY29weXJpZ2h0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGNvbG9yOmdyZXk7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5zaG93LS1hcnJvd3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5mb3tcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmJsb2ctd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uYmxvZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnN3aXBlci1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJsb2ctaXRlbXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwMHB4KXtcclxuICAuZm9vdGVyLWluZm8tY29udGFpbmVye1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5pbmZvLWl0ZW17XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZy1pbmZvLXdycmFwcGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1zdWJzY3JpYmUtY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLypLTEFTQSBaQSBUT0dHTEUgRk9PVEVSIElURU0gSVpNRU5JKi9cclxuXHJcbiAgLmluZm97XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvb3Rlci1zdWItaGVhZGluZy13cnJhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1YnNjcmliZV9fZm9ybXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLnN1Yl9faGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1Yl9faW5wdXR7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItYm90dG9tLWluZm97XHJcbiAgICBtYXJnaW4tdG9wOjE1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNob3ctLWFycm93e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDAwcHgpe1xyXG4gIC5mb290ZXItYm90dG9tLWluZm97XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OjIwMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICB9XHJcblxyXG4gIGg2e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1pbmZvLWl0ZW17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KXtcclxuICAuc3Vic2NyaWJlX19mb3Jte1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zdWJzY3JpYmVfX2Zvcm0gaW5wdXR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "MDC+":
/*!******************************************************!*\
  !*** ./src/app/pages/desktops/desktops.component.ts ***!
  \******************************************************/
/*! exports provided: DesktopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopsComponent", function() { return DesktopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/client-aside-review-list/client-aside-review-list.component */ "SA4t");
/* harmony import */ var _desktop_list_desktop_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./desktop-list/desktop-list.component */ "i2uW");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");






class DesktopsComponent {
    constructor() { }
    ngOnInit() {
    }
}
DesktopsComponent.ɵfac = function DesktopsComponent_Factory(t) { return new (t || DesktopsComponent)(); };
DesktopsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesktopsComponent, selectors: [["app-desktops"]], decls: 7, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function DesktopsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-client-aside-review-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-desktop-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_2__["ClientAsideReviewListComponent"], _desktop_list_desktop_list_component__WEBPACK_IMPORTED_MODULE_3__["DesktopListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2t0b3BzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiZGVza3RvcHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLnBhZ2UtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hc2lkZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesktopsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desktops',
                templateUrl: './desktops.component.html',
                styleUrls: ['./desktops.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MFsF":
/*!*************************************************************************!*\
  !*** ./src/app/components/special-product/special-product.component.ts ***!
  \*************************************************************************/
/*! exports provided: SpecialProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialProductComponent", function() { return SpecialProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rating/rating.component */ "iHZU");
/* harmony import */ var _product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product-menu/product-menu.component */ "TyMA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class SpecialProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpecialProductComponent.ɵfac = function SpecialProductComponent_Factory(t) { return new (t || SpecialProductComponent)(); };
SpecialProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialProductComponent, selectors: [["app-special-product"]], inputs: { product: "product" }, decls: 11, vars: 9, consts: [[1, "special-product-container"], [1, "special-product-img-wrrapper"], [3, "src", "alt"], [1, "special-product-details-wrrapper"], [3, "rating"], [1, "special__product__name"], [1, "special__product__price"], [3, "product"]], template: function SpecialProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-rating", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-product-menu", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product == null ? null : ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product == null ? null : ctx.product.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx.product == null ? null : ctx.product.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 6, ctx.product == null ? null : ctx.product.price, "EUR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);
    } }, directives: [_rating_rating_component__WEBPACK_IMPORTED_MODULE_1__["RatingComponent"], _product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_2__["ProductMenuComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".special-product-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:100%;\r\n  height: 250px;\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 2px solid var(--light-border-grey);\r\n}\r\n\r\n.special-product-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50%;\r\n  height: 100%;\r\n}\r\n\r\n.special-product-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.special-product-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 40%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\napp-rating[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-left: -40px;\r\n}\r\n\r\napp-product-menu[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-left: -15px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size:1.4rem;\r\n  margin: 0;\r\n}\r\n\r\n.special__product__name[_ngcontent-%COMP%]{\r\n font-weight: bold;\r\n margin-bottom: 0.6rem;\r\n}\r\n\r\n.special__product__price[_ngcontent-%COMP%]{\r\n  margin-bottom: 0.5rem;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWwtcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIscUJBQXFCO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2QiIsImZpbGUiOiJzcGVjaWFsLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsLXByb2R1Y3QtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbn1cclxuXHJcbi5zcGVjaWFsLXByb2R1Y3QtaW1nLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3BlY2lhbC1wcm9kdWN0LWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uc3BlY2lhbC1wcm9kdWN0LWRldGFpbHMtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuYXBwLXJhdGluZ3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG59XHJcblxyXG5hcHAtcHJvZHVjdC1tZW51e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOjEuNHJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGVjaWFsX19wcm9kdWN0X19uYW1le1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiBtYXJnaW4tYm90dG9tOiAwLjZyZW07XHJcbn1cclxuXHJcbi5zcGVjaWFsX19wcm9kdWN0X19wcmljZXtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-special-product',
                templateUrl: './special-product.component.html',
                styleUrls: ['./special-product.component.css']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['product']
        }] }); })();


/***/ }),

/***/ "NOKs":
/*!************************************************************!*\
  !*** ./src/app/pages/peripherals/peripherals.component.ts ***!
  \************************************************************/
/*! exports provided: PeripheralsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeripheralsComponent", function() { return PeripheralsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _peripherals_list_peripherals_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./peripherals-list/peripherals-list.component */ "fwOk");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class PeripheralsComponent {
    constructor() { }
    ngOnInit() {
    }
}
PeripheralsComponent.ɵfac = function PeripheralsComponent_Factory(t) { return new (t || PeripheralsComponent)(); };
PeripheralsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeripheralsComponent, selectors: [["app-peripherals"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function PeripheralsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-peripherals-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _peripherals_list_peripherals_list_component__WEBPACK_IMPORTED_MODULE_2__["PeripheralsListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlwaGVyYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoicGVyaXBoZXJhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5NzBweCl7XHJcbiAgLnBhZ2UtY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hc2lkZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeripheralsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peripherals',
                templateUrl: './peripherals.component.html',
                styleUrls: ['./peripherals.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Neos":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");











class CheckoutComponent {
    constructor(cartServise, fb, router) {
        this.cartServise = cartServise;
        this.fb = fb;
        this.router = router;
        this.totalPrice = 0;
        this.cardExpiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    }
    ngOnInit() {
        this.cartServise.total();
        this.totalPriceSub = this.cartServise.total$.subscribe((data) => {
            this.totalPrice = data;
        });
        this.orderForm = this.fb.group({
            shippingGroup: this.fb.group({
                Address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                Phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                PostalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                City: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
            cardGroup: this.fb.group({
                cardName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                postalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                expiryDate: [
                    '',
                    [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.cardExpiryRegex)],
                ],
                securityCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            }),
        });
    }
    placeOrder(form) {
        if (form.controls.shippingGroup.get('Address').hasError('required') ||
            form.controls.shippingGroup.get('Phone').hasError('required') ||
            form.controls.shippingGroup.get('PostalCode').hasError('required') ||
            form.controls.shippingGroup.get('City').hasError('required')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('fields cannot be empty!');
            return;
        }
        if (form.controls.cardGroup.get('cardName').hasError('required') ||
            form.controls.cardGroup.get('cardNumber').hasError('required') ||
            form.controls.cardGroup.get('postalCode').hasError('required') ||
            form.controls.cardGroup.get('expiryDate').hasError('required')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('fields cannot be empty!');
            return;
        }
        if (form.controls.cardGroup.get('expiryDate').hasError('pattern')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Expiry date must be in format month/year!');
            return;
        }
        if (form.controls.shippingGroup.valid && form.controls.cardGroup.valid) {
            form.controls.shippingGroup.reset();
            form.controls.cardGroup.reset();
            this.clearCart().then(() => {
                this.navigateToHomePage();
            });
        }
    }
    ngOnDestroy() {
        var _a;
        (_a = this.totalPriceSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    clearCart() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cartServise.deleteCart();
            yield this.cartServise.cartCount$.next(0);
            yield this.cartServise.total$.next(0);
            yield this.cartServise.cartItemCountChanged();
        });
    }
    navigateToHomePage() {
        this.router.navigateByUrl('');
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 29, vars: 5, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "total-wrrapper"], [1, "checkout-container"], ["id", "orderForm", 1, "shipping-form", 3, "formGroup", "ngSubmit"], ["formGroupName", "shippingGroup", 1, "form-group"], ["formControlName", "Address", "type", "text", "name", "Address", "placeholder", "Address"], ["formControlName", "Phone", "type", "number", "name", "Phone", "placeholder", "Phone"], ["formControlName", "PostalCode", "type", "text", "name", "PostalCode", "placeholder", "Postal Code"], ["formControlName", "City", "type", "text", "name", "City", "placeholder", "City"], ["formGroupName", "cardGroup"], ["formControlName", "cardName", "type", "text", "name", "cardName", "placeholder", "Name on card"], ["formControlName", "cardNumber", "type", "number", "name", "cardNumber", "placeholder", "Card number"], ["formControlName", "postalCode", "type", "text", "name", "postalCode", "placeholder", "Postal Code"], ["formControlName", "expiryDate", "type", "text", "name", "expiryDate", "placeholder", "Expiry date: yy/mm"], ["formControlName", "securityCode", "type", "text", "name", "securityCode", "placeholder", "Security code"], ["form", "orderForm", 1, "order__btn"], [1, "footer"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_9_listener() { return ctx.placeOrder(ctx.orderForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "fieldset", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Shipping information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "fieldset", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Card information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Place order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 2, ctx.totalPrice, "EUR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.orderForm);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_6__["AsideCategoryNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".checkout-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.shipping-container-info[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:40%;\r\n  height: auto;\r\n  display: flex;\r\n justify-content: center;\r\n}\r\n\r\n.shipping-form[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 400px;\r\n  display: flex;\r\n}\r\n\r\nfieldset[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 400px;\r\n  border: none;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.code-group[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 80%;\r\n  height: auto;\r\n  display: flex;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  height: 30px;\r\n  margin: 1rem;\r\n  border: 2px solid var(--light-border-grey);\r\n  border-radius: 5px;\r\n  outline: none;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  margin-bottom: 0;\r\n  padding-left: 1rem;\r\n  color: var(--main--dark);\r\n}\r\n\r\n.total__price[_ngcontent-%COMP%]{\r\n  color: var(--danger);\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.total-price-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.order__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background-color: var(--danger);\r\n  width: 200px;\r\n  height: 30px;\r\n  font-family: \"Popins\";\r\n  color: white;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  margin: 0 auto;\r\n  margin-bottom:50px;\r\n  top: 50px;\r\n}\r\n\r\n.total-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  color: var(--danger);\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:440px){\r\n  .shipping-form[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: 750px;\r\n  }\r\n\r\n  fieldset[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtDQUNkLHVCQUF1QjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQztFQUNDLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOzs7RUFHQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7Ozs7OztBQU9GIiwiZmlsZSI6ImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5zaGlwcGluZy1jb250YWluZXItaW5mb3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6NDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zaGlwcGluZy1mb3Jte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmZpZWxkc2V0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29kZS1ncm91cHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuIGlucHV0e1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuaDZ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLS1kYXJrKTtcclxufVxyXG5cclxuLnRvdGFsX19wcmljZXtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4udG90YWwtcHJpY2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3JkZXJfX2J0bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG4udG90YWwtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG5cclxuLmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIC5hc2lkZS1wYWdlLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDQwcHgpe1xyXG4gIC5zaGlwcGluZy1mb3Jte1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG4gIH1cclxuXHJcbiAgZmllbGRzZXR7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-checkout',
                templateUrl: './checkout.component.html',
                styleUrls: ['./checkout.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Oria":
/*!*********************************************************************************!*\
  !*** ./src/app/components/header-phone-number/header-phone-number.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HeaderPhoneNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPhoneNumberComponent", function() { return HeaderPhoneNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class HeaderPhoneNumberComponent {
    constructor() {
        this.accountDropdownState = false;
    }
    ngOnInit() {
    }
    accountDropdown() {
        this.accountDropdownState = !this.accountDropdownState;
    }
}
HeaderPhoneNumberComponent.ɵfac = function HeaderPhoneNumberComponent_Factory(t) { return new (t || HeaderPhoneNumberComponent)(); };
HeaderPhoneNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderPhoneNumberComponent, selectors: [["app-header-phone-number"]], decls: 21, vars: 2, consts: [[1, "header-phone-number-container"], [1, "header__phone__number"], [1, "account-wrrapper"], [1, "account-item", "account-link", 3, "click"], [1, "icon-account"], [1, "account__text", "padding-right-3px"], [3, "ngClass"], ["routerLink", "login"], ["routerLink", "register"], ["routerLink", "checkout"], [1, "divider"], [1, "account-item", "wishlist-link"], [1, "icon-wishlist"], ["routerLink", "wishlist", 1, "account__text"]], template: function HeaderPhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Good luck with shopping. Call us free 24/7 : (555) 172-244-7888 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderPhoneNumberComponent_Template_div_click_4_listener() { return ctx.accountDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.accountDropdownState ? "account-dropdown-show" : "account-dropdown-hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.accountDropdownState ? "icon-caret-up" : "icon-caret-down");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".header-phone-number-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:30px;\r\n  background-color: var(--main-light-dark);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header__phone__number[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size:0.8rem;\r\n  letter-spacing:1px;\r\n  margin-left: 50px;\r\n}\r\n\r\n.account-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:300px;\r\n  height:30px;\r\n  z-index: 2;\r\n  display:flex;\r\n  align-items: center;\r\n  margin-right:50px;\r\n}\r\n\r\n.account-item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 120px;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin: 0;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\n.padding-right-3px[_ngcontent-%COMP%]{\r\n  padding-right: 3px;\r\n}\r\n\r\n\r\n\r\n.account-link[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.account-link[_ngcontent-%COMP%]:hover   .icon-account[_ngcontent-%COMP%]::before{\r\n  content: url(\"/assets/icons/account-orange.svg\");\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.account-link[_ngcontent-%COMP%]:hover   .icon-caret-down[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  content: url(\"/assets/icons/caret-down-orange.svg\");\r\n  width: 100%;\r\n  height: 100%;\r\n  top: -4px;\r\n\r\n}\r\n\r\n.wishlist-link[_ngcontent-%COMP%]{\r\n  width: 150px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n.wishlist-link[_ngcontent-%COMP%]:hover   .icon-wishlist[_ngcontent-%COMP%]::before{\r\n  content: url(\"/assets/icons/wishlist-orange.svg\");\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.wishlist-link[_ngcontent-%COMP%]:hover   .account__text[_ngcontent-%COMP%]{\r\n  color: var(--main-orange);\r\n}\r\n\r\n.account-link[_ngcontent-%COMP%]:hover   .account__text[_ngcontent-%COMP%]{\r\n  color: var(--main-orange);\r\n}\r\n\r\n.account-dropdown-hide[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.account-dropdown-show[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  background-color: var(--main-white);\r\n  top: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  animation-name: dropdownExpand;\r\n  animation-duration: 600ms;\r\n  border-radius:5px;\r\n}\r\n\r\n.account-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  list-style: none;\r\n  padding-top:0.2rem;\r\n  padding-bottom:0.2rem;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  width: 100px;\r\n  height:20px;\r\n  animation-name: fadeIn;\r\n  animation-duration: 600ms;\r\n}\r\n\r\n.account-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n\r\n}\r\n\r\n.account__text[_ngcontent-%COMP%]{\r\n  color:var(--main-white);\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  padding-left: 0.4rem;\r\n  cursor: pointer;\r\n  margin: 0;\r\n}\r\n\r\n.account__text[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n}\r\n\r\n\r\n\r\n.icon-account[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(\"/assets/icons/account.svg\");\r\n  z-index: 2;\r\n}\r\n\r\n.icon-wishlist[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 16px;\r\n  height: 16px;\r\n  background: url(\"/assets/icons/wishlist.svg\");\r\n  z-index: 2;\r\n}\r\n\r\n.icon-caret-down[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background: url(\"/assets/icons/caret-down.svg\");\r\n  z-index: 2;\r\n}\r\n\r\n.icon-caret-up[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  background: url(\"/assets/icons/caret-up-orange.svg\");\r\n  z-index: 2;\r\n}\r\n\r\n@media only screen and (max-width:840px){\r\n  .header__phone__number[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .account-divider[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .account-wrrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    justify-content: space-between;\r\n    margin-right: 0;\r\n  }\r\n\r\n  .account-item[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    padding: 0;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1waG9uZS1udW1iZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLHdDQUF3QztFQUN4QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSwyQ0FBMkM7O0FBRTNDO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0RBQWdEO0VBQ2hELFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbURBQW1EO0VBQ25ELFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUzs7QUFFWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlEQUFpRDtFQUNqRCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxTQUFTO0VBQ1QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5Qix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUdBLFFBQVE7O0FBRVI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0Q0FBNEM7RUFDNUMsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osNkNBQTZDO0VBQzdDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtDQUErQztFQUMvQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvREFBb0Q7RUFDcEQsVUFBVTtBQUNaOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoiaGVhZGVyLXBob25lLW51bWJlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1waG9uZS1udW1iZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWxpZ2h0LWRhcmspO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oZWFkZXJfX3Bob25lX19udW1iZXJ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOjAuOHJlbTtcclxuICBsZXR0ZXItc3BhY2luZzoxcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDozMDBweDtcclxuICBoZWlnaHQ6MzBweDtcclxuICB6LWluZGV4OiAyO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDo1MHB4O1xyXG59XHJcblxyXG4uYWNjb3VudC1pdGVte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5wYWRkaW5nLXJpZ2h0LTNweHtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi8qYWNjb3VudCBhbmQgd2lzaGxpc3Qgb3JhbmdlIGhvdmVyIGVmZmVjdCovXHJcblxyXG4uYWNjb3VudC1saW5re1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWNjb3VudC1saW5rOmhvdmVyIC5pY29uLWFjY291bnQ6OmJlZm9yZXtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2FjY291bnQtb3JhbmdlLnN2Z1wiKTtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5hY2NvdW50LWxpbms6aG92ZXIgLmljb24tY2FyZXQtZG93bjo6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiB1cmwoXCIvYXNzZXRzL2ljb25zL2NhcmV0LWRvd24tb3JhbmdlLnN2Z1wiKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAtNHB4O1xyXG5cclxufVxyXG5cclxuLndpc2hsaXN0LWxpbmt7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi53aXNobGlzdC1saW5rOmhvdmVyIC5pY29uLXdpc2hsaXN0OjpiZWZvcmV7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy93aXNobGlzdC1vcmFuZ2Uuc3ZnXCIpO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxufVxyXG5cclxuLndpc2hsaXN0LWxpbms6aG92ZXIgLmFjY291bnRfX3RleHR7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLmFjY291bnQtbGluazpob3ZlciAuYWNjb3VudF9fdGV4dHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG4uYWNjb3VudC1kcm9wZG93bi1oaWRle1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hY2NvdW50LWRyb3Bkb3duLXNob3d7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4td2hpdGUpO1xyXG4gIHRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbmltYXRpb24tbmFtZTogZHJvcGRvd25FeHBhbmQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA2MDBtcztcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG5cclxuLmFjY291bnQtaXRlbSB1bCBsaXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nLXRvcDowLjJyZW07XHJcbiAgcGFkZGluZy1ib3R0b206MC4ycmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNjAwbXM7XHJcbn1cclxuXHJcbi5hY2NvdW50LWl0ZW0gdWwgbGk6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuXHJcbn1cclxuXHJcbi5hY2NvdW50X190ZXh0e1xyXG4gIGNvbG9yOnZhcigtLW1haW4td2hpdGUpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC40cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5hY2NvdW50X190ZXh0OmhvdmVye1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcblxyXG4vKklDT05TKi9cclxuXHJcbi5pY29uLWFjY291bnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2FjY291bnQuc3ZnXCIpO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5pY29uLXdpc2hsaXN0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy93aXNobGlzdC5zdmdcIik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmljb24tY2FyZXQtZG93bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY2FyZXQtZG93bi5zdmdcIik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmljb24tY2FyZXQtdXB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIGhlaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2NhcmV0LXVwLW9yYW5nZS5zdmdcIik7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg0MHB4KXtcclxuICAuaGVhZGVyX19waG9uZV9fbnVtYmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5hY2NvdW50LWRpdmlkZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmFjY291bnQtd3JyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICB9XHJcblxyXG4gIC5hY2NvdW50LWl0ZW17XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderPhoneNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-phone-number',
                templateUrl: './header-phone-number.component.html',
                styleUrls: ['./header-phone-number.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SA4t":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/client-aside-review-list/client-aside-review-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ClientAsideReviewListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAsideReviewListComponent", function() { return ClientAsideReviewListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_review_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/review.service */ "xkcE");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _client_review_client_review_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-review/client-review.component */ "mmlD");






function ClientAsideReviewListComponent_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-client-review", 3);
} if (rf & 2) {
    const review_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("review", review_r1);
} }
function ClientAsideReviewListComponent_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClientAsideReviewListComponent_2_ng_template_0_Template, 1, 1, "ng-template", 2);
} }
class ClientAsideReviewListComponent {
    constructor(reviewServise) {
        this.reviewServise = reviewServise;
    }
    ngOnInit() {
        this.reviewServise.getReviews().subscribe((data) => {
            this.reviews = data;
        });
    }
}
ClientAsideReviewListComponent.ɵfac = function ClientAsideReviewListComponent_Factory(t) { return new (t || ClientAsideReviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"])); };
ClientAsideReviewListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientAsideReviewListComponent, selectors: [["app-client-aside-review-list"]], decls: 3, vars: 1, consts: [[1, "client-review-aside-list-container"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [3, "review"]], template: function ClientAsideReviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "swiper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClientAsideReviewListComponent_2_Template, 1, 0, undefined, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_2__["SwiperSlideDirective"], _client_review_client_review_component__WEBPACK_IMPORTED_MODULE_4__["ClientReviewComponent"]], styles: [".client-review-aside-list-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 300px;\r\n  border: 2px solid var(--light-border-grey);\r\n  margin-left: 10px;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n}\r\n\r\napp-review[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1hc2lkZS1yZXZpZXctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJjbGllbnQtYXNpZGUtcmV2aWV3LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbGllbnQtcmV2aWV3LWFzaWRlLWxpc3QtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWJvcmRlci1ncmV5KTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYXBwLXJldmlld3tcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientAsideReviewListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-aside-review-list',
                templateUrl: './client-aside-review-list.component.html',
                styleUrls: ['./client-aside-review-list.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_review_service__WEBPACK_IMPORTED_MODULE_1__["ReviewService"] }]; }, null); })();


/***/ }),

/***/ "SsN4":
/*!******************************************************************!*\
  !*** ./src/app/pages/watches/watch-list/watch-list.component.ts ***!
  \******************************************************************/
/*! exports provided: WatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListComponent", function() { return WatchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function WatchListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function WatchListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.watches, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function WatchListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function WatchListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function WatchListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WatchListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Watch');
            return filtered;
        }))
            .subscribe((data) => {
            this.watches = data;
        });
    }
}
WatchListComponent.ɵfac = function WatchListComponent_Factory(t) { return new (t || WatchListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
WatchListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WatchListComponent, selectors: [["app-watch-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function WatchListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WatchListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WatchListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WatchListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watches)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.watches);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNoLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6IndhdGNoLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WatchListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-watch-list',
                templateUrl: './watch-list.component.html',
                styleUrls: ['./watch-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "jRGU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'techstore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-mobile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_2__["MobileMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TyMA":
/*!***************************************************************************!*\
  !*** ./src/app/components/product/product-menu/product-menu.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductMenuComponent", function() { return ProductMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");




class ProductMenuComponent {
    constructor(router, productServise) {
        this.router = router;
        this.productServise = productServise;
    }
    ngOnInit() { }
    redirectToDetailsPage(id) {
        this.router.navigate(['/product-details', id]);
    }
    addToWishlist(product) {
        if (product)
            this.productServise.addToWishlist(product);
    }
    addToCart(product) {
        if (product)
            this.productServise.addToCart(product);
    }
}
ProductMenuComponent.ɵfac = function ProductMenuComponent_Factory(t) { return new (t || ProductMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
ProductMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductMenuComponent, selectors: [["app-product-menu"]], inputs: { product: "product" }, decls: 8, vars: 0, consts: [[1, "product-menu-container"], [1, "product-menu-wrrapper"], [1, "icon-wrrapper"], [1, "icon-cart", 3, "click"], [1, "icon-wishlist", 3, "click"], [1, "icon-eye", 3, "click"]], template: function ProductMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductMenuComponent_Template_span_click_3_listener() { return ctx.addToCart(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductMenuComponent_Template_span_click_5_listener() { return ctx.addToWishlist(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductMenuComponent_Template_span_click_7_listener() { return ctx.redirectToDetailsPage(ctx.product == null ? null : ctx.product.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".product-menu-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.product-menu-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  margin-left:4px;\r\n}\r\n\r\n.icon-wrrapper[_ngcontent-%COMP%]{\r\n  padding: 5px;\r\n  background-color: var(--main-orange);\r\n  width: 20px;\r\n  height:20px;\r\n  border-radius:4px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left:0.5rem;\r\n  margin-right:0.5rem;\r\n}\r\n\r\n.icon-cart[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/product-menu/cart.svg\");\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-eye[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/product-menu/eye.svg\");\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-wishlist[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/product-menu/wishlist.svg\");\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixxREFBcUQ7RUFDckQsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osMERBQTBEO0VBQzFELDRCQUE0QjtFQUM1QixlQUFlO0FBQ2pCIiwiZmlsZSI6InByb2R1Y3QtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbWVudS1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucHJvZHVjdC1tZW51LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDo0cHg7XHJcbn1cclxuXHJcbi5pY29uLXdycmFwcGVye1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OjAuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6MC41cmVtO1xyXG59XHJcblxyXG4uaWNvbi1jYXJ0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9wcm9kdWN0LW1lbnUvY2FydC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLWV5ZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvcHJvZHVjdC1tZW51L2V5ZS5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLXdpc2hsaXN0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9wcm9kdWN0LW1lbnUvd2lzaGxpc3Quc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-menu',
                templateUrl: './product-menu.component.html',
                styleUrls: ['./product-menu.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['product']
        }] }); })();


/***/ }),

/***/ "V8LQ":
/*!******************************************************************!*\
  !*** ./src/app/pages/new-collection/new-collection.component.ts ***!
  \******************************************************************/
/*! exports provided: NewCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCollectionComponent", function() { return NewCollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/product/product.component */ "2SFI");








function NewCollectionComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
const _c0 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
class NewCollectionComponent {
    constructor(productService) {
        this.productService = productService;
        this.newCollection = [];
        this.p = 1;
    }
    ngOnInit() {
        this.productService.getNewCollection().subscribe((newCollection) => {
            if (newCollection)
                this.newCollection = newCollection;
        });
    }
}
NewCollectionComponent.ɵfac = function NewCollectionComponent_Factory(t) { return new (t || NewCollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
NewCollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewCollectionComponent, selectors: [["app-new-collection"]], decls: 9, vars: 7, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "new-collection-container"], ["class", "new-collection-wrrapper", 4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "new-collection-wrrapper"], [3, "product"]], template: function NewCollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NewCollectionComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pagination-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function NewCollectionComponent_Template_pagination_controls_pageChange_7_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.newCollection, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideCategoryNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginationControlsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"]], styles: [".new-collection-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im5ldy1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWNvbGxlY3Rpb24tY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-collection',
                templateUrl: './new-collection.component.html',
                styleUrls: ['./new-collection.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "VTFk":
/*!*******************************************************************!*\
  !*** ./src/app/components/carousel-img/carousel-img.component.ts ***!
  \*******************************************************************/
/*! exports provided: CarouselImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselImgComponent", function() { return CarouselImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class CarouselImgComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    redirectToSpecials() {
        this.router.navigateByUrl('specials');
    }
}
CarouselImgComponent.ɵfac = function CarouselImgComponent_Factory(t) { return new (t || CarouselImgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
CarouselImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselImgComponent, selectors: [["app-carousel-img"]], inputs: { sliderImage: "sliderImage" }, decls: 9, vars: 7, consts: [[1, "carousel__img", 3, "src", "alt"], [1, "carousel-details-wrrapper"], [1, "carousel__product__name"], [1, "carousel__product__price"], [1, "carousel__shop__btn", 3, "click"]], template: function CarouselImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselImgComponent_Template_button_click_7_listener() { return ctx.redirectToSpecials(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.sliderImage == null ? null : ctx.sliderImage.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.sliderImage == null ? null : ctx.sliderImage.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sliderImage == null ? null : ctx.sliderImage.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, ctx.sliderImage == null ? null : ctx.sliderImage.price, "EUR"), " ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".carousel__img[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:100%;\r\n  object-fit: contain;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  animation-name: fadeInScale;\r\n  animation-duration: 2s;\r\n  animation-delay:200ms ease-in;\r\n}\r\n\r\n.carousel-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height:100px;\r\n  background-color: rgba(252, 186, 6, 0.3);\r\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);\r\n          clip-path: polygon(0 0, 100% 0, 100% 40%, 0 100%);\r\n\r\n}\r\n\r\n.carousel__product__name[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-size: 1.3rem;\r\n  color:var(--text-dark-orange);\r\n  padding-left: 20px;\r\n  top: -12px;\r\n  font-family: \"Popins\";\r\n  font-weight: bold;\r\n  text-shadow: 1px 2px black;\r\n}\r\n\r\n.carousel__product__price[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-size: 1rem;\r\n  font-family: \"Popins\";\r\n  font-weight: bold;\r\n  padding-left: 20px;\r\n  top: -30px;\r\n  color: var(--main-dark);\r\n}\r\n\r\n.carousel__shop__btn[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom:0;\r\n  width: 100px;\r\n  height: 50px;\r\n  left: 30px;\r\n  background-color:var(--main-orange);\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  border-radius: 5px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWltZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHlCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdDQUF3QztFQUN4Qyx5REFBaUQ7VUFBakQsaURBQWlEOztBQUVuRDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1osVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJjYXJvdXNlbC1pbWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbF9faW1ne1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5TY2FsZTtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gIGFuaW1hdGlvbi1kZWxheToyMDBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtZGV0YWlscy13cnJhcHBlcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUyLCAxODYsIDYsIDAuMyk7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDQwJSwgMCAxMDAlKTtcclxuXHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fcHJvZHVjdF9fbmFtZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgY29sb3I6dmFyKC0tdGV4dC1kYXJrLW9yYW5nZSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHRvcDogLTEycHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbF9fcHJvZHVjdF9fcHJpY2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAtMzBweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1kYXJrKTtcclxufVxyXG5cclxuLmNhcm91c2VsX19zaG9wX19idG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTowO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgbGVmdDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLW1haW4tb3JhbmdlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel-img',
                templateUrl: './carousel-img.component.html',
                styleUrls: ['./carousel-img.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { sliderImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['sliderImage']
        }] }); })();


/***/ }),

/***/ "WEen":
/*!***************************************************************!*\
  !*** ./src/app/components/add-review/add-review.component.ts ***!
  \***************************************************************/
/*! exports provided: AddReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReviewComponent", function() { return AddReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AddReviewComponent {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ngOnInit() {
        this.addReviewGroup = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            review: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            rating: ['3', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    addReview(form) {
        var _a, _b;
        if (((_a = form.get('name')) === null || _a === void 0 ? void 0 : _a.hasError('required')) || ((_b = form.get('review')) === null || _b === void 0 ? void 0 : _b.hasError('required'))) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('fields cannot be empty!');
            return;
        }
        if (form.valid) {
            this.router.navigateByUrl('');
        }
    }
}
AddReviewComponent.ɵfac = function AddReviewComponent_Factory(t) { return new (t || AddReviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AddReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddReviewComponent, selectors: [["app-add-review"]], decls: 20, vars: 1, consts: [[1, "add-review-container"], [3, "formGroup", "ngSubmit"], ["for", "name"], ["formControlName", "name", "type", "text", "name", "name", 1, "input__review"], ["for", "review"], ["formControlName", "review", "type", "text", "name", "review", 1, "input__review"], [1, "radio-group"], ["formControlName", "rating", "type", "radio", "name", "rating", "value", "1", 1, "radio__btn"], ["formControlName", "rating", "type", "radio", "name", "rating", "value", "2", 1, "radio__btn"], ["formControlName", "rating", "type", "radio", "name", "rating", "value", "3", 1, "radio__btn"], ["formControlName", "rating", "type", "radio", "name", "rating", "value", "4", 1, "radio__btn"], ["formControlName", "rating", "type", "radio", "name", "rating", "value", "5", 1, "radio__btn"], ["type", "submit", 1, "send__review__btn"]], template: function AddReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddReviewComponent_Template_form_ngSubmit_1_listener() { return ctx.addReview(ctx.addReviewGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Review:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "bad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "good");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addReviewGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], styles: [".add-review-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 300px;\r\n  background-color: var(--light-grey-bg);\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 30px;\r\n  margin: 1rem;\r\n  outline: none;\r\n  border-radius: 5px;\r\n  border: 3px solid var(--light-border-grey);\r\n}\r\n\r\n.input__review[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50%;\r\n  height: 30px;\r\n  margin-left:10px;\r\n  margin-top: 0;\r\n\r\n}\r\n\r\n.radio-group[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  margin-left: 10px;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.radio-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  color: var(--main-dark);\r\n}\r\n\r\n.radio__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 10px;\r\n  height: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.send__review__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:100px;\r\n  height: 2rem;\r\n  background-color: var(--main-orange);\r\n  border: none;\r\n  border-radius: 5px;\r\n  font-family: \"Popins\";\r\n  font-size:1rem;\r\n  color: white;\r\n  margin-top:2rem;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n  margin-bottom: 40px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  margin-left: 10px;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  color: var(--main-dark);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1yZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhOztBQUVmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiYWRkLXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1yZXZpZXctY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXktYmcpO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tbGlnaHQtYm9yZGVyLWdyZXkpO1xyXG59XHJcblxyXG4uaW5wdXRfX3Jldmlld3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6NTAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcblxyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAgcHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tZGFyayk7XHJcbn1cclxuXHJcbi5yYWRpb19fYnRue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc2VuZF9fcmV2aWV3X19idG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6MXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDoycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tZGFyayk7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-review',
                templateUrl: './add-review.component.html',
                styleUrls: ['./add-review.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "XEn3":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");







class ContactComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.messageForm = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    sendMessage(formData) {
        var _a, _b, _c, _d;
        if (((_a = formData.controls.Name.errors) === null || _a === void 0 ? void 0 : _a.required) || ((_b = formData.controls.Email.errors) === null || _b === void 0 ? void 0 : _b.required) || ((_c = formData.controls.Message.errors) === null || _c === void 0 ? void 0 : _c.required)) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('fields cannot be empty!');
            return;
        }
        if ((_d = formData.controls.Email.errors) === null || _d === void 0 ? void 0 : _d.email) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Email is not valid!');
            return;
        }
        if (formData.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Message sent!');
            formData.reset();
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 51, vars: 1, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "contact-container"], [1, "contact-info-wrrapper"], [1, "contact__info__heading"], [1, "icon-location"], [1, "icon-telephone"], [1, "icon-fax"], [1, "icon-clock"], [1, "map-location-wrrapper"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1426.1548210533313!2d20.95590728747983!3d44.36523127255126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d44.3659124!2d20.956429399999998!4m3!3m2!1d44.3659113!2d20.9564292!5e0!3m2!1shr!2srs!4v1628781521584!5m2!1shr!2srs"), "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "message-container"], [1, "message-form-wrrapper"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "Name"], ["formControlName", "Name", "type", "text", "name", "Name"], ["formControlName", "Email", "type", "text", "name", "Email"], ["formControlName", "Message", "name", "Message", "cols", "30", "rows", "10"], [1, "sub__msg__btn"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "TechStore ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Adress: St Peters,11430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Telephone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1234567");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Fax ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "45678");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Opening Times ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "08 AM to 21 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "iframe", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_35_listener() { return ctx.sendMessage(ctx.messageForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageForm);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideCategoryNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".contact-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 300px;\r\n  display: flex;\r\n}\r\n\r\n.contact-info-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.5rem;\r\n  color: var(--main--dark);\r\n  margin-left: 20px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  font-family: \"Popins\";\r\n  color: var(--light-grey);\r\n}\r\n\r\n.contact__info__heading[_ngcontent-%COMP%]{\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n  display: flex;\r\n  align-items: center;\r\n  color: black !important;\r\n}\r\n\r\n.map-location-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 90%;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  height:90%;\r\n}\r\n\r\n.icon-location[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/contact/location.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.icon-telephone[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/contact/telephone.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.icon-fax[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/contact/fax.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin-right: 5px;\r\n\r\n}\r\n\r\n.icon-clock[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/contact/clock.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin-right: 5px;\r\n}\r\n\r\n.message-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 450px;\r\n}\r\n\r\n.message-form-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form-group[_ngcontent-%COMP%]{\r\n  max-width: 100%;\r\n  display: flex;\r\n  height:30px;\r\n  justify-content: center;\r\n  margin: 1rem;\r\n\r\n}\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n  width: 30%;\r\n  height: 30px;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  color: var(--light-grey);\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n  height: 30px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 2px solid var(--light-grey-bg-2);\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n  height:60px;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 2px solid var(--light-grey-bg-2);\r\n}\r\n\r\n.sub__msg__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-top:60px;\r\n  width: 30%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  background-color: var(--main-orange);\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  border: none;\r\n  border-radius: 5px;\r\n  height: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.2rem;\r\n  color: var(--main--dark);\r\n  padding-left: 20px;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:500px){\r\n  .contact-container[_ngcontent-%COMP%]{\r\n    height:650px;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .map-location-wrrapper[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    justify-content: center;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFEQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNEQUFzRDtFQUN0RCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdEQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGlCQUFpQjs7QUFFbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrREFBa0Q7RUFDbEQsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix3QkFBd0I7O0FBRTFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUtBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsV0FBVztJQUNYLHVCQUF1QjtFQUN6Qjs7QUFFRiIsImZpbGUiOiJjb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mby13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5oMXtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi0tZGFyayk7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG59XHJcblxyXG4uY29udGFjdF9faW5mb19faGVhZGluZ3tcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFwLWxvY2F0aW9uLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgaGVpZ2h0OjkwJTtcclxufVxyXG5cclxuLmljb24tbG9jYXRpb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2NvbnRhY3QvbG9jYXRpb24uc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLXRlbGVwaG9uZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY29udGFjdC90ZWxlcGhvbmUuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5pY29uLWZheHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY29udGFjdC9mYXguc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG59XHJcblxyXG4uaWNvbi1jbG9ja3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY29udGFjdC9jbG9jay5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1mb3JtLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuXHJcbn1cclxuXHJcbmxhYmVse1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcblxyXG59XHJcblxyXG5pbnB1dHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ncmV5LWJnLTIpO1xyXG59XHJcblxyXG50ZXh0YXJlYXtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWxpZ2h0LWdyZXktYmctMik7XHJcbn1cclxuXHJcbi5zdWJfX21zZ19fYnRue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOjYwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5oNntcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi0tZGFyayk7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUwMHB4KXtcclxuICAuY29udGFjdC1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6NjUwcHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1hcC1sb2NhdGlvbi13cnJhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class BannerComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToCategory(category) {
        if (category)
            this.router.navigateByUrl(category.toLowerCase());
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], inputs: { bannerItem: "bannerItem" }, decls: 10, vars: 4, consts: [[1, "banner-container"], [1, "banner-details-wrrapper"], [1, "banner__text"], [1, "banner__text", "banner__category__text"], [1, "banner__btn", 3, "click"], [1, "banner-img-wrrapper"], [3, "src", "alt"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_6_listener() { return ctx.redirectToCategory(ctx.bannerItem == null ? null : ctx.bannerItem.productCategory); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "grab offer!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sale ", ctx.bannerItem == null ? null : ctx.bannerItem.salePercent, " % off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bannerItem == null ? null : ctx.bannerItem.productCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.bannerItem == null ? null : ctx.bannerItem.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.bannerItem == null ? null : ctx.bannerItem.img);
    } }, styles: [".banner-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  height:200px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.banner-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 60%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.banner-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.banner-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 90%;\r\n  height:90%;\r\n  cursor: pointer;\r\n  transition: transform;\r\n  transition-duration:500ms;\r\n  object-fit: contain;\r\n}\r\n\r\n.banner__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.4rem;\r\n  color: white;\r\n}\r\n\r\n.banner__category__text[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top:-40px;\r\n  font-weight: bold;\r\n}\r\n\r\n.banner__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50%;\r\n  top: -20px;\r\n  cursor: pointer;\r\n  text-transform: uppercase;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  background-color: transparent;\r\n  border-bottom: 1px solid white;\r\n  border-left: none;\r\n  border-top: none;\r\n  border-right: none;\r\n  font-weight: bold;\r\n}\r\n\r\n.banner__btn[_ngcontent-%COMP%]:hover{\r\n  color: black;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.banner-img-wrrapper[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n  transform: scale(1.1);\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCOzs7QUFHdkIiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVyLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJhbm5lci1kZXRhaWxzLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYmFubmVyLWltZy13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyLWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OjkwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246NTAwbXM7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLmJhbm5lcl9fdGV4dHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDEuNHJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYW5uZXJfX2NhdGVnb3J5X190ZXh0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6LTQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5iYW5uZXJfX2J0bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6NTAlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmJhbm5lcl9fYnRuOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbi5iYW5uZXItaW1nLXdycmFwcGVyOmhvdmVyIGltZ3tcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { bannerItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["bannerItem"]
        }] }); })();


/***/ }),

/***/ "Y8sq":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-post/blog-post.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostComponent", function() { return BlogPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class BlogPostComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    blogDetails(id) {
        if (id)
            this.router.navigate(['blog', id]);
    }
}
BlogPostComponent.ɵfac = function BlogPostComponent_Factory(t) { return new (t || BlogPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BlogPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogPostComponent, selectors: [["app-blog-post"]], inputs: { blog: "blog" }, decls: 13, vars: 9, consts: [[1, "blog-post-container"], [1, "blog-img-wrrapper"], [1, "blog__date"], [3, "src", "alt"], [1, "blog-details"], [1, "blog__heading"], [1, "blog__text"], [1, "read__more__btn", 3, "click"]], template: function BlogPostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BlogPostComponent_Template_button_click_11_listener() { return ctx.blogDetails(ctx.blog == null ? null : ctx.blog.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.blogDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.blog == null ? null : ctx.blog.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.blog == null ? null : ctx.blog.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.blog == null ? null : ctx.blog.blogHeading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, ctx.blog == null ? null : ctx.blog.blogText, 0, 250), "... ");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".blog-post-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  max-width: 100%;\r\n  height: 300px;\r\n  display: flex;\r\n  margin: 1rem;\r\n  border: 1px solid var(--light-border-grey);\r\n  box-sizing: border-box;\r\n  border-radius: 5px;\r\n}\r\n\r\n.blog-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n.blog-details[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.blog__heading[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background-color: var(--main-orange);\r\n  width: 100%;\r\n  height: 30px;\r\n  top: 0;\r\n  left: 0;\r\n  margin: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.blog__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: var(--light-grey);\r\n  text-align: justify;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.blog-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.read__more__btn[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height:30px;\r\n  bottom: 0;\r\n  left: 0;\r\n  background-color: var(--light-grey-bg-2);\r\n  border: none;\r\n  color: black;\r\n  font-family: \"Popins\";\r\n  cursor: pointer;\r\n  font-weight: bold;\r\n}\r\n\r\n.read__more__btn[_ngcontent-%COMP%]:hover{\r\n  color: white;\r\n  background-color: var(--main--dark);\r\n}\r\n\r\n.blog__date[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 10px;\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  color: var(--light-grey);\r\n  font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width:450px){\r\n  .blog-post-container[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n    height:400px;\r\n  }\r\n\r\n  .blog-img-wrrapper[_ngcontent-%COMP%]{\r\n    height:30%;\r\n    width: 100%;\r\n  }\r\n\r\n  .blog-details[_ngcontent-%COMP%]{\r\n    height:70%;\r\n    width: 100%;\r\n\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87QUFDVDs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLFNBQVM7RUFDVCxPQUFPO0VBQ1Asd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFVBQVU7SUFDVixXQUFXOztFQUViOztBQUVGIiwiZmlsZSI6ImJsb2ctcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctcG9zdC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0LWJvcmRlci1ncmV5KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLmJsb2ctaW1nLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmJsb2ctZGV0YWlsc3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLmJsb2dfX2hlYWRpbmd7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmxvZ19fdGV4dHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi5ibG9nLWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ucmVhZF9fbW9yZV9fYnRue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6MzBweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5LWJnLTIpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ucmVhZF9fbW9yZV9fYnRuOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLS1kYXJrKTtcclxufVxyXG5cclxuLmJsb2dfX2RhdGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAuYmxvZy1wb3N0LWNvbnRhaW5lcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6NDAwcHg7XHJcbiAgfVxyXG5cclxuICAuYmxvZy1pbWctd3JyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6MzAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYmxvZy1kZXRhaWxze1xyXG4gICAgaGVpZ2h0OjcwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog-post',
                templateUrl: './blog-post.component.html',
                styleUrls: ['./blog-post.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['blog']
        }] }); })();


/***/ }),

/***/ "Yuyz":
/*!******************************************************!*\
  !*** ./src/app/pages/wishlist/wishlist.component.ts ***!
  \******************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_wishlist_product_wishlist_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/wishlist-product/wishlist-product.component */ "sMOO");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function WishlistComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-wishlist-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wishlistProduct", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 2, currentPage: a1 }; };
function WishlistComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WishlistComponent_div_1_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.wishlist, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function WishlistComponent_pagination_controls_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function WishlistComponent_pagination_controls_2_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function WishlistComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No products in wishlist!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WishlistComponent {
    constructor(wishlistService) {
        this.wishlistService = wishlistService;
        this.p = 1;
    }
    ngOnInit() {
        this.wishlistService.getWishlistProduct();
        this.wishlistSubscription = this.wishlistService.wishlist$.subscribe((wishlist) => {
            this.wishlist = wishlist;
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.wishlistSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
WishlistComponent.ɵfac = function WishlistComponent_Factory(t) { return new (t || WishlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
WishlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishlistComponent, selectors: [["app-wishlist"]], decls: 6, vars: 3, consts: [[1, "wishlist-container"], [4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["emptyList", ""], ["class", "wishlist-wrrapper", 4, "ngFor", "ngForOf"], [1, "wishlist-wrrapper"], [3, "wishlistProduct"], [1, "my-pagination", 3, "responsive", "pageChange"]], template: function WishlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WishlistComponent_div_1_Template, 3, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WishlistComponent_pagination_controls_2_Template, 1, 1, "pagination-controls", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WishlistComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wishlist.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wishlist.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_wishlist_product_wishlist_product_component__WEBPACK_IMPORTED_MODULE_4__["WishlistProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".wishlist-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.3rem;\r\n  text-align: center;\r\n  margin-top: 40px;\r\n  margin-bottom: 100px;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2hsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEIiLCJmaWxlIjoid2lzaGxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aXNobGlzdC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wishlist',
                templateUrl: './wishlist.component.html',
                styleUrls: ['./wishlist.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_header_phone_number_header_phone_number_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header-phone-number/header-phone-number.component */ "Oria");
/* harmony import */ var _components_dropdown_category_navigation_dropdown_category_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dropdown-category-navigation/dropdown-category-navigation.component */ "ppyR");
/* harmony import */ var _components_page_navigation_links_page_navigation_links_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-navigation-links/page-navigation-links.component */ "cDmj");
/* harmony import */ var _components_main_filter_search_main_filter_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main-filter-search/main-filter-search.component */ "yX/U");
/* harmony import */ var _components_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/my-cart/my-cart.component */ "cDWQ");
/* harmony import */ var _components_tablet_dropdown_search_tablet_dropdown_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/tablet-dropdown-search/tablet-dropdown-search.component */ "ogJo");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_carousel_img_slider_carousel_img_slider_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/carousel-img-slider/carousel-img-slider.component */ "j3CW");
/* harmony import */ var _components_carousel_img_carousel_img_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/carousel-img/carousel-img.component */ "VTFk");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/banner-list/banner-list.component */ "DH2L");
/* harmony import */ var _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/info-card/info-card.component */ "kya/");
/* harmony import */ var _components_featured_product_list_featured_product_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/featured-product-list/featured-product-list.component */ "klYG");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/product/product.component */ "2SFI");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/rating/rating.component */ "iHZU");
/* harmony import */ var _components_aside_banner_aside_banner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/aside-banner/aside-banner.component */ "0aj9");
/* harmony import */ var _components_product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/product/product-menu/product-menu.component */ "TyMA");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "0B/p");
/* harmony import */ var _components_product_details_view_product_details_view_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/product-details-view/product-details-view.component */ "qUBY");
/* harmony import */ var _components_aside_special_products_aside_special_products_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/aside-special-products/aside-special-products.component */ "BmD+");
/* harmony import */ var _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/product-description/product-description.component */ "ZHIh");
/* harmony import */ var _components_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/product-review/product-review.component */ "92jb");
/* harmony import */ var _components_product_review_review_review_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/product-review/review/review.component */ "i/L9");
/* harmony import */ var _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/add-review/add-review.component */ "WEen");
/* harmony import */ var _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/client-aside-review-list/client-aside-review-list.component */ "SA4t");
/* harmony import */ var _components_client_review_client_review_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/client-review/client-review.component */ "mmlD");
/* harmony import */ var _components_banner_list_bottom_banner_list_bottom_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/banner-list-bottom/banner-list-bottom.component */ "EDem");
/* harmony import */ var _components_special_product_list_special_product_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/special-product-list/special-product-list.component */ "x6sJ");
/* harmony import */ var _components_special_product_special_product_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/special-product/special-product.component */ "MFsF");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_footer_blog_footer_blog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/footer-blog/footer-blog.component */ "b3fl");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/blog/blog.component */ "5tuB");
/* harmony import */ var _pages_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/new-collection/new-collection.component */ "V8LQ");
/* harmony import */ var _pages_specials_specials_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/specials/specials.component */ "dD5k");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/blog/blog-details/blog-details.component */ "BDmo");
/* harmony import */ var _components_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/blog-post/blog-post.component */ "Y8sq");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/wishlist/wishlist.component */ "Yuyz");
/* harmony import */ var _components_wishlist_product_wishlist_product_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/wishlist-product/wishlist-product.component */ "sMOO");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/cart-item/cart-item.component */ "bb5s");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "Neos");
/* harmony import */ var _pages_desktops_desktops_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./pages/desktops/desktops.component */ "MDC+");
/* harmony import */ var _pages_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./pages/laptops/laptops.component */ "hsUW");
/* harmony import */ var _pages_cameras_cameras_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pages/cameras/cameras.component */ "emjZ");
/* harmony import */ var _pages_phones_phones_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pages/phones/phones.component */ "uZ7c");
/* harmony import */ var _pages_scanners_scanners_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./pages/scanners/scanners.component */ "5jtN");
/* harmony import */ var _pages_watches_watches_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/watches/watches.component */ "B3J2");
/* harmony import */ var _pages_peripherals_peripherals_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/peripherals/peripherals.component */ "NOKs");
/* harmony import */ var _pages_desktops_desktop_list_desktop_list_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./pages/desktops/desktop-list/desktop-list.component */ "i2uW");
/* harmony import */ var _pages_laptops_laptop_list_laptop_list_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./pages/laptops/laptop-list/laptop-list.component */ "cm1X");
/* harmony import */ var _pages_cameras_cameras_list_cameras_list_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./pages/cameras/cameras-list/cameras-list.component */ "kgYw");
/* harmony import */ var _pages_phones_phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./pages/phones/phone-list/phone-list.component */ "BYwi");
/* harmony import */ var _pages_scanners_scanner_list_scanner_list_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./pages/scanners/scanner-list/scanner-list.component */ "40N2");
/* harmony import */ var _pages_watches_watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./pages/watches/watch-list/watch-list.component */ "SsN4");
/* harmony import */ var _pages_peripherals_peripherals_list_peripherals_list_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pages/peripherals/peripherals-list/peripherals-list.component */ "fwOk");
/* harmony import */ var _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./components/mobile-menu/mobile-menu.component */ "jRGU");







































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
        ], ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _components_header_phone_number_header_phone_number_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPhoneNumberComponent"],
        _components_dropdown_category_navigation_dropdown_category_navigation_component__WEBPACK_IMPORTED_MODULE_11__["DropdownCategoryNavigationComponent"],
        _components_page_navigation_links_page_navigation_links_component__WEBPACK_IMPORTED_MODULE_12__["PageNavigationLinksComponent"],
        _components_main_filter_search_main_filter_search_component__WEBPACK_IMPORTED_MODULE_13__["MainFilterSearchComponent"],
        _components_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_14__["MyCartComponent"],
        _components_tablet_dropdown_search_tablet_dropdown_search_component__WEBPACK_IMPORTED_MODULE_15__["TabletDropdownSearchComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_17__["AsideCategoryNavComponent"],
        _components_carousel_img_slider_carousel_img_slider_component__WEBPACK_IMPORTED_MODULE_18__["CarouselImgSliderComponent"],
        _components_carousel_img_carousel_img_component__WEBPACK_IMPORTED_MODULE_19__["CarouselImgComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"],
        _components_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_21__["BannerListComponent"],
        _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_22__["InfoCardComponent"],
        _components_featured_product_list_featured_product_list_component__WEBPACK_IMPORTED_MODULE_23__["FeaturedProductListComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_24__["ProductComponent"],
        _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"],
        _components_aside_banner_aside_banner_component__WEBPACK_IMPORTED_MODULE_26__["AsideBannerComponent"],
        _components_product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_27__["ProductMenuComponent"],
        _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_28__["ProductDetailsComponent"],
        _components_product_details_view_product_details_view_component__WEBPACK_IMPORTED_MODULE_29__["ProductDetailsViewComponent"],
        _components_aside_special_products_aside_special_products_component__WEBPACK_IMPORTED_MODULE_30__["AsideSpecialProductsComponent"],
        _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_31__["ProductDescriptionComponent"],
        _components_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_32__["ProductReviewComponent"],
        _components_product_review_review_review_component__WEBPACK_IMPORTED_MODULE_33__["ReviewComponent"],
        _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_34__["AddReviewComponent"],
        _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_35__["ClientAsideReviewListComponent"],
        _components_client_review_client_review_component__WEBPACK_IMPORTED_MODULE_36__["ClientReviewComponent"],
        _components_banner_list_bottom_banner_list_bottom_component__WEBPACK_IMPORTED_MODULE_37__["BannerListBottomComponent"],
        _components_special_product_list_special_product_list_component__WEBPACK_IMPORTED_MODULE_38__["SpecialProductListComponent"],
        _components_special_product_special_product_component__WEBPACK_IMPORTED_MODULE_39__["SpecialProductComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_40__["FooterComponent"],
        _components_footer_blog_footer_blog_component__WEBPACK_IMPORTED_MODULE_41__["FooterBlogComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_42__["BlogComponent"],
        _pages_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_43__["NewCollectionComponent"],
        _pages_specials_specials_component__WEBPACK_IMPORTED_MODULE_44__["SpecialsComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_45__["ContactComponent"],
        _pages_blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_46__["BlogDetailsComponent"],
        _components_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_47__["BlogPostComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"],
        _pages_register_register_component__WEBPACK_IMPORTED_MODULE_49__["RegisterComponent"],
        _pages_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_50__["WishlistComponent"],
        _components_wishlist_product_wishlist_product_component__WEBPACK_IMPORTED_MODULE_51__["WishlistProductComponent"],
        _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_52__["CartComponent"],
        _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_53__["CartItemComponent"],
        _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_54__["CheckoutComponent"],
        _pages_desktops_desktops_component__WEBPACK_IMPORTED_MODULE_55__["DesktopsComponent"],
        _pages_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_56__["LaptopsComponent"],
        _pages_cameras_cameras_component__WEBPACK_IMPORTED_MODULE_57__["CamerasComponent"],
        _pages_phones_phones_component__WEBPACK_IMPORTED_MODULE_58__["PhonesComponent"],
        _pages_scanners_scanners_component__WEBPACK_IMPORTED_MODULE_59__["ScannersComponent"],
        _pages_watches_watches_component__WEBPACK_IMPORTED_MODULE_60__["WatchesComponent"],
        _pages_peripherals_peripherals_component__WEBPACK_IMPORTED_MODULE_61__["PeripheralsComponent"],
        _pages_desktops_desktop_list_desktop_list_component__WEBPACK_IMPORTED_MODULE_62__["DesktopListComponent"],
        _pages_laptops_laptop_list_laptop_list_component__WEBPACK_IMPORTED_MODULE_63__["LaptopListComponent"],
        _pages_cameras_cameras_list_cameras_list_component__WEBPACK_IMPORTED_MODULE_64__["CamerasListComponent"],
        _pages_phones_phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_65__["PhoneListComponent"],
        _pages_scanners_scanner_list_scanner_list_component__WEBPACK_IMPORTED_MODULE_66__["ScannerListComponent"],
        _pages_watches_watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_67__["WatchListComponent"],
        _pages_peripherals_peripherals_list_peripherals_list_component__WEBPACK_IMPORTED_MODULE_68__["PeripheralsListComponent"],
        _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_69__["MobileMenuComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]], exports: [ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _components_header_phone_number_header_phone_number_component__WEBPACK_IMPORTED_MODULE_10__["HeaderPhoneNumberComponent"],
                    _components_dropdown_category_navigation_dropdown_category_navigation_component__WEBPACK_IMPORTED_MODULE_11__["DropdownCategoryNavigationComponent"],
                    _components_page_navigation_links_page_navigation_links_component__WEBPACK_IMPORTED_MODULE_12__["PageNavigationLinksComponent"],
                    _components_main_filter_search_main_filter_search_component__WEBPACK_IMPORTED_MODULE_13__["MainFilterSearchComponent"],
                    _components_my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_14__["MyCartComponent"],
                    _components_tablet_dropdown_search_tablet_dropdown_search_component__WEBPACK_IMPORTED_MODULE_15__["TabletDropdownSearchComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                    _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_17__["AsideCategoryNavComponent"],
                    _components_carousel_img_slider_carousel_img_slider_component__WEBPACK_IMPORTED_MODULE_18__["CarouselImgSliderComponent"],
                    _components_carousel_img_carousel_img_component__WEBPACK_IMPORTED_MODULE_19__["CarouselImgComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_20__["BannerComponent"],
                    _components_banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_21__["BannerListComponent"],
                    _components_info_card_info_card_component__WEBPACK_IMPORTED_MODULE_22__["InfoCardComponent"],
                    _components_featured_product_list_featured_product_list_component__WEBPACK_IMPORTED_MODULE_23__["FeaturedProductListComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_24__["ProductComponent"],
                    _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_25__["RatingComponent"],
                    _components_aside_banner_aside_banner_component__WEBPACK_IMPORTED_MODULE_26__["AsideBannerComponent"],
                    _components_product_product_menu_product_menu_component__WEBPACK_IMPORTED_MODULE_27__["ProductMenuComponent"],
                    _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_28__["ProductDetailsComponent"],
                    _components_product_details_view_product_details_view_component__WEBPACK_IMPORTED_MODULE_29__["ProductDetailsViewComponent"],
                    _components_aside_special_products_aside_special_products_component__WEBPACK_IMPORTED_MODULE_30__["AsideSpecialProductsComponent"],
                    _components_product_description_product_description_component__WEBPACK_IMPORTED_MODULE_31__["ProductDescriptionComponent"],
                    _components_product_review_product_review_component__WEBPACK_IMPORTED_MODULE_32__["ProductReviewComponent"],
                    _components_product_review_review_review_component__WEBPACK_IMPORTED_MODULE_33__["ReviewComponent"],
                    _components_add_review_add_review_component__WEBPACK_IMPORTED_MODULE_34__["AddReviewComponent"],
                    _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_35__["ClientAsideReviewListComponent"],
                    _components_client_review_client_review_component__WEBPACK_IMPORTED_MODULE_36__["ClientReviewComponent"],
                    _components_banner_list_bottom_banner_list_bottom_component__WEBPACK_IMPORTED_MODULE_37__["BannerListBottomComponent"],
                    _components_special_product_list_special_product_list_component__WEBPACK_IMPORTED_MODULE_38__["SpecialProductListComponent"],
                    _components_special_product_special_product_component__WEBPACK_IMPORTED_MODULE_39__["SpecialProductComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_40__["FooterComponent"],
                    _components_footer_blog_footer_blog_component__WEBPACK_IMPORTED_MODULE_41__["FooterBlogComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_42__["BlogComponent"],
                    _pages_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_43__["NewCollectionComponent"],
                    _pages_specials_specials_component__WEBPACK_IMPORTED_MODULE_44__["SpecialsComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_45__["ContactComponent"],
                    _pages_blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_46__["BlogDetailsComponent"],
                    _components_blog_post_blog_post_component__WEBPACK_IMPORTED_MODULE_47__["BlogPostComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"],
                    _pages_register_register_component__WEBPACK_IMPORTED_MODULE_49__["RegisterComponent"],
                    _pages_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_50__["WishlistComponent"],
                    _components_wishlist_product_wishlist_product_component__WEBPACK_IMPORTED_MODULE_51__["WishlistProductComponent"],
                    _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_52__["CartComponent"],
                    _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_53__["CartItemComponent"],
                    _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_54__["CheckoutComponent"],
                    _pages_desktops_desktops_component__WEBPACK_IMPORTED_MODULE_55__["DesktopsComponent"],
                    _pages_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_56__["LaptopsComponent"],
                    _pages_cameras_cameras_component__WEBPACK_IMPORTED_MODULE_57__["CamerasComponent"],
                    _pages_phones_phones_component__WEBPACK_IMPORTED_MODULE_58__["PhonesComponent"],
                    _pages_scanners_scanners_component__WEBPACK_IMPORTED_MODULE_59__["ScannersComponent"],
                    _pages_watches_watches_component__WEBPACK_IMPORTED_MODULE_60__["WatchesComponent"],
                    _pages_peripherals_peripherals_component__WEBPACK_IMPORTED_MODULE_61__["PeripheralsComponent"],
                    _pages_desktops_desktop_list_desktop_list_component__WEBPACK_IMPORTED_MODULE_62__["DesktopListComponent"],
                    _pages_laptops_laptop_list_laptop_list_component__WEBPACK_IMPORTED_MODULE_63__["LaptopListComponent"],
                    _pages_cameras_cameras_list_cameras_list_component__WEBPACK_IMPORTED_MODULE_64__["CamerasListComponent"],
                    _pages_phones_phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_65__["PhoneListComponent"],
                    _pages_scanners_scanner_list_scanner_list_component__WEBPACK_IMPORTED_MODULE_66__["ScannerListComponent"],
                    _pages_watches_watch_list_watch_list_component__WEBPACK_IMPORTED_MODULE_67__["WatchListComponent"],
                    _pages_peripherals_peripherals_list_peripherals_list_component__WEBPACK_IMPORTED_MODULE_68__["PeripheralsListComponent"],
                    _components_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_69__["MobileMenuComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
                    swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]
                ],
                exports: [
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_1__["NgxPaginationModule"],
                    swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZHIh":
/*!*********************************************************************************!*\
  !*** ./src/app/components/product-description/product-description.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDescriptionComponent", function() { return ProductDescriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductDescriptionComponent.ɵfac = function ProductDescriptionComponent_Factory(t) { return new (t || ProductDescriptionComponent)(); };
ProductDescriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDescriptionComponent, selectors: [["app-product-description"]], inputs: { description: "description" }, decls: 3, vars: 1, consts: [[1, "product-description-container"], [1, "description__text"]], template: function ProductDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: [".description__text[_ngcontent-%COMP%]{\r\n  padding: 1rem;\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  color: rgb(138, 132, 132);\r\n  text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckIiLCJmaWxlIjoicHJvZHVjdC1kZXNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uX190ZXh0e1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgY29sb3I6IHJnYigxMzgsIDEzMiwgMTMyKTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDescriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-description',
                templateUrl: './product-description.component.html',
                styleUrls: ['./product-description.component.css'],
            }]
    }], function () { return []; }, { description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['description']
        }] }); })();


/***/ }),

/***/ "b3fl":
/*!*****************************************************************!*\
  !*** ./src/app/components/footer-blog/footer-blog.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBlogComponent", function() { return FooterBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class FooterBlogComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    redirectToBlogDetails(id) {
        if (id) {
            this.router.navigate(['blog', id]);
        }
    }
}
FooterBlogComponent.ɵfac = function FooterBlogComponent_Factory(t) { return new (t || FooterBlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterBlogComponent, selectors: [["app-footer-blog"]], inputs: { blog: "blog" }, decls: 7, vars: 7, consts: [[1, "footer-blog-container"], [3, "src", "alt"], [1, "footer__blog__heading"], [1, "blog__details__btn", 3, "click"]], template: function FooterBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterBlogComponent_Template_button_click_5_listener() { return ctx.redirectToBlogDetails(ctx.blog == null ? null : ctx.blog.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " read more\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.blog == null ? null : ctx.blog.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.blog == null ? null : ctx.blog.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 3, ctx.blog == null ? null : ctx.blog.blogHeading, 0, 17));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], styles: [".footer-blog-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 130px;\r\n  height: 130px;\r\n  overflow: hidden;\r\n}\r\n\r\n.footer-blog-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\r\n\r\n.footer__blog__heading[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  background-color: var(--main-orange);\r\n  bottom: 0;\r\n  left: 0;\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  width: 100%;\r\n  height: auto;\r\n  padding-left: 2px;\r\n}\r\n\r\n.blog__details__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:130px;\r\n  background-color: var(--main-orange);\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  height:20px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1ibG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxTQUFTO0VBQ1QsT0FBTztFQUNQLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoiZm9vdGVyLWJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYmxvZy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mb290ZXItYmxvZy1jb250YWluZXIgaW1ne1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5mb290ZXJfX2Jsb2dfX2hlYWRpbmd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5ibG9nX19kZXRhaWxzX19idG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-blog',
                templateUrl: './footer-blog.component.html',
                styleUrls: ['./footer-blog.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { blog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['blog']
        }] }); })();


/***/ }),

/***/ "bb5s":
/*!*************************************************************!*\
  !*** ./src/app/components/cart-item/cart-item.component.ts ***!
  \*************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class CartItemComponent {
    constructor(cartServise) {
        this.cartServise = cartServise;
    }
    ngOnInit() {
    }
    removeFromCart(id) {
        if (id) {
            this.cartServise.removeFromCart(id);
        }
    }
    qtUp(id) {
        if (id)
            this.cartServise.qtUp(id);
    }
    qtDown(id) {
        if (id)
            this.cartServise.qtDown(id);
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { product: "product" }, decls: 17, vars: 8, consts: [[1, "cart-item-container"], [1, "cart-item-img-wrrapper"], [3, "src", "alt"], [1, "cart-details"], [1, "product__name"], [1, "product__price"], [3, "click"], [1, "qt-wrrapper"], [1, "arrow-wrrapper"], [1, "icon-arrow-up", 3, "click"], [1, "qt__number"], [1, "icon-arrow-down", 3, "click"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_button_click_9_listener() { return ctx.removeFromCart(ctx.product == null ? null : ctx.product.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_span_click_13_listener() { return ctx.qtUp(ctx.product == null ? null : ctx.product.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_span_click_16_listener() { return ctx.qtDown(ctx.product == null ? null : ctx.product.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product == null ? null : ctx.product.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.product == null ? null : ctx.product.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.product == null ? null : ctx.product.price, "EUR"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product == null ? null : ctx.product.qt);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cart-item-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 400px;\r\n  height: 200px;\r\n  border: 2px solid var(--light-border-grey);\r\n  display: flex;\r\n  margin: 1rem;\r\n  border-radius: 5px;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n\r\n}\r\np[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n}\r\n.product__name[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n}\r\n.product__price[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n}\r\n.cart-item-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50%;\r\n  height: 100%;\r\n}\r\n.cart-item-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n.cart-details[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n}\r\n.qt-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 30px;\r\n  height: 100%;\r\n  background-color: aqua;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--main-orange);\r\n\r\n}\r\n.qt__number[_ngcontent-%COMP%]{\r\n  color:white;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n  text-shadow: 1px 1px black;\r\n}\r\n.arrow-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 80%;\r\n  height: 30px;\r\n  background-color: var(--danger);\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size:0.9rem;\r\n  border: none;\r\n  cursor: pointer;\r\n  margin: 0 auto;\r\n  margin-top: 40px;\r\n}\r\n.icon-arrow-down[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/cart-item/arrow-down.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n.icon-arrow-up[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/cart-item/arrow-up.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n@media only screen and (max-width:440px){\r\n  .cart-item-container[_ngcontent-%COMP%]{\r\n    width:90%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUFpQjtVQUFqQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQ0FBb0M7O0FBRXRDO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseURBQXlEO0VBQ3pELDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osdURBQXVEO0VBQ3ZELDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRiIsImZpbGUiOiJjYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWl0ZW0tY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxufVxyXG5we1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG59XHJcblxyXG4ucHJvZHVjdF9fbmFtZXtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnByb2R1Y3RfX3ByaWNle1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJ0LWl0ZW0taW1nLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDo1MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FydC1pdGVtLWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uY2FydC1kZXRhaWxze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5xdC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG5cclxufVxyXG5cclxuLnF0X19udW1iZXJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggYmxhY2s7XHJcbn1cclxuXHJcbi5hcnJvdy13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogODAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6MC45cmVtO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmljb24tYXJyb3ctZG93bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY2FydC1pdGVtL2Fycm93LWRvd24uc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbi1hcnJvdy11cHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvY2FydC1pdGVtL2Fycm93LXVwLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ0MHB4KXtcclxuICAuY2FydC1pdGVtLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOjkwJTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-item',
                templateUrl: './cart-item.component.html',
                styleUrls: ['./cart-item.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['product']
        }] }); })();


/***/ }),

/***/ "cDWQ":
/*!*********************************************************!*\
  !*** ./src/app/components/my-cart/my-cart.component.ts ***!
  \*********************************************************/
/*! exports provided: MyCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCartComponent", function() { return MyCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class MyCartComponent {
    constructor(productService) {
        this.productService = productService;
        this.cartCount = 0;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.productService.cartItemCountChanged();
        this.cartCountSub = this.productService.cartCount$.subscribe((cartCount) => {
            this.cartCount = cartCount;
        });
        this.totalPriceSub = this.productService.total$.subscribe(data => {
            this.totalPrice = data;
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.cartCountSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.totalPriceSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
MyCartComponent.ɵfac = function MyCartComponent_Factory(t) { return new (t || MyCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
MyCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyCartComponent, selectors: [["app-my-cart"]], decls: 11, vars: 5, consts: [[1, "my-cart-container"], [1, "cart-icon-wrrapper"], [1, "cart__item__number"], ["routerLink", "cart", 1, "icon-cart"], [1, "total-price-wrrapper"], [1, "my__cart__text"]], template: function MyCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 2, ctx.totalPrice, "EUR"));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".my-cart-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:150px;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.icon-cart[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: url(\"/assets/icons/cart.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n  cursor: pointer;\r\n}\r\n\r\n.cart-icon-wrrapper[_ngcontent-%COMP%]:hover   .icon-cart[_ngcontent-%COMP%]::before{\r\n  content: url(\"/assets/icons/cart-orange.svg\");\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.cart-icon-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:150px;\r\n  height: 60px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.cart__item__number[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:25px;\r\n  height:25px;\r\n  background-color: var(--main-orange);\r\n  z-index:2;\r\n  top:-20px;\r\n  left:50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.1rem;\r\n  border-radius: 50%;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.total-price-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:90px;\r\n  height: 40px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.my__cart__text[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  padding-left:1rem;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUNBQXlDO0VBQ3pDLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxTQUFTO0VBQ1QsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsU0FBUztBQUNYIiwiZmlsZSI6Im15LWNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jYXJ0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uaWNvbi1jYXJ0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9jYXJ0LnN2Z1wiKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcnQtaWNvbi13cnJhcHBlcjpob3ZlciAuaWNvbi1jYXJ0OjpiZWZvcmV7XHJcbiAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy9jYXJ0LW9yYW5nZS5zdmdcIik7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uY2FydC1pY29uLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoxNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uY2FydF9faXRlbV9fbnVtYmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoyNXB4O1xyXG4gIGhlaWdodDoyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICB6LWluZGV4OjI7XHJcbiAgdG9wOi0yMHB4O1xyXG4gIGxlZnQ6NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4xcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbn1cclxuXHJcbi50b3RhbC1wcmljZS13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6OTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5teV9fY2FydF9fdGV4dHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgcGFkZGluZy1sZWZ0OjFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-cart',
                templateUrl: './my-cart.component.html',
                styleUrls: ['./my-cart.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "cDmj":
/*!*************************************************************************************!*\
  !*** ./src/app/components/page-navigation-links/page-navigation-links.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PageNavigationLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNavigationLinksComponent", function() { return PageNavigationLinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PageNavigationLinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNavigationLinksComponent.ɵfac = function PageNavigationLinksComponent_Factory(t) { return new (t || PageNavigationLinksComponent)(); };
PageNavigationLinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNavigationLinksComponent, selectors: [["app-page-navigation-links"]], decls: 16, vars: 0, consts: [[1, "menu-navigation-container"], ["routerLink", "home", "routerLinkActive", "activeLink"], [1, "divider"], ["routerLink", "new-collection", "routerLinkActive", "activeLink"], ["routerLink", "specials", "routerLinkActive", "activeLink"], ["routerLink", "contact", "routerLinkActive", "activeLink"], ["routerLink", "blog", "routerLinkActive", "activeLink"]], template: function PageNavigationLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " New Collection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Specials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Blogs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["menu-navigation-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  top:50px;\r\n}\r\n\r\n.menu-navigation-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:600px;\r\n  height:30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 0;\r\n}\r\n\r\n.menu-navigation-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  flex-basis: auto;\r\n}\r\n\r\n.menu-navigation-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\r\n  color: var(--main-orange);\r\n}\r\n\r\n@media only screen and (max-width:840px){\r\n  .search-wrrapper[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .menu-navigation-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtbmF2aWdhdGlvbi1saW5rcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJwYWdlLW5hdmlnYXRpb24tbGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1lbnUtbmF2aWdhdGlvbi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdG9wOjUwcHg7XHJcbn1cclxuXHJcbi5tZW51LW5hdmlnYXRpb24tY29udGFpbmVyIHVse1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDo2MDBweDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4ubWVudS1uYXZpZ2F0aW9uLWNvbnRhaW5lciB1bCBsaXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZmxleC1iYXNpczogYXV0bztcclxufVxyXG5cclxuLm1lbnUtbmF2aWdhdGlvbi1jb250YWluZXIgdWwgbGk6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg0MHB4KXtcclxuICAuc2VhcmNoLXdycmFwcGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tZW51LW5hdmlnYXRpb24tY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNavigationLinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-navigation-links',
                templateUrl: './page-navigation-links.component.html',
                styleUrls: ['./page-navigation-links.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "cm1X":
/*!********************************************************************!*\
  !*** ./src/app/pages/laptops/laptop-list/laptop-list.component.ts ***!
  \********************************************************************/
/*! exports provided: LaptopListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopListComponent", function() { return LaptopListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function LaptopListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function LaptopListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaptopListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.laptops, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function LaptopListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function LaptopListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function LaptopListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LaptopListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Laptops');
            return filtered;
        }))
            .subscribe((data) => {
            this.laptops = data;
        });
    }
}
LaptopListComponent.ɵfac = function LaptopListComponent_Factory(t) { return new (t || LaptopListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
LaptopListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaptopListComponent, selectors: [["app-laptop-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function LaptopListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LaptopListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LaptopListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LaptopListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.laptops)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.laptops);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhcHRvcC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJsYXB0b3AtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1vcmFuZ2UpO1xyXG59XHJcblxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gZm9udC1zaXplOiAxcmVtO1xyXG4gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaptopListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-laptop-list',
                templateUrl: './laptop-list.component.html',
                styleUrls: ['./laptop-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "dD5k":
/*!******************************************************!*\
  !*** ./src/app/pages/specials/specials.component.ts ***!
  \******************************************************/
/*! exports provided: SpecialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialsComponent", function() { return SpecialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/product/product.component */ "2SFI");









function SpecialsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
const _c0 = function (a1) { return { itemsPerPage: 3, currentPage: a1 }; };
class SpecialsComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.specialProducts = [];
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((products) => {
            let filteredProducts = products.filter((product) => product.specialProduct === true);
            return filteredProducts;
        }))
            .subscribe((specialProducts) => {
            if (specialProducts)
                this.specialProducts = specialProducts;
        });
    }
}
SpecialsComponent.ɵfac = function SpecialsComponent_Factory(t) { return new (t || SpecialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
SpecialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialsComponent, selectors: [["app-specials"]], decls: 9, vars: 7, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "specials-container"], ["class", "special-product-wrrapper", 4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "special-product-wrrapper"], [3, "product"]], template: function SpecialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpecialsComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "pagination-controls", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function SpecialsComponent_Template_pagination_controls_pageChange_7_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, ctx.specialProducts, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideCategoryNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".specials-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNwZWNpYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlY2lhbHMtY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-specials',
                templateUrl: './specials.component.html',
                styleUrls: ['./specials.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "daAj":
/*!********************************************!*\
  !*** ./src/app/Services/banner.service.ts ***!
  \********************************************/
/*! exports provided: BannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerService", function() { return BannerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class BannerService {
    constructor(http) {
        this.http = http;
    }
    getBannerData() {
        return this.http.get("/assets/fakeBackendApi/banner.json");
    }
    getAsideBannerData() {
        return this.http.get("/assets/fakeBackendApi/aside-banner.json");
    }
    getBannerBottomData() {
        return this.http.get("/assets/fakeBackendApi/bannerBottom.json");
    }
}
BannerService.ɵfac = function BannerService_Factory(t) { return new (t || BannerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
BannerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BannerService, factory: BannerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eR1x":
/*!*******************************************************!*\
  !*** ./src/app/Services/mobile-navigation.service.ts ***!
  \*******************************************************/
/*! exports provided: MobileNavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileNavigationService", function() { return MobileNavigationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class MobileNavigationService {
    constructor() {
        this.$mobileMenuOpen = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    toggleMobileMenu() {
        if (this.$mobileMenuOpen.value === true) {
            this.$mobileMenuOpen.next(false);
        }
        else {
            this.$mobileMenuOpen.next(true);
        }
    }
}
MobileNavigationService.ɵfac = function MobileNavigationService_Factory(t) { return new (t || MobileNavigationService)(); };
MobileNavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MobileNavigationService, factory: MobileNavigationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileNavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "emjZ":
/*!****************************************************!*\
  !*** ./src/app/pages/cameras/cameras.component.ts ***!
  \****************************************************/
/*! exports provided: CamerasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamerasComponent", function() { return CamerasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _cameras_list_cameras_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cameras-list/cameras-list.component */ "kgYw");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");






class CamerasComponent {
    constructor(productServise) {
        this.productServise = productServise;
    }
    ngOnInit() {
    }
}
CamerasComponent.ɵfac = function CamerasComponent_Factory(t) { return new (t || CamerasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
CamerasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CamerasComponent, selectors: [["app-cameras"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function CamerasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cameras-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideCategoryNavComponent"], _cameras_list_cameras_list_component__WEBPACK_IMPORTED_MODULE_3__["CamerasListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJjYW1lcmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamerasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cameras',
                templateUrl: './cameras.component.html',
                styleUrls: ['./cameras.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");








function RegisterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Fields cannot be empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*Email is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            Name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Surname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    register(registerData) {
        if (registerData.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Registered!");
            this.registerForm.reset();
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 15, vars: 3, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], [1, "register-container"], [3, "formGroup", "ngSubmit"], ["class", "error-wrrapper", 4, "ngIf"], ["formControlName", "Name", "type", "text", "name", "Name", "placeholder", "Name.."], ["formControlName", "Surname", "type", "text", "name", "Surname", "placeholder", "Surname.."], ["formControlName", "Email", "type", "text", "name", "Email", "placeholder", "Email.."], ["autocomplete", "on", "formControlName", "Password", "type", "password", "name", "Password", "placeholder", "Password.."], ["type", "submit", 1, "register__btn"], [1, "error-wrrapper"], [1, "validation__message"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_5_listener() { return ctx.register(ctx.registerForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RegisterComponent_div_6_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("Email").touched && ctx.registerForm.get("Email").hasError("required") || ctx.registerForm.get("Password").touched && ctx.registerForm.get("Password").hasError("required") || ctx.registerForm.get("Name").touched && ctx.registerForm.get("Name").hasError("required") || ctx.registerForm.get("Surname").touched && ctx.registerForm.get("Surname").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("Email").touched && ctx.registerForm.get("Email").hasError("email"));
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideCategoryNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".register-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  width:400px;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top:40px;\r\n  margin-bottom: 3rem;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 30px;\r\n  margin:0.5rem;\r\n  border:3px solid var(--light-border-grey);\r\n  border-radius:5px;\r\n  outline: none;\r\n}\r\n\r\n.register__btn[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 30px;\r\n  margin-top: 20px;\r\n  background-color: var(--main-orange);\r\n  border: none;\r\n  color: white;\r\n  font-size: 1rem;\r\n  font-family: \"Popins\";\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  padding-left: 1rem;\r\n  color: var(--light-grey);\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width:470px){\r\n  input[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n\r\n  .register__btn[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgd2lkdGg6NDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOjAuNXJlbTtcclxuICBib3JkZXI6M3B4IHNvbGlkIHZhcigtLWxpZ2h0LWJvcmRlci1ncmV5KTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJfX2J0bntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAucGFnZS1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFzaWRlLXBhZ2UtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NDcwcHgpe1xyXG4gIGlucHV0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcblxyXG4gIC5yZWdpc3Rlcl9fYnRue1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "fwOk":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/peripherals/peripherals-list/peripherals-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PeripheralsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeripheralsListComponent", function() { return PeripheralsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function PeripheralsListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function PeripheralsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeripheralsListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.peripherals, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function PeripheralsListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function PeripheralsListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function PeripheralsListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PeripheralsListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Peripherals');
            return filtered;
        }))
            .subscribe((data) => {
            this.peripherals = data;
        });
    }
}
PeripheralsListComponent.ɵfac = function PeripheralsListComponent_Factory(t) { return new (t || PeripheralsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
PeripheralsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeripheralsListComponent, selectors: [["app-peripherals-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function PeripheralsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PeripheralsListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeripheralsListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeripheralsListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.peripherals)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.peripherals);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmlwaGVyYWxzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InBlcmlwaGVyYWxzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeripheralsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-peripherals-list',
                templateUrl: './peripherals-list.component.html',
                styleUrls: ['./peripherals-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "hsUW":
/*!****************************************************!*\
  !*** ./src/app/pages/laptops/laptops.component.ts ***!
  \****************************************************/
/*! exports provided: LaptopsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaptopsComponent", function() { return LaptopsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/client-aside-review-list/client-aside-review-list.component */ "SA4t");
/* harmony import */ var _laptop_list_laptop_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./laptop-list/laptop-list.component */ "cm1X");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");






class LaptopsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LaptopsComponent.ɵfac = function LaptopsComponent_Factory(t) { return new (t || LaptopsComponent)(); };
LaptopsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LaptopsComponent, selectors: [["app-laptops"]], decls: 7, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function LaptopsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-client-aside-review-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-laptop-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _components_client_aside_review_list_client_aside_review_list_component__WEBPACK_IMPORTED_MODULE_2__["ClientAsideReviewListComponent"], _laptop_list_laptop_list_component__WEBPACK_IMPORTED_MODULE_3__["LaptopListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhcHRvcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJsYXB0b3BzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5wYWdlLWNvbnRhaW5lcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LaptopsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-laptops',
                templateUrl: './laptops.component.html',
                styleUrls: ['./laptops.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i/L9":
/*!**********************************************************************!*\
  !*** ./src/app/components/product-review/review/review.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReviewComponent.ɵfac = function ReviewComponent_Factory(t) { return new (t || ReviewComponent)(); };
ReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReviewComponent, selectors: [["app-review"]], inputs: { review: "review" }, decls: 9, vars: 7, consts: [[1, "review-container"], [1, "review-author-wrrapper"], [1, "review__author"], [1, "review__date"], [1, "review__text"]], template: function ReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 3, ctx.review == null ? null : ctx.review.reviewText, 0, 500));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"]], styles: [".review-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:auto;\r\n}\r\n\r\n.review__author[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-weight: bold;\r\n  padding-left: 1rem;\r\n  color: var(--main-dark);\r\n}\r\n\r\n.review-author-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: baseline;\r\n  justify-content: space-between;\r\n}\r\n\r\n.review__date[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size:0.5rem;\r\n  font-weight: bold;\r\n  margin-right: 40px;\r\n}\r\n\r\n.review__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 0.7rem;\r\n  text-align: justify;\r\n  padding: 1rem;\r\n  color: rgb(138, 132, 132);\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBeUI7O0FBRTNCIiwiZmlsZSI6InJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlldy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDphdXRvO1xyXG59XHJcblxyXG4ucmV2aWV3X19hdXRob3J7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLWRhcmspO1xyXG59XHJcblxyXG4ucmV2aWV3LWF1dGhvci13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJldmlld19fZGF0ZXtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6MC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogNDBweDtcclxufVxyXG5cclxuLnJldmlld19fdGV4dHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgY29sb3I6IHJnYigxMzgsIDEzMiwgMTMyKTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-review',
                templateUrl: './review.component.html',
                styleUrls: ['./review.component.css']
            }]
    }], function () { return []; }, { review: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['review']
        }] }); })();


/***/ }),

/***/ "i2uW":
/*!***********************************************************************!*\
  !*** ./src/app/pages/desktops/desktop-list/desktop-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: DesktopListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesktopListComponent", function() { return DesktopListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function DesktopListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function DesktopListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesktopListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.desktops, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function DesktopListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function DesktopListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function DesktopListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DesktopListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Desktops');
            return filtered;
        }))
            .subscribe((data) => {
            this.desktops = data;
        });
    }
}
DesktopListComponent.ɵfac = function DesktopListComponent_Factory(t) { return new (t || DesktopListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
DesktopListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DesktopListComponent, selectors: [["app-desktop-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function DesktopListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DesktopListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DesktopListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DesktopListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desktops)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.desktops);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2t0b3AtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEIiLCJmaWxlIjoiZGVza3RvcC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gbGkge1xyXG4gZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiBmb250LXNpemU6IDFyZW07XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesktopListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-desktop-list',
                templateUrl: './desktop-list.component.html',
                styleUrls: ['./desktop-list.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "iHZU":
/*!*******************************************************!*\
  !*** ./src/app/components/rating/rating.component.ts ***!
  \*******************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function RatingComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RatingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RatingComponent {
    constructor() { }
    ngOnInit() {
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(); };
RatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RatingComponent, selectors: [["app-rating"]], inputs: { rating: "rating" }, decls: 8, vars: 7, consts: [[1, "rating-container"], [3, "ngSwitch"], ["class", "star-wrraper", 4, "ngSwitchCase"], [1, "star-wrraper"], [1, "icon-star-empty"], [1, "icon-star-full"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RatingComponent_div_2_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RatingComponent_div_3_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RatingComponent_div_4_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RatingComponent_div_5_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RatingComponent_div_6_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RatingComponent_div_7_Template, 11, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.rating);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"]], styles: [".rating-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 200px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.star-wrraper[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  display: flex;\r\n  height: 40px;\r\n  width: 100px;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: flex;\r\n  padding: 0;\r\n  margin: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n}\r\n\r\n.icon-star-empty[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:20px;\r\n  height:20px;\r\n  background: url(\"/assets/icons/rating/star.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin:3px;\r\n}\r\n\r\n.icon-star-full[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:20px;\r\n  height:20px;\r\n  background: url(\"/assets/icons/rating/star-full.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  margin:3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxnREFBZ0Q7RUFDaEQsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxxREFBcUQ7RUFDckQsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4uc3Rhci13cnJhcGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxudWx7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uLXN0YXItZW1wdHl7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9yYXRpbmcvc3Rhci5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46M3B4O1xyXG59XHJcblxyXG4uaWNvbi1zdGFyLWZ1bGx7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjIwcHg7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9yYXRpbmcvc3Rhci1mdWxsLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjozcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RatingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rating',
                templateUrl: './rating.component.html',
                styleUrls: ['./rating.component.css']
            }]
    }], function () { return []; }, { rating: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['rating']
        }] }); })();


/***/ }),

/***/ "j3CW":
/*!*********************************************************************************!*\
  !*** ./src/app/components/carousel-img-slider/carousel-img-slider.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CarouselImgSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselImgSliderComponent", function() { return CarouselImgSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_carousel_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/carousel.service */ "6+vc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _carousel_img_carousel_img_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../carousel-img/carousel-img.component */ "VTFk");






const _c0 = ["slideImageTemplateRef"];
function CarouselImgSliderComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-carousel-img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carouselItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sliderImage", carouselItem_r2);
} }
function CarouselImgSliderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function CarouselImgSliderComponent_div_0_Template_div_resize_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onWindowResizeSlider($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselImgSliderComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.slideLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarouselImgSliderComponent_div_0_div_4_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselImgSliderComponent_div_0_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.slideRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.CarouselImages);
} }
class CarouselImgSliderComponent {
    constructor(carouselService) {
        this.carouselService = carouselService;
        this.imagesHtml = [];
        this.currentSlide = 0;
        this.slideIntervalCleared = true;
        this.canActivateInterval = false;
        this.screenSize = 970;
    }
    ngOnInit() {
        this.carouselService.getImages().subscribe((data) => {
            this.CarouselImages = data;
        });
        if (window.innerWidth < this.screenSize) {
            this.canActivateInterval = true;
            this.startSlideInterval();
            this.slideIntervalCleared = false;
        }
        else {
            this.canActivateInterval = false;
            this.clearSlideInterval();
            this.slideIntervalCleared = true;
        }
    }
    ngAfterViewInit() {
        if (this.slideImages)
            this.slideImages.changes.subscribe((data) => {
                let images = data.toArray();
                this.castElementRefToHtmlRef(images);
                this.initHideImages();
                this.startSlide();
            });
    }
    castElementRefToHtmlRef(images) {
        images.forEach((img) => {
            let i = img.nativeElement;
            this.imagesHtml.push(i);
        });
    }
    initHideImages() {
        this.imagesHtml.forEach((img) => {
            img.style.display = 'none';
        });
    }
    startSlide() {
        this.imagesHtml[this.currentSlide].style.display = 'flex';
        this.imagesHtml[this.currentSlide].style.justifyContent = 'center';
    }
    slideLeft() {
        if (this.imagesHtml.length < 0 || this.currentSlide == 0) {
            this.initHideImages();
            this.currentSlide = this.imagesHtml.length - 1;
            this.startSlide();
        }
        else {
            this.initHideImages();
            this.currentSlide--;
            this.startSlide();
        }
    }
    slideRight() {
        if (this.currentSlide >= this.imagesHtml.length - 1) {
            this.initHideImages();
            this.currentSlide = 0;
            this.startSlide();
        }
        else {
            this.initHideImages();
            this.currentSlide++;
            this.startSlide();
        }
    }
    onWindowResizeSlider(event) {
        if (event) {
            let window = event.target;
            if (window.innerWidth < this.screenSize) {
                this.canActivateInterval = true;
                this.startSlideInterval();
                this.slideIntervalCleared = false;
            }
            else if (window.innerWidth > this.screenSize) {
                this.canActivateInterval = false;
                this.clearSlideInterval();
                this.slideIntervalCleared = true;
            }
        }
    }
    automaticSlideShow() {
        if (this.currentSlide <= 0) {
            this.initHideImages();
            this.currentSlide++;
            this.startSlide();
        }
        else if (this.currentSlide >= this.imagesHtml.length - 1) {
            this.initHideImages();
            this.currentSlide--;
            this.startSlide();
        }
        else {
            this.initHideImages();
            this.currentSlide++;
            this.startSlide();
        }
    }
    startSlideInterval() {
        if (this.slideIntervalCleared == true && this.canActivateInterval == true) {
            this.slideInterval = setInterval(() => {
                this.automaticSlideShow();
            }, 3500);
        }
    }
    clearSlideInterval() {
        clearInterval(this.slideInterval);
    }
}
CarouselImgSliderComponent.ɵfac = function CarouselImgSliderComponent_Factory(t) { return new (t || CarouselImgSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_carousel_service__WEBPACK_IMPORTED_MODULE_1__["CarouselService"])); };
CarouselImgSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselImgSliderComponent, selectors: [["app-carousel-img-slider"]], viewQuery: function CarouselImgSliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slideImages = _t);
    } }, decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "carousel-container", 3, "resize"], [1, "slide-nav", "slide-left", 3, "click"], [1, "icon-arrow-left"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slide-nav", "slide-right", 3, "click"], [1, "icon-arrow-right"], [1, "slide"], ["slideImageTemplateRef", ""], [3, "sliderImage"]], template: function CarouselImgSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselImgSliderComponent_div_0_Template, 7, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CarouselImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _carousel_img_carousel_img_component__WEBPACK_IMPORTED_MODULE_3__["CarouselImgComponent"]], styles: [".carousel-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 500px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: white;\r\n\r\n}\r\n\r\n.slide[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width:100%;\r\n  height: 100%;\r\n}\r\n\r\n.slide-nav[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--main-orange);\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n}\r\n\r\n.slide-left[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-left:2rem;\r\n}\r\n\r\n.slide-right[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.slide-nav[_ngcontent-%COMP%]:hover {\r\n  background-color: black;\r\n}\r\n\r\n.icon-arrow-left[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/carousel/arrow.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-arrow-right[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/carousel/arrow-right.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .carousel-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    padding: 0;\r\n    height: 350px;\r\n  }\r\n\r\n  .slide-nav[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLWltZy1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7Ozs7Ozs7OztBQVNGIiwiZmlsZSI6ImNhcm91c2VsLWltZy1zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5zbGlkZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2xpZGUtbmF2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNsaWRlLWxlZnR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OjJyZW07XHJcbn1cclxuXHJcbi5zbGlkZS1yaWdodHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG59XHJcblxyXG4uc2xpZGUtbmF2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmljb24tYXJyb3ctbGVmdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Nhcm91c2VsL2Fycm93LnN2Z1wiKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaWNvbi1hcnJvdy1yaWdodCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Nhcm91c2VsL2Fycm93LXJpZ2h0LnN2Z1wiKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5jYXJvdXNlbC1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlLW5hdntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarouselImgSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-carousel-img-slider',
                templateUrl: './carousel-img-slider.component.html',
                styleUrls: ['./carousel-img-slider.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_carousel_service__WEBPACK_IMPORTED_MODULE_1__["CarouselService"] }]; }, { slideImages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['slideImageTemplateRef']
        }] }); })();


/***/ }),

/***/ "jRGU":
/*!*****************************************************************!*\
  !*** ./src/app/components/mobile-menu/mobile-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/mobile-navigation.service */ "eR1x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function MobileMenuComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Desktops ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Laptops ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cameras ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Phones ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Scanners ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Watches ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_div_12_Template_li_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Peripherals ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MobileMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " New Collection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Specials ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggleCategories(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Categories ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MobileMenuComponent_div_0_div_12_Template, 16, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Contact us ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileMenuComponent_div_0_Template_li_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.closeSideNav(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Blogs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.categoriesOpen ? "icon-caret-up" : "icon-caret-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.categoriesOpen);
} }
class MobileMenuComponent {
    constructor(mobileNavigationServise) {
        this.mobileNavigationServise = mobileNavigationServise;
        this.sideNavOpen = false;
        this.categoriesOpen = false;
    }
    ngOnInit() {
        this.Sub = this.mobileNavigationServise.$mobileMenuOpen.subscribe(isOpen => {
            this.sideNavOpen = isOpen;
        });
    }
    toggleSideNav() {
        if (window.innerWidth < 970) {
            this.sideNavOpen = true;
        }
    }
    closeSideNav() {
        this.sideNavOpen = false;
    }
    toggleCategories() {
        this.categoriesOpen = !this.categoriesOpen;
    }
    ngOnDestroy() {
        var _a;
        this.categoriesOpen = false;
        this.mobileNavigationServise.$mobileMenuOpen.next(false);
        (_a = this.Sub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MobileMenuComponent.ɵfac = function MobileMenuComponent_Factory(t) { return new (t || MobileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__["MobileNavigationService"])); };
MobileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileMenuComponent, selectors: [["app-mobile-menu"]], decls: 1, vars: 1, consts: [["class", "side-menu-container", 4, "ngIf"], [1, "side-menu-container"], ["routerLink", "home", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "new-collection", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "specials", "routerLinkActive", "activeLink", 3, "click"], [3, "click"], [1, "caret-wrrapper"], [3, "ngClass"], ["class", "dropdown-container", 4, "ngIf"], ["routerLink", "contact", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "blog", "routerLinkActive", "activeLink", 3, "click"], [1, "dropdown-container"], ["routerLink", "desktops", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "laptops", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "cameras", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "phones", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "scanners", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "watches", "routerLinkActive", "activeLink", 3, "click"], ["routerLink", "peripherals", "routerLinkActive", "activeLink", 3, "click"]], template: function MobileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobileMenuComponent_div_0_Template, 17, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sideNavOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".side-menu-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  top:0px;\r\n  left: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color: var(--light-grey-bg);\r\n  z-index: 10;\r\n\r\n}\r\n\r\n.side-menu-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\n.side-menu-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  color: black;\r\n  font-family: \"Popins\";\r\n  list-style: none;\r\n  width: auto;\r\n  height:30px;\r\n  font-size: 1.2rem;\r\n  margin: 0.6rem;\r\n  display: flex;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-side-nav-close[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: url(\"/assets/icons/side-nav-close.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n  right:20px;\r\n  top:20px;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  height: 300px;\r\n}\r\n\r\n.dropdown-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  position: relative;\r\n\r\n\r\n}\r\n\r\n.dropdown-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  font-size: 0.9rem;\r\n  font-style: italic;\r\n}\r\n\r\n.caret-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 4px;\r\n}\r\n\r\n.icon-caret-down[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/mobile-menu/caret-down.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-caret-up[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/mobile-menu/caret-up.svg\");\r\n  display: block;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media only screen and (min-width:970px){\r\n  .side-menu-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYmlsZS1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQztFQUN0QyxXQUFXOztBQUViOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsUUFBUTtFQUNSLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCOzs7QUFHcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkRBQTJEO0VBQzNELGNBQWM7RUFDZCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix5REFBeUQ7RUFDekQsY0FBYztFQUNkLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztBQUVGIiwiZmlsZSI6Im1vYmlsZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1tZW51LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOjBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5LWJnKTtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcbn1cclxuXHJcbi5zaWRlLW1lbnUtY29udGFpbmVyIHVse1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaWRlLW1lbnUtY29udGFpbmVyIHVsIGxpe1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIG1hcmdpbjogMC42cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaWNvbi1zaWRlLW5hdi1jbG9zZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvc2lkZS1uYXYtY2xvc2Uuc3ZnXCIpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgcmlnaHQ6MjBweDtcclxuICB0b3A6MjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250YWluZXIgdWx7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250YWluZXIgdWwgbGl7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uY2FyZXQtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG5cclxuLmljb24tY2FyZXQtZG93bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvbW9iaWxlLW1lbnUvY2FyZXQtZG93bi5zdmdcIik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmljb24tY2FyZXQtdXB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL21vYmlsZS1tZW51L2NhcmV0LXVwLnN2Z1wiKTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTcwcHgpe1xyXG4gIC5zaWRlLW1lbnUtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-menu',
                templateUrl: './mobile-menu.component.html',
                styleUrls: ['./mobile-menu.component.css']
            }]
    }], function () { return [{ type: src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__["MobileNavigationService"] }]; }, null); })();


/***/ }),

/***/ "kgYw":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cameras/cameras-list/cameras-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CamerasListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamerasListComponent", function() { return CamerasListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/product/product.component */ "2SFI");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ "oOf3");







function CamerasListComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r5);
} }
const _c0 = function (a1) { return { itemsPerPage: 4, currentPage: a1 }; };
function CamerasListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CamerasListComponent_div_0_div_1_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r0.cameras, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.p)));
} }
function CamerasListComponent_pagination_controls_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CamerasListComponent_pagination_controls_1_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
function CamerasListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CamerasListComponent {
    constructor(productServise) {
        this.productServise = productServise;
        this.p = 1;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filtered = data.filter((product) => product.category === 'Cameras');
            return filtered;
        }))
            .subscribe((data) => {
            this.cameras = data;
        });
    }
}
CamerasListComponent.ɵfac = function CamerasListComponent_Factory(t) { return new (t || CamerasListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
CamerasListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CamerasListComponent, selectors: [["app-cameras-list"]], decls: 4, vars: 3, consts: [["class", "product-list-container", 4, "ngIf", "ngIfElse"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], ["empty", ""], [1, "product-list-container"], ["class", "product-wrrapper", 4, "ngFor", "ngForOf"], [1, "product-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "list__empty"]], template: function CamerasListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CamerasListComponent_div_0_Template, 3, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CamerasListComponent_pagination_controls_1_Template, 1, 1, "pagination-controls", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CamerasListComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameras)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cameras);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEIiLCJmaWxlIjoiY2FtZXJhcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gbGkge1xyXG4gZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiBmb250LXNpemU6IDFyZW07XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CamerasListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cameras-list',
                templateUrl: './cameras-list.component.html',
                styleUrls: ['./cameras-list.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "klYG":
/*!*************************************************************************************!*\
  !*** ./src/app/components/featured-product-list/featured-product-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: FeaturedProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedProductListComponent", function() { return FeaturedProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ "2SFI");





const _c0 = ["slider"];
function FeaturedProductListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r2);
} }
class FeaturedProductListComponent {
    constructor(productService) {
        this.productService = productService;
        this.productLength = 0;
        this.currentIndex = 0;
    }
    ngOnInit() {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
            this.productLength = this.products.length;
        });
    }
    ngAfterViewInit() {
        if (this.slider)
            this.sliderHTML = this.slider.nativeElement;
    }
    slideLeft() {
        this.currentIndex -= 1;
        if (this.currentIndex <= -this.productLength) {
            this.currentIndex = 0;
            if (this.sliderHTML) {
                this.sliderHTML.style.transform = `translateX(${this.currentIndex * 250}px)`;
            }
        }
        if (this.sliderHTML) {
            this.sliderHTML.style.transform = `translateX(${this.currentIndex * 250}px)`;
        }
    }
    slideRight() {
        this.currentIndex += 1;
        if (this.currentIndex >= 2) {
            this.currentIndex = 0;
            if (this.sliderHTML) {
                this.sliderHTML.style.transform = `translateX(${this.currentIndex * 250}px)`;
            }
        }
        if (this.sliderHTML) {
            this.sliderHTML.style.transform = `translateX(${this.currentIndex * 250}px)`;
        }
    }
}
FeaturedProductListComponent.ɵfac = function FeaturedProductListComponent_Factory(t) { return new (t || FeaturedProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
FeaturedProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeaturedProductListComponent, selectors: [["app-featured-product-list"]], viewQuery: function FeaturedProductListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slider = _t.first);
    } }, decls: 11, vars: 1, consts: [[1, "featured-product-nav-container"], [1, "featured-nav-wrrapper"], [1, "icon-left-arrow", 3, "click"], [1, "icon-right-arrow", 3, "click"], [1, "featured-products-container"], [1, "slider-container"], [1, "slider"], ["slider", ""], ["class", "slide-product-wrrapper", 4, "ngFor", "ngForOf"], [1, "slide-product-wrrapper"], [3, "product"]], template: function FeaturedProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedProductListComponent_Template_span_click_4_listener() { return ctx.slideLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeaturedProductListComponent_Template_span_click_5_listener() { return ctx.slideRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FeaturedProductListComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]], styles: [".featured-product-nav-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-size: 1.5rem;\r\n  font-family: \"Popins\";\r\n  padding-left: 50px;\r\n}\r\n\r\n.featured-nav-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100px;\r\n  height: 30px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-right: 50px;\r\n}\r\n\r\n.featured-products-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:100%;\r\n  height: 500px;\r\n  display: flex;\r\n  overflow: hidden;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.slider[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 2000px;\r\n  height: 100%;\r\n  display: flex;\r\n  transition: transform 0.3s ease-out;\r\n}\r\n\r\n.slider-container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:1500px;\r\n  height: 400px;\r\n  display: inline-flex;\r\n}\r\n\r\n.slide-product-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 260px;\r\n  height: 400px;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n\r\n\r\n.icon-left-arrow[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: url(\"/assets/icons/featured-products/left.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon-right-arrow[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 30px;\r\n  height: 30px;\r\n  background: url(\"/assets/icons/featured-products/right.svg\");\r\n  background-repeat: no-repeat;\r\n  display: block;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmVkLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUEsUUFBUTs7QUFDUjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDJEQUEyRDtFQUMzRCw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWiw0REFBNEQ7RUFDNUQsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxlQUFlO0FBQ2pCIiwiZmlsZSI6ImZlYXR1cmVkLXByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmVkLXByb2R1Y3QtbmF2LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLW5hdi13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlZC1wcm9kdWN0cy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5zbGlkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5zbGlkZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDoxNTAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLnNsaWRlLXByb2R1Y3Qtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4vKklDT05TKi9cclxuLmljb24tbGVmdC1hcnJvd3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvZmVhdHVyZWQtcHJvZHVjdHMvbGVmdC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLXJpZ2h0LWFycm93e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9mZWF0dXJlZC1wcm9kdWN0cy9yaWdodC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeaturedProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-featured-product-list',
                templateUrl: './featured-product-list.component.html',
                styleUrls: ['./featured-product-list.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, { slider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['slider']
        }] }); })();


/***/ }),

/***/ "kya/":
/*!*************************************************************!*\
  !*** ./src/app/components/info-card/info-card.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoCardComponent", function() { return InfoCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InfoCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoCardComponent.ɵfac = function InfoCardComponent_Factory(t) { return new (t || InfoCardComponent)(); };
InfoCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoCardComponent, selectors: [["app-info-card"]], decls: 26, vars: 0, consts: [[1, "info-card-container"], [1, "info-card-wrrapper"], [1, "info-card"], [1, "info-card-icon-wrrapper"], [1, "icon-smile"], [1, "info-card-details-wrrapper"], [1, "info__card__text", "info__card__heading"], [1, "info__card__text"], [1, "icon-like"], [1, "icon-plane"]], template: function InfoCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "100% satisfaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "guaranteed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "save 20% when");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "use credit card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "fast free shipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "convenient delivery choices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".info-card-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  height:100px;\r\n  box-sizing: border-box;\r\n  margin-top: 40px;\r\n}\r\n\r\n.info-card-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 90%;\r\n  border: 2px solid var(--light-border-grey);\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.info-card[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 35%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.info-card-icon-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:20%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.info-card-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:80%;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.info__card__text[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  margin: 0;\r\n  font-family: \"Popins\";\r\n  font-size: 0.9rem;\r\n  color: var(--main--dark);\r\n  text-align: center;\r\n}\r\n\r\n.info__card__heading[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.icon-smile[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: url(\"/assets/icons/info-card/smile.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-like[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: url(\"/assets/icons/info-card/like.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-plane[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: block;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: url(\"/assets/icons/info-card/plane.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n@media only screen and (max-width:640px){\r\n\r\n  .info-card-container[_ngcontent-%COMP%]{\r\n    height:300px;\r\n  }\r\n  .info-card-wrrapper[_ngcontent-%COMP%]{\r\n    flex-direction: column;\r\n  }\r\n\r\n  .info-card-icon-wrrapper[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n  }\r\n\r\n  .info-card-details-wrrapper[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n  }\r\n\r\n  .info-card[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8tY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0RBQW9EO0VBQ3BELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9EQUFvRDtFQUNwRCw0QkFBNEI7QUFDOUI7O0FBRUE7O0VBRUU7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImluZm8tY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tY2FyZC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgaGVpZ2h0OjEwMHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmluZm8tY2FyZC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmluZm8tY2FyZHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDM1JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQtaWNvbi13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLWNhcmQtZGV0YWlscy13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW5mb19fY2FyZF9fdGV4dHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLS1kYXJrKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvX19jYXJkX19oZWFkaW5ne1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5pY29uLXNtaWxle1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9pbmZvLWNhcmQvc21pbGUuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pY29uLWxpa2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2luZm8tY2FyZC9saWtlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uaWNvbi1wbGFuZXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvaW5mby1jYXJkL3BsYW5lLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjQwcHgpe1xyXG5cclxuICAuaW5mby1jYXJkLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDozMDBweDtcclxuICB9XHJcbiAgLmluZm8tY2FyZC13cnJhcHBlcntcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuaW5mby1jYXJkLWljb24td3JyYXBwZXJ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLWNhcmQtZGV0YWlscy13cnJhcHBlcntcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG4gIC5pbmZvLWNhcmR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-card',
                templateUrl: './info-card.component.html',
                styleUrls: ['./info-card.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mmlD":
/*!*********************************************************************!*\
  !*** ./src/app/components/client-review/client-review.component.ts ***!
  \*********************************************************************/
/*! exports provided: ClientReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientReviewComponent", function() { return ClientReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ClientReviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientReviewComponent.ɵfac = function ClientReviewComponent_Factory(t) { return new (t || ClientReviewComponent)(); };
ClientReviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientReviewComponent, selectors: [["app-client-review"]], inputs: { review: "review" }, decls: 8, vars: 5, consts: [[1, "client-review-container"], [1, "review__img", 3, "src", "alt"], [1, "review__author"], [1, "review__date"], [1, "review__text"]], template: function ClientReviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.review == null ? null : ctx.review.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.review == null ? null : ctx.review.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.review == null ? null : ctx.review.reviewText);
    } }, styles: [".client-review-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 70px;\r\n  height: 50px;\r\n padding-left: 10px;\r\n padding-top: 10px;\r\n}\r\n\r\n.review__author[_ngcontent-%COMP%]{\r\n  font-weight: bold;\r\n  font-size: 1rem;\r\n  margin-left: 10px;\r\n}\r\n\r\n.review__text[_ngcontent-%COMP%]{\r\n  color: var(--light-grey);\r\n  text-align:justify;\r\n  padding: 1rem;\r\n  font-size: 0.8rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.review__date[_ngcontent-%COMP%]{\r\n  padding-left: 10px;\r\n  font-size: 0.6rem;\r\n  color: var(--main-orange);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1yZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtDQUNiLGtCQUFrQjtDQUNsQixpQkFBaUI7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoiY2xpZW50LXJldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsaWVudC1yZXZpZXctY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXZpZXdfX2F1dGhvcntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXZpZXdfX3RleHR7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gIHRleHQtYWxpZ246anVzdGlmeTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnJldmlld19fZGF0ZXtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientReviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-review',
                templateUrl: './client-review.component.html',
                styleUrls: ['./client-review.component.css']
            }]
    }], function () { return []; }, { review: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['review']
        }] }); })();


/***/ }),

/***/ "ogJo":
/*!***************************************************************************************!*\
  !*** ./src/app/components/tablet-dropdown-search/tablet-dropdown-search.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TabletDropdownSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabletDropdownSearchComponent", function() { return TabletDropdownSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");




class TabletDropdownSearchComponent {
    constructor() {
        this.dropdownSearchState = false;
    }
    ngOnInit() {
    }
    tabletSearchDropdownToggle(event) {
        event.stopPropagation();
        event.preventDefault();
        this.dropdownSearchState = !this.dropdownSearchState;
    }
}
TabletDropdownSearchComponent.ɵfac = function TabletDropdownSearchComponent_Factory(t) { return new (t || TabletDropdownSearchComponent)(); };
TabletDropdownSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabletDropdownSearchComponent, selectors: [["app-tablet-dropdown-search"]], decls: 7, vars: 2, consts: [[1, "tablet-search-wrrapper"], [3, "ngClass", "click"], [3, "ngClass"], [1, "search-input-form"], ["type", "text", "name", "search", "placeholder", "search..."], [1, "search-icon-wrrapper"], [1, "icon-search"]], template: function TabletDropdownSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabletDropdownSearchComponent_Template_span_click_1_listener($event) { return ctx.tabletSearchDropdownToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dropdownSearchState ? "icon-close" : "icon-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dropdownSearchState ? "search-input-dropdown-container-show" : "search-input-dropdown-container-hide");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".tablet-search-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50px;\r\n  height:30px;\r\n  background-color: var(--main-orange);\r\n  padding:0.4rem;\r\n  border-radius:5px;\r\n  cursor: pointer;\r\n  display: none;\r\n  z-index: 100;\r\n}\r\n\r\n.icon-search[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  display: block;\r\n  background: url(\"/assets/icons/search.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-close[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  display: block;\r\n  background: url(\"/assets/icons/close.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.search-input-dropdown-container-show[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top:70px;\r\n  width: 200px;\r\n  height: 50px;\r\n  display: flex;\r\n  animation-name: showSearch;\r\n  animation-duration:600ms;\r\n\r\n}\r\n\r\n.search-input-dropdown-container-hide[_ngcontent-%COMP%]{\r\n  display: none;\r\n\r\n}\r\n\r\n.search-input-form[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:250px;\r\n  height: 50px;\r\n  display: flex;\r\n}\r\n\r\n.search-input-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  outline: none;\r\n  border-top-left-radius: 5px;\r\n  border-bottom-left-radius: 5px;\r\n  border-right: none;\r\n  border: 1px solid grey;\r\n}\r\n\r\n.search-icon-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:50px;\r\n  height:50px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: var(--main-orange);\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  z-index: 100;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: var(--light-grey);\r\n  padding-left: 0.3rem;\r\n}\r\n\r\n@media only screen and (max-width:840px){\r\n  .tablet-search-wrrapper[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxldC1kcm9wZG93bi1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDJDQUEyQztFQUMzQyw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsMENBQTBDO0VBQzFDLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLHdCQUF3Qjs7QUFFMUI7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0Qjs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0VBRXJCOzs7QUFHRiIsImZpbGUiOiJ0YWJsZXQtZHJvcGRvd24tc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV0LXNlYXJjaC13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6NTBweDtcclxuICBoZWlnaHQ6MzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgcGFkZGluZzowLjRyZW07XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4uaWNvbi1zZWFyY2h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL3NlYXJjaC5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuLmljb24tY2xvc2V7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2Nsb3NlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0LWRyb3Bkb3duLWNvbnRhaW5lci1zaG93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NzBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHNob3dTZWFyY2g7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjYwMG1zO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dC1kcm9wZG93bi1jb250YWluZXItaGlkZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dC1mb3Jte1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDoyNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dC1mb3JtIGlucHV0e1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDo1MHB4O1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW07XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg0MHB4KXtcclxuICAudGFibGV0LXNlYXJjaC13cnJhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabletDropdownSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tablet-dropdown-search',
                templateUrl: './tablet-dropdown-search.component.html',
                styleUrls: ['./tablet-dropdown-search.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pW2F":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class ProductService {
    constructor(http) {
        this.http = http;
        this.wishlist$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.cartCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.total$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
    }
    getProducts() {
        return this.http.get('/assets/fakeBackendApi/products.json');
    }
    getNewCollection() {
        return this.http.get('/assets/fakeBackendApi/new-collection.json');
    }
    getCategoryList() {
        return this.http.get('/assets/fakeBackendApi/categoryList.json');
    }
    addToWishlist(product) {
        let wishlist = [];
        if (localStorage.getItem('wishlist')) {
            let dataJsonFromStorage = localStorage.getItem('wishlist');
            if (dataJsonFromStorage != null) {
                let storedProducts = JSON.parse(dataJsonFromStorage);
                storedProducts.forEach((stored) => {
                    wishlist.push(stored);
                });
                let productExist = wishlist.some((stored) => stored.id === product.id);
                if (productExist) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Already in wishlist');
                }
                else {
                    wishlist.push(product);
                    let productString = JSON.stringify(wishlist);
                    localStorage.setItem('wishlist', productString);
                    this.cartItemCountChanged();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Added to wishlist!');
                }
            }
        }
        else {
            wishlist.push(product);
            let productString = JSON.stringify(wishlist);
            localStorage.setItem('wishlist', productString);
            this.cartItemCountChanged();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Added to wishlist!');
        }
    }
    getWishlistProduct() {
        if (localStorage.getItem('wishlist')) {
            let storedWishlist = localStorage.getItem('wishlist');
            if (storedWishlist) {
                let wishlistJSON = JSON.parse(storedWishlist);
                if (wishlistJSON) {
                    this.wishlist$.next(wishlistJSON);
                }
            }
        }
    }
    deleteFromWishlist(id) {
        if (id) {
            if (localStorage.getItem('wishlist')) {
                let storedWishlist = localStorage.getItem('wishlist');
                if (storedWishlist) {
                    let wishlistJSON = JSON.parse(storedWishlist);
                    let filtered = wishlistJSON.filter((product) => product.id != id);
                    let wishlistString = JSON.stringify(filtered);
                    localStorage.setItem('wishlist', wishlistString);
                    this.wishlist$.next(filtered);
                }
            }
        }
    }
    addToCart(product) {
        if (product === null || undefined) {
            return;
        }
        let cart = [];
        if (localStorage.getItem('cart')) {
            let stored = localStorage.getItem('cart');
            if (stored) {
                let storedJSON = JSON.parse(stored);
                storedJSON.forEach((storedProduct) => {
                    cart.push(storedProduct);
                });
                let exists = cart.some((stored) => stored.id === (product === null || product === void 0 ? void 0 : product.id));
                if (exists) {
                    cart.map((storedProduct) => {
                        if (storedProduct.id === (product === null || product === void 0 ? void 0 : product.id)) {
                            storedProduct.qt += 1;
                        }
                    });
                }
                else {
                    cart.push(product);
                }
                let cartString = JSON.stringify(cart);
                localStorage.setItem('cart', cartString);
                this.cartItemCountChanged();
                this.total();
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('added to cart!');
            }
        }
        else {
            cart.push(product);
            let cartString = JSON.stringify(cart);
            localStorage.setItem('cart', cartString);
            this.cartItemCountChanged();
            this.total();
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('added to cart!');
        }
    }
    cartItemCountChanged() {
        let cart = localStorage.getItem('cart');
        if (cart) {
            let cartJson = JSON.parse(cart);
            this.cartCount$.next(cartJson.length);
        }
    }
    getCart() {
        let cart = localStorage.getItem('cart');
        if (cart) {
            let cartJson = JSON.parse(cart);
            this.cart$.next(cartJson);
        }
    }
    removeFromCart(id) {
        if (localStorage.getItem('cart')) {
            let storedCart = localStorage.getItem('cart');
            if (storedCart) {
                let storedCartJSON = JSON.parse(storedCart);
                let filtered = storedCartJSON.filter((product) => product.id != id);
                let storedCartString = JSON.stringify(filtered);
                localStorage.setItem('cart', storedCartString);
                this.cart$.next(filtered);
                this.cartItemCountChanged();
                this.total();
            }
        }
    }
    qtUp(id) {
        if (localStorage.getItem('cart')) {
            let storedCart = localStorage.getItem('cart');
            if (storedCart) {
                let storedCartJSON = JSON.parse(storedCart);
                if (storedCart) {
                    for (let i = 0; i < storedCartJSON.length; i++) {
                        if (storedCartJSON[i].id === id) {
                            storedCartJSON[i].qt += 1;
                        }
                    }
                    let cartString = JSON.stringify(storedCartJSON);
                    localStorage.setItem("cart", cartString);
                    this.cart$.next(storedCartJSON);
                    this.cartItemCountChanged();
                    this.total();
                }
            }
        }
    }
    qtDown(id) {
        if (localStorage.getItem('cart')) {
            let storedCart = localStorage.getItem('cart');
            if (storedCart) {
                let storedCartJSON = JSON.parse(storedCart);
                if (storedCartJSON) {
                    for (let i = 0; i < storedCartJSON.length; i++) {
                        if (storedCartJSON[i].id === id) {
                            if (storedCartJSON[i].qt <= 1) {
                                storedCartJSON.splice(i, 1);
                            }
                            else {
                                storedCartJSON[i].qt -= 1;
                            }
                        }
                    }
                    let cartString = JSON.stringify(storedCartJSON);
                    localStorage.setItem("cart", cartString);
                    this.cart$.next(storedCartJSON);
                    this.cartItemCountChanged();
                    this.total();
                }
            }
        }
    }
    total() {
        if (localStorage.getItem('cart')) {
            let storedCart = localStorage.getItem('cart');
            if (storedCart) {
                let storedCartJSON = JSON.parse(storedCart);
                if (storedCartJSON) {
                    let total = 0;
                    for (let i = 0; i < storedCartJSON.length; i++) {
                        total += storedCartJSON[i].price * storedCartJSON[i].qt;
                    }
                    this.total$.next(total);
                }
            }
        }
    }
    deleteCart() {
        localStorage.removeItem("cart");
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ppyR":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/dropdown-category-navigation/dropdown-category-navigation.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: DropdownCategoryNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownCategoryNavigationComponent", function() { return DropdownCategoryNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/mobile-navigation.service */ "eR1x");



class DropdownCategoryNavigationComponent {
    constructor(mobileNavigationServise) {
        this.mobileNavigationServise = mobileNavigationServise;
        this.sideNavOpen = false;
    }
    ngOnInit() { }
    openMobileMenu() {
        if (window.innerWidth < 970) {
            this.mobileNavigationServise.toggleMobileMenu();
        }
    }
}
DropdownCategoryNavigationComponent.ɵfac = function DropdownCategoryNavigationComponent_Factory(t) { return new (t || DropdownCategoryNavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__["MobileNavigationService"])); };
DropdownCategoryNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownCategoryNavigationComponent, selectors: [["app-dropdown-category-navigation"]], decls: 6, vars: 0, consts: [[1, "category-navigation-container", 3, "click"], [1, "icon-bars"], [1, "category__text"], [1, "menu__text"]], template: function DropdownCategoryNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownCategoryNavigationComponent_Template_div_click_0_listener() { return ctx.openMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shop By Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".category-navigation-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 250px;\r\n  height:40px;\r\n  background-color: var(--main-orange);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size: 1rem;\r\n  cursor: pointer;\r\n  padding:0.4rem;\r\n  margin-left: 20px;\r\n}\r\n\r\n.icon-bars[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: url(\"/assets/icons/bars.svg\");\r\n  margin-right: 4px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.category__text[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size:0.9rem;\r\n}\r\n\r\n@media only screen and (max-width:768px){\r\n  .category-navigation-container[_ngcontent-%COMP%]{\r\n    width: 30px;\r\n    height:30px;\r\n    margin-bottom:8px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  .category__text[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .menu__text[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width:970px){\r\n  .category__text[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (min-width:970px){\r\n  .menu__text[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLWNhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0FBRUY7O0FBR0E7RUFDRTtJQUNFLGFBQWE7RUFDZjs7QUFFRiIsImZpbGUiOiJkcm9wZG93bi1jYXRlZ29yeS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2F0ZWdvcnktbmF2aWdhdGlvbi1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6NDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6MC40cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4uaWNvbi1iYXJze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9iYXJzLnN2Z1wiKTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlfX3RleHR7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOjAuOXJlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAuY2F0ZWdvcnktbmF2aWdhdGlvbi1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTo4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhdGVnb3J5X190ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tZW51X190ZXh0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTcwcHgpe1xyXG4gIC5jYXRlZ29yeV9fdGV4dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5NzBweCl7XHJcbiAgLm1lbnVfX3RleHR7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownCategoryNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dropdown-category-navigation',
                templateUrl: './dropdown-category-navigation.component.html',
                styleUrls: ['./dropdown-category-navigation.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_mobile_navigation_service__WEBPACK_IMPORTED_MODULE_1__["MobileNavigationService"] }]; }, null); })();


/***/ }),

/***/ "qUBY":
/*!***********************************************************************************!*\
  !*** ./src/app/components/product-details-view/product-details-view.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductDetailsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsViewComponent", function() { return ProductDetailsViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rating/rating.component */ "iHZU");
/* harmony import */ var _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-description/product-description.component */ "ZHIh");
/* harmony import */ var _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-review/product-review.component */ "92jb");







function ProductDetailsViewComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-rating", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsViewComponent_div_0_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.loadChildComponent("reviews"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Write a review");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Avaliability:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsViewComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.addToCart(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsViewComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const p_r2 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.addToWishlist(p_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "add to wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", p_r2 == null ? null : p_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r2 == null ? null : p_r2.img);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r2 == null ? null : p_r2.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", p_r2 == null ? null : p_r2.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 6, p_r2 == null ? null : p_r2.price, "EUR"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r2 == null ? null : p_r2.avaliability, " ");
} }
function ProductDetailsViewComponent_div_1_app_product_description_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-description", 24);
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("description", i_r7 == null ? null : i_r7.description);
} }
function ProductDetailsViewComponent_div_1_app_product_review_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-product-review", 25);
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("reviews", i_r7 == null ? null : i_r7.reviews);
} }
const _c0 = function (a0) { return { activeComponentLink: a0 }; };
function ProductDetailsViewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsViewComponent_div_1_Template_li_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.loadChildComponent("description"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsViewComponent_div_1_Template_li_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.loadChildComponent("reviews"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Reviews ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailsViewComponent_div_1_app_product_description_7_Template, 1, 1, "app-product-description", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailsViewComponent_div_1_app_product_review_8_Template, 1, 1, "app-product-review", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.childComponentName === "description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.childComponentName === "reviews"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.childComponentName == "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.childComponentName == "reviews");
} }
class ProductDetailsViewComponent {
    constructor(cartServise) {
        this.cartServise = cartServise;
        this.childComponentName = 'description';
        this.product = [];
    }
    ngOnInit() {
    }
    loadChildComponent(componentName) {
        this.childComponentName = componentName;
    }
    addToCart(product) {
        if (product) {
            this.cartServise.addToCart(product);
            this.cartServise.cartItemCountChanged();
        }
    }
    addToWishlist(product) {
        if (product)
            this.cartServise.addToWishlist(product);
    }
}
ProductDetailsViewComponent.ɵfac = function ProductDetailsViewComponent_Factory(t) { return new (t || ProductDetailsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ProductDetailsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsViewComponent, selectors: [["app-product-details-view"]], inputs: { product: "product" }, decls: 2, vars: 2, consts: [["class", "product-details-view-container", 4, "ngFor", "ngForOf"], ["class", "description-reviews-container", 4, "ngFor", "ngForOf"], [1, "product-details-view-container"], [1, "product-details-img-wrrapper"], [3, "src", "alt"], [1, "product-details-wrrapper"], [1, "product__name"], [1, "rating-wrrapper"], [3, "rating"], [1, "review-wrrapper"], [1, "icon-pencil"], [1, "review__link", 3, "click"], [1, "product__price"], [1, "product__avaliability"], [1, "add-to-cart-wrrapper"], [1, "add__to__cart__btn", 3, "click"], [1, "wishlist-wrrapper"], [1, "icon-wishlist"], [3, "click"], [1, "description-reviews-container"], [1, "product-info-nav-wrrapper"], [3, "ngClass", "click"], [3, "description", 4, "ngIf"], [3, "reviews", 4, "ngIf"], [3, "description"], [3, "reviews"]], template: function ProductDetailsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailsViewComponent_div_0_Template, 28, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsViewComponent_div_1_Template, 9, 8, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _rating_rating_component__WEBPACK_IMPORTED_MODULE_3__["RatingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _product_description_product_description_component__WEBPACK_IMPORTED_MODULE_4__["ProductDescriptionComponent"], _product_review_product_review_component__WEBPACK_IMPORTED_MODULE_5__["ProductReviewComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".product-details-view-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 400px;\r\n  display: flex;\r\n}\r\n\r\n.product-details-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:40%;\r\n  height: 400px;\r\n}\r\n\r\n.product-details-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n  border:1px solid var(--light-border-grey);\r\n}\r\n\r\n.product-details-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 60%;\r\n  height: 400px;\r\n  border:1px solid var(--light-border-grey);\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%]{\r\n  font-size: 1.4rem;\r\n  font-family: \"Popins\";\r\n  font-weight: bold;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.rating-wrrapper[_ngcontent-%COMP%]{\r\n  margin-left: 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.review__link[_ngcontent-%COMP%]{\r\n  color: var(--light-grey);\r\n  text-decoration: none;\r\n  padding-left:10px;\r\n  font-family: \"Popins\";\r\n  font-size:0.8rem;\r\n}\r\n\r\n.review-wrrapper[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  height: 20px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.review-wrrapper[_ngcontent-%COMP%]:hover   .review__link[_ngcontent-%COMP%]{\r\n  color: var(--main-orange);\r\n}\r\n\r\n.review-wrrapper[_ngcontent-%COMP%]:hover   .icon-pencil[_ngcontent-%COMP%]::before{\r\n  position: absolute;\r\n  content: \"\";\r\n  width: 10px;\r\n  height: 10px;\r\n  background: url(\"/assets/icons/product-details/pencil-orange.svg\");\r\n}\r\n\r\n.icon-pencil[_ngcontent-%COMP%]{\r\n  width: 10px;\r\n  height: 10px;\r\n  display: block;\r\n  background: url(\"/assets/icons/product-details/pencil.svg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  margin-left:10px;\r\n  color: var(--main--dark);\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  font-size: 1rem;\r\n}\r\n\r\n.product__avaliability[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: rgb(170, 167, 167);\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n  color: var(--main--dark);\r\n  margin-right: 10px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.add-to-cart-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  display: flex;\r\n  width: 300px;\r\n  height:40px;\r\n  margin-left: 10px;\r\n}\r\n\r\n.qt__input[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n  height: 35px;\r\n  outline: none;\r\n  border:1px solid rgb(190, 182, 182);\r\n  border-radius: 5px;\r\n}\r\n\r\nform[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 300px;\r\n  height: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nform[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]{\r\n  margin-right:10px;\r\n  font-family: \"Popins\";\r\n  color: rgb(201, 193, 193);\r\n}\r\n\r\n.add__to__cart__btn[_ngcontent-%COMP%]{\r\n  width:100px;\r\n  height: 40px;\r\n  background-color: var(--main-orange);\r\n  border: none;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  font-size:0.9rem;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n  margin-top:10px;\r\n}\r\n\r\napp-rating[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: -35px;\r\n}\r\n\r\n.wishlist-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 150px;\r\n  height: 30px;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 10px;\r\n  cursor: pointer;\r\n  margin-top:30px;\r\n}\r\n\r\n.wishlist-wrrapper[_ngcontent-%COMP%]:hover   .icon-wishlist[_ngcontent-%COMP%]::after{\r\n  position: relative;\r\n  content:url(\"/assets/icons/product-details/full-heart.svg\");\r\n  width: 20px;\r\n  height: 20px;\r\n\r\n}\r\n\r\n.wishlist-wrrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\r\n  background: transparent;\r\n  border: none;\r\n  font-family: \"Popins\";\r\n  font-size:0.7rem;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  cursor: pointer;\r\n  color: var(--main--dark);\r\n}\r\n\r\n.wishlist-wrrapper[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%]{\r\n  color: var(--main-orange);\r\n}\r\n\r\n\r\n\r\n.icon-wishlist[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background: url(\"/assets/icons/product-details/empty-heart.svg\");\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-repeat: no-repeat;\r\n  margin-right:5px;\r\n}\r\n\r\n.icon-arrow-up[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background: url(\"/assets/icons/product-details/arrow-up.svg\");\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.icon-arrow-down[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background: url(\"/assets/icons/product-details/arrow-down.svg\");\r\n  display: block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.description-reviews-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n  background-color:var(--light-grey-bg);\r\n}\r\n\r\n.description-reviews-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.product-info-nav-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: 30px;\r\n  background-color: white;\r\n}\r\n\r\n.description-reviews-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n  list-style: none;\r\n  font-family: \"Popins\";\r\n  color: var(--main--dark);\r\n  font-weight: bold;\r\n  width: 120px;\r\n  height: 30px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGFBQWE7RUFDYix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0VBQWtFO0FBQ3BFOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkRBQTJEO0VBQzNELDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwyREFBMkQ7RUFDM0QsV0FBVztFQUNYLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFFBQVE7O0FBQ1I7RUFDRSxrQkFBa0I7RUFDbEIsZ0VBQWdFO0VBQ2hFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsNkRBQTZEO0VBQzdELGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrREFBK0Q7RUFDL0QsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiw0QkFBNEI7QUFDOUIiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWRldGFpbHMtdmlldy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2R1Y3QtZGV0YWlscy1pbWctd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOjQwJTtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzLWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJvcmRlcjoxcHggc29saWQgdmFyKC0tbGlnaHQtYm9yZGVyLWdyZXkpO1xyXG59XHJcblxyXG4ucHJvZHVjdC1kZXRhaWxzLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19uYW1le1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnJhdGluZy13cnJhcHBlcntcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZXZpZXdfX2xpbmt7XHJcbiAgY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6MC44cmVtO1xyXG59XHJcblxyXG4ucmV2aWV3LXdycmFwcGVye1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmV2aWV3LXdycmFwcGVyOmhvdmVyIC5yZXZpZXdfX2xpbmt7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLnJldmlldy13cnJhcHBlcjpob3ZlciAuaWNvbi1wZW5jaWw6OmJlZm9yZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9wcm9kdWN0LWRldGFpbHMvcGVuY2lsLW9yYW5nZS5zdmdcIik7XHJcbn1cclxuXHJcbi5pY29uLXBlbmNpbHtcclxuICB3aWR0aDogMTBweDtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9wcm9kdWN0LWRldGFpbHMvcGVuY2lsLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucHJvZHVjdF9fcHJpY2V7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICBjb2xvcjogdmFyKC0tbWFpbi0tZGFyayk7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcmljZSBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2F2YWxpYWJpbGl0eXtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogcmdiKDE3MCwgMTY3LCAxNjcpO1xyXG59XHJcblxyXG5zdHJvbmd7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tLWRhcmspO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFkZC10by1jYXJ0LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6NDBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnF0X19pbnB1dHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6MXB4IHNvbGlkIHJnYigxOTAsIDE4MiwgMTgyKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5mb3JtID4gcHtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogcmdiKDIwMSwgMTkzLCAxOTMpO1xyXG59XHJcblxyXG4uYWRkX190b19fY2FydF9fYnRue1xyXG4gIHdpZHRoOjEwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBmb250LXNpemU6MC45cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcblxyXG5hcHAtcmF0aW5ne1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAtMzVweDtcclxufVxyXG5cclxuLndpc2hsaXN0LXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcblxyXG4ud2lzaGxpc3Qtd3JyYXBwZXI6aG92ZXIgLmljb24td2lzaGxpc3Q6OmFmdGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb250ZW50OnVybChcIi9hc3NldHMvaWNvbnMvcHJvZHVjdC1kZXRhaWxzL2Z1bGwtaGVhcnQuc3ZnXCIpO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuXHJcbn1cclxuXHJcbi53aXNobGlzdC13cnJhcHBlciBidXR0b257XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTowLjdyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tLWRhcmspO1xyXG59XHJcblxyXG4ud2lzaGxpc3Qtd3JyYXBwZXI6aG92ZXIgYnV0dG9ue1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLW9yYW5nZSk7XHJcbn1cclxuXHJcbi8qaWNvbnMqL1xyXG4uaWNvbi13aXNobGlzdHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29ucy9wcm9kdWN0LWRldGFpbHMvZW1wdHktaGVhcnQuc3ZnXCIpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIG1hcmdpbi1yaWdodDo1cHg7XHJcbn1cclxuXHJcbi5pY29uLWFycm93LXVwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL3Byb2R1Y3QtZGV0YWlscy9hcnJvdy11cC5zdmdcIik7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5pY29uLWFycm93LWRvd257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbnMvcHJvZHVjdC1kZXRhaWxzL2Fycm93LWRvd24uc3ZnXCIpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tcmV2aWV3cy1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWxpZ2h0LWdyZXktYmcpO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tcmV2aWV3cy1jb250YWluZXIgdWx7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnByb2R1Y3QtaW5mby1uYXYtd3JyYXBwZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGVzY3JpcHRpb24tcmV2aWV3cy1jb250YWluZXIgdWwgbGl7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogdmFyKC0tbWFpbi0tZGFyayk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details-view',
                templateUrl: './product-details-view.component.html',
                styleUrls: ['./product-details-view.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['product']
        }] }); })();


/***/ }),

/***/ "sHrM":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cart-item/cart-item.component */ "bb5s");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "oOf3");









function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Proceed to payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r0.totalPrice, "EUR"), "");
} }
function CartComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cart-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", cartItem_r6);
} }
function CartComponent_div_5_pagination_controls_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pagination-controls", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CartComponent_div_5_pagination_controls_4_Template_pagination_controls_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("responsive", true);
} }
const _c0 = function (a1) { return { itemsPerPage: 2, currentPage: a1 }; };
function CartComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_div_5_div_2_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_5_pagination_controls_4_Template, 1, 1, "pagination-controls", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, ctx_r1.cart, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r1.p)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.cart.length > 0);
} }
function CartComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart empty!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(productService) {
        this.productService = productService;
        this.p = 1;
        this.totalPrice = 0;
    }
    ngOnInit() {
        this.productService.getCart();
        this.cartSub = this.productService.cart$.subscribe((cart) => {
            this.cart = cart;
        });
        this.productService.total();
        this.totalPriceSub = this.productService.total$.subscribe(data => {
            this.totalPrice = data;
        });
    }
    ngOnDestroy() {
        var _a, _b;
        (_a = this.cartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        (_b = this.totalPriceSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 9, vars: 3, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"], ["class", "cart-total-container", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["empty", ""], [1, "cart-total-container"], ["routerLink", "/checkout", 1, "checkout__btn"], [1, "cart-container"], ["class", "cart-wrrapper", 4, "ngFor", "ngForOf"], ["class", "my-pagination", 3, "responsive", "pageChange", 4, "ngIf"], [1, "cart-wrrapper"], [3, "product"], [1, "my-pagination", 3, "responsive", "pageChange"], [1, "cart__empty__text"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartComponent_div_4_Template, 6, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CartComponent_div_5_Template, 5, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cart.length > 0)("ngIfElse", _r2);
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_2__["AsideCategoryNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_6__["CartItemComponent"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"]], styles: [".cart-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n.cart-total-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:70px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n}\r\nh1[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.2rem;\r\n  text-align: center;\r\n  color: var(--danger);\r\n}\r\n.checkout__btn[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width:200px;\r\n  height: 30px;\r\n  background-color: var(--main-orange);\r\n  border: none;\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\r\n  background: var(--main-orange);\r\n}\r\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination li {\r\n font-family: \"Popins\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\r\n.cart__empty__text[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  color: var(--main--dark);\r\n}\r\n@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (max-width:450px){\r\n  .blog-container[_ngcontent-%COMP%]{\r\n    height: auto;\r\n  }\r\n\r\n  .checkout__btn[_ngcontent-%COMP%]{\r\n    width: 160px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjtBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7OztFQUdBO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGIiwiZmlsZSI6ImNhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5jYXJ0LXRvdGFsLWNvbnRhaW5lcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuaDF7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1kYW5nZXIpO1xyXG59XHJcblxyXG4uY2hlY2tvdXRfX2J0bntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4tb3JhbmdlKTtcclxufVxyXG5cclxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2FydF9fZW1wdHlfX3RleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS1tYWluLS1kYXJrKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAucGFnZS1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuICAuYXNpZGUtcGFnZS1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ1MHB4KXtcclxuICAuYmxvZy1jb250YWluZXJ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2hlY2tvdXRfX2J0bntcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart',
                templateUrl: './cart.component.html',
                styleUrls: ['./cart.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "sMOO":
/*!***************************************************************************!*\
  !*** ./src/app/components/wishlist-product/wishlist-product.component.ts ***!
  \***************************************************************************/
/*! exports provided: WishlistProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistProductComponent", function() { return WishlistProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _rating_rating_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rating/rating.component */ "iHZU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class WishlistProductComponent {
    constructor(wishlistServise) {
        this.wishlistServise = wishlistServise;
    }
    ngOnInit() {
    }
    deleteFromWishlist(id) {
        if (id) {
            this.wishlistServise.deleteFromWishlist(id);
        }
    }
}
WishlistProductComponent.ɵfac = function WishlistProductComponent_Factory(t) { return new (t || WishlistProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
WishlistProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishlistProductComponent, selectors: [["app-wishlist-product"]], inputs: { wishlistProduct: "wishlistProduct" }, decls: 12, vars: 8, consts: [[1, "wishlist-product"], [1, "wishlist-img-wrrapper"], [3, "src", "alt"], [1, "wishlist-product-details"], [1, "product__name"], [1, "product__price"], [3, "rating"], [3, "click"]], template: function WishlistProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-rating", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WishlistProductComponent_Template_button_click_10_listener() { return ctx.deleteFromWishlist(ctx.wishlistProduct == null ? null : ctx.wishlistProduct.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " remove from wishlist ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.wishlistProduct == null ? null : ctx.wishlistProduct.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.wishlistProduct == null ? null : ctx.wishlistProduct.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.wishlistProduct == null ? null : ctx.wishlistProduct.productName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 5, ctx.wishlistProduct == null ? null : ctx.wishlistProduct.price, "EUR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rating", ctx.wishlistProduct == null ? null : ctx.wishlistProduct.rating);
    } }, directives: [_rating_rating_component__WEBPACK_IMPORTED_MODULE_2__["RatingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".wishlist-product[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 600px;\r\n  height: 300px;\r\n  display: flex;\r\n  border: 2px solid var(--light-border-grey);\r\n  box-sizing: border-box;\r\n  border-radius: 5px;\r\n  margin: 1rem;\r\n}\r\n\r\n.wishlist-img-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\n.wishlist-img-wrrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  object-fit: contain;\r\n}\r\n\r\n.wishlist-product-details[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 50%;\r\n  height: 100%;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n}\r\n\r\n.product__name[_ngcontent-%COMP%]{\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.product__price[_ngcontent-%COMP%]{\r\n  font-size: 1rem;\r\n}\r\n\r\napp-rating[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  left: -40px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  background-color: var(--danger);\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  box-shadow: 2px 2px black;\r\n  top: 50px;\r\n padding: 0.6rem;\r\n}\r\n\r\n@media only screen and (max-width:644px){\r\n  .wishlist-product[_ngcontent-%COMP%]{\r\n    width:500px;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width:530px){\r\n  .wishlist-product[_ngcontent-%COMP%]{\r\n   flex-direction: column;\r\n   height:400px;\r\n   align-items: center;\r\n   width: 300px;\r\n  }\r\n\r\n  .wishlist-product-details[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n  }\r\n\r\n  button[_ngcontent-%COMP%]{\r\n    top:10px;\r\n  }\r\n\r\n  app-rating[_ngcontent-%COMP%]{\r\n    left:0px;\r\n  }\r\n\r\n  .product__price[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndpc2hsaXN0LXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiwwQ0FBMEM7RUFDMUMsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBSUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixTQUFTO0NBQ1YsZUFBZTtBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztBQUVGOztBQUVBO0VBQ0U7R0FDQyxzQkFBc0I7R0FDdEIsWUFBWTtHQUNaLG1CQUFtQjtHQUNuQixZQUFZO0VBQ2I7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7Ozs7QUFJRiIsImZpbGUiOiJ3aXNobGlzdC1wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lzaGxpc3QtcHJvZHVjdHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1saWdodC1ib3JkZXItZ3JleSk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4ud2lzaGxpc3QtaW1nLXdycmFwcGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLndpc2hsaXN0LWltZy13cnJhcHBlciBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4ud2lzaGxpc3QtcHJvZHVjdC1kZXRhaWxze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxucHtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxufVxyXG5cclxuLnByb2R1Y3RfX25hbWV7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19wcmljZXtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcblxyXG5cclxuYXBwLXJhdGluZ3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTQwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFuZ2VyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCBibGFjaztcclxuICB0b3A6IDUwcHg7XHJcbiBwYWRkaW5nOiAwLjZyZW07XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo2NDRweCl7XHJcbiAgLndpc2hsaXN0LXByb2R1Y3R7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTMwcHgpe1xyXG4gIC53aXNobGlzdC1wcm9kdWN0e1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBoZWlnaHQ6NDAwcHg7XHJcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC53aXNobGlzdC1wcm9kdWN0LWRldGFpbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIHRvcDoxMHB4O1xyXG4gIH1cclxuXHJcbiAgYXBwLXJhdGluZ3tcclxuICAgIGxlZnQ6MHB4O1xyXG4gIH1cclxuXHJcbiAgLnByb2R1Y3RfX3ByaWNle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishlistProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wishlist-product',
                templateUrl: './wishlist-product.component.html',
                styleUrls: ['./wishlist-product.component.css']
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }]; }, { wishlistProduct: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['wishlistProduct']
        }] }); })();


/***/ }),

/***/ "uZ7c":
/*!**************************************************!*\
  !*** ./src/app/pages/phones/phones.component.ts ***!
  \**************************************************/
/*! exports provided: PhonesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonesComponent", function() { return PhonesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/aside-category-nav/aside-category-nav.component */ "0iU7");
/* harmony import */ var _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-list/phone-list.component */ "BYwi");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");





class PhonesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PhonesComponent.ɵfac = function PhonesComponent_Factory(t) { return new (t || PhonesComponent)(); };
PhonesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhonesComponent, selectors: [["app-phones"]], decls: 6, vars: 0, consts: [[1, "page-container"], [1, "aside-page-container"], [1, "main-page-inner-container"]], template: function PhonesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-aside-category-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-phone-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
    } }, directives: [_components_aside_category_nav_aside_category_nav_component__WEBPACK_IMPORTED_MODULE_1__["AsideCategoryNavComponent"], _phone_list_phone_list_component__WEBPACK_IMPORTED_MODULE_2__["PhoneListComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@media only screen and (max-width:970px){\r\n  .page-container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n  .aside-page-container[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InBob25lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAucGFnZS1jb250YWluZXJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmFzaWRlLXBhZ2UtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhonesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-phones',
                templateUrl: './phones.component.html',
                styleUrls: ['./phones.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blog/blog-details/blog-details.component */ "BDmo");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog/blog.component */ "5tuB");
/* harmony import */ var _pages_cameras_cameras_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/cameras/cameras.component */ "emjZ");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/cart/cart.component */ "sHrM");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "Neos");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/contact/contact.component */ "XEn3");
/* harmony import */ var _pages_desktops_desktops_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/desktops/desktops.component */ "MDC+");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/laptops/laptops.component */ "hsUW");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/new-collection/new-collection.component */ "V8LQ");
/* harmony import */ var _pages_peripherals_peripherals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/peripherals/peripherals.component */ "NOKs");
/* harmony import */ var _pages_phones_phones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/phones/phones.component */ "uZ7c");
/* harmony import */ var _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/product-details/product-details.component */ "0B/p");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register.component */ "fNfI");
/* harmony import */ var _pages_scanners_scanners_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/scanners/scanners.component */ "5jtN");
/* harmony import */ var _pages_specials_specials_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/specials/specials.component */ "dD5k");
/* harmony import */ var _pages_watches_watches_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/watches/watches.component */ "B3J2");
/* harmony import */ var _pages_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/wishlist/wishlist.component */ "Yuyz");























const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"] },
    { path: 'new-collection', component: _pages_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_12__["NewCollectionComponent"] },
    { path: 'specials', component: _pages_specials_specials_component__WEBPACK_IMPORTED_MODULE_18__["SpecialsComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'blog', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"] },
    { path: 'checkout', component: _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"] },
    { path: 'blog/:id', component: _pages_blog_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_2__["BlogDetailsComponent"] },
    { path: 'wishlist', component: _pages_wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_20__["WishlistComponent"] },
    { path: 'cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'desktops', component: _pages_desktops_desktops_component__WEBPACK_IMPORTED_MODULE_8__["DesktopsComponent"], pathMatch: 'full' },
    { path: 'laptops', component: _pages_laptops_laptops_component__WEBPACK_IMPORTED_MODULE_10__["LaptopsComponent"], pathMatch: 'full' },
    { path: 'cameras', component: _pages_cameras_cameras_component__WEBPACK_IMPORTED_MODULE_4__["CamerasComponent"], pathMatch: 'full' },
    { path: 'phones', component: _pages_phones_phones_component__WEBPACK_IMPORTED_MODULE_14__["PhonesComponent"], pathMatch: 'full' },
    { path: 'scanners', component: _pages_scanners_scanners_component__WEBPACK_IMPORTED_MODULE_17__["ScannersComponent"], pathMatch: 'full' },
    { path: 'watches', component: _pages_watches_watches_component__WEBPACK_IMPORTED_MODULE_19__["WatchesComponent"], pathMatch: 'full' },
    { path: 'peripherals', component: _pages_peripherals_peripherals_component__WEBPACK_IMPORTED_MODULE_13__["PeripheralsComponent"], pathMatch: 'full' },
    { path: 'product-details/:id', component: _pages_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x6sJ":
/*!***********************************************************************************!*\
  !*** ./src/app/components/special-product-list/special-product-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SpecialProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialProductListComponent", function() { return SpecialProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _special_product_special_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../special-product/special-product.component */ "MFsF");







function SpecialProductListComponent_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-special-product", 4);
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
function SpecialProductListComponent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpecialProductListComponent_4_ng_template_0_Template, 1, 1, "ng-template", 3);
} }
class SpecialProductListComponent {
    constructor(productServise) {
        this.productServise = productServise;
    }
    ngOnInit() {
        this.productServise
            .getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            let filteredProducts = data.filter((product) => product.specialProduct === true);
            return filteredProducts;
        }))
            .subscribe((data) => {
            this.specialProduct = data;
        });
    }
}
SpecialProductListComponent.ɵfac = function SpecialProductListComponent_Factory(t) { return new (t || SpecialProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"])); };
SpecialProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpecialProductListComponent, selectors: [["app-special-product-list"]], decls: 5, vars: 2, consts: [[1, "special-product-list-container"], [3, "slidesPerView"], [4, "ngFor", "ngForOf"], ["class", "swiper-slide", "swiperSlide", ""], [3, "product"]], template: function SpecialProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Special products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "swiper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpecialProductListComponent_4_Template, 1, 0, undefined, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slidesPerView", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.specialProduct);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperSlideDirective"], _special_product_special_product_component__WEBPACK_IMPORTED_MODULE_5__["SpecialProductComponent"]], styles: [".special-product-list-container[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:300px;\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.swiper-container[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  width:70%;\r\n  height: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  font-family: \"Popins\";\r\n  font-size: 1.4rem;\r\n  margin-left:50px;\r\n}\r\n\r\n@media only screen and (max-width:470px){\r\n  .swiper-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpYWwtcHJvZHVjdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3BlY2lhbC1wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsLXByb2R1Y3QtbGlzdC1jb250YWluZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDozMDBweDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zd2lwZXItY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDo3MCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZzogMC40cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDJ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgbWFyZ2luLWxlZnQ6NTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjQ3MHB4KXtcclxuICAuc3dpcGVyLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecialProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-special-product-list',
                templateUrl: './special-product-list.component.html',
                styleUrls: ['./special-product-list.component.css'],
            }]
    }], function () { return [{ type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "xkcE":
/*!********************************************!*\
  !*** ./src/app/Services/review.service.ts ***!
  \********************************************/
/*! exports provided: ReviewService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewService", function() { return ReviewService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");



class ReviewService {
    constructor(http) {
        this.http = http;
    }
    getReviews() {
        return this.http.get('/assets/fakeBackendApi/client-reviews.json');
    }
}
ReviewService.ɵfac = function ReviewService_Factory(t) { return new (t || ReviewService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ReviewService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReviewService, factory: ReviewService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReviewService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "yX/U":
/*!*******************************************************************************!*\
  !*** ./src/app/components/main-filter-search/main-filter-search.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MainFilterSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainFilterSearchComponent", function() { return MainFilterSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/product.service */ "pW2F");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function MainFilterSearchComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r1, " ");
} }
class MainFilterSearchComponent {
    constructor(fb, productServise) {
        this.fb = fb;
        this.productServise = productServise;
    }
    ngOnInit() {
        this.productServise.getCategoryList().subscribe((data) => {
            this.categories = data.categories;
        });
        this.searchGroup = this.fb.group({
            categoryList: ['Desktops'],
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    searchByTerm(form) {
        var _a;
        if ((_a = form.get('search')) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('search term required!');
        }
        if (form.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No result found!');
        }
    }
}
MainFilterSearchComponent.ɵfac = function MainFilterSearchComponent_Factory(t) { return new (t || MainFilterSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"])); };
MainFilterSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainFilterSearchComponent, selectors: [["app-main-filter-search"]], decls: 10, vars: 2, consts: [[1, "main-logo-wrrapper"], [1, "search-wrrapper"], [3, "formGroup", "ngSubmit"], ["formControlName", "categoryList", "name", "categoryList", "id", "categoryList"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "search", "type", "text", "name", "search", "placeholder", "search for products..", 1, "main__search__input"], ["type", "submit", 1, "search__btn"], [3, "value"]], template: function MainFilterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TechStore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainFilterSearchComponent_Template_form_ngSubmit_4_listener() { return ctx.searchByTerm(ctx.searchGroup); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MainFilterSearchComponent_option_6_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".main-logo-wrrapper[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 100%;\r\n  height:50px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  padding-top: 30px;\r\n}\r\n\r\n.main-logo-wrrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n  color: white;\r\n  font-family: \"Popins\";\r\n  padding-left: 30px;\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.main-logo-wrrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]::first-letter{\r\n  color: var(--main-orange);\r\n  font-weight: bold;\r\n  font-style:italic;\r\n}\r\n\r\n.search-wrrapper[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  height: 40px;\r\n  justify-content: center;\r\n  margin-left:30px;\r\n}\r\n\r\n#categoryList[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  outline: none;\r\n  height:40px;\r\n  width:140px;\r\n  border: 2px solid white;\r\n  cursor: pointer;\r\n  font-family: \"Popins\";\r\n  font-size: 0.8rem;\r\n  color: var(--light-grey);\r\n  border-top-left-radius:5px;\r\n  border-bottom-left-radius:5px;\r\n}\r\n\r\n.main__search__input[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  width: 300px;\r\n  height:34px;\r\n  outline: none;\r\n  border: 2px solid white;\r\n}\r\n\r\n.search__btn[_ngcontent-%COMP%]{\r\n  width: 100px;\r\n  height: 40px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: var(--main-orange);\r\n  color: var(--main-white);\r\n  border-top-right-radius:5px;\r\n  border-bottom-right-radius:5px;\r\n}\r\n\r\n[_ngcontent-%COMP%]::placeholder{\r\n  font-size: 0.7rem;\r\n  font-family: \"Popins\";\r\n  color: var(--light-grey);\r\n}\r\n\r\n@media only screen and (max-width:840px){\r\n  .main-logo-wrrapper[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n  .search-wrrapper[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tZmlsdGVyLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im1haW4tZmlsdGVyLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tbG9nby13cnJhcHBlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLm1haW4tbG9nby13cnJhcHBlciBoMXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUG9waW5zXCI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4ubWFpbi1sb2dvLXdycmFwcGVyIGgxOjpmaXJzdC1sZXR0ZXJ7XHJcbiAgY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXN0eWxlOml0YWxpYztcclxufVxyXG5cclxuLnNlYXJjaC13cnJhcHBlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbn1cclxuXHJcbiNjYXRlZ29yeUxpc3R7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgd2lkdGg6MTQwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlBvcGluc1wiO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtcclxufVxyXG5cclxuLm1haW5fX3NlYXJjaF9faW5wdXR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6MzRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uc2VhcmNoX19idG57XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tb3JhbmdlKTtcclxuICBjb2xvcjogdmFyKC0tbWFpbi13aGl0ZSk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlcntcclxuICBmb250LXNpemU6IDAuN3JlbTtcclxuICBmb250LWZhbWlseTogXCJQb3BpbnNcIjtcclxuICBjb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NDBweCl7XHJcbiAgLm1haW4tbG9nby13cnJhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC13cnJhcHBlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainFilterSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-filter-search',
                templateUrl: './main-filter-search.component.html',
                styleUrls: ['./main-filter-search.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_Services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map