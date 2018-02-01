import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuresv1Component } from './featuresv1.component';

describe('Featuresv1Component', () => {
  let component: Featuresv1Component;
  let fixture: ComponentFixture<Featuresv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Featuresv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Featuresv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
