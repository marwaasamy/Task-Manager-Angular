import { Routes } from '@angular/router';
import { Layout } from './Pages/layout/layout';
import { Login } from './Pages/login/login';
import { SignUp } from './Pages/sign-up/sign-up';
import { Home } from './Pages/home/home';
import { TaskInput } from './components/Task-Input/TaskInput';
import { TaskList } from './components/TaskList/TaskList';
import { AllTasks } from './components/all-tasks/all-tasks';
import { Done } from './components/done/done';
import { NotDone } from './components/not-done/not-done';
import { authguardGuard } from './guards/authguard-guard';
import { Notfound } from './Pages/notfound/notfound';

export const routes: Routes = [
     {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },

  {
    path: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
       {
        title: 'home',
        path: 'home', 
        component: Home,
      },
      {
        title:'Add-task',
        path:'Add-task',
        canActivate:[authguardGuard],
        component:TaskInput,
      },
      {
        title:'All-tasks',
        path:'All-tasks',
        canActivate:[authguardGuard],
        component:TaskList,
         children: [
          { path: '', redirectTo: 'all', pathMatch: 'full' },
          { path: 'all', component: AllTasks },
          { path: 'done', component: Done },
          { path: 'not-done', component: NotDone },
        ]
      }

    ],
    },
 {
    title:'login',
    path: 'login',
    component: Login,
  },
  {
    title:'signup',
    path: 'signup',
    component: SignUp,
  },

    {
      path:"**",
      title:'notfound',
      component:Notfound
    }

];
