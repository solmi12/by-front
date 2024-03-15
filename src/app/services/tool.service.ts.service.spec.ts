import { TestBed } from '@angular/core/testing';

import { ToolServiceTsService } from './tool.service.ts.service';

describe('ToolServiceTsService', () => {
  let service: ToolServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
