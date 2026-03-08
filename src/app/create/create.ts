import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Apiservice } from '../apiservice';
import { Mp3 } from '../data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-create',
  imports: [CommonModule, FormsModule],
  templateUrl: './create.html',
  styleUrl: './create.scss',
})
export class Create {
  
  @Input() mp3s:Mp3[] = [];

  @Output() UIToggle = new EventEmitter<Boolean>()
  constructor(private apiService:Apiservice) {}
  title:string = ""
  ngOnInit(){
    this.selectedMp3 = []
    for(let mp3 of this.mp3s) {
      if(mp3.Selected){
        this.selectedMp3.push(mp3.relativePath)
      }
    }
  }
  selectedMp3:Array<string> = [];
  create(){
    if (this.title != "") {
      this.apiService.createPlaylist({"Title":this.title, "Tracks":this.selectedMp3})
    }
    alert("Treng namn")
  }
  destroy(){
    this.UIToggle.emit(false)
  }

}
