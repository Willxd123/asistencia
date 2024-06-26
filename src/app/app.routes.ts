import { Routes } from '@angular/router';
import path from 'path';

export const routes: Routes = [
  {
    path: 'layout',
    loadComponent: () => import('./shared/components/layout/layout.component'),
    children: [
      {
        path: 'dashboard',
        /* icon: '', */
        title: 'Dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component'),
      },
      {
        path: 'user-list',
        title: 'User',
        loadComponent: () => import('./admin/user/user.component'),
      },
      {
        path: 'administrador',
        title: 'Administrador',
        loadComponent: () =>
          import('./admin/administrador/administrador.component'),
      },
      {
        path: 'modulo',
        title: 'Modulo',
        loadComponent: () => import('./admin/modulo/modulo.component'),
      },
      {
        path: 'carrera',
        title: 'Carrera',
        loadComponent: () => import('./admin/carrera/carrera.component'),
      },
      {
        path: 'materia',
        title: 'Materia',
        loadComponent: () => import('./admin/materia/materia.component'),
      },
      {
        path: 'profesor',
        title: 'Profesor',
        loadComponent: () => import('./admin/profesor/profesor.component'),
      },
      {
        path: 'gestion',
        title: 'Gestion',
        loadComponent: () => import('./admin/gestion/gestion.component'),
      },
      /*{
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },*/
    ],
  },
  {
    path: '',
    redirectTo: '/layout',
    pathMatch: 'full',
  },
];
