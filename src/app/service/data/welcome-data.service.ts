import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(public http:HttpClient) { }

  executeHelloWorldBeanService()
  {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
  ///hello-world/path-variable/

  executeHelloWorldServiceWithPathVariable(name:any)
  {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }
}
