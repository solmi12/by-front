import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostPromotionComponent } from './lost-promotion.component';

describe('LostPromotionComponent', () => {
  let component: LostPromotionComponent;
  let fixture: ComponentFixture<LostPromotionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostPromotionComponent]
    });
    fixture = TestBed.createComponent(LostPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
