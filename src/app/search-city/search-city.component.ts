import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Output, EventEmitter } from '@angular/core';
declare const places: any;

@Component({
	selector: 'app-search-city',
	templateUrl: './search-city.component.html',
	styleUrls: [ './search-city.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class SearchCityComponent implements OnInit {
	city: string;
	weather: any = undefined;
	@Output() dataFromWeatherApi = new EventEmitter();

	constructor(private weatherService: WeatherService) {}

	ngOnInit(): void {
		let placesAutocomplete = places({
			appId: 'plMAU8Q8V4Q9',
			apiKey: '7347392e86d2dd065a619d085b641c29',
			container: document.querySelector('#search'),
			templates: {
				value: function(suggestion) {
					return suggestion.name;
				}
			}
		}).configure({
			type: 'city',
			aroundLatLngViaIP: false
		});

		placesAutocomplete.on('change', (e) => {
			let city = e.suggestion.name;
			this.searchCity(city);
		});
	}

	searchCity(city: string = this.city): void {
		this.weatherService.getCurrent(city).subscribe((data) => {
			this.weather = data;
			console.log(this.weather);
			this.dataFromWeatherApi.emit(this.weather);
		});
	}
}
