import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointSizesService } from './services/breakpointSizes.service';
import { SimpleCardContainerComponent } from './container/simpleCardContainer.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SimpleCardContainerComponent,
	],
	exports: [SimpleCardContainerComponent],
	providers: [
		BreakpointSizesService,
	],
})
export class SimpleCardContainerModule {}
