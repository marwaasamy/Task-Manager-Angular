import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';


@Component({
  selector: 'app-done',
  imports: [TaskCard],
  templateUrl: './done.html',
  styleUrl: './done.css',
})
export class Done implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
      // if(changes['TasksFromList'].firstChange) return;
      console.log('from not done',this.TasksFromList);
  }
  @Input() TasksFromList:Task[]=[];
  @Output() deleteClicked=new EventEmitter();
  @Output() updateClicked=new EventEmitter();

  Delete(id:string){
    this.deleteClicked.emit(id);
  }

   Update(data:Task){
    this.updateClicked.emit(data);
  }

}
