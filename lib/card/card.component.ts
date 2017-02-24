import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { SimpleCardContainerComponent } from '../container/simpleCardContainer.component';

@Component({
	selector: 'scc-card',
	template: require('./card.component.html'),
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent<T> {
	@Input() item: T;
	@Input() isOpen: boolean;

	@Output() open: EventEmitter<T> = new EventEmitter<T>();
	@Output() close: EventEmitter<void> = new EventEmitter<void>();

	constructor(public cardContainer: SimpleCardContainerComponent<T>) {}

	toggleContent(): void {
		if (this.isOpen) {
			this.close.emit();
		} else {
			this.open.emit(this.item);
		}
	}
}
