import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { UserService } from '../../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 userService = inject(UserService);
 router = inject(Router);

  emailExists = false;
  passwordExists = false;
  failed=false;

  handleSubmit(f : NgForm){
     //console.log(f);
     const email= f.form.controls['email'].value;
     const password =  f.form.controls['password'].value;

     this.emailExists=false;
     this.passwordExists=false;
     this.failed=false;

      this.userService.checkEmail(email).subscribe({
      next: (users) => {
        if(users.length>0){
          this.emailExists = true;
          if(users[0].password===password){
            this.passwordExists=true;
            localStorage.setItem("email",email);
            this.router.navigate(['/layout/home']);
          }
          else{
            this.failed=true;
          }
        }
        else{
          this.failed=true;
        }
      },
  
    error: (e) => console.error(e)
      });

         
  }
}
