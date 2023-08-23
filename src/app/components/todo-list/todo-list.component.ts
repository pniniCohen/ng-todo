import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit,OnDestroy {

public todos:ITodo[]=[]

private subscription:Subscription= new Subscription();

constructor(private todoServis:TodoService) { }

  ngOnInit(): void {
   this.subscription.add(
    this.todoServis.getTodos().subscribe(data=>{
      this.todos=data
    })
   )
  }
  ngOnDestroy(){
  this.subscription.unsubscribe();
  }

}
