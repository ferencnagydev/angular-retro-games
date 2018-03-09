import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export class Ps1Game {
  name: string;
  developer: string;
  releaseYear: string;
  boxart: string;
  screenshot: string;
  trailer: string;
  description: string;
  homepage: string;
}

export class NesGame {
  title: string;
  boxart: string;
  playrom: string;
}

@Injectable()
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  getPs1Games(): Observable<Ps1Game[]> {
    return this.httpClient.get<Ps1Game[]>('/ps1games');
  }

  getNesGames(): Observable<NesGame[]> {
    return this.httpClient.get<NesGame[]>('/nesgames');
  }
}
