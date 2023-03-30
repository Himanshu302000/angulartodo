import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id:number=0;
  todo: Todo;
  notvalid:boolean=false;
  constructor(
    private service:TodoDataService,
    private route:ActivatedRoute,
    private router:Router
    ){

  }

  saveTodo(){

    if(this.todo.description.length==0) this.notvalid=true;

    if(this.id===-1 && !this.notvalid)
    {
     this.service.createTodo('himanshu',this.todo);
    }
    else if(!this.notvalid)
    {
      this.service.updateTodo('Himanshu',this.id,this.todo).
      subscribe(res=>{
      console.log(res);
      this.router.navigate(['todos']);
    })
    }
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo('himanshu',this.id,'',false,new Date());
    if(this.id!=-1){
    this.service.retrieveTodo('Himanshu',this.id).subscribe(
      data=>this.todo=data
    )
  }}
}
