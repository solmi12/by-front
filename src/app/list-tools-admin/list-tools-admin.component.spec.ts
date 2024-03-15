import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolsAdminComponent } from './list-tools-admin.component';

describe('ListToolsAdminComponent', () => {
  let component: ListToolsAdminComponent;
  let fixture: ComponentFixture<ListToolsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListToolsAdminComponent]
    });
    fixture = TestBed.createComponent(ListToolsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
