import { TestBed, async, inject } from '@angular/core/testing'

import { AuthGuard } from './auth-guard.guard'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuard),
    })
  })

  it('should ...', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy()
  }))
})
