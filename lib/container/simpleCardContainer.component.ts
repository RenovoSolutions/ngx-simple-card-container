import { Component, Input } from '@angular/core';

import { IColumn } from '../interfaces';

@Component({
	selector: 'simple-card-container',
	templateUrl: 'simpleCardContainer.component.html',
})
export class SimpleCardContainer<T> {
	@Input() columns: IColumn<T>[];

	@Input() data: T[];
}
