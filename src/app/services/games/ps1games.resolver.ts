import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {Ps1Game, GamesService } from './games.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class Ps1GamesResolver implements Resolve<Ps1Game[]> {

  constructor(private gamesService: GamesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ps1Game[]> {
    return this.gamesService.getPs1Games();
  }
}
