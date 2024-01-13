import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const Materials = [
  MatIconModule,
  MatSidenavModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule
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
