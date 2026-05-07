import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';
import { TaskService } from '../../services/task-service';

@Component({
  selector: 'app-not-done',
  imports: [TaskCard],
  templateUrl: './not-done.html',
  styleUrl: './not-done.css',
})
export class NotDone{

   taskService = inject(TaskService);

   ngOnInit() {
      this.taskService.getTasks();
      console.log(this.taskService.tasks());
    }

}
