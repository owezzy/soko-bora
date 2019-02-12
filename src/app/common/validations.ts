import { Validators } from '@angular/forms'

export const EmailValidation = [Validators.required, Validators.email]
export const PasswordValidation = [
  Validators.required,
  Validators.minLength(8),
  Validators.maxLength(50),
]
export const OptionalTextValidation = [Validators.minLength(2),
  Validators.maxLength(50)]

export const RequiredTextValidation = OptionalTextValidation.concat([Validators.required])

export const OneCharValidation = [Validators.minLength(1)]

export const BirthDateValidation = [
  Validators.required,
  Validators.min(new Date().getFullYear() - 100),
  Validators.max(new Date().getFullYear()),
]

export const CountyZipCodeValidation = [
  Validators.required,
  Validators.pattern(/^\\d{5}$/), /** "Format": "NNNNN"*/
]

export const KenyaPhoneNumberValidation = [
  Validators.required,
  Validators.pattern(/(\+254|^)[ ]?[7]([0-3][0-9])[ ]?[0-9]{3}[ ]?[0-9]{3}\z/),
]
