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

  sorting(a:Mp3, b:Mp3){
    if(a.Selected){
      return -1
    } else if (b.Selected) {
      return 1
    } else {
      return 0
    }
  }
  selectMp3(i:Mp3, index:number){
    if (i.Selected == undefined){
      i.Selected=true
    } else {
      i.Selected = !i.Selected
    }
    this.mp3s.sort(this.sorting)
  }
}