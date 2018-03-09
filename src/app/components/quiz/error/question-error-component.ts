import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-question-error-component',
  templateUrl: './question-error-component.html',
  styleUrls: ['./question-error-component.css']
})
export class QuestionErrorComponent {

  @Input()
  errorMessage: string;

  @Input()
  displayError: boolean;

  @Input()
  displayCorrect: boolean;
}
