import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';


const Materials = [
  MatIconModule,
  MatSidenavModule
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
