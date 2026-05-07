import { computed, inject, Injectable, signal } from '@angular/core';
import { baseURL, Task } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  http=inject(HttpClient);

  tasks=signal<Task[]>([]);

  doneTasks=computed(()=>this.tasks()?.filter(p=>p.state=="Done"));

  notDoneTasks = computed(()=>this.tasks()?.filter(p=>p.state=="NotDone"));

  getTasks(){
    this.http.get<Task[]>(baseURL+'/tasks').subscribe((data) => this.tasks.set(data));
  }

  addTask(task:Task){
    this.http.post<Task>(baseURL+'/tasks',task).
    subscribe({
      next:(task)=>{
        this.tasks.update(tasks=>[...tasks,task]);
      },
        error: (e) => console.log(e)
    });
  }

  updateTask(task:Task){
    this.http.put<Task>(baseURL+`/tasks/${task.id}`,task)
     .subscribe({
      next:(task)=>{
        console.log(task);
        this.tasks.update(tasks=>tasks.map((t)=>t.id===task.id?task:t));
      },
        error: (e) => console.log(e)
    });
  }

  deleteTask(id:string){
    this.http.delete(baseURL+`/tasks/${id}`)
     .subscribe({
      next:()=>{
        this.tasks.update(tasks=>tasks.filter((t)=>t.id!==id));
      },
        error: (e) => console.log(e)
    });
  }


  markDone(id:string){
     this.http.patch<Task>(baseURL+`/tasks/${id}`,{ state: "Done" })
     .subscribe({
      next:(task)=>{
        console.log(task);
        this.tasks.update(tasks=>tasks.map(t=>t.id===task.id?task:t));
      },
        error: (e) => console.log(e)
    });
  }

  

}
