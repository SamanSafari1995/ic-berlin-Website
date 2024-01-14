import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GlassesComponent } from './glasses.component';

const routes:Routes = [
  {
    path:'',
    component:GlassesComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GlassesRoutingModule { }
