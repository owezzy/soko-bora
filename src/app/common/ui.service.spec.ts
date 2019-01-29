import { TestBed } from '@angular/core/testing'

import { UiService } from './ui.service'
import { commonTestingModules } from './common.testing'

describe('UiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UiService],
    imports: commonTestingModules,
  }))

  it('should be created', () => {
    const service: UiService = TestBed.get(UiService)
    expect(service).toBeTruthy()
  })
})
