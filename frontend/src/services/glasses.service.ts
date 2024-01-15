import { Injectable } from '@angular/core';
import { Glasses } from 'src/app/models/glasses';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  COLLECTION_URL,
  FILTERED_GLASSES_URL,
  GLASSES_BY_NAME,
  GLASSES_TYPE_URL,
  GLASSES_URL,
} from 'src/app/constant/urls';
// import { GetProduct } from 'src/app/interfaces/Iproduct';

@Injectable({
  providedIn: 'root',
})
export class GlassesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(GLASSES_URL);
  }

  getByType(type: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(GLASSES_TYPE_URL + type);
  }

  getGlassesBySearch(search: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(GLASSES_BY_NAME + search);
  }

  getGlassesByMaterial(type: string, material: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(
      FILTERED_GLASSES_URL + type + '/' + material
    );
  }

  getGlassesByGender(type: string, gender: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(FILTERED_GLASSES_URL + type + '/' + gender);
  }

  getGlassesBySize(type: string, size: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(FILTERED_GLASSES_URL + type + '/' + size);
  }

  getGlassesByShape(type: string, shape: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(FILTERED_GLASSES_URL + type + '/' + shape);
  }

  getByCollectionName(coName: string): Observable<Glasses[]> {
    return this.http.get<Glasses[]>(COLLECTION_URL + coName);
  }

  // getNewObjOfProduct():Observable<GetProduct>{
  //   const obj = this.http.get<Glasses[]>(GLASSES_URL).subscribe((products) => {
  //     products.map(pro => ({
  //       productName: pro.productName,
  //       material: pro.material
  //     }))
  //   });
  //   return obj as unknown as Observable<GetProduct>
  // }
}
