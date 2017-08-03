import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService]
})
export class TimerComponent  {

  private currentTime: number;
  private timerService: TimerService;
  private timer: any;

  constructor(timerService: TimerService) {
    this.timerService = timerService;
    this.resetTimer();
  }

  getCurrentTime() {
    return this.currentTime;
  }

  /**
   * Parsing input field
   * @returns {number} - parsed integer value
   */
  private static validateInputData(): number {
    let value = (<HTMLInputElement>document.getElementById("timerInputTime")).value;
    if (value.length > 0) {
      let minutes = parseInt(value);
      if (minutes > 0) return minutes;
      return 0;
    }
    return 0;
  }

  /**
   * Start countdown according to set min
   */
  startCount() {
    this.timerService.setCountdownTime(TimerComponent.validateInputData());
    this.timerService.start();
    this.timer = setInterval(() => {
      this.currentTime = this.timerService.updateTime();
    }, 1);
  }

  /**
   * Reset all settings to default. Cleat update task
   */
  resetTimer() {
    clearInterval(this.timer);
    this.timerService.reset();
    this.currentTime = this.timerService.updateTime();
  }

  // todo move this function
  formatTime(timeMs: number) {
    let minutes: string,
        seconds: string;

    minutes = Math.floor(timeMs / 60000).toString();
    seconds = ((timeMs % 60000) / 1000).toFixed(3);
    return minutes + ':' + (+seconds < 10 ? '0' : '') + seconds;
  }

}
