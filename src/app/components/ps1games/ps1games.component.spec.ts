import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ps1GamesComponent } from './ps1games.component';

describe('Ps1GamesComponent', () => {
  let component: Ps1GamesComponent;
  let fixture: ComponentFixture<Ps1GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps1GamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps1GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
