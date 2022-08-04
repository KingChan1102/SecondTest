import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricticComponent } from './crictic.component';

describe('CricticComponent', () => {
  let component: CricticComponent;
  let fixture: ComponentFixture<CricticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CricticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
