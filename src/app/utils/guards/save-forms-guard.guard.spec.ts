import { TestBed } from '@angular/core/testing';

import { SaveFormsGuardGuard } from './save-forms-guard.guard';

describe('SaveFormsGuardGuard', () => {
  let guard: SaveFormsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SaveFormsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
