import { Component, OnInit } from '@angular/core';
import { ForgotPasswordService } from './forgot.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss'],
  providers: [ForgotPasswordService]
})
export class ForgotPassComponent implements OnInit {
  ValidAnswer = false;
  userAnswer: number;
  question: string;

  constructor(private forgotPasswordService: ForgotPasswordService) { }

  ngOnInit() {
    this.question = this.forgotPasswordService.createQuestion();
    console.log(this.question)
  }
  questionAnswer() {
    this.ValidAnswer = this.forgotPasswordService.validAnswer(this.userAnswer);

  }

}
