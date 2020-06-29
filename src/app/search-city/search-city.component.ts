import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-search-city',
	templateUrl: './search-city.component.html',
	styleUrls: [ './search-city.component.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class SearchCityComponent implements OnInit {
	city: string;

	constructor() {}

	ngOnInit(): void {}

	searchCity(): void {
		console.log(this.city);
	}
}
