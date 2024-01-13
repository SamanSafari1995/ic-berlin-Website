import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Glasses } from 'src/app/models/glasses';
import { GlassesService } from 'src/services/glasses.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {

  scroll:boolean = false;
  collection:Glasses[] =[];
  collectionName = '';
  image = '';


  constructor(private glassesService:GlassesService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(product=>{
      this.collectionName = product.name
      if(this.collectionName ==='silk'){
        this.image = '../assets/collections/silk-collection.jpg'
      }
      else if(this.collectionName === 'classic'){
        this.image = '../assets/collections/classic-collection.jpg'
      }
      else if(this.collectionName === 'flex'){
        this.image = '../assets/collections/flxarbon-collection.jpg'
      }
      else{
        this.image = '../assets/collections/mercedes-benz-collection.jpg'
      }
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(product=>{
        this.collection = this.glassesService.getByCollectionName(product.name);
        console.log(this.collection)
    })
  }


  @HostListener("document:scroll")
  collapse(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop >300){
     this.scroll = true
    }
    else{
       this.scroll = false;
    }
  }

}
