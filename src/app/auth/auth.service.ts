import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Role } from './role.enum'
import { BehaviorSubject, Observable, of, throwError as observableThrowError } from 'rxjs'

import { sign } from 'fake-jwt-sign' // for fakeAuthProvider
import { transformError } from '../common/common'
import * as decode from 'jwt-decode'
import { catchError, map } from 'rxjs/operators'

import { environment } from '../../environments/environment'
import { CacheService } from './cache.service'

export interface AuthStatusInterface {
  isAuthenticated: boolean
  userRole: Role
  userId: string
}

export interface AuthServiceInterface {
  authStatus: BehaviorSubject<AuthStatusInterface>
  login(email: string, password: string): Observable<AuthStatusInterface>
  logout()
  getToken(): string
}

interface ServerAuthResponseInterface {
  accessToken: string
}

export const defaultAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: null
}
@Injectable({
  providedIn: 'root'
})
export class AuthService extends CacheService implements AuthServiceInterface {

  authStatus = new BehaviorSubject<AuthStatusInterface>(
    this.getItem('authStatus') || defaultAuthStatus
  )

  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<ServerAuthResponseInterface>

  constructor(private httpClient: HttpClient) {
    super()
    this.authStatus.subscribe(authStatus => this.setItem('authStatus', authStatus))
    // TODO: use auth0 service
    // example of a real login call to server-side
    this.authProvider = this.fakeAuthProvider
  }
  /**/
// private exampleAuthProvider(
//   email: string,
//   password: string
// ): Observable<ServerAuthResponseInterface> {
//   return this.httpClient.post<ServerAuthResponseInterface>(`${environment.baseUrl}/v1/login`, {
//     email: email,
//     password: password,
//   })
// }
   private fakeAuthProvider (
     email: string,
     password: string
   ): Observable<ServerAuthResponseInterface> {
    if (!email.toLowerCase().endsWith('@test.com')) {
      return observableThrowError('Failed to login Email needs to end with @test.com')
    }

     const authStatus = {
       isAuthenticated: true,
       userId: 'e4d1bc2ab25c',
       userRole: email.toLowerCase().includes('cashier')
         ? Role.Cashier
         : email.toLowerCase().includes('clerk')
           ? Role.Clerk
           : email.toLowerCase().includes('manager') ? Role.Manager : Role.None,
     } as AuthStatusInterface

     const authResponse = {
       accessToken: sign(authStatus, 'secret', {
         expiresIn: '1h',
         algorithm: 'none',
       }),
     } as ServerAuthResponseInterface

     return of(authResponse)
     }

  login(email: string, password: string): Observable<AuthStatusInterface> {
    this.logout()

    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        this.setToken(value.accessToken)
        return decode(value.accessToken) as AuthStatusInterface
      }),
      catchError(transformError)
    )

    loginResponse.subscribe(
      res => {
        this.authStatus.next(res)
      },
      err => {
        this.logout()
        return observableThrowError(err)
      }
    )

    return loginResponse
  }

  logout() {
    this.clearToken()
    this.authStatus.next(defaultAuthStatus)
  }

  private setToken(jwt: string) {
     this.setItem('jwt', jwt)
  }

  private getDecodedToken(): AuthStatusInterface {
    return decode(this.getItem('jwt'))
  }

  getToken(): string {
    return this.getItem('jwt') || ''
  }

  private clearToken() {
     this.removeItem('jwt')
  }
}
