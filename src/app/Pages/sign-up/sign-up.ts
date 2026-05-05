import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

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
  formGroup=new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).+$"),Validators.minLength(8),Validators.maxLength(20)]),
    confirmPassword: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
  },{
    validators:match,
  });


  handleSubmit(){
    console.log(this.formGroup);
  }
}
