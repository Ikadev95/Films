import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioFilmRoutingModule } from './dettaglio-film-routing.module';
import { DettaglioFilmComponent } from './dettaglio-film.component';


@NgModule({
  declarations: [
    DettaglioFilmComponent
  ],
  imports: [
    CommonModule,
    DettaglioFilmRoutingModule
  ]
})
export class DettaglioFilmModule { }
