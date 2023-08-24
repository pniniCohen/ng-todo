import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mock: ITodo[] = [
    {"id":1,"title": "Columba palumbus", "descreption": "Dendrocygna viduata", "isComplited": false, "isArchived": false, "endDate": "10/20/2022","selected":true},
    {"id":2,"title": "Cordylus giganteus", "descreption": "Felis wiedi or Leopardus weidi", "isComplited": false, "isArchived": false, "endDate": "6/2/2023","selected":false },
    {"id":3,"title": "Ara ararauna", "descreption": "Dusicyon thous", "isComplited": false, "isArchived": false, "endDate": "1/24/2023" ,"selected":false},
    {"id":4,"title": "Sula dactylatra", "descreption": "Gyps bengalensis", "isComplited": false, "isArchived": false, "endDate": "1/6/2023","selected":false },
    {"id":5,"title":"Mellivora capensis","descreption":"Tadorna tadorna","isComplited":false,"isArchived":false,"endDate":"1/29/2023","selected":false},
    {"id":6,"title":"Chlidonias leucopterus","descreption":"Chelodina longicollis","isComplited":false,"isArchived":false,"endDate":"11/18/2022","selected":false},
    {"id":7,"title":"Nasua nasua","descreption":"Mazama gouazoubira","isComplited":false,"isArchived":false,"endDate":"3/21/2023","selected":false},
    {"id":8,"title":"Tadorna tadorna","descreption":"Manouria emys","isComplited":false,"isArchived":false,"endDate":"12/29/2022","selected":false}
  ]

  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private singleTodoSubject:BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo():Observable<ITodo>{
    return this.singleTodoSubject.asObservable();
  }
  public setSelectedTodo(todo:ITodo):void{
    
     this.singleTodoSubject.next(todo);
     console.log(this.singleTodoSubject);
  }
}
