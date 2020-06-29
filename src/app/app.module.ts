import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchCityComponent } from './search-city/search-city.component';

@NgModule({
	declarations: [ AppComponent, SearchCityComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatInputModule,
		MatIconModule,
		MatButtonModule,
		FormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
