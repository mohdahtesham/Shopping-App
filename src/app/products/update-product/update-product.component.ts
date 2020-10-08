import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productId = 0;
  productDetails : Product;
  constructor(private activatedRoute : ActivatedRoute , private productsService : ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.productId = data.id;

      this.productsService.viewProduct(this.productId).subscribe(data =>{
        this.productDetails = data;
      });

    });
  }

  updateProduct(form){
    const updateProduct = {
      id: this.productId,
      categoryId: form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: form.value.product_isAvailable,
      color: form.value.product_color,
      reviews: form.value.product_reviews
    }
    console.log(form);
    this.productsService.updateProduct(this.productId,updateProduct).subscribe(data =>{
      console.log(data);
    });
  }
}
