import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuresv3Component } from './featuresv3.component';

describe('Featuresv3Component', () => {
  let component: Featuresv3Component;
  let fixture: ComponentFixture<Featuresv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Featuresv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Featuresv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
