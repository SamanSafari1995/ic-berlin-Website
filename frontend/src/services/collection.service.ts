import { Injectable } from '@angular/core';
import { Collection } from 'src/app/models/collection';
import { sampleCollection } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor() { }
  getCollection():Collection[]{
    return sampleCollection;
  }

}
