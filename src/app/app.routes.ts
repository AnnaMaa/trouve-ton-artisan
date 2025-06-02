import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';




export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categorie',
    loadComponent: () =>
      import('./features/artisans/artisan-list/artisan-list.component').then(
        m => m.ArtisanListComponent
      )},
  {path: 'artisan/:id',
  loadComponent: () => 
    import('./features/artisans/artisan-detail/artisan-detail.component').then(m => m.ArtisanDetailComponent)
  },
 
  {
    path: 'mentions-legales',
    loadComponent: () =>
      import('./shared/legal/mentions-legales/mentions-legales.component').then(
        m => m.MentionsLegalesComponent
      )
  },
  {
    path: 'cookies',
    loadComponent: () =>
      import('./shared/legal/cookies/cookies.component').then(
        m => m.CookiesComponent
      )
  },
  {
    path: 'accessibilite',
    loadComponent: () =>
      import('./shared/legal/accessibilite/accessibilite.component').then(
        m => m.AccessibiliteComponent
      )
  },

  {
    path: '**',
    loadComponent: () =>
      import('./shared/not-found/not-found.component').then(
        m => m.NotFoundComponent
      )
  },
  
  
];
