import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassesComponent } from './glasses.component';

describe('GlassesComponent', () => {
  let component: GlassesComponent;
  let fixture: ComponentFixture<GlassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlassesComponent]
    });
    fixture = TestBed.createComponent(GlassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
