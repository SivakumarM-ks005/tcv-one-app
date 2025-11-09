import { Routes } from '@angular/router';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path:'', redirectTo: 'login', pathMatch:'full'
    },
    {
        path:'login', 
        component:Login
    },
    {
        path:'layout',
        loadComponent:()=> import('./layout/layout').then(n=>n.Layout)
    },
    {
        path:'**',
        redirectTo: 'login'
    }
];
