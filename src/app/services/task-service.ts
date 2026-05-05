import { inject, Injectable, signal } from '@angular/core';
import { Task } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  http=inject(HttpClient);
  tasks=signal<Task[] | null>([]);

}
