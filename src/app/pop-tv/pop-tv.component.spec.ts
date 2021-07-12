import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopTvComponent } from './pop-tv.component';

describe('PopTvComponent', () => {
  let component: PopTvComponent;
  let fixture: ComponentFixture<PopTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
