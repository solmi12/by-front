import { TestBed } from '@angular/core/testing';

import { UserCartItemsService } from './user-cart-items.service';

describe('UserCartItemsService', () => {
  let service: UserCartItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCartItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
