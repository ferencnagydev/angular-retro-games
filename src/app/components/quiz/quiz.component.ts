import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizForm: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    document.getElementById('submitButton').style.display = 'initial';
    document.getElementById('tryAgainButton').style.display = 'none';

    this.quizForm = this.formBuilder.group({
      question1: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('c')
        ]
      }),
      question2: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('a')
        ]
      }),
      question3: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('d')
        ]
      }),
      question4: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('b')
        ]
      }),
      question5: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('c')
        ]
      }),
      question6: new FormControl('', {
        validators: [
          Validators.required,
          Validators.pattern('d')
        ]
      })
    });
  }

  isWrongAnswerSelected(question: string) {
    return this.isSubmitted && !this.quizForm.get(question).valid && this.quizForm.get(question).touched;
  }

  isCorrectAnswerSelected(question: string) {
    return this.isSubmitted && this.quizForm.get(question).valid && this.quizForm.get(question).touched;
  }

  showQuestionValidity(question: string) {
    if (this.isWrongAnswerSelected(question)) {
      return {
        'has-error': true,
        'has-feedback': true
      };
    } else if (this.isCorrectAnswerSelected(question)) {
      return {
        'has-success': true,
        'has-feedback': true
      };
    }
  }

  submitQuiz() {
    this.isSubmitted = true;
    document.getElementById('submitButton').style.display = 'none';
    document.getElementById('tryAgainButton').style.display = 'initial';
    Object.keys(this.quizForm.controls).forEach(field => {
      const control = this.quizForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  resetQuiz() {
    this.isSubmitted = false;
    document.getElementById('submitButton').style.display = 'initial';
    document.getElementById('tryAgainButton').style.display = 'none';
    this.quizForm.reset();
  }
}
