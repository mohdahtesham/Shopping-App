import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import {Category} from '../site-framework/category';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }

  createProduct(productBody) : Observable<Product>{
    const productUrl = 'http://localhost:3000/products/';
    return this.httpClient.post<Product>(productUrl,productBody);
  }
  getAllProducts() : Observable<Product>{
    const productUrl = 'http://localhost:3000/products/';
    return this.httpClient.get<Product>(productUrl);
  }
  getCategories(): Observable<Category>{
    const categoryUrl = 'http://localhost:3000/categories/';
    return this.httpClient.get<Category>(categoryUrl);
  }
  viewProduct(productId) : Observable<Product> {
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Product>(productUrl);
  }
  updateProduct(productId , productBody) : Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(productUrl,productBody);
  }
  deleteProduct(productId) : Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.delete<Product>(productUrl);
  }
  searchProductByCategory(categoryId) : Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+ categoryId;
    return this.httpClient.get<Product>(productUrl);
  }
  searchProductByDate(dateParam) : Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+ dateParam;
    return this.httpClient.get<Product>(productUrl);
  }
}
