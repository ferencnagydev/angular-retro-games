import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NesGamesComponent } from './nesgames.component';

describe('NesGamesComponent', () => {
  let component: NesGamesComponent;
  let fixture: ComponentFixture<NesGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NesGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NesGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
