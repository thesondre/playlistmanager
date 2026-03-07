import { Injectable } from '@angular/core';

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
  Tracks:Array<Object>;
}

@Injectable({
  providedIn: 'root',
})


export class DataService {
  tracksFromPlaylist(){

  } 
}
