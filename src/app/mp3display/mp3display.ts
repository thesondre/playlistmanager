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
  selectedMp3:Mp3[] = []
  ngOnInit() {
    this.selectedMp3 = []
    this.apiService.getMp3s().subscribe((res:Mp3[])=> {
      for (let mp3 in res){
        this.mp3s.push(res[mp3])
      }
    })
  }

  selectMp3(i:Mp3, index:number){
    i.Selected==true
    //this.mp3s.splice(index, 1)
    this.selectedMp3.push(i)
  }
  deSelectMp3(i:Mp3, index:number){
    this.selectedMp3.splice(index, 1)
    this.mp3s.push(i)
  }
}