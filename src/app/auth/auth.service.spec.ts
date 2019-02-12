import { TestBed } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UiService } from '../common/ui.service'

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [AuthService, UiService],
  }))

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService)
    expect(service).toBeTruthy()
  })
})
