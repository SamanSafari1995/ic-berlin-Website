import { Injectable } from '@angular/core';
import { Glasses } from 'src/app/models/glasses';
import { sampleGlasses } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {

  constructor() { }


  getAll():Glasses[]{
    return sampleGlasses;
  }

  getByType(type:string){
    return this.getAll().filter(product=>{
      return product.eyeWearType.toLowerCase() === type.toLowerCase()
    })
  }

  getGlassesBySearch(search:string):Glasses[]{
    return this.getAll()
    .filter(
      glass =>glass.productName.toLowerCase()
      .includes(search.toLowerCase()))
  }

  getGlassesByMaterial(type:string, material:string):Glasses[]{
    return this.getByType(type)
    .filter(
      glass =>glass.material.toLowerCase()
      .includes(material.toLowerCase()))
  }


  getGlassesByGender(type:string, gender:string):Glasses[]{
    return this.getByType(type)
    .filter(
      glass =>
        glass.gender.toLowerCase()
        .includes(gender.toLowerCase())
    )
  }

  getGlassesBySize(type:string, size:string):Glasses[]{
    return this.getByType(type)
    .filter(product =>
      product.frameSize.toLowerCase()
      .includes(size.toLowerCase()))
  }


  getGlassesByShape(type:string, shape:string):Glasses[]{
    return this.getByType(type)
    .filter(
      glass =>glass.shape.toLowerCase().replace(/ +/g, "")
      .includes(shape.toLowerCase()))
  }

  getByCollectionName(coName:string):Glasses[]{
    return this.getAll().filter(
      glass =>glass.collectionName.toLowerCase().replace(/ +g/,"")
      .includes(coName.toLowerCase())
    )
  }


}
