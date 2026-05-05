import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl: './all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks implements OnChanges {

   taskService = inject(TaskService);
   
   @Input() TasksFromList:Task[]=[];
   @Output() doneClicked = new EventEmitter();
   @Output() deleteClicked=new EventEmitter();
   @Output() updateClicked=new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
     // if(changes['TasksFromList'].firstChange) return;
      console.log('from not done',this.TasksFromList);
  }
 

   done(id:string){
    this.doneClicked.emit(id);
   }

    Delete(id:string){
    this.deleteClicked.emit(id);
  }

  Update(data:Task){
    console.log("updated data",data);
    this.updateClicked.emit(data);
  }
}
