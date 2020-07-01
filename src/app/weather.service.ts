import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {
	apiUrl: string = 'http://api.weatherstack.com';
	acessKey: string = 'access_key=124e193dd477c01d577fb4803020a6b1';
	query: string = 'query=';

	constructor(private httpClient: HttpClient) {}

	getCurrent(city: string) {
		this.query += city;
		return this.httpClient.get(`${this.apiUrl}/current?${this.acessKey}&${this.query}`);
	}
}
