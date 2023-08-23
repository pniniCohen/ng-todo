import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mock: ITodo[] = [
    { "title": "Columba palumbus", "descreption": "Dendrocygna viduata", "isComplited": true, "isArchived": false, "endDate": "10/20/2022" },
    { "title": "Cordylus giganteus", "descreption": "Felis wiedi or Leopardus weidi", "isComplited": false, "isArchived": true, "endDate": "6/2/2023" },
    { "title": "Ara ararauna", "descreption": "Dusicyon thous", "isComplited": false, "isArchived": false, "endDate": "1/24/2023" },
    { "title": "Sula dactylatra", "descreption": "Gyps bengalensis", "isComplited": true, "isArchived": false, "endDate": "1/6/2023" },
    {"title":"Mellivora capensis","descreption":"Tadorna tadorna","isComplited":true,"isArchived":true,"endDate":"1/29/2023"},
    {"title":"Chlidonias leucopterus","descreption":"Chelodina longicollis","isComplited":true,"isArchived":true,"endDate":"11/18/2022"},
    {"title":"Nasua nasua","descreption":"Mazama gouazoubira","isComplited":true,"isArchived":true,"endDate":"3/21/2023"},
    {"title":"Tadorna tadorna","descreption":"Manouria emys","isComplited":true,"isArchived":true,"endDate":"12/29/2022"}
  ]

  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
   this.mock
  );
  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
