import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-forecast',
	templateUrl: './forecast.component.html',
	styleUrls: [ './forecast.component.scss' ]
})
export class ForecastComponent implements OnInit {
	@Input() forecast: any;

	constructor() {}

	ngOnInit(): void {}
}
