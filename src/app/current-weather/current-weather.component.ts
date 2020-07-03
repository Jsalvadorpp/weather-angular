import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-current-weather',
	templateUrl: './current-weather.component.html',
	styleUrls: [ './current-weather.component.scss' ]
})
export class CurrentWeatherComponent implements OnInit {
	@Input() weather: any;

	constructor() {}

	ngOnInit(): void {}
}
