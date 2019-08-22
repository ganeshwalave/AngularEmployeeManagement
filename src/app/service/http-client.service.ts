import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

	url="http://localhost:8080/employee/all";
	
  constructor(private _http:HttpClient) { }
  
  getEmployees(){
	  return this._http.get(this.url);
  }
}
