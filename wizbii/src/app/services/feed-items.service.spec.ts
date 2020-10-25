import { TestBed } from '@angular/core/testing';

import { FeedItemsService } from './feed-items.service';

describe('FeedItemsService', () => {
  let service: FeedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
