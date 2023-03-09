import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistraionService {
  baseUrl="http://localhost:9090/"
  constructor(private http:HttpClient) { }
  getCountries(){
    return this.http.get(`${this.baseUrl}countries`);
  }
  getStatesById(id:any){
    return this.http.get(`${this.baseUrl}states/${id}`);
  }
  // /saveUser
  getCitiesById(id:any){
    return this.http.get(`${this.baseUrl}cities/${id}`);
  }

  getEmailCheck(email:any){
    return this.http.get(`${this.baseUrl}emailcheck/${email}`,{responseType:'text'});
  }

  saveUser(data:any){
    return this.http.post(`${this.baseUrl}saveUser/`,data);
  }

  unlock(data:any){
    return this.http.post(`${this.baseUrl}unlock/`,data,{responseType:'text'});
  }
}
