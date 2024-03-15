import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToolComponent } from './add-tool.component';

describe('AddToolComponent', () => {
  let component: AddToolComponent;
  let fixture: ComponentFixture<AddToolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddToolComponent]
    });
    fixture = TestBed.createComponent(AddToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
