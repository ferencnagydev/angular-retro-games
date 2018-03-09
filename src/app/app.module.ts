import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponent} from './components/error/error.component';
import { ErrorModule } from './components/error/error.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ps1GamesComponent } from './components/ps1games/ps1games.component';
import { GamesModule } from './services/games/games.module';
import { GameDetailComponent } from './components/gamedetail/gamedetail.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionErrorComponent } from './components/quiz/error/question-error-component';
import { QuizButtonComponent } from './components/quiz/quiz-button/quiz-button.component';
import { NesGamesComponent } from './components/nesgames/nesgames.component';

const Routing: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ps1games'
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    Ps1GamesComponent,
    GameDetailComponent,
    QuestionErrorComponent,
    QuizComponent,
    QuizButtonComponent,
    NesGamesComponent,
  ],
  entryComponents: [
    GameDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ErrorModule,
    FormsModule,
    GamesModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
