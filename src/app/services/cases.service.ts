import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CasesService {

  public host: string = "http://localhost:8085"


  constructor(private http: HttpClient) { }

  getCases() {
    return this.http.get(this.host + "/listofcases");
  }
}
