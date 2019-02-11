import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ProfileComponent } from './profile.component'
import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'

describe('ProfileComponent', () => {
  let component: ProfileComponent
  let fixture: ComponentFixture<ProfileComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: commonTestingProviders,
      imports: commonTestingModules,
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
