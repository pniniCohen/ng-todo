import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: ITodo[] = []

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    if (!this._todoSubject.value.length) {
      const dataTodoString = localStorage.getItem('todos');
      if (dataTodoString) {
        const exitTodo:Array<ITodo> = JSON.parse(dataTodoString)
        this._todoSubject.next(exitTodo);
        exitTodo[0].selected=true;
        this._singleTodoSubject.next(exitTodo[0]);
      }
    }
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo): void {

    this._singleTodoSubject.next(todo);
    console.log(this._singleTodoSubject);
  }

  public onAddNewTodo(todo: ITodo): void {
    const exitlistsTodo: Array<ITodo> = this._todoSubject.value;
    exitlistsTodo.push(todo);
    this._todoSubject.next(exitlistsTodo);
    localStorage.setItem('todos', JSON.stringify(exitlistsTodo));
  }

  public onTodoAction(id:string , action:string):void{
    const exitlistsTodo: Array<ITodo> = this._todoSubject.value;
    const todoIndex=exitlistsTodo.findIndex((todo)=>todo.id==id);
    exitlistsTodo[todoIndex][action]=true;
    this._todoSubject.next(exitlistsTodo);
    localStorage.setItem('todos', JSON.stringify(exitlistsTodo));
  }
}
