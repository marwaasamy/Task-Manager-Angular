import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { Task } from "../../types";



@Component({
    templateUrl:'./TaskInput.html',
    selector:'app-TaskInput',
    styleUrl:'./TaskInput.css',
    imports:[FormsModule],
})

export class TaskInput 
{
     tasks: Task[] = [];

     @Output() SendTaskToApp = new EventEmitter();

    newTask: Task = {
    id:'',
    title: '',
    desc: '',
    priority: '',
    date: '',
    category: '',
    state:'NotDone'
  };

  addTask() {
    this.newTask.id=uuidv4().split('-')[1];
    this.tasks.push(this.newTask);
     console.log('Tasks Array:', this.tasks);

    this.SendTaskToApp.emit(this.newTask);

    this.newTask = {
      id:'',
      title: '',
      desc: '',
      priority: '',
      date: '',
      category: '',
      state:'NotDone'
    };


  }

}