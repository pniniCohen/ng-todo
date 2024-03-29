import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../models/todo.interface';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss']
})

export class TodoContainerComponent implements OnInit, OnDestroy {
  
  public subscription: Subscription = new Subscription();
  public todo:ITodo
  public todos: ITodo[];

  constructor(public dialog:MatDialog,private todoServis: TodoService){}

  ngOnInit(): void {
    this.subscription.add(
      this.todoServis.getSelectedTodo().subscribe(data => {
        this.todo = data;
      })
    )
    this.subscription.add(
      this.todoServis.getTodos().subscribe(data => {
        this.todos = data
      })
    )
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
      width:'310px',
      height:'340px'
    });

   dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }
}
