import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Input() todo: ITodo;

  constructor(private todoServies: TodoService) { }

  public onClickComplite(): void {
    this.todo.isComplited = true;
  }

  public onClickArchive():void{
    this.todo.isArchived=true;
  }
}
