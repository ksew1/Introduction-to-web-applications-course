import { TestBed } from '@angular/core/testing';

import { NotLogInGuard } from './not-log-in.guard';

describe('NotLogInGuard', () => {
  let guard: NotLogInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotLogInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
