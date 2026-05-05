import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TaskCard } from "../Task-Card/TaskCard";
import { Task } from '../../types';

@Component({
  selector: 'app-not-done',
  imports: [TaskCard],
  templateUrl: './not-done.html',
  styleUrl: './not-done.css',
})
export class NotDone implements OnChanges{
  @Input() TasksFromList:Task[]=[];

  @Output() doneClicked=new EventEmitter();
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
    this.updateClicked.emit(data);
  }

}
