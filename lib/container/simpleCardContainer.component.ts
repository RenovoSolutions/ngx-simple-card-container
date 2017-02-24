import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { IColumn } from '../interfaces';

@Component({
	selector: 'scc-simple-card-container',
	templateUrl: 'simpleCardContainer.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardContainerComponent<T> {
	@Input() columns: IColumn<T>[];
	@Input() data: T[];

	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();
}
