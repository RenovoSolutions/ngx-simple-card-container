import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreakpointSizesService } from './services/breakpointSizes.service';
import { SimpleCardContainerComponent } from './container/simpleCardContainer.component';
import { ColumnHeaderComponent } from './header/columnHeader.component';
import { CardHeaderColumnComponent } from './header/cardHeaderColumn.component';
import { CardComponent } from './card/card.component';
import { TEMPLATE_DIRECTIVES } from './templates';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		SimpleCardContainerComponent,
		ColumnHeaderComponent,
		CardHeaderColumnComponent,
		CardComponent,
		TEMPLATE_DIRECTIVES,
	],
	exports: [
		SimpleCardContainerComponent,
		TEMPLATE_DIRECTIVES,
	],
	providers: [
		BreakpointSizesService,
	],
})
export class SimpleCardContainerModule {}
