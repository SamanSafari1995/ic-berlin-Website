import { Injectable } from '@angular/core';
import { sampleGlasses } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {

  constructor() { }

  getAll(){
    return sampleGlasses;
  }

  getAllGlassesBySearch(search:string){
    return this.getAll()
    .filter(
      glass =>glass.productName.toLowerCase()
      .includes(search.toLowerCase()))
  }

  getGlassesByGender(gender:string){
    return this.getAll()
    .filter(
      glass =>glass.gender.toLowerCase()
      .includes(gender.toLowerCase()))
  }

  getGlassesByMaterial(material:string){
    return this.getAll()
    .filter(
      glass =>glass.material.toLowerCase()
      .includes(material.toLowerCase()))
  }

  getGlassesByType(type:string){
    return this.getAll()
    .filter(
      glass =>glass.eyeWearType.toLowerCase()
      .includes(type.toLowerCase()))
  }
}
