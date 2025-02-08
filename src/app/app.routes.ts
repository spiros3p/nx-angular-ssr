import { Route } from '@angular/router';
import { isNotAuthenticatedGuard } from './auth/core/guards/is-not-authenticated';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [isNotAuthenticatedGuard],
  },
  {
    path: '',
    // component: AppComponent,
    //   loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    //   canActivate: [],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
