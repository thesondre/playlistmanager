import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
export class Apiservice {
  constructor(private http:HttpClient){}
  getMp3s(){
    return this.http.get<Mp3[]>("http://localhost:8000/mp3")
  }
  getConfig() {
    return this.http.get("http://localhost:8000/config")
  }

  getPlaylists() {
    return this.http.get<PlayList[]>("http://localhost:8000/playlists")
  }
}
