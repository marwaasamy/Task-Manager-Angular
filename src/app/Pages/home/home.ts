import { Component } from '@angular/core';
import { Slider } from "../../components/slider/slider";
import {  TaskInput } from "../../components/Task-Input/TaskInput";
import { TaskList } from "../../components/TaskList/TaskList";
import { Task } from '../../types';

@Component({
  selector: 'app-home',
  imports: [Slider, TaskInput, TaskList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  task: Task = {
        id:'',
        title:'',
        desc:'',
        priority:'',
        date:'',
        category:'',
        state:''
      };
  
    GetData(taskSent:Task){
      this.task=taskSent;
      console.log(this.task);
    }
}
