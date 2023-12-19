import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';


const Materials = [
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Materials
  ],
  exports: [Materials]
})
export class MaterialsModule { }
