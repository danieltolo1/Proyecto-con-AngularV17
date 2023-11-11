import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from '../form-search/form-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,FormSearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
