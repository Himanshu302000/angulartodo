import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TODO_JPA_URL } from 'src/app/app.constant';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(public http:HttpClient) { }

  retrieveAllTodos(username:any)
  {
    return this.http.get<Todo[]>(`${TODO_JPA_URL}/users/${username}/todos`);
  }

  deleteItemById(username:string,id:number)
  {
    return this.http.delete(`${TODO_JPA_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username:string,id:number)
  {
    return this.http.get<Todo>(`${TODO_JPA_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:string,id:number,todo:Todo)
  {
    return this.http.put(`${TODO_JPA_URL}/users/${username}/todos/${id}`,todo)
  }

    createTodo(username:string,todo:Todo)
  {
    return this.http.post(
      `${TODO_JPA_URL}/users/${username}/todos`,todo
    );
  }


}
