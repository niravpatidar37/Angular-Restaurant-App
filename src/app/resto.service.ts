import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://localhost:3000/restaurants"
  regURL="http://localhost:3000/users"

  constructor(private http:HttpClient) { }
  getList()
  {
      return this.http.get(this.url);
  }
  saveResto(data)
  {
    //console.warn("service",data)
    return this.http.post(this.url,data) 
  }
  deleteResto(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  getcurrentResto(id)
  {
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id,data)
  {
    return this.http.put(`${this.url}/${id}`,data)
  }
  createUser(data){
    return this.http.post(this.regURL, data);
  }
  loginUser(email: string, password: string){
    return this.http.post(this.regURL,{
      email: email,
      password: password
    });
  } 
}
