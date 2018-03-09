import { Component, Inject, OnInit } from '@angular/core';
import { Ps1Game } from '../../services/games/games.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-gamedetail',
  templateUrl: './gamedetail.component.html',
  styleUrls: ['./gamedetail.component.css'],
})
export class GameDetailComponent implements OnInit {

  boxart: string;
  description: string;
  developer: string;
  homepage: string;
  releaseYear: string;
  screenshot: string;
  title: string;
  trailer: string;

  constructor(private dialogReference: MatDialogRef<GameDetailComponent>,
              @Inject(MAT_DIALOG_DATA) private game: Ps1Game) { }

  ngOnInit() {
    this.boxart = this.game.boxart;
    this.description = this.game.description;
    this.developer = this.game.developer;
    this.homepage = this.game.homepage;
    this.releaseYear = this.game.releaseYear;
    this.screenshot = this.game.screenshot;
    this.title = this.game.name;
    this.trailer = this.game.trailer;
  }

  close(): void {
    this.dialogReference.close();
  }
}
