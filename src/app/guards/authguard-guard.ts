import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authguardGuard: CanActivateFn = (route, state) => {
  const email = localStorage.getItem('email');
  const router = inject(Router);
  if(!email){
    router.navigate(['/login']);
    return false;
  }
  return true;
};
