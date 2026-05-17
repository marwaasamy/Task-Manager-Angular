import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { baseURL, User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  http=inject(HttpClient);
   LoggedIn = signal<boolean|null>(false);

  //user=signal<User | null>(null);


  addUser(user:User){
    this.http.post<User>(baseURL+'/users',user)
     .subscribe(
    //{
    //   next:(user)=>{
    //     this.user.set(user);
    //   },
    //     error: (e) => console.log(e)
    // }
    );
  }

 checkEmail(email: string) {
  return this.http.get<User[]>(baseURL + '/users', { params: { email } });
}

logout(){
  localStorage.removeItem('email');

  this.LoggedIn.set(null);
}

}



