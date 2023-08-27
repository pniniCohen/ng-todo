import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent {

@ViewChild("f") form

constructor(){}

public onNewTodoSubmit():void{
  console.log("submit");
  console.log(this.form)
}
}
