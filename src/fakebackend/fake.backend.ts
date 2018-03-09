import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { ps1games } from './games';
import { nesgames } from './games';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/dematerialize';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class FakeBackendHttpInterceptor implements HttpInterceptor {

  private ps1games: any[] = ps1games;
  private nesgames: any[] = nesgames;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.of(null).mergeMap(() => {

      if (req.url.endsWith('/ps1games')) {
        return Observable.of(
          new HttpResponse({
            status: 200,
            body: this.ps1games
          })
        );
      }

      if (req.url.endsWith('/nesgames')) {
        return Observable.of(
          new HttpResponse({
            status: 200,
            body: this.nesgames
          })
        );
      }

    }).materialize()
      .delay(500)
      .dematerialize();
  }
}
