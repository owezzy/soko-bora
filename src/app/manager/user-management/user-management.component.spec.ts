import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { UserManagementComponent } from './user-management.component'
import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'

describe('UserManagementComponent', () => {
  let component: UserManagementComponent
  let fixture: ComponentFixture<UserManagementComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      providers: commonTestingProviders,
      imports: commonTestingModules,
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
