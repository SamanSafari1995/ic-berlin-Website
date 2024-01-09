import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Glasses } from 'src/app/models/glasses';
import { GlassesService } from 'src/services/glasses.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css']
})
export class GlassesComponent implements OnInit{

  glasses:Glasses[] = []
  material = [
    {value:'metal'},
    {value:'acetat'},
    {value:'hybrid'},
  ]
  shape = [
    {value:'rectangular'},
    {value:'round'},
    {value:'cateye'},
  ]
  size = [
    {value:'small'},
    {value:'medium'},
    {value:'large'},
    {value:'extra'},
  ]
  type:string = ''

  constructor(private glassesService:GlassesService, private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(product =>{
        this.type = product.glassesType
    })
  }



  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params.filter === 'men' || params.filter === 'women'){
        this.glasses = this.glassesService.getGlassesByGender(params.glassesType,params.filter)
        console.log(this.glasses)
      }
      else if(params.filter === 'small' ||
            params.filter === 'medium' ||
            params.filter === 'large' ||
            params.filter === 'extra'){
        this.glasses = this.glassesService.getGlassesBySize(params.glassesType,params.filter)
        console.log(this.glasses)
      }
      else if(params.filter === 'round' ||
            params.filter === 'rectangular' ||
            params.filter === 'cateye'){
        this.glasses = this.glassesService.getGlassesByShape(params.glassesType,params.filter)
        console.log(this.glasses)
      }
      else if(params.filter === 'acetat' ||
               params.filter === 'metal' ||
               params.filter === 'hybrid'){
        this.glasses = this.glassesService.getGlassesByMaterial(params.glassesType,params.filter)
        console.log(this.glasses)
      }
      else if(!params.filter){
        this.glasses = this.glassesService.getByType(params.glassesType)
        console.log(this.glasses)
      }
    })
  }

  getByChange(value:string){
    const type =this.type
    value.toLowerCase()
    if( value =='small' || value =='medium' || value == 'large' || value == 'extra'){
      this.glasses =  this.glassesService.getGlassesBySize(type, value)
    }
    else if(value == 'round' || value == 'rectangular' || value == 'cateye'){
      this.glasses = this.glassesService.getGlassesByShape(type, value)
    }
    else{
      this.glasses = this.glassesService.getGlassesByMaterial(type, value)
    }
  }

}
