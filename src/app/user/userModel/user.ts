import { Role } from '../auth/role.enum'

export interface UserInterface {
  id: string
  email: string
  name: {
    first: string
    middle: string
    last: string
  }
  picture: string
  role: Role
  userStatus: boolean
  dateOfBirth: Date
  address: {
    line1: string
    line2: string
    city: string
    county: string
    zip: string
  }
  phone: PhoneInterface[]
}

export interface PhoneInterface {
  type: string
  number: string
  id: number
}

export class User implements UserInterface {
  constructor(
    public id = '',
    public email = '',
    public name = { first: '', middle: '', last: '' },
    public picture = '',
    public role = Role.None,
    public dateOfBirth = null,
    public userStatus = false,
    public address = {
      line1: '',
      line2: '',
      city: '',
      county: '',
      zip: '',
    },
    public phone = [],
  ) {
  }

  static BuildUser(user: UserInterface) {
    return new User(
      user.id,
      user.email,
      user.name,
      user.picture,
      user.role,
      user.dateOfBirth,
      user.userStatus,
      user.address,
      user.phone,
    )
  }

  get fullName() {
    return `${this.name.first} ${this.name.middle} ${this.name.last} `
  }


}
