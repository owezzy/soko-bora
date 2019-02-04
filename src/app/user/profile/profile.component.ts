import { Component, OnInit } from '@angular/core'
import { Role as UserRole } from '../../auth/role.enum'
import { $enum } from 'ts-enum-util'
import { CountyInterface, PhoneType } from './data'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { UserService } from '../userModel/user.service'
import { AuthService } from '../../auth/auth.service'
import { UserInterface } from '../userModel/user'
import {
  BirthDateValidation, CountyZipCodeValidation,
  EmailValidation,
  OneCharValidation,
  OptionalTextValidation,
  RequiredTextValidation,
} from '../../common/validations'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Role = UserRole
  PhoneTypes = $enum(PhoneType).getKeys()
  userForm: FormGroup
  states: Observable<CountyInterface[]>
  userError = ''
  currentUserRole = this.Role.None

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this.currentUserRole = authStatus.userRole),
    )

    this.userService.getCurrentUser().subscribe(user => {
      this.buildUserForm(user)
    })
    this.buildUserForm()
  }

  buildUserForm(user?: UserInterface) {
    this.userForm = this.formBuilder.group({
      email: [
        {
          value: (user && user.email) || '',
          disabled: this.currentUserRole !== this.Role.Manager,
        },
        EmailValidation,
      ],
      name: this.formBuilder.group({
        first: [(user && user.name.first) || '', RequiredTextValidation],
        middle: [(user && user.name.middle) || '', OneCharValidation],
        last: [(user && user.name.last) || '', RequiredTextValidation],
      }),
      role: [
        {
          value: (user && user.role) || '',
          disabled: this.currentUserRole !== this.Role.Manager,
        }, [Validators.required],
      ],
      dateOfBirth: [(user && user.dateOfBirth) || '', BirthDateValidation],
      address: this.formBuilder.group({
        line1: [(user && user.address && user.address.line1) || '', RequiredTextValidation],
        line2: [(user && user.address && user.address.line2) || '', OptionalTextValidation],
        city: [(user && user.address && user.address.city) || '', RequiredTextValidation],
        county: [(user && user.address && user.address.county) || '', RequiredTextValidation],
        zip: [(user && user.address && user.address.zip) || '', CountyZipCodeValidation],



  })
    })
  }

}
