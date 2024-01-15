import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter } from 'rxjs';
import { Glasses } from 'src/app/models/glasses';
import { GlassesService } from 'src/services/glasses.service';

@Component({
  selector: 'app-glasses',
  templateUrl: './glasses.component.html',
  styleUrls: ['./glasses.component.css'],
})
export class GlassesComponent implements OnInit {
  glasses: Glasses[] = [];
  material = [{ value: 'metal' }, { value: 'acetat' }, { value: 'hybrid' }];
  shape = [{ value: 'rectangular' }, { value: 'round' }, { value: 'cateye' }];
  size = [
    { value: 'small' },
    { value: 'medium' },
    { value: 'large' },
    { value: 'extra' },
  ];
  type: string = '';
  glassObservable!: Observable<Glasses[]>;
  constructor(
    private glassesService: GlassesService,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe((product) => {
      this.type = product.glassesType;
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.filter === 'men' || params.filter === 'women') {
        this.glassObservable = this.glassesService.getGlassesByGender(
          params.glassesType,
          params.filter
        );
      } else if (
        params.filter === 'small' ||
        params.filter === 'medium' ||
        params.filter === 'large' ||
        params.filter === 'extra'
      ) {
        this.glassObservable = this.glassesService.getGlassesBySize(
          params.glassesType,
          params.filter
        );
      } else if (
        params.filter === 'round' ||
        params.filter === 'rectangular' ||
        params.filter === 'cateye'
      ) {
        this.glassObservable = this.glassesService.getGlassesByShape(
          params.glassesType,
          params.filter
        );
      } else if (
        params.filter === 'acetat' ||
        params.filter === 'metal' ||
        params.filter === 'hybrid'
      ) {
        this.glassObservable = this.glassesService.getGlassesByMaterial(
          params.glassesType,
          params.filter
        );
      } else if (!params.filter) {
        this.glassObservable = this.glassesService.getByType(
          params.glassesType
        );
      }
      this.glassObservable.subscribe(
        (serverGlass) => (this.glasses = serverGlass)
      );
    });
  }

  getByChange(value: string) {
    const type = this.type;
    value.toLowerCase();
    if (
      value == 'small' ||
      value == 'medium' ||
      value == 'large' ||
      value == 'extra'
    ) {
      this.glassObservable = this.glassesService.getGlassesBySize(type, value);
    } else if (
      value == 'round' ||
      value == 'rectangular' ||
      value == 'cateye'
    ) {
      this.glassObservable = this.glassesService.getGlassesByShape(type, value);
    } else {
      this.glassObservable = this.glassesService.getGlassesByMaterial(
        type,
        value
      );
    }

    this.glassObservable.subscribe((ServerGlass) => {
      this.glasses = ServerGlass;
      console.log(this.glasses);
    });
  }
}
