import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleCardContainerModule } from '../lib';
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,

		SimpleCardContainerModule,
	],
	bootstrap: [AppComponent],
	declarations: [AppComponent],
})
export class AppModule {}
