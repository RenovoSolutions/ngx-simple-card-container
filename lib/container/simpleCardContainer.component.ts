import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ContentChild } from '@angular/core';

import { IColumn } from '../interfaces';
import { CardContentTemplate, CardFooterTemplate, ContainerHeaderTemplate, ContainerFooterTemplate } from '../templates';

@Component({
	selector: 'scc-simple-card-container',
	template: require('./simpleCardContainer.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleCardContainerComponent<T> {
	@Input() columns: IColumn<T>[];
	@Input() data: T[];
	@Input() count: number;
	@Input() message: string;

	get totalItems(): number {
		return this.count || this.data.length;
	}

	@Output() sort: EventEmitter<IColumn<T>> = new EventEmitter<IColumn<T>>();

	@ContentChild(CardContentTemplate) cardContent: CardContentTemplate;
	@ContentChild(CardFooterTemplate) cardFooter: CardFooterTemplate;
	@ContentChild(ContainerHeaderTemplate) containerHeader: ContainerHeaderTemplate;
	@ContentChild(ContainerFooterTemplate) containerFooter: ContainerFooterTemplate;

	openCard: T;
}
