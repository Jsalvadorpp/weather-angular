import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	apiUrl: string = 'https://api.openweathermap.org/data/2.5';
	acessKey: string = '8dc8d7218978852d82a5cc7a3f154dc9';

	constructor(private httpClient: HttpClient) {}

	getCurrent(city: string) {
		let q = city;
		let url = `${this.apiUrl}/weather?appid=${this.acessKey}&q=${q}&units=metric`;
		return this.httpClient.get(url);
	}

	getForecast(city: string): Observable<any> {
		let q = city;
		let url = `${this.apiUrl}/forecast?appid=${this.acessKey}&q=${q}&units=metric`;
		return this.httpClient.get<any>(url).pipe(
			map((res) =>
				res.list.filter((object, index) => {
					return (index + 2) % 8 === 0;
				})
			)
		);
	}
}
