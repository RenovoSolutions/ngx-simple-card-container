import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild } from '@angular/core';

import { IColumn } from '../interfaces';
import { CardContentTemplate, CardFooterTemplate } from '../templates';

@Component({
	selector: 'scc-simple-card-container',
	template: require('./simpleCardContainer.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardContainerComponent<T> {
	@Input() columns: IColumn<T>[];
	@Input() data: T[];
	@Input() message: string;

	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();

	@ContentChild(CardContentTemplate) cardContent: CardContentTemplate;
	@ContentChild(CardFooterTemplate) cardFooter: CardFooterTemplate;

	openCard: T;
}
