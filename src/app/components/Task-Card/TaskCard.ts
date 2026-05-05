import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Task } from "../../types";

@Component({
     templateUrl:'./TaskCard.html',
    selector:'app-TaskCard',
    styleUrl:'./TaskCard.css',
    imports:[FormsModule],
})

export class TaskCard{
  @Input() task!: Task;

   editTask!: Task;

  Edit:boolean=false;

  @Output() doneClicked = new EventEmitter();
  @Output() deleteClicked = new EventEmitter();
  @Output() updateClicked = new EventEmitter();

  update(){
     this.Edit=true;
     this.editTask={...this.task};
  }

  done(){
     this.task.state='Done';
     this.doneClicked.emit(this.task.id);
  }

  Delete(){
     this.deleteClicked.emit(this.task.id);
  }
  save(){
   this.updateClicked.emit(this.editTask);
   this.Edit=false;
  }

  cancel(){
   this.Edit=false;
  }
}