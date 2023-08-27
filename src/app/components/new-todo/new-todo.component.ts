import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

@ViewChild("f") form:NgForm;

constructor(private todoServis:TodoService,public dialog:MatDialog){}

public onNewTodoSubmit():void{
  if(this.form.valid){
  const formValus=this.form.form.value;
  const newTodo:ITodo={
    id:uuidv4(),
    title:formValus.title,
    descreption:formValus.description,
    endDate:formValus.date,
    isArchived:false,
    isComplited:false,
    selected:false
  }
  this.todoServis.onAddNewTodo(newTodo);
  this.dialog.closeAll();
  console.log("submit");
  console.log(this.form)
}
}
}
