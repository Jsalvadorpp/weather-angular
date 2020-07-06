import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	apiUrl: string = 'http://api.openweathermap.org/data/2.5';
	acessKey: string = '8dc8d7218978852d82a5cc7a3f154dc9';

	constructor(private httpClient: HttpClient) {}

	getCurrent(city: string) {
		let q = city;
		let url = `${this.apiUrl}/weather?appid=${this.acessKey}&q=${q}&units=metric`;
		return this.httpClient.get(url);
	}
}
