import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  constructor(private apiService:Apiservice) {}

  
}
