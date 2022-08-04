import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazySermComponent } from './lazy-serm.component';

describe('LazySermComponent', () => {
  let component: LazySermComponent;
  let fixture: ComponentFixture<LazySermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazySermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazySermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
