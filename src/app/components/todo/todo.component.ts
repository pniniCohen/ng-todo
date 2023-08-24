import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  public todo: ITodo;

  private subscription: Subscription = new Subscription();

  constructor(private todoServies: TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoServies.getSelectedTodo().subscribe(data => {
        this.todo = data;
      })
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public onClickComplite(): void {
    this.todo.isComplited = true;
  }

  public onClickArchive():void{
    this.todo.isArchived=true;
  }
}
