import { Injectable } from '@angular/core';
import { Hometodo } from '../model/home.model';
import { UUID } from 'angular2-uuid';



@Injectable()
export class HomeService {


  private todos: Hometodo[] = [];

  constructor() { }


  addTodo(todoItem: string): Hometodo[] {
    const todo: Hometodo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    };
    this.todos.push(todo);
    return this.todos;
  }
}
