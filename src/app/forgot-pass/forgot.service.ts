import {Injectable} from '@angular/core';


@Injectable()
export class ForgotPasswordService {
    answer: number;


    createQuestion() {
        const result = this.randomForNumber();
        this.answer = result;
        return `${result}`
    }

    randomForNumber() {
        return Math.floor(1000 + Math.random() * 9000);
    }

    validAnswer(an: number):boolean {
        if(this.answer === an) {
            return this.answer === an
        }{
            console.log("Hrenovo")
        }
    }

}