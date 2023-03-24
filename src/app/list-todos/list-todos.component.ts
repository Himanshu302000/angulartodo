import { Component } from '@angular/core';

export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  )
  {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  todo=[
    new Todo(1,'Learn Angular',false,new Date()),
    new Todo(2,'Learn Springboot',false,new Date()),
    new Todo(3,'make project',false,new Date()),
    new Todo(4,'practice more',false,new Date()),
    
  ]
}
