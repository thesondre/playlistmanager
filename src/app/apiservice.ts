import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http:HttpClient){}
  getMp3s(){
    return this.http.get("http://localhost:8000/mp3")
  }
  getConfig() {
    return this.http.get("http://'localhost:8000/config")
  }
}
