import { Component, OnInit } from '@angular/core';
import { Todo } from '../../_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent implements OnInit {

  public toDo$: Todo;

  constructor() {
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

  ngOnInit() {
  }

  public createToDo(event: any): void {
    console.log(this.toDo$);
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    };
  }

}
