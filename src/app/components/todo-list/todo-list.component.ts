import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todos: ITodo[] = []

  private indexBefore=0;
  
  constructor(private todoServis: TodoService) { }
 

  public onTodoClick(todo: ITodo, index: number): void {
    this.todoServis.setSelectedTodo(todo);
    this.todos[index].selected = true;
    this.todos[this.indexBefore].selected=false;
    this.indexBefore=index;
  }

}
