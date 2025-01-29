import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { ListQuotationsComponent } from './components/list-quotations/list-quotations.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'quotation',
    component: QuotationComponent,
    title: 'Quotation',
  },
  {
    path: 'list-quotations',
    component: ListQuotationsComponent,
    title: 'List quotations',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page Not Found',
  },
];
