import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdetailsComponent } from './mdetails.component';

describe('MdetailsComponent', () => {
  let component: MdetailsComponent;
  let fixture: ComponentFixture<MdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
