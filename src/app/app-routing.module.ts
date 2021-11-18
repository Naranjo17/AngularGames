import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegodadosComponent } from './juegodados/juegodados.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
