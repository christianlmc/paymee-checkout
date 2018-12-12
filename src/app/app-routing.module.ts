import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'confirmar', component: ConfirmComponent},
  {path: 'finalizar', component: FinishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
