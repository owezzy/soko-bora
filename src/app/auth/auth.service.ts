import { Injectable } from '@angular/core'
import { Role } from './role.enum'
import { BehaviorSubject, observable, Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { sign } from 'fake-jwt-sign'
import { environment } from '../../environments/environment'
import { transformError } from '../common/common.testing'
import * as decode from 'jwt-decode'
import { catchError, map } from 'rxjs/operators'

export interface IAuthStatus {
  isAuthenticated: boolean
  userRole: Role
  userId; string
}

interface IServerAuthResponse {
  accessToken: string
}

const defaultAuthStatus = {
  isAuthenticated: false,
  userRole: Role.None,
  userId: null
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>

  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus)

  constructor(private httpClient: HttpClient) {
    // fake login function to simulate roles
    this.authProvider = this.fakeAuthProvider
    // TODO: use auth0 service
    // example of a real login call to server-side
    // this.authProvider = this.exampleAuthService
  }
// private exampleAuthProvider(
//   email: string,
//   password: string
// ): Observable<IServerAuthResponse> {
//   return this.httpClient.post<IServerAuthResponse>(`${environment.baseUrl}/v1/login`, {
//     email: email,
//     password: password,
//   })
// }
   private fakeAuthProvider (
     email: string,
     password: string
   ): Observable<IServerAuthResponse>{
    if (!email.toLowerCase().endsWith('@test.com'))
    {
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
     } as IAuthStatus

     const authResponse = {
       accessToken: sign(authStatus, 'secret', {
         expiresIn: '1h',
         algorithm: 'none',
       }),
     } as IServerAuthResponse

     return of(authResponse)
     }
  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout()

    const loginResponse = this.authProvider(email, password).pipe(
      map(value => {
        return decode(value.accessToken) as IAuthStatus
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
    this.authStatus.next(defaultAuthStatus)
  }

}
