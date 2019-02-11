import { Component, OnInit } from '@angular/core'
import { Role as UserRole } from '../../auth/role.enum'
import { $enum } from 'ts-enum-util'
import { CountiesFilter, CountyInterface, PhoneType } from './data'
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs'
import { Router } from '@angular/router'
import { UserService } from '../userModel/user.service'
import { AuthService } from '../../auth/auth.service'
import { PhoneInterface, UserInterface } from '../userModel/user'
import {
  BirthDateValidation, CountyZipCodeValidation,
  EmailValidation, KenyaPhoneNumberValidation,
  OneCharValidation,
  OptionalTextValidation,
  RequiredTextValidation,
} from '../../common/validations'
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  Role = UserRole
  PhoneTypes = $enum(PhoneType).getKeys()
  userForm: FormGroup
  counties: Observable<CountyInterface[]>
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
      }),
      phones: this.formBuilder.array(this.buildPhoneArray(user ? user.phone : [])),
    })

    this.counties = this.userForm
      .get('address')
      .get('county')
      .valueChanges.pipe(startWith(''), map(value => CountiesFilter(value)))
  }

  addPhone() {
    this.phonesArray.push(
      this.buildPhoneFormControl(this.userForm.get('phones').value.length + 1),
    )
  }

  get phonesArray(): FormArray {
    return <FormArray>this.userForm.get('phones')
  }

  private buildPhoneArray(phones: PhoneInterface[]) {
    const groups = []

    if (!phones || (phones && phones.length === 0)) {
      groups.push(this.buildPhoneFormControl(1))
    } else {
      phones.forEach(p => {
        groups.push(this.buildPhoneFormControl(p.id, p.type, p.number))
      })
    }
    return groups
  }

  private buildPhoneFormControl(id, type?: string, number?: string) {
    return this.formBuilder.group({
      id: [id],
      type: [type || '', Validators.required],
      number: [number || '', KenyaPhoneNumberValidation],
    })
  }

  get dateOfBirth() {
    return this.userForm.get('dateOfBirth').value || new Date()
  }

  get age() {
    return new Date().getFullYear() - this.dateOfBirth.getFullYear()
  }

  async save(form: FormGroup) {
    this.userService
      .updateUser(form.value)
      .subscribe(res => this.buildUserForm(res), err => (this.userError = err))
  }
}
