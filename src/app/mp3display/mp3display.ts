import { Component } from '@angular/core';
import { Apiservice} from '../apiservice';
import { Mp3 } from '../data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-mp3display',
  imports: [CommonModule, FormsModule],
  templateUrl: './mp3display.html',
  styleUrl: './mp3display.scss',
})

export class Mp3display {
  constructor(private apiService:Apiservice){};

  mp3s:Mp3[] = []
  ngOnInit() {
    this.apiService.getMp3s().subscribe((res:Mp3[])=> {
      for (let mp3 in res){
        this.mp3s.push(res[mp3])
      }
    })
    this.mp3s.sort(this.sorting)
  }

  
  searchquery:string = ""
  searchBy:keyof Mp3 = "Title"
  search(){
    if(this.searchBy) {
      this.mp3s.sort((a:Mp3, b:Mp3) => {
      if (a[this.searchBy].toString().toUpperCase().startsWith(this.searchquery.toUpperCase())){
        return -1
      }
      return 1
      });
    }
  }
  
  sorting(a:Mp3, b:Mp3){
    if(a.Selected){
      return -1
    } else if (b.Selected) {
      return 1
    } else if (a.Title.toUpperCase() < b.Title.toLocaleUpperCase()){
      return -1
    } else if (a.Title.toUpperCase() > b.Title.toLocaleUpperCase()){
      return 1
    }
    return 0
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