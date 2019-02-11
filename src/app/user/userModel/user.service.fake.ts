import {Injectable} from '@angular/core'
import { UserServiceInterface, UsersInterface } from './user.service'
import { BehaviorSubject, Observable, of } from 'rxjs'
import { User, UserInterface } from './user'

@Injectable()
export class UserServiceFake implements UserServiceInterface {
  currentUser = new BehaviorSubject<UserInterface>(new User())

  constructor() {
  }

  getCurrentUser(): Observable<UserInterface> {
    return of(new User())
  }

  getUser(id): Observable<UserInterface> {
    return of(new User((id = id)))
  }

  updateUser(user: UserInterface): Observable<UserInterface> {
    return of(user)
  }

  getUsers(pageSize: number, searchText: '', pagesToSkip = 0): Observable<UsersInterface> {
    return of({
      total: 1,
      items:  [new User()],
    } as UsersInterface)
  }
}
