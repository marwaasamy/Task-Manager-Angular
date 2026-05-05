import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { TaskCard } from "../Task-Card/TaskCard";
import { AllTasks } from "../all-tasks/all-tasks";
import { Done } from "../done/done";
import { NotDone } from "../not-done/not-done";
import {  } from "../Task-Input/TaskInput";
import { Task } from "../../types";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
     templateUrl:'./TaskList.html',
    selector:'app-TaskList',
    styleUrl:'./TaskList.css',
    imports : [AllTasks,Done,NotDone,RouterOutlet,RouterLink,RouterLinkActive],
})

export class TaskList implements OnChanges{
     ngOnChanges(changes: SimpleChanges): void {
     if (changes['TaskFromParent'] && this.TaskFromParent.id){
         this.TasksFromParent.push(this.TaskFromParent);
     }
     this.TasksNotDone= this.TasksFromParent.filter(p=>p.state=="NotDone");
     this.TasksDone= this.TasksFromParent.filter(p=>p.state=="Done");
     }
         activeTab: string = 'all';

     TasksFromParent:Task[]=[];
     TasksDone:Task[]=[];
     TasksNotDone:Task[]=[];

    @Input() TaskFromParent !:Task;

     GetactiveTab(n:string){
          this.activeTab=n;
     }
     
     getTasks(){
          console.log(this.TasksFromParent);
     }

     markDone(id:string){
          let task = this.TasksFromParent.find(p => p.id === id);

          if(task){
               task.state='Done';
          }
          
          this.TasksDone=this.TasksFromParent.filter(p=>p.state=="Done");

          this.TasksNotDone=this.TasksFromParent.filter(p=>p.state=="NotDone");
     }

     markDelete(id:string){
          this.TasksFromParent=this.TasksFromParent.filter(p=>p.id!=id);

          this.TasksDone=this.TasksFromParent.filter(p=>p.id!=id && p.state=="Done");

          this.TasksNotDone=this.TasksFromParent.filter(p=>p.id!=id && p.state=="NotDone");
     }

     Update(data:Task){
          let task = this.TasksFromParent.find(p => p.id === data.id);

          if(task){
             Object.assign(task, data);
          }
         
          console.log("update from list",task);

          this.TasksDone=this.TasksFromParent.filter(p=>p.state=="Done");

          this.TasksNotDone=this.TasksFromParent.filter(p=>p.state=="NotDone");
          

     }
}