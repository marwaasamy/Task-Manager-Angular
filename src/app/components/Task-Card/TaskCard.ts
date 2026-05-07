import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../../types";
import { TaskService } from "../../services/task-service";

@Component({
     templateUrl:'./TaskCard.html',
    selector:'app-TaskCard',
    styleUrl:'./TaskCard.css',
    imports:[FormsModule],
})

export class TaskCard{
  @Input() task!: Task; //stay

   editTask!: Task;

   taskService=inject(TaskService);

  Edit:boolean=false;


  update(){
     this.Edit=true;
     this.editTask={...this.task};
  }

  done(){
     //this.task.state='Done';
     this.taskService.markDone(this.task.id);
  }

  Delete(){
    this.taskService.deleteTask(this.task.id);
  }
  save(){
   this.taskService.updateTask(this.editTask);
   console.log(this.editTask);
   this.Edit=false;
  }

  cancel(){
   this.Edit=false;
  }
}