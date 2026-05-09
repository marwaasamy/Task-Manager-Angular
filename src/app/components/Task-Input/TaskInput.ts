import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { error, Task } from "../../types";
import { TaskService } from "../../services/task-service";
import { NotificationService } from "../../services/notification-service";



@Component({
    templateUrl:'./TaskInput.html',
    selector:'app-TaskInput',
    styleUrl:'./TaskInput.css',
    imports:[FormsModule],
})

export class TaskInput 
{
     tasks: Task[] = [];

     taskService = inject(TaskService);
     notificationService=inject(NotificationService);

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

    error: error = {
    message: '',
    state: false,
  };

  addTask() {
    this.newTask.id=uuidv4().split('-')[1];
    this.error.state=false;
    for(let t in this.newTask){
      let key = t as keyof Task;
      if(this.newTask[key]===''){
         this.error.state = true;
        this.error.message = `please fill this field ${key}`;
        console.log(this.error);
        this.notificationService.show(
          'Please fill all fields',
          'error'
        )
        return;
      }
    }

    this.taskService.addTask(this.newTask);

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