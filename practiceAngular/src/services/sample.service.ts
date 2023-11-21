import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
 formValues:any;
  constructor(private http:HttpClient) { }
  postData(){
    console.log("raviteja");
    // return this.http.post('http://localhost:3000/users',({'name' : 'Media travias','fathername' : 'sidda goud'}));
    return this.http.post('http://localhost/cakephp_copy/Users/uploadFiles',JSON.stringify(this.formValues));
  }
}
