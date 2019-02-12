import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SimpleDialogComponent } from './simple-dialog.component'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { commonTestingModules } from '../common.testing'

describe('SimpleDialogComponent', () => {
  let component: SimpleDialogComponent
  let fixture: ComponentFixture<SimpleDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleDialogComponent ],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }, {
        provide: MAT_DIALOG_DATA,
        useValue: {}
      }],
      imports: commonTestingModules,
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
