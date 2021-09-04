import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavmComponent } from './favm.component';

describe('FavmComponent', () => {
  let component: FavmComponent;
  let fixture: ComponentFixture<FavmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
