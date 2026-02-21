import { Component } from '@angular/core';
import { Apiservice, Mp3} from '../apiservice';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mp3display',
  imports: [CommonModule],
  templateUrl: './mp3display.html',
  styleUrl: './mp3display.scss',
})

export class Mp3display {
  constructor(private apiService:Apiservice){};

  mp3s:Mp3[] = []
  
  ngOnInit() {
    this.apiService.getMp3s().subscribe((res:Mp3[])=> {
      this.mp3s == res;
    })
  }
}