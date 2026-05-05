import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TaskManager');

  //Tasks:Task[]=[];

  // task: Task = {
  //     id:'',
  //     title:'',
  //     desc:'',
  //     priority:'',
  //     date:'',
  //     category:'',
  //     state:''
  //   };

  // GetData(taskSent:Task){
  //   this.task=taskSent;
  //   console.log(this.task);
  // }
}
