import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleCardContainerComponent } from './container/simpleCardContainer.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SimpleCardContainerComponent,
	],
	exports: [SimpleCardContainerComponent],
})
export class SimpleCardContainerModule {}
