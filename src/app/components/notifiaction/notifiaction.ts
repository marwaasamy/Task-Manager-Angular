import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { notification } from '../../types';
import { NotificationService } from '../../services/notification-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notifiaction',
   standalone: true,
  imports: [NgClass],
  templateUrl: './notifiaction.html',
  styleUrl: './notifiaction.css',
})
export class Notifiaction implements OnInit{

  notification :notification|null = null;

  notify = inject(NotificationService);
  cd = inject(ChangeDetectorRef);

  ngOnInit(): void {
   this.notify.notification$.subscribe((data)=>{
    console.log(data);
    this.notification=data;
    this.cd.detectChanges();
   });
  }

    close() {
    this.notification = null;
  }
}
