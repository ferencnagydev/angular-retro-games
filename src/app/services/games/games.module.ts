import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Ps1GamesComponent } from '../../components/ps1games/ps1games.component';
import { Ps1GamesResolver } from './ps1games.resolver';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../material/material.module';
import { GamesService } from './games.service';
import { FakeBackendHttpInterceptor } from '../../../fakebackend/fake.backend';
import { NesGamesResolver } from './nesgames.resolver';
import { NesGamesComponent } from '../../components/nesgames/nesgames.component';

const Routing: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: Ps1GamesComponent,
    resolve: {
      ps1games: Ps1GamesResolver
    }
  },
  {
    path: 'nesgames',
    component: NesGamesComponent,
    resolve: {
      nesgames: NesGamesResolver
    }
  }
]);

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    Routing
  ],
  providers: [
    GamesService,
    Ps1GamesResolver,
    NesGamesResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendHttpInterceptor,
      multi: true
    }
  ],
})
export class GamesModule {
}
