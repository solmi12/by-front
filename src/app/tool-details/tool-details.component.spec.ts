import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolDetailsComponent } from './tool-details.component';

describe('ToolDetailsComponent', () => {
  let component: ToolDetailsComponent;
  let fixture: ComponentFixture<ToolDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolDetailsComponent]
    });
    fixture = TestBed.createComponent(ToolDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
