import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from '../../../shared/services/api.service';
import { HttpClient, HttpClientModule} from '@angular/common/http';

interface Data {
  id: number;
  title: string;
  image: string;
  description: string;
  gender: string;
  created: string;
  status: string;
}




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HttpClient, HttpClientModule]
})
export class HomeComponent {

  data: Data[] =  [];

  constructor(private apiService: ProductsService) { }

  ngOnInit(): void {
    this.llenarData()
  }


  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }


}
