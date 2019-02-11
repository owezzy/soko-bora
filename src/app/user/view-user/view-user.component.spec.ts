import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ViewUserComponent } from './view-user.component'
import { ReactiveFormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppMaterialModule } from '../../app.material.module'
import { UserMaterialModule } from '../user-material.module'
import { RouterTestingModule } from '@angular/router/testing'

describe('ViewUserComponent', () => {
  let component: ViewUserComponent
  let fixture: ComponentFixture<ViewUserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserComponent ],
     imports: [
       ReactiveFormsModule,
       FlexLayoutModule,
       AppMaterialModule,
       UserMaterialModule,
       RouterTestingModule
     ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
