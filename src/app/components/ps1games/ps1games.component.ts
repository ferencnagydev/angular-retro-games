import { Component, OnInit } from '@angular/core';
import { Ps1Game, GamesService } from '../../services/games/games.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { GameDetailComponent } from '../gamedetail/gamedetail.component';

@Component({
  selector: 'app-ps1games',
  templateUrl: './ps1games.component.html',
  styleUrls: ['./ps1games.component.css']
})
export class Ps1GamesComponent implements OnInit {

  ps1games: Ps1Game[];

  constructor(private gamesService: GamesService,
              private activatedRoute: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.ps1games = this.activatedRoute.snapshot.data['ps1games'];
  }

  showGameDetails(game: Ps1Game) {
    this.dialog.open(GameDetailComponent, {
      panelClass: 'game-detail-dialog-style',
      data: game
    });
  }
}
