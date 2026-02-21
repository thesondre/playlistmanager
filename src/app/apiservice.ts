import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Mp3 {
  Title:String;
  Artist:String;
  Album:String;
  globalPath:String;
  relativePath:String;
  Duration:String;
};
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
}
