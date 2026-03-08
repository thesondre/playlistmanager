import { Component } from '@angular/core';
import { Apiservice} from '../apiservice';
import { DataService, Mp3, PlayList } from '../data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Create } from '../create/create';


@Component({
  selector: 'app-mp3display',
  imports: [CommonModule, FormsModule, Create],
  providers: [],
  templateUrl: './mp3display.html',
  styleUrl: './mp3display.scss',
})

export class Mp3display {
  playListTracks:Array<Object> = [];

  constructor(private apiService:Apiservice, private dataService:DataService){};

  mp3s:Mp3[] = []

  ngOnInit() {
    this.dataService.currentTracks.subscribe((tracks:PlayList) => {
      for (let mp3 of this.mp3s) { mp3.Selected = false}
      for (let mp3 of this.mp3s) {
        for (let track of tracks.Tracks) {
          if (mp3.relativePath == track.path) {
            this.mp3s[this.mp3s.indexOf(mp3)].Selected = true
          }
        }
      }
      this.mp3s.sort(this.sorting)
    })
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
  selectMp3(i:Mp3){
    
    console.log(this.playListTracks)
    if (i.Selected == undefined){
      i.Selected=true
    } else {
      i.Selected = !i.Selected
    }
    this.mp3s.sort(this.sorting)
  }

  addSelected:Boolean = false
  selectDeAll(){
    if(this.addSelected) {
      this.addSelected = !this.addSelected
    } else {
      this.addSelected = !this.addSelected
    }
    for(let mp3 of this.mp3s) {
      mp3.Selected = this.addSelected
    }
  }

  UIToggle:Boolean = false;
  UIToggleF(){
    this.UIToggle = !this.UIToggle
  }
}