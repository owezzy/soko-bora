import { AuthServiceInterface, AuthStatusInterface, defaultAuthStatus } from './auth.service'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthServiceFake implements AuthServiceInterface {
  authStatus = new BehaviorSubject<AuthStatusInterface>(defaultAuthStatus)

  constructor() {
  }

  login(email: string, password: string): Observable<AuthStatusInterface> {
    return of(defaultAuthStatus)
  }

  logout() {
  }

  getToken(): string {
    return ''
  }
}
