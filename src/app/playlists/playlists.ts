import { Component } from '@angular/core';
import { Apiservice, PlayList } from '../apiservice';

@Component({
  selector: 'app-playlists',
  imports: [],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss',
})
export class Playlists {
  constructor(private apiService:Apiservice){}

  playlists:PlayList[] = []
  ngOnInit() {
    this.apiService.getPlaylists().subscribe((res:PlayList[]) => {
      for (let i of res){
        this.playlists.push(i)
      }
      console.log(this.playlists)
    })
    
  };

}
