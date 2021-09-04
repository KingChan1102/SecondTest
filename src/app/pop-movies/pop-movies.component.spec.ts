import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMoviesComponent } from './pop-movies.component';

describe('PopMoviesComponent', () => {
  let component: PopMoviesComponent;
  let fixture: ComponentFixture<PopMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
