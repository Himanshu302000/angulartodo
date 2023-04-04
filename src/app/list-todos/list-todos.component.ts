import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public username:string,
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
 message='';
 todo:Todo[]=[]
 constructor(
  private service:TodoDataService,
  private router:Router
  ){}

 ngOnInit()
 {
  this.refreshTodos();
 }

 refreshTodos()
 {
  this.service.retrieveAllTodos('himanshu').subscribe(
    response=>{
      console.log(response);
      this.todo=response
    }
  );
 }

 deleteTodo(username:string,id:number){
    console.log(id+" "+username);
    this.service.deleteItemById(username,id).subscribe(
      response=>{
        console.log(response);
        this.refreshTodos();
        this.message=`deleted successfull ${id} and ${username}`
      }
    );
 }

 updateTodo(id:number)
 {
    console.log("update method is triggered");
    this.router.navigate(['todos',id])
 }

 addTodo()
 {
  this.router.navigate(['todos',-1]);
 }

 
}
