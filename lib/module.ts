import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleCardContainer } from './container/simpleCardContainer.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [SimpleCardContainer],
	exports: [SimpleCardContainer],
})
export class SimpleCardContainerModule {}
