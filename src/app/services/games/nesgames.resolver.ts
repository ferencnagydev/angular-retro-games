import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import {NesGame, GamesService } from './games.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class NesGamesResolver implements Resolve<NesGame[]> {

  constructor(private gamesService: GamesService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<NesGame[]> {
    return this.gamesService.getNesGames();
  }
}
