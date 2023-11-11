import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.css'
})
export class FormSearchComponent {

onSearch(value: string){

  if(value && value.length <3){
    console.log(value)
  }
}


}
