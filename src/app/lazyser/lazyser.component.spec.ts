import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyserComponent } from './lazyser.component';

describe('LazyserComponent', () => {
  let component: LazyserComponent;
  let fixture: ComponentFixture<LazyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
