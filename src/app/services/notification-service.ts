import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { notification } from '../types';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private notificationSubject = new BehaviorSubject<notification|null>(null);

  notification$ = this.notificationSubject.asObservable();

    private timeoutId: any;

  show(message:string,type:'success'|'error',duration:number=3000){

     clearTimeout(this.timeoutId);

    this.notificationSubject.next({message,type,duration});

    this.timeoutId=setTimeout(()=>{
      this.notificationSubject.next(null);
    },duration)
  }
}
