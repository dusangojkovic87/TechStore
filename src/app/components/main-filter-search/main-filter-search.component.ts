import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-filter-search',
  templateUrl: './main-filter-search.component.html',
  styleUrls: ['./main-filter-search.component.css'],
})
export class MainFilterSearchComponent implements OnInit {
  searchGroup: any;
  categories: any;

  constructor(
    private fb: FormBuilder,
    private productServise: ProductService
  ) {}

  ngOnInit(): void {
    this.productServise.getCategoryList().subscribe((data) => {
      this.categories = data.categories;
    });

    this.searchGroup = this.fb.group({
      categoryList: ['Desktops'],
      search: ['', Validators.required],
    });
  }

  searchByTerm(form: FormGroup) {
    if (form.get('search')?.hasError('required')) {
      Swal.fire('search term required!');
    }

    if (form.valid) {
      Swal.fire('No result found!');
    }
  }
}
