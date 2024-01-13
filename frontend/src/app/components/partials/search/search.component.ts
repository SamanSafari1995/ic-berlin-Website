import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { GetProduct, Product } from 'src/app/interfaces/Iproduct';
import { Glasses } from 'src/app/models/glasses';
import { GlassesService } from 'src/services/glasses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  obj!: Product[];
  searchTerm = '';
  glass: Glasses[] = [];
  filterObj!:Observable<Product[]>;
  formControl = new FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private glassesService: GlassesService
  ) {
    this.activatedRoute.params.subscribe((product) => {
      if (product.searchTerm) this.searchTerm = product.searchTerm;
    });

    this.obj = this.glassesService.getNewObjOfProduct();
  }

  ngOnInit(): void {
    this.filterObj = this.formControl.valueChanges.pipe(
      startWith(''),map(val=>this._filter(val || ''))
    )
  }

  private _filter(value: string):Product[] {
    this.searchTerm = value.toLowerCase();
      return this.obj.filter(option=>option.productName.toLowerCase().includes(this.searchTerm))
  }

  search(val:string){
    if(val ===''){
      return
    }if(this.glass &&  this.glass.find(m=>m.productName.toLowerCase() == val)){
      return
    }
    else{
      this.glass = this.glassesService.getGlassesBySearch(val)
      console.log(this.glass)
    }
  }

}
