import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'authentication',
    loadComponent: () =>
      import('./components/authentication/authentication.component').then(
        (m) => m.AuthenticationComponent
      ),
    title: 'Authentication',
  },
  {
    path: 'quotation',
    loadComponent: () =>
      import('./components/quotation/quotation.component').then(
        (m) => m.QuotationComponent
      ),
    title: 'Quotation',
  },
  {
    path: 'list-quotations',
    loadComponent: () =>
      import('./components/list-quotations/list-quotations.component').then(
        (m) => m.ListQuotationsComponent
      ),
    canActivate: [authGuard],
    data: { skipPrerendering: true },
    title: 'List quotations',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
    title: 'Page Not Found',
  },
];
