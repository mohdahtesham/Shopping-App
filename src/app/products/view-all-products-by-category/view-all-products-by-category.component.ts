import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory : Category;
  productList : Product;

  constructor(private router : Router, private activatedRoute : ActivatedRoute , private productsService : ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( data =>{
      this.searchCategory = data.id;
      this.productsService.searchProductByCategory(this.searchCategory).subscribe(categoryData =>{
        this.productList = categoryData;
      });
    });
  }
  prod(id){
    this.router.navigate(['products/product/',id]);
  }

}
