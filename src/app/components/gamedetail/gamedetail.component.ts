import { Component, Inject, OnInit } from '@angular/core';
import { Ps1Game } from '../../services/games/games.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css'],
})
export class GameDetailComponent implements OnInit {

  ps1Game: Ps1Game;

  constructor(private dialogReference: MatDialogRef<GameDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private game: Ps1Game) { }

  ngOnInit() {
    this.ps1Game = this.game;
  }

  close(): void {
    this.dialogReference.close();
  }
}
