import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  //GET ALL EMPLOYEE
  GetAllEmployee(){
    const endpoint = `${base_url}/employee`;
    return this.http.get(endpoint); 
  }

  //SAVE EMPLOYEE
  SaveEmployee(body : any){
    const endpoint = `${base_url}/employee`;
    return this.http.post(endpoint, body); 
  }
}
