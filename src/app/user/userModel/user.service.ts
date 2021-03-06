import { Injectable } from '@angular/core'
import { CacheService } from '../../auth/cache.service'
import { BehaviorSubject, Observable, throwError } from 'rxjs'
import { User, UserInterface } from './user'
import { AuthService, AuthStatusInterface } from '../../auth/auth.service'
import { HttpClient } from '@angular/common/http'
import { catchError } from 'rxjs/operators'
import { transformError } from '../../common/common'
import { environment } from '../../../environments/environment'

export interface UsersInterface {
  items: UserInterface[]
  total: number
}

export interface UserServiceInterface {
  currentUser: BehaviorSubject<UserInterface>
  getCurrentUser(): Observable<UserInterface>
  getUser(id): Observable<UserInterface>
  updateUser(user: UserInterface): Observable<UserInterface>
  getUsers(pageSize: number, searchText: string, pagesToSkip: number):
    Observable<UsersInterface>
}


@Injectable({
  providedIn: 'root',
})
export class UserService extends CacheService implements UserServiceInterface {
  currentUser = new BehaviorSubject<UserInterface>(this.getItem('user') || new User())
  private currentAuthStatus: AuthStatusInterface

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    super()
    this.currentUser.subscribe(user => this.setItem('user', user))
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = authStatus),
    )
  }

  getCurrentUser(): Observable<UserInterface> {
    const userObservable = this.getUser(this.currentAuthStatus.userId).pipe(
      catchError(transformError),
    )
    userObservable.subscribe(
      user => this.currentUser.next(user),
      err => throwError(err),
    )
    return userObservable
  }

  getUser(id): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>
    (`${environment.baseUrl}/v1/user/${id}`)
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    this.setItem('draft-user', user) // cache user data incase of errors
    const updateResponse = this.httpClient
      .put<UserInterface>(`${environment.baseUrl}/v1/user/${user.id || 0}`, user)
      .pipe(catchError(transformError))

    updateResponse.subscribe(
      res => {
        this.currentUser.next(res)
        this.removeItem('draft-user')
      },
      err => throwError(err),
    )
    return updateResponse
  }

  getUsers(pageSize: number, searchText = '', pagesToSkip = 0):
    Observable<UsersInterface> {
      return this.httpClient.get<UsersInterface>(`${environment.baseUrl}/v1/users`,
      {
        params: {
          search: searchText,
          offset: pagesToSkip.toString(),
          limit: pageSize.toString(),
        },
      })
  }
}

