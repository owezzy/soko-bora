import { LayoutModule } from '@angular/cdk/layout'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { SideNavMenuComponent } from './side-nav-menu.component'
import { AppComponent } from '../app.component'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'
import { AuthGuard } from '../auth/auth-guard.guard'

describe('SideNavMenuComponent', () => {
  let component: SideNavMenuComponent
  let fixture: ComponentFixture<SideNavMenuComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavMenuComponent, AppComponent],
      imports: [commonTestingModules],
      providers: commonTestingProviders,
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should compile', () => {
    expect(component).toBeTruthy()
  })
})
