import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'homepage', loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule) }, { path: 'homepage', loadChildren: () => import('./main-components/homepage/homepage.module').then(m => m.HomepageModule) }, { path: 'navbar', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) }, { path: 'navbar', loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiModule) }, { path: 'navbar', loadChildren: () => import('./pages/dettaglio-film/dettaglio-film.module').then(m => m.DettaglioFilmModule) }, { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
