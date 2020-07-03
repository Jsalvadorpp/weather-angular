import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private datePipe: DatePipe) {}

  title = 'weather-angular';
  weather: any = {};

  retrieveData(weather): void {
    this.weather = weather;
    let currentTime = this.datePipe.transform(weather.location.localtime, 'a');

    if (this.weather.current) {
      console.log(currentTime);
    }
  }
}
