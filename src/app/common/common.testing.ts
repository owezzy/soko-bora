import { Observable, of, Subscription } from 'rxjs'
import { MediaChange } from '@angular/flex-layout'
import { SafeResourceUrl, SafeValue } from '@angular/platform-browser'
import { SecurityContext } from '@angular/platform-browser/src/security/dom_sanitization_service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../material.module'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { RouterTestingModule } from '@angular/router/testing'

const FAKE_SVGS = {
  grocery: '<svg><path id="grocery" name="grocery"></path></svg>',
}

export class ObservableMediaFake {
  isActive(query: string): boolean {
    return false
  }
  asObservable(): Observable<MediaChange> {
    return of({} as MediaChange)
  }

  subscribe(
    next?: (value: MediaChange) => void,
    error?: (error: any) => void,
    complete?: () => void
  ): Subscription {
    return new Subscription()
  }
}

export class MatIconRegistryFake {
  _document = document
  addSvgIcon(iconName: string, url: SafeResourceUrl): this {
     // this.addSvgIcon('grocery', 'grocery.svg')
    return this
  }
  getNamedSvgIcon(name: string, namespace: string = ''): Observable<SVGAElement > {
    // @ts-ignore
    return of(this._svgElementFromString(FAKE_SVGS.grocery))
  }

  private _svgElementFromString(str: string): SVGElement {
    if (this._document || typeof document !== 'undefined') {
      const div = (this._document || document).createElement('DIV')
      div.innerHTML = str
      // @ts-ignore
      const svg = div.querySelector('svg') as SVGAElement
      if (!svg) {
        throw Error('<svg> tag not found')
      }
      return svg
    }
  }
}

export class DomSanitizerFake {
  bypassSecurityTrustResourceUrl(url: string): SafeResourceUrl {
    return {} as SafeResourceUrl
  }
  sanitize(context: SecurityContext, value: SafeValue | string | null):
  string | null {
    return  value ? value.toString() : null
  }
}

export const commonTestingProviders: any[] = []

export const commonTestingModules: any[] = [
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  NoopAnimationsModule,
  HttpClientTestingModule,
  RouterTestingModule,
]