import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-all-tasks',
  imports: [TaskCard],
  templateUrl:'./all-tasks.html',
  styleUrl: './all-tasks.css',
})
export class AllTasks {

   taskService = inject(TaskService);

   ngOnInit() {
      this.taskService.getTasks();
      console.log(this.taskService.tasks());
    }
}
