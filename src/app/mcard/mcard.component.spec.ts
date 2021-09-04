import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McardComponent } from './mcard.component';

describe('McardComponent', () => {
  let component: McardComponent;
  let fixture: ComponentFixture<McardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
