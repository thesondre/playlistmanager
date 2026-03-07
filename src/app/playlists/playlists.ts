import { Component } from '@angular/core';
import { Apiservice } from '../apiservice';
import { PlayList } from '../data-service';
import { DataService } from '../data-service';
@Component({
  selector: 'app-playlists',
  imports: [],
  templateUrl: './playlists.html',
  styleUrl: './playlists.scss',
})
export class Playlists {
  constructor(private apiService:Apiservice, private dataService:DataService){}

  playlists:PlayList[] = []
  ngOnInit() {
    this.apiService.getPlaylists().subscribe((res:PlayList[]) => {
      for (let i of res){
        this.playlists.push(i)
      }
      console.log(this.playlists)
    })
    
  };


  onSelect(playlist:PlayList){
    this.dataService.tracksFromPlaylist(playlist)
  }
}
