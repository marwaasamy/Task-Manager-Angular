import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';
import { TaskService } from '../../services/task-service';


@Component({
  selector: 'app-done',
  imports: [TaskCard],
  templateUrl: './done.html',
  styleUrl: './done.css',
})
export class Done {


    taskService = inject(TaskService);

   ngOnInit() {
      this.taskService.getTasks();
      console.log(this.taskService.tasks());
    }

}
