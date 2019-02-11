import { TestBed } from '@angular/core/testing'

import { UserService } from './user.service'
import { AuthService } from '../../auth/auth.service'
import { AuthServiceFake } from '../../auth/auth.service.fake'
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UserService,
      { provide: AuthService, useClass: AuthServiceFake }
      ],
    imports: [HttpClientTestingModule]
  }))

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService)
    expect(service).toBeTruthy()
  })
})
