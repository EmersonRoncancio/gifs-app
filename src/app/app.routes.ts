import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'treanding',
        loadComponent: () => import('./gifs/trending-page/trending-page.component').then(m => m.TrendingPageComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/search-page/search-page.component').then(m => m.SearchPageComponent)
      },
      {
        path: '**',
        redirectTo: 'search'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
