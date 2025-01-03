import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'preferiti', loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiModule) },
  { path: 'dettaglio', loadChildren: () => import('./pages/dettaglio-film/dettaglio-film.module').then(m => m.DettaglioFilmModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: '', redirectTo: 'auth', pathMatch: "full"}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
