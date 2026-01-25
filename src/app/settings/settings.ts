import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {
  constructor(private apiService:Apiservice) {}
  getMp3(){
    this.apiService.getConfig().subscribe((data:any)=> {
      console.log(data)
    });
  }
}
