import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService, NesGame } from '../../services/games/games.service';

@Component({
  selector: 'app-nesgames',
  templateUrl: './nesgames.component.html',
  styleUrls: ['./nesgames.component.css']
})
export class NesGamesComponent implements OnInit {

  nesGames: NesGame[];

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.nesGames = this.activatedRoute.snapshot.data['nesgames'];
  }
}
