import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { User } from '../../types';
import { UserService } from '../../services/user-service';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification-service';


function match(form:AbstractControl):ValidationErrors | null{
  let password = form.get('password')?.value;
  let confirm = form.get('confirmPassword')?.value;
  return password !== confirm ? { match: false } : null;
}

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css',
})
export class SignUp {

userService= inject(UserService);
router = inject(Router);
notify=inject(NotificationService);


  formGroup=new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$"),Validators.minLength(8),Validators.maxLength(20)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  },{
    validators:match,
  });

  emailExists = false;

  handleSubmit() {
  if (this.formGroup.invalid) return;

  const email =this.formGroup.get('email')?.value!;

  this.userService.checkEmail(email).subscribe({
  next: (users) => {
    if (users.length > 0) {
      this.emailExists = true;
        this.notify.show(
              'Email already exists',
              'error'
            )
      
    } else {
     this.emailExists = false;

      const newUser: User = {
        id: uuidv4().split('-')[1],
        username: this.formGroup.get('username')?.value!,
        email: this.formGroup.get('email')?.value!,
        password: this.formGroup.get('password')?.value!,
      };
      this.userService.addUser(newUser);
      this.router.navigate(['/login']);
    }
  },
  
  error: (e) => console.error(e)
});
}
}
