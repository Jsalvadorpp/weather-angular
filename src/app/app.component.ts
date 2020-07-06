import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { getSunrise, getSunset } from 'sunrise-sunset-js';
import { weatherIcons } from 'src/app/weather-icons/weather-icons';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private datePipe: DatePipe) {}

  title = 'weather-angular';
  weather: any = {};
  weather_icon: string;
  iconsList = weatherIcons;

  ngOnInit(): void {}

  retrieveData(weather): void {
    this.weather = weather;
    let currentTime = this.weather.dt;
    let sunrise = this.weather.sys.sunrise;
    let sunset = this.weather.sys.sunset;
    let code = this.weather.weather[0].main;

    const newDate: any = new Date();
    const local_timezone_offset = new Date().getTimezoneOffset() * 60;
    const fixedTime =
      newDate - (-local_timezone_offset - weather.timezone) * 1000;
    this.weather_icon = this.getWeatherIcon(
      sunset,
      sunrise,
      code,
      this.weather.dt
    );
    this.weather.dt = fixedTime;

    //let currentTime = this.datePipe.transform(weather.location.localtime, 'a');
    //let currentTime = new Date(weather.location.localtime).getTime();
    //let latitude = weather.location.lat;
    //let longitude = weather.location.lon;
    //let code = weather.current.weather_code;

    //this.weather_icon = this.getWeatherIcon(latitude, longitude, code, currentTime);
    //console.log(this.weather_icon);
  }

  getWeatherIcon(sunSet, sunRise, code, currentTime): string {
    //let sunset = getSunset(latitude, longitude).getTime();
    //let sunrise = getSunrise(latitude, longitude).getTime();
    let sunset = sunSet;
    let sunrise = sunRise;

    let time = currentTime >= sunrise && currentTime < sunset ? 'day' : 'night';
    this.setBackgroundColor(time);

    let icon = this.iconsList[code][time];
    let iconWrapper = document.querySelector('.icon-wrapper');
    let spanElement = document.createElement('span');
    spanElement.setAttribute('data-icon', icon);

    iconWrapper.appendChild(spanElement);

    console.log(icon);
    return icon;
  }

  setBackgroundColor(time: string): void {
    let removeClass = time == 'day' ? 'night' : 'day';
    let body = document.querySelector('body');

    body.classList.remove(removeClass);
    body.classList.add(time);
  }
}
