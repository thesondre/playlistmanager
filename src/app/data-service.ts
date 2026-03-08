import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Mp3 {
  Title:string;
  Artist:string;
  Album:string;
  globalPath:string;
  relativePath:string;
  Duration:string;
  Selected:Boolean;
};

export interface PlayList {
  Title:string;
  Tracks:Array<{"path":""}>;
}

export interface PlayListC {
  Title:string;
  Tracks:Array<string>;
}

@Injectable({
  providedIn: 'root',
})


export class DataService {
  
  tracks:PlayList = {Title:"", Tracks:[]}

  private trackSource = new BehaviorSubject<PlayList>(this.tracks)
  currentTracks = this.trackSource.asObservable();

  constructor(){}

  tracksFromPlaylist(tracks:PlayList){
    console.log("Next")
    this.trackSource.next(tracks)
  } 
}
