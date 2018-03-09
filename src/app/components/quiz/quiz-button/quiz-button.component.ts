import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-button',
  templateUrl: './quiz-button.component.html',
  styleUrls: ['./quiz-button.component.css']
})
export class QuizButtonComponent {
  @Input()
  buttonType = 'button';

  @Output()
  click = new EventEmitter<any>();

  constructor() {
  }

  onClick(event: MouseEvent) {
    this.click.emit();
    event.stopPropagation();
  }
}
