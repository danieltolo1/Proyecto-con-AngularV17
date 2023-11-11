import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private urlApi = 'https://fakestoreapi.com/products';
//https://fakestoreapi.com/products
  //https://rickandmortyapi.com/api/character
  //https://api.themoviedb.org/3/movie/11?api_key=9e06099ee41c4f59d37caa96029b7f2f

  constructor(private http: HttpClient) { }

  public getData() : Observable<any> {
    return this.http.get<any>(this.urlApi)
  }
}


