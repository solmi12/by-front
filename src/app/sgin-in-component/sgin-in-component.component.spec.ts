import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SginInComponentComponent } from './sgin-in-component.component';

describe('SginInComponentComponent', () => {
  let component: SginInComponentComponent;
  let fixture: ComponentFixture<SginInComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SginInComponentComponent]
    });
    fixture = TestBed.createComponent(SginInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
