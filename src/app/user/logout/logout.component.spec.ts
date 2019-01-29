import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LogoutComponent } from './logout.component'
import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'
import { AuthGuard } from '../../auth/auth-guard.guard'

describe('LogoutComponent', () => {
  let component: LogoutComponent
  let fixture: ComponentFixture<LogoutComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuard),
      declarations: [LogoutComponent],
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
