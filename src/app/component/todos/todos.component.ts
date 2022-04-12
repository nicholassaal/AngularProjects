import { Component, OnInit } from '@angular/core';
// import { threadId } from 'worker_threads';
import {Todo} from './../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  inputTodo:string = "";
  constructor() { }

  ngOnInit(): void {
    this.todos=[
      // {
      //   content:'First todo',
      //   completed:false
      // },
      // {
      //   content:'Second todo',
      //   completed:true
      // }

    ]
  }
  // function that toggles a line through the tast when clicked on
  toggleDone(id:number){
this.todos.map((v,i) => {
if(i==id) v.completed = !v.completed;
return v;
})
  }
  // function that deletes the task once Remove button is pressed
deleteTodo(id:number){
  this.todos = this.todos.filter((v,i) => i !== id);
}
addTodo(){
  this.todos.push({
    content:this.inputTodo,
    completed:false
  });
  this.inputTodo = "";
}
}
